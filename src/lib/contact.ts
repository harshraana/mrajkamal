/**
 * Build a valid `tel:` URI from a human-readable phone number.
 *
 * The footer shipped `href="tel:+91 983 353 3076"`. Spaces are not valid in a
 * tel: URI — RFC 3966 allows only `-`, `.`, `(` and `)` as visual separators —
 * so the browser percent-encodes them and the link is malformed. The About page
 * happened to have it right; the footer didn't. Deriving both from one function
 * means they can't disagree again.
 *
 * Display and link are deliberately separate concerns: the CMS stores the
 * pretty version ("+91 983 353 3076") and this produces the machine one
 * ("tel:+919833533076").
 */
export function telHref(display: string): string {
  const digits = display.replace(/[^\d+]/g, "");
  return `tel:${digits.startsWith("+") ? digits : `+${digits}`}`;
}

/** E.164, for schema.org and wa.me — digits and a leading +, nothing else. */
export function toE164(display: string): string {
  return telHref(display).replace("tel:", "");
}
