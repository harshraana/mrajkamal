import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { ADMIN_LOGIN } from "@/lib/admin-paths";

/**
 * The real authorization boundary.
 *
 * `src/proxy.ts` only redirects — it checks that a session cookie exists, never
 * that it is valid. Everything that actually reads or writes data calls in here.
 *
 * This must be called in EVERY Server Action, not just the page that renders the
 * form. From the Proxy docs: Server Functions "are handled as POST requests to
 * the route where they are used", so a page-level check does not extend to them
 * and a matcher change can silently drop their coverage. An action is a public
 * POST endpoint; treat it like one.
 */

/** One `auth()` call per render pass, however many components ask for it. */
export const getSession = cache(async () => auth());

export type AdminSession = { email: string; role: "admin" };

/**
 * For pages, layouts, and Server Actions. Redirects if the caller isn't an admin.
 *
 * The `role` check is the point. `main` set `role: "admin"` on the JWT, threaded
 * it through the session callback… and then never read it anywhere. Every guard
 * in the app was `if (!session)`.
 */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getSession();

  if (!session?.user?.email) redirect(ADMIN_LOGIN);
  if (session.user.role !== "admin") redirect(`${ADMIN_LOGIN}?error=forbidden`);

  return { email: session.user.email, role: "admin" };
}

/**
 * For Route Handlers, which must RETURN a Response rather than throw a render
 * interrupt. Returns null when the caller is a valid admin, or the Response to
 * send back when they are not.
 */
export async function requireAdminApi(): Promise<Response | null> {
  const session = await getSession();

  if (!session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.user.role !== "admin") {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
  return null;
}
