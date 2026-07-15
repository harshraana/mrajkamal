import type { DefaultSession } from "next-auth";

/**
 * `role` is typed as the literal "admin", not `string`.
 *
 * On `main` it was `role?: string`, threaded through the JWT and session
 * callbacks — and then never read by a single guard. Every check was just
 * `if (!session)`. Narrowing the type means `requireAdmin()`'s
 * `role !== "admin"` check is one the compiler helps with, rather than a string
 * comparison nobody notices is missing.
 */
declare module "next-auth" {
  interface Session {
    user: { role: "admin" } & DefaultSession["user"];
  }

  interface User {
    role?: "admin";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "admin";
  }
}
