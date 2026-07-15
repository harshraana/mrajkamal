/**
 * Copies the self-hosted TinyMCE bundle out of node_modules into /public.
 *
 * TinyMCE is self-hosted (GPL) rather than loaded from Tiny's CDN, so there is
 * no cloud API key to manage and the editor works offline. The editor loads it
 * from `/tinymce/tinymce.min.js` at runtime, which means the assets have to be
 * served from `public/` — and `public/tinymce` is therefore generated, not
 * authored, and is gitignored.
 *
 * Runs on predev/prebuild. Uses fs.cp rather than `cp -r` so it works on Windows.
 */
import { cp, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const from = path.join(root, "node_modules", "tinymce");
const to = path.join(root, "public", "tinymce");

try {
  await access(from);
} catch {
  console.error("✗ tinymce not found in node_modules — run `npm install` first");
  process.exit(1);
}

await cp(from, to, { recursive: true, force: true });
console.log("✓ tinymce → public/tinymce");
