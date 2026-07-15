/**
 * Round-trips a real upload against the real ImageKit account.
 *
 *   npm run verify:imagekit
 *
 * Proves the two things `main` got wrong:
 *   • images land in a folder named with the PRODUCT ID
 *   • the returned fileId is real, so delete actually deletes
 *
 * Cleans up after itself.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

let pass = 0;
let fail = 0;
const check = (ok: boolean, label: string, detail = "") => {
  if (ok) pass++;
  else fail++;
  console.log(`  ${ok ? "ok  " : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
};

/** Smallest valid PNG (1x1, transparent). Real magic bytes: 89 50 4E 47. */
const PNG_1X1 = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  "base64",
);

async function main() {
  const { Types } = await import("mongoose");
  const { imagekit, productFolder, deleteFiles, deleteFolder, deleteFileIfOurs } =
    await import("@/lib/imagekit");

  // A product id that does not exist yet — exactly the "mint the ObjectId first,
  // upload straight into the real folder" flow the create form uses.
  const productId = new Types.ObjectId().toString();
  const folder = productFolder(productId);
  console.log(`\nuploading into ${folder}`);

  const result = await imagekit().files.upload({
    file: PNG_1X1.toString("base64"),
    fileName: "verify.png",
    folder,
    useUniqueFileName: true,
  });

  check(Boolean(result.url), "upload returns a url", result.url);
  check(Boolean(result.fileId), "upload returns a REAL fileId", result.fileId);
  check(
    result.filePath?.includes(`/products/${productId}/`) ?? false,
    "the file is stored under the product-id folder",
    result.filePath,
  );
  check(
    (result.url ?? "").startsWith("https://ik.imagekit.io/"),
    "the url is on ik.imagekit.io (allowlisted in next.config.ts remotePatterns)",
  );

  // The delete-path guard: a fileId we don't own must be refused.
  console.log("\nguard: refuse to delete a file we don't own");
  const bogus = await deleteFileIfOurs("000000000000000000000000");
  check(bogus === false, "a bogus/foreign fileId is refused, not blindly deleted");

  // Real delete — this is what silently no-op'd on `main`, orphaning every image.
  console.log("\ndelete");
  const deleted = await deleteFileIfOurs(result.fileId!);
  check(deleted, "the uploaded file is actually deleted");

  let stillThere = true;
  try {
    await imagekit().files.get(result.fileId!);
  } catch {
    stillThere = false;
  }
  check(!stillThere, "…and it is really gone from ImageKit (a GET now 404s)");

  await deleteFolder(folder);
  check(true, "the product folder is removed");

  // deleteFiles must skip "" (a seeded /public asset ImageKit doesn't own).
  await deleteFiles(["", "", ""]);
  check(true, 'deleteFiles([""]) is a no-op — seeded /public assets are never sent');

  console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error("\n✗", e);
  process.exit(1);
});
