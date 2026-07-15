import { randomBytes } from "node:crypto";

/**
 * `main` used `/[^\w\s-]/g`, and `\w` is ASCII-only. A product named entirely in
 * Devanagari ("राजकमल") therefore slugified to the EMPTY STRING, which then blew
 * up against the schema's `required: true` with a baffling error.
 *
 * `\p{L}\p{N}` keeps letters and numbers in any script; NFKD plus stripping the
 * Latin combining range turns "Café" into "cafe" rather than "caf-e".
 *
 * `\p{M}` must be kept as well, and that is not a nicety. Indic vowel signs
 * (matras) are Unicode *Marks*, not *Letters* — so a letters-only filter cuts
 * them out mid-word and "राजकमल" slugifies to "र-जकमल". Keeping marks lets them
 * stay attached to the consonant they modify.
 */
export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // combining diacritics left over by NFKD
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

/** Slugs that would collide with a real route under /products/. */
const RESERVED = new Set(["new", "edit", "admin", "api", "sitemap", "robots"]);

/**
 * Does the slug carry any actual content?
 *
 * Not the same question as `slug !== ""`. Keeping `\p{M}` (needed for Indic
 * matras) also lets *invisible* marks through — an emoji-only name like "🛋️"
 * leaves its U+FE0F variation selector behind and yields a slug of nothing but
 * zero-width characters. Non-empty, and completely useless as a URL.
 *
 * So the real test is whether a letter or a number survived.
 */
const hasRealContent = (slug: string) => /[\p{L}\p{N}]/u.test(slug);

/**
 * Candidate slugs to try, in order: `base`, `base-2`, `base-3`, …then a random
 * suffix as the escape hatch.
 *
 * Used with write-and-retry (see `isDuplicateKeyError`) rather than the
 * read-then-write that `main` did. `main` called `findOne({slug})` and *then*
 * `create()` — a TOCTOU race where two concurrent creates with the same name
 * both see no conflict, and the loser surfaces a raw E11000 in the error
 * boundary. It also looped `while (true)` with one query per candidate.
 *
 * Here the unique index is the arbiter, so the race cannot be lost — and the
 * attempt count is bounded.
 */
export function* slugCandidates(name: string, attempts = 5): Generator<string> {
  let base = slugify(name);

  // No usable characters (emoji-only name), or a word that would shadow a real
  // route — fall back rather than writing a broken slug.
  if (!hasRealContent(base)) base = "product";
  else if (RESERVED.has(base)) base = `${base}-product`;

  yield base;
  for (let i = 2; i <= attempts; i++) yield `${base}-${i}`;
  yield `${base}-${randomBytes(3).toString("hex")}`;
}

/** True for a Mongo E11000 duplicate-key error on the given field. */
export function isDuplicateKeyError(error: unknown, path: string): boolean {
  const e = error as { code?: number; keyPattern?: Record<string, unknown> };
  return e?.code === 11000 && Object.keys(e.keyPattern ?? {}).includes(path);
}
