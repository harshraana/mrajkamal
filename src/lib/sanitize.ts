import "server-only";

/**
 * Guarded re-export of the rich-text sanitizer.
 *
 * App code imports from here so that importing it from a Client Component is a
 * build error rather than a silent ~60KB of `sanitize-html` in the browser
 * bundle. The logic lives in `sanitize.core.ts` because `scripts/seed.ts` runs
 * outside the RSC graph, where the `server-only` package throws by design.
 */
export { sanitizeRichText, htmlToText } from "./sanitize.core";
