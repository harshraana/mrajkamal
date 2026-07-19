/**
 * The admin panel's base path, in ONE place.
 *
 * It lives at `/m/admin`. When it moved here from `/admin` it meant touching ~15
 * files — exactly the scattered hardcoding that drifts out of sync. Everything
 * admin-related derives its links and redirects from here now, so the next move
 * is a one-line change.
 *
 * The ONE exception is `src/proxy.ts`: its `config.matcher` must be a static
 * string literal (Next statically analyses it at build time and *ignores*
 * variables — see the proxy docs), and the proxy is meant to stay self-contained
 * anyway. Its literals carry a comment pointing back here; keep them in step.
 *
 * Not `server-only`: the sidebar, forms and row actions are client components
 * that link into the admin too.
 */
export const ADMIN_BASE = "/m/admin";

/** e.g. adminPath("/products"), adminPath(`/products/${id}/edit`). */
export const adminPath = (subpath = ""): string => `${ADMIN_BASE}${subpath}`;

export const ADMIN_LOGIN = `${ADMIN_BASE}/login`;
