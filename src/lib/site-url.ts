/**
 * The site's absolute origin.
 *
 * Load-bearing, not cosmetic: it builds the product URL inside the WhatsApp
 * message, the canonical tags, the OG tags and the sitemap. A wrong value here
 * means WhatsApp link previews and Google canonicals both point at the wrong
 * host.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

/** Absolute URL for a path, passing absolute URLs through untouched. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** ₹18,499 — Indian digit grouping. */
export function formatINR(amount: number): string {
  return amount.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}
