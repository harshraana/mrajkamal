import "server-only";
import { randomInt } from "node:crypto";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import AdminUser, { type AdminUserDoc } from "@/lib/models/AdminUser";
import type { HydratedDocument } from "mongoose";

const OTP_TTL_MS = 10 * 60_000; // 10 minutes
const OTP_MAX_ATTEMPTS = 5;
const OTP_RESEND_COOLDOWN_MS = 60_000; // 1 minute between sends

/**
 * A real bcrypt hash to compare against when no admin exists, so a login attempt
 * for a non-existent account takes the same time as a wrong password. Without it,
 * "no admin" returns almost instantly and leaks — via timing — that the account
 * isn't set up. Computed once at module load.
 */
const DUMMY_HASH = bcrypt.hashSync("this-never-matches-anything", 12);

/**
 * Authenticate an email + password against the database.
 *
 * Runs bcrypt.compare in BOTH branches (real hash or the dummy) so the response
 * time doesn't reveal whether the email matches the admin's.
 */
export async function authenticateAdmin(
  email: string,
  password: string,
): Promise<HydratedDocument<AdminUserDoc> | null> {
  await connectDB();
  const admin = await AdminUser.findOne({ email: email.trim().toLowerCase() });
  const ok = await bcrypt.compare(password, admin?.passwordHash ?? DUMMY_HASH);
  return admin && ok ? admin : null;
}

/** Hash of the string this password becomes in storage. Cost 12 to match the rest. */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// ── Password-reset OTP ───────────────────────────────────────────────────────

export type IssueOtpResult =
  | { ok: true; code: string; email: string }
  | { ok: false; reason: "no-admin" | "cooldown"; retryAfterSec?: number };

/**
 * Mint a 6-digit reset code, store its hash + expiry on the admin doc, and return
 * the plaintext so the caller can email it. Enforces a resend cooldown.
 *
 * Targets a SPECIFIC admin by email — the one from the caller's session — rather
 * than `findOne()`. With a single admin they're equivalent, but scoping to the
 * logged-in identity is the correct thing and doesn't misfire if the collection
 * ever holds more than one row.
 *
 * `randomInt` (crypto), not `Math.random()` — a guessable reset code is a
 * password bypass.
 */
export async function issuePasswordOtp(email: string): Promise<IssueOtpResult> {
  await connectDB();
  const admin = await AdminUser.findOne({ email: email.trim().toLowerCase() });
  if (!admin) return { ok: false, reason: "no-admin" };

  const now = Date.now();
  if (admin.otpLastSentAt) {
    const since = now - admin.otpLastSentAt.getTime();
    if (since < OTP_RESEND_COOLDOWN_MS) {
      return {
        ok: false,
        reason: "cooldown",
        retryAfterSec: Math.ceil((OTP_RESEND_COOLDOWN_MS - since) / 1000),
      };
    }
  }

  const code = String(randomInt(0, 1_000_000)).padStart(6, "0");

  admin.otpHash = await bcrypt.hash(code, 10);
  admin.otpExpiresAt = new Date(now + OTP_TTL_MS);
  admin.otpAttempts = 0;
  admin.otpLastSentAt = new Date(now);
  await admin.save();

  return { ok: true, code, email: admin.email };
}

export type VerifyOtpResult =
  | { ok: true }
  | { ok: false; reason: "no-otp" | "expired" | "too-many" | "mismatch" };

function clearOtp(admin: HydratedDocument<AdminUserDoc>) {
  admin.otpHash = null;
  admin.otpExpiresAt = null;
  admin.otpAttempts = 0;
}

/**
 * Verify a reset code and, on success, set the new password.
 *
 * Doing both in one step means a valid code can be spent exactly once — there's
 * no window where the code has been accepted but the password not yet changed.
 * A wrong code increments the attempt counter and burns the OTP at the cap.
 */
export async function verifyOtpAndSetPassword(
  email: string,
  code: string,
  newPassword: string,
): Promise<VerifyOtpResult> {
  await connectDB();
  const admin = await AdminUser.findOne({ email: email.trim().toLowerCase() });
  if (!admin || !admin.otpHash || !admin.otpExpiresAt) return { ok: false, reason: "no-otp" };

  if (Date.now() > admin.otpExpiresAt.getTime()) {
    clearOtp(admin);
    await admin.save();
    return { ok: false, reason: "expired" };
  }

  if ((admin.otpAttempts ?? 0) >= OTP_MAX_ATTEMPTS) {
    clearOtp(admin);
    await admin.save();
    return { ok: false, reason: "too-many" };
  }

  const match = await bcrypt.compare(code, admin.otpHash);
  if (!match) {
    admin.otpAttempts = (admin.otpAttempts ?? 0) + 1;
    await admin.save();
    return { ok: false, reason: "mismatch" };
  }

  admin.passwordHash = await hashPassword(newPassword);
  clearOtp(admin);
  await admin.save();
  return { ok: true };
}

/** "ab***@gmail.com" — for telling the admin where the code went without echoing it in full. */
export function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return email;
  const shown = local.slice(0, 2);
  return `${shown}${"*".repeat(Math.max(1, local.length - 2))}@${domain}`;
}
