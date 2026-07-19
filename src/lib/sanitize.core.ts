import sanitizeHtml from "sanitize-html";

/**
 * The security boundary for rich text.
 *
 * `main` wrote TinyMCE's output straight into Mongo and rendered it with
 * `dangerouslySetInnerHTML`, with no sanitization anywhere. Combined with an
 * upload route that accepted `image/svg+xml` (SVG is a scriptable document),
 * an admin-account compromise became a persistent XSS on the public site.
 *
 * There are exactly two HTML fields in the whole system —
 * `Product.descriptionHtml` and `SiteContent.about.bodyHtml` — so this is a
 * two-line choke point on write.
 *
 * TinyMCE's own `valid_elements` option is a UX guard, NOT a defence: it runs in
 * the browser, where an attacker controls everything. Never trust the editor.
 *
 * Deliberately NOT marked `server-only` — `scripts/seed.ts` imports it outside
 * the RSC graph. `src/lib/sanitize.ts` is the guarded re-export that app code
 * should use, so `sanitize-html` never lands in a client bundle.
 */
const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "p", "br", "strong", "em", "u", "s",
    "h2", "h3", "h4",
    "ul", "ol", "li",
    "blockquote", "a", "hr",
    "table", "thead", "tbody", "tr", "th", "td",
  ],
  allowedAttributes: {
    a: ["href", "title", "target", "rel"],
    th: ["colspan", "rowspan"],
    td: ["colspan", "rowspan"],
  },
  // Kills `javascript:` and `data:` URIs — the usual way an <a> becomes an XSS.
  allowedSchemes: ["http", "https", "mailto", "tel"],
  disallowedTagsMode: "discard",
  transformTags: {
    // Rich-text links are attacker-influenced content: never leak the opener,
    // and never pass PageRank to whatever gets pasted in.
    a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer nofollow" }),
  },
};

/**
 * Returns HTML that is safe to hand to `dangerouslySetInnerHTML`.
 *
 * No `<script>`, `<iframe>`, `<style>`, `<img>`, `<svg>`, no inline `style=`,
 * no `on*=` handlers. Nothing in the allowlist can execute.
 */
export function sanitizeRichText(dirty: string): string {
  return sanitizeHtml(dirty ?? "", OPTIONS);
}

/**
 * Strips every tag, leaving readable text.
 *
 * Feeds `Product.descriptionText`, which powers the admin text-index search, the
 * meta description, and the JSON-LD `description` — none of which may contain
 * markup.
 */
export function htmlToText(html: string): string {
  return sanitizeHtml(html ?? "", { allowedTags: [], allowedAttributes: {} })
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&") // last: otherwise &amp;lt; would double-decode into <
    .replace(/\s+/g, " ")
    .trim();
}
