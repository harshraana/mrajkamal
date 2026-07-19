import { Types } from "mongoose";
import { requireAdminApi } from "@/lib/auth/dal";
import {
  deleteFileIfOurs,
  imagekit,
  productFolder,
  siteFolder,
  type UploadedImage,
} from "@/lib/imagekit";

// No `export const runtime` — the segment config is REJECTED under
// cacheComponents ("not compatible with nextConfig.cacheComponents"), and the
// Node.js runtime is the default regardless, which is what we need for Buffer
// and the ImageKit SDK.

const MAX_BYTES = 5 * 1024 * 1024;

/**
 * SVG is deliberately NOT allowed.
 *
 * `main` accepted `image/svg+xml`. An SVG is a scriptable document — it can
 * carry `<script>` — so serving an uploaded one from your own origin is stored
 * XSS with extra steps. If a genuine SVG is ever needed it belongs in /public,
 * committed and reviewed, not uploaded through a form.
 */
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

/**
 * Check the bytes, not the label.
 *
 * `Content-Type` is supplied by the client and means nothing. Without this, a
 * file called `x.png` claiming `image/png` could be anything at all. (This is
 * the one part of `main`'s upload route that was genuinely well built.)
 */
function magicBytesMatch(buffer: Buffer, mimeType: string): boolean {
  if (buffer.length < 12) return false;

  switch (mimeType) {
    case "image/jpeg":
      return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
    case "image/png":
      return (
        buffer[0] === 0x89 &&
        buffer[1] === 0x50 &&
        buffer[2] === 0x4e &&
        buffer[3] === 0x47
      );
    case "image/webp":
      // "RIFF" .... "WEBP"
      return (
        buffer.toString("ascii", 0, 4) === "RIFF" &&
        buffer.toString("ascii", 8, 12) === "WEBP"
      );
    case "image/avif":
      // ISO-BMFF: bytes 4-8 are "ftyp", then the brand.
      return (
        buffer.toString("ascii", 4, 8) === "ftyp" &&
        buffer.toString("ascii", 8, 12).startsWith("avif")
      );
    default:
      return false;
  }
}

const safeFileName = (name: string) =>
  (name || "image").replace(/[^a-zA-Z0-9._-]/g, "_").slice(-100);

/**
 * Resolve the destination folder SERVER-SIDE.
 *
 * `main` read `folder` straight out of the FormData and passed it to ImageKit —
 * an arbitrary-path write into the account. Here the client may only say WHICH
 * KIND of upload it is; the path is derived, and a productId must be a real
 * 24-hex ObjectId before it can become a folder name.
 */
function resolveFolder(scope: string | null, productId: string | null): string | null {
  if (scope === "site") return siteFolder();
  if (scope === "product") {
    if (!productId || !Types.ObjectId.isValid(productId)) return null;
    return productFolder(productId);
  }
  return null;
}

export async function POST(request: Request) {
  // The proxy already 401s an anonymous caller, but it only checks that a cookie
  // EXISTS. This verifies the session and the role for real.
  const denied = await requireAdminApi();
  if (denied) return denied;

  try {
    const form = await request.formData();
    const file = form.get("file");
    const folder = resolveFolder(
      form.get("scope") as string | null,
      form.get("productId") as string | null,
    );

    if (!folder) {
      return Response.json({ error: "Invalid upload target" }, { status: 400 });
    }
    if (!(file instanceof Blob)) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }
    if (!ALLOWED.has(file.type)) {
      return Response.json(
        { error: "Only JPEG, PNG, WebP and AVIF images are allowed" },
        { status: 400 },
      );
    }
    if (file.size > MAX_BYTES) {
      return Response.json({ error: "File too large — 5MB maximum" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    if (!magicBytesMatch(buffer, file.type)) {
      return Response.json(
        { error: "File contents do not match its declared type" },
        { status: 400 },
      );
    }

    const originalName = file instanceof File ? file.name : "image";

    const result = await imagekit().files.upload({
      file: buffer.toString("base64"),
      fileName: safeFileName(originalName),
      folder,
      useUniqueFileName: true,
    });

    // fileId is persisted by the caller. That is the whole fix for `main`
    // orphaning every removed image in ImageKit forever.
    const uploaded: UploadedImage = {
      url: result.url ?? "",
      fileId: result.fileId ?? "",
      name: result.name ?? "",
      width: result.width ?? 0,
      height: result.height ?? 0,
    };

    if (!uploaded.url || !uploaded.fileId) {
      return Response.json({ error: "Upload failed" }, { status: 502 });
    }

    return Response.json({ data: uploaded });
  } catch (error) {
    console.error("[upload]", error);
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}

/** Remove a single file. Used when the admin drops an image out of the form. */
export async function DELETE(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;

  try {
    const { fileId } = (await request.json()) as { fileId?: unknown };
    if (typeof fileId !== "string" || !fileId) {
      return Response.json({ error: "fileId is required" }, { status: 400 });
    }

    // deleteFileIfOurs re-reads the file and refuses anything outside /mrajkamal.
    const deleted = await deleteFileIfOurs(fileId);
    return Response.json({ deleted });
  } catch (error) {
    console.error("[upload:delete]", error);
    return Response.json({ error: "Delete failed" }, { status: 500 });
  }
}
