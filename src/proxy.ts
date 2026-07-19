import { NextResponse, type NextRequest } from "next/server";

/**
 * NOT `middleware.ts` — Next 16 renamed the convention to `proxy`.
 *
 * This is a fast, optimistic redirect layer. It is NOT the security boundary,
 * and it is not pretending to be one:
 *
 *   • It only checks whether a session cookie is PRESENT. It never verifies the
 *     signature and never imports `@/auth` — the docs are explicit that Proxy
 *     "is not intended for a full session management or authorization solution",
 *     and that you "should not attempt relying on shared modules or globals"
 *     across this boundary. Keeping it cookie-only also keeps bcryptjs and
 *     mongoose out of the proxy bundle.
 *
 *   • A forged cookie sails straight through here and is then rejected by
 *     `requireAdmin()`, which runs inside every page, every Server Action and
 *     every admin API route. That is where authorization actually happens.
 *
 * The admin panel lives at `/m/admin`; the upload API stays at `/api/admin/*`.
 * The matcher covers BOTH. `main`'s matcher was `["/admin/:path*"]` only, so its
 * upload route was outside proxy coverage entirely — one forgotten in-handler
 * check away from being wide open.
 *
 * NOTE: these paths are literals ON PURPOSE. `config.matcher` must be statically
 * analysable — Next ignores variables in it — and the proxy is meant to stay
 * self-contained. They must be kept in step with `ADMIN_BASE` in
 * `src/lib/admin-paths.ts` (currently `/m/admin`).
 */

// @auth/core cookie names: the __Secure- prefix is used over HTTPS.
const SESSION_COOKIES = ["authjs.session-token", "__Secure-authjs.session-token"];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasSessionCookie = SESSION_COOKIES.some((name) => request.cookies.has(name));

  if (pathname === "/m/admin/login") {
    return hasSessionCookie
      ? NextResponse.redirect(new URL("/m/admin", request.nextUrl))
      : NextResponse.next();
  }

  if (!hasSessionCookie) {
    // API routes get a 401, not a redirect to an HTML login page — an HTML body
    // in response to a fetch() is worse than useless.
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const loginUrl = new URL("/m/admin/login", request.nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname + search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/m/admin/:path*", "/api/admin/:path*"],
};
