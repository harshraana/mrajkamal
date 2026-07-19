"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import type { ActionState } from "@/lib/action-state";
import { ADMIN_BASE, ADMIN_LOGIN } from "@/lib/admin-paths";

/**
 * Sign in. Lives in its own file — on `main` this sat in `actions/home.ts`,
 * which is exactly where nobody would look for it.
 */
export async function adminSignIn(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const callbackUrl = String(formData.get("callbackUrl") || ADMIN_BASE);

  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: callbackUrl.startsWith("/") ? callbackUrl : ADMIN_BASE,
    });
  } catch (error) {
    // signIn() succeeds by THROWING a NEXT_REDIRECT. Catching AuthError first
    // and rethrowing everything else is what lets the redirect through — swallow
    // it and a successful login silently does nothing.
    if (error instanceof AuthError) {
      const code = (error as AuthError & { code?: string }).code;
      return code === "rate_limited"
        ? {
            status: "error",
            message:
              "Too many sign-in attempts. Wait 15 minutes before trying again.",
          }
        : { status: "error", message: "Invalid email or password." };
    }
    throw error;
  }

  // Unreachable in practice: a successful signIn redirects. Here for exhaustiveness.
  return { status: "success", message: "Signed in." };
}

export async function adminSignOut(): Promise<void> {
  await signOut({ redirect: false });
  redirect(ADMIN_LOGIN);
}
