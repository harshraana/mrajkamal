import { auth } from "@/auth";
import ImageKit from "@imagekit/nodejs";
import { NextRequest } from "next/server";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]);
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

// Magic bytes for allowed image types (MIME sniffing defense)
function validateMagicBytes(buffer: Buffer, mimeType: string): boolean {
  if (mimeType === "image/jpeg") {
    return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  }
  if (mimeType === "image/png") {
    return (
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47
    );
  }
  if (mimeType === "image/webp") {
    return (
      buffer[0] === 0x52 &&
      buffer[1] === 0x49 &&
      buffer[2] === 0x46 &&
      buffer[3] === 0x46 &&
      buffer[8] === 0x57 &&
      buffer[9] === 0x45 &&
      buffer[10] === 0x42 &&
      buffer[11] === 0x50
    );
  }
  if (mimeType === "image/svg+xml") {
    const text = buffer.slice(0, 200).toString("utf8").trimStart();
    return (
      text.startsWith("<svg") ||
      text.startsWith("<?xml") ||
      text.startsWith("<!DOCTYPE svg")
    );
  }
  return false;
}

function getImageKit(): ImageKit {
  return new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  });
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return Response.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const formData = await request.formData();
    const file = formData.get("file");
    const folder =
      (formData.get("folder") as string | null) ?? "/mrajkamal/products";

    if (!file || !(file instanceof Blob)) {
      return Response.json(
        { success: false, error: "No file provided" },
        { status: 400 },
      );
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return Response.json(
        {
          success: false,
          error: "Invalid file type. Allowed: JPEG, PNG, WebP, SVG",
        },
        { status: 400 },
      );
    }

    if (file.size > MAX_SIZE_BYTES) {
      return Response.json(
        { success: false, error: "File too large. Maximum size is 5MB" },
        { status: 400 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (!validateMagicBytes(buffer, file.type)) {
      return Response.json(
        { success: false, error: "File content does not match declared type" },
        { status: 400 },
      );
    }

    const fileName =
      (file instanceof File ? file.name : null) ?? `upload-${Date.now()}`;
    const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");

    const client = getImageKit();
    const result = await client.files.upload({
      file: buffer.toString("base64"),
      fileName: safeName,
      folder,
      useUniqueFileName: true,
    });

    return Response.json({
      success: true,
      data: {
        url: result.url,
        fileId: result.fileId,
        name: result.name,
      },
    });
  } catch (err) {
    console.error("Upload error:", err);
    return Response.json(
      { success: false, error: "Upload failed" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return Response.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await request.json();
    const { fileId } = body;

    if (!fileId || typeof fileId !== "string") {
      return Response.json(
        { success: false, error: "fileId is required" },
        { status: 400 },
      );
    }

    const client = getImageKit();
    await client.files.delete(fileId);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Delete error:", err);
    return Response.json(
      { success: false, error: "Delete failed" },
      { status: 500 },
    );
  }
}
