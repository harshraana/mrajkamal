/**
 * Exercises DB-backed admin auth + the OTP change-password lifecycle against a
 * real database. No email is sent — the OTP is generated and verified at the
 * library level, so the logic is covered without SMTP.
 *
 *   npm run verify:admin
 *
 * Cleans up after itself.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

let pass = 0;
let fail = 0;
const check = (ok: boolean, label: string) => {
  if (ok) pass++;
  else fail++;
  console.log(`  ${ok ? "ok  " : "FAIL"}  ${label}`);
};

async function main() {
  const mongoose = (await import("mongoose")).default;
  const bcrypt = (await import("bcryptjs")).default;
  await mongoose.connect(process.env.MONGODB_URI!, { bufferCommands: false });

  const { default: AdminUser } = await import("@/lib/models/AdminUser");
  const { authenticateAdmin, issuePasswordOtp, verifyOtpAndSetPassword, maskEmail } =
    await import("@/lib/admin-user");

  const EMAIL = "verify-admin@example.com";
  await AdminUser.deleteMany({ email: EMAIL });
  await AdminUser.create({ email: EMAIL, passwordHash: await bcrypt.hash("first-pass", 12) });

  // ── Login ──────────────────────────────────────────────────────────────────
  console.log("\nlogin");
  check(Boolean(await authenticateAdmin(EMAIL, "first-pass")), "correct password authenticates");
  check((await authenticateAdmin(EMAIL, "wrong")) === null, "wrong password is rejected");
  check((await authenticateAdmin("nobody@example.com", "first-pass")) === null, "unknown email is rejected");
  check(Boolean(await authenticateAdmin(EMAIL.toUpperCase(), "first-pass")), "email match is case-insensitive");

  // ── OTP: happy path ─────────────────────────────────────────────────────────
  console.log("\notp change-password");
  // The lib enforces a resend cooldown, so issue once and reuse the code.
  const issued = await issuePasswordOtp(EMAIL);
  check(issued.ok && /^\d{6}$/.test(issued.ok ? issued.code : ""), "issues a 6-digit code");
  const code = issued.ok ? issued.code : "";

  check(
    (await verifyOtpAndSetPassword(EMAIL, "000000", "brand-new-pass")).ok === false,
    "a wrong code is rejected",
  );
  const changed = await verifyOtpAndSetPassword(EMAIL, code, "brand-new-pass");
  check(changed.ok, "the correct code sets the new password");

  check(Boolean(await authenticateAdmin(EMAIL, "brand-new-pass")), "new password now works");
  check((await authenticateAdmin(EMAIL, "first-pass")) === null, "old password no longer works");
  check(
    (await verifyOtpAndSetPassword(EMAIL, code, "x")).ok === false,
    "the code cannot be reused after a successful change",
  );

  // ── OTP: attempt cap burns the code ─────────────────────────────────────────
  console.log("\notp attempt cap");
  // Bypass the cooldown for the test by clearing otpLastSentAt.
  await AdminUser.updateOne({ email: EMAIL }, { $unset: { otpLastSentAt: "" } });
  const reissued = await issuePasswordOtp(EMAIL);
  const goodCode = reissued.ok ? reissued.code : "";
  for (let i = 0; i < 5; i++) await verifyOtpAndSetPassword(EMAIL, "111111", "n");
  const afterCap = await verifyOtpAndSetPassword(EMAIL, goodCode, "should-not-apply");
  check(!afterCap.ok, "the correct code is refused after 5 wrong attempts (code burned)");
  check(Boolean(await authenticateAdmin(EMAIL, "brand-new-pass")), "…and the password is unchanged");

  // ── OTP: expiry ──────────────────────────────────────────────────────────────
  console.log("\notp expiry");
  await AdminUser.updateOne({ email: EMAIL }, { $unset: { otpLastSentAt: "" } });
  const expiring = await issuePasswordOtp(EMAIL);
  const expCode = expiring.ok ? expiring.code : "";
  await AdminUser.updateOne({ email: EMAIL }, { $set: { otpExpiresAt: new Date(Date.now() - 1000) } });
  check(!(await verifyOtpAndSetPassword(EMAIL, expCode, "n")).ok, "an expired code is rejected");

  // ── Cooldown ─────────────────────────────────────────────────────────────────
  console.log("\nresend cooldown");
  await issuePasswordOtp(EMAIL);
  const tooSoon = await issuePasswordOtp(EMAIL);
  check(!tooSoon.ok && (tooSoon.ok ? false : tooSoon.reason === "cooldown"), "a second code within 60s is throttled");

  console.log("\nmisc");
  check(maskEmail("mrajkamalfurniture@gmail.com").endsWith("@gmail.com"), "maskEmail keeps the domain");
  check(!maskEmail("mrajkamalfurniture@gmail.com").includes("rajkamalfurniture"), "maskEmail hides the local part");

  await AdminUser.deleteMany({ email: EMAIL });
  await mongoose.disconnect();

  console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error("\n✗", e);
  process.exit(1);
});
