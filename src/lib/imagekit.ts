import "server-only";
import ImageKit from "@imagekit/nodejs";
import { serverEnv } from "@/lib/env";

/**
 * ImageKit client + the folder convention.
 *
 * Every image belonging to a product lives in a folder named with that product's
 * `_id`: `/mrajkamal/products/<productId>/`. That makes "delete this product's
 * images" a single folder delete, and makes an orphan trivially identifiable —
 * a folder whose name is not a live product id.
 */

let client: ImageKit | null = null;

/** Lazily constructed, so importing this module doesn't require the key. */
export function imagekit(): ImageKit {
  return (client ??= new ImageKit({ privateKey: serverEnv.IMAGEKIT_PRIVATE_KEY }));
}

export const IK_ROOT = "/mrajkamal";

export const productFolder = (productId: string) => `${IK_ROOT}/products/${productId}`;
export const siteFolder = () => `${IK_ROOT}/site`;

/** Everything we keep about an uploaded file. `fileId` is the part `main` threw away. */
export type UploadedImage = {
  url: string;
  fileId: string;
  name: string;
  width: number;
  height: number;
};

/**
 * Delete files by id.
 *
 * Empty ids are skipped, not sent: `fileId === ""` marks a seeded `/public`
 * asset that ImageKit doesn't own, and asking it to delete one would just error.
 *
 * Never throws. An image-cleanup failure must not roll back a database mutation
 * that has already succeeded — the worst case is a logged orphan, and
 * `scripts/reconcile-imagekit.ts` sweeps those.
 */
export async function deleteFiles(fileIds: string[]): Promise<void> {
  const ids = [...new Set(fileIds.filter(Boolean))];
  if (ids.length === 0) return;

  try {
    // The bulk endpoint caps at 100 per call.
    for (let i = 0; i < ids.length; i += 100) {
      await imagekit().files.bulk.delete({ fileIds: ids.slice(i, i + 100) });
    }
  } catch (error) {
    console.error("[imagekit] bulk delete failed", { ids, error });
  }
}

/** Delete a whole folder. A 404 (it never existed) is fine and stays quiet. */
export async function deleteFolder(folderPath: string): Promise<void> {
  try {
    await imagekit().folders.delete({ folderPath });
  } catch (error) {
    const status = (error as { status?: number })?.status;
    if (status !== 404) console.error("[imagekit] folder delete failed", { folderPath, error });
  }
}

/**
 * Verify a fileId really belongs to us before deleting it.
 *
 * The fileId arrives from the client. Without this, a forged or stale id would
 * be passed straight to `files.delete` — and ImageKit would happily delete an
 * unrelated asset elsewhere in the account. One extra GET buys a hard guarantee
 * that we only ever delete inside `/mrajkamal/`.
 */
export async function deleteFileIfOurs(fileId: string): Promise<boolean> {
  if (!fileId) return false;
  try {
    const file = await imagekit().files.get(fileId);
    if (!file.filePath?.startsWith(`${IK_ROOT}/`)) {
      console.warn("[imagekit] refusing to delete a file outside", IK_ROOT, file.filePath);
      return false;
    }
    await imagekit().files.delete(fileId);
    return true;
  } catch (error) {
    // A 404 is an ordinary outcome, not a fault: the id was stale, forged, or
    // the file is already gone. Either way there is nothing to delete and
    // nothing to alarm anyone about — don't dump a stack trace for it.
    const status = (error as { status?: number })?.status;
    if (status === 404) return false;

    console.error("[imagekit] delete failed", { fileId, error });
    return false;
  }
}
