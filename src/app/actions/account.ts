"use server";

import { z } from "zod";
import { requireAdmin } from "@/lib/auth/dal";
import {
  issuePasswordOtp,
  verifyOtpAndSetPassword,
  maskEmail,
} from "@/lib/admin-user";
import { sendPasswordOtpEmail, isEmailConfigured } from "@/lib/email";
import { formDataToObject } from "@/lib/validation/form";
import { errorState, successState, type ActionState } from "@/lib/action-state";

/**
 * Step 1 of the change-password flow: email a reset code.
 *
 * Behind `requireAdmin()`, so only the signed-in admin can trigger it — there is
 * no public reset endpoint to spam. The 60-second resend cooldown lives in
 * `issuePasswordOtp`.
 */
export async function requestPasswordOtp(): Promise<ActionState> {
  const { email } = await requireAdmin();

  if (!isEmailConfigured() && process.env.NODE_ENV === "production") {
    return errorState(
      "Email isn't set up yet, so a code can't be sent. Configure the SMTP settings first.",
    );
  }

  const issued = await issuePasswordOtp(email);
  if (!issued.ok) {
    if (issued.reason === "cooldown") {
      return errorState(
        `A code was just sent. Try again in ${issued.retryAfterSec ?? 60}s.`,
      );
    }
    return errorState("No admin account found. Run `npm run seed:admin` first.");
  }

  try {
    await sendPasswordOtpEmail(issued.email, issued.code);
  } catch (error) {
    console.error("[requestPasswordOtp] send failed", error);
    return errorState("Couldn't send the code. Check the SMTP settings and try again.");
  }

  return successState(
    `Code sent to ${maskEmail(issued.email)}. It expires in 10 minutes.`,
  );
}

const changePasswordSchema = z
  .object({
    otp: z
      .string()
      .trim()
      .regex(/^\d{6}$/, "Enter the 6-digit code"),
    newPassword: z
      .string()
      .min(8, "Use at least 8 characters")
      .max(200, "That's too long"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.newPassword === d.confirmPassword, {
    path: ["confirmPassword"],
    error: "Passwords don't match",
  });

/**
 * Step 2: verify the code and set the new password, atomically (one DB save).
 */
export async function changePassword(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { email } = await requireAdmin();

  const parsed = changePasswordSchema.safeParse(formDataToObject(formData));
  if (!parsed.success) {
    return errorState(
      "Please fix the highlighted fields.",
      z.flattenError(parsed.error).fieldErrors,
    );
  }

  const result = await verifyOtpAndSetPassword(
    email,
    parsed.data.otp,
    parsed.data.newPassword,
  );
  if (!result.ok) {
    const message: Record<typeof result.reason, string> = {
      "no-otp": "Request a code first.",
      expired: "That code has expired — request a new one.",
      "too-many": "Too many wrong attempts — request a new code.",
      mismatch: "That code isn't right.",
    };
    return errorState(message[result.reason], { otp: [message[result.reason]] });
  }

  // Deliberately does NOT sign the admin out: they changed their own password on
  // purpose and expect to stay logged in. The current session runs to its normal
  // 8-hour expiry; the new password applies to the next sign-in.
  return successState("Password updated. Use it the next time you sign in.");
}
