/**
 * Sweeps orphaned images out of ImageKit.
 *
 *   npm run imagekit:reconcile           # dry run — reports, changes nothing
 *   npm run imagekit:reconcile -- --apply
 *
 * The safety net behind the folder-per-product convention. Two kinds of orphan:
 *
 *   1. A folder under /mrajkamal/products/ whose name is not a live product id.
 *      Happens when an admin uploads images on the "new product" form and then
 *      abandons it — the ObjectId was minted, the images went to the real
 *      folder, and the product was never created.
 *
 *   2. A file inside a live product's folder whose fileId the product no longer
 *      references (an interrupted delete).
 *
 * Dry-run by default. A sweeper that deletes on first run is a sweeper nobody
 * dares to run.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

const APPLY = process.argv.includes("--apply");

async function main() {
  const mongoose = (await import("mongoose")).default;
  await mongoose.connect(process.env.MONGODB_URI!, { bufferCommands: false });

  const { default: Product } = await import("@/lib/models/Product");
  const { imagekit, deleteFiles, deleteFolder, IK_ROOT } = await import("@/lib/imagekit");

  const products = await Product.find().select("_id images").lean();
  const liveIds = new Set(products.map((p) => String(p._id)));
  const liveFileIds = new Set(
    products.flatMap((p) => (p.images ?? []).map((i) => i.fileId).filter(Boolean)),
  );

  console.log(`${products.length} product(s), ${liveFileIds.size} referenced image(s)\n`);

  const root = `${IK_ROOT}/products`;
  const folders = await imagekit().assets.list({ path: root, type: "folder", limit: 1000 });

  let orphanFolders = 0;
  let orphanFiles = 0;

  for (const folder of folders as unknown as { name?: string; folderPath?: string }[]) {
    const id = folder.name ?? "";
    const folderPath = folder.folderPath ?? `${root}/${id}`;

    if (!liveIds.has(id)) {
      orphanFolders++;
      console.log(`orphan folder  ${folderPath}  (no product with this id)`);
      if (APPLY) {
        const files = (await imagekit().assets.list({
          path: folderPath,
          type: "file",
          limit: 1000,
        })) as unknown as { fileId?: string }[];
        await deleteFiles(files.map((f) => f.fileId ?? ""));
        await deleteFolder(folderPath);
      }
      continue;
    }

    // Live product: drop any file it no longer references.
    const files = (await imagekit().assets.list({
      path: folderPath,
      type: "file",
      limit: 1000,
    })) as unknown as { fileId?: string; filePath?: string }[];

    const stray = files.filter((f) => f.fileId && !liveFileIds.has(f.fileId));
    for (const f of stray) {
      orphanFiles++;
      console.log(`orphan file    ${f.filePath}  (not referenced by product ${id})`);
    }
    if (APPLY && stray.length) await deleteFiles(stray.map((f) => f.fileId!));
  }

  console.log(
    `\n${orphanFolders} orphan folder(s), ${orphanFiles} orphan file(s)` +
      (APPLY ? " — DELETED" : " — dry run, nothing changed. Re-run with --apply."),
  );

  await mongoose.disconnect();
}

main().catch((error) => {
  console.error("\n✗ reconcile failed:", error);
  process.exit(1);
});
