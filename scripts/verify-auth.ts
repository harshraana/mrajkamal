/**
 * Exercises the login rate limiter against a real database.
 *
 *   npm run verify:auth
 *
 * `main` had no rate limiting at all: one admin credential, unlimited bcrypt
 * attempts, no lockout. This proves the budgets actually bite.
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
  await mongoose.connect(process.env.MONGODB_URI!, { bufferCommands: false });

  const { checkAndRecordAttempt, clearAttempts } = await import("@/lib/auth/rate-limit");
  const LoginAttempt = (await import("@/lib/models/LoginAttempt")).default;

  const IP = "203.0.113.9";
  const EMAIL = "attacker@example.com";
  const wipe = () => LoginAttempt.deleteMany({ key: /203\.0\.113\.9|example\.com/ });
  await wipe();

  // ── per-email budget: 5 per 15 min ────────────────────────────────────────
  console.log("\nper-email budget (5 / 15 min)");
  const results: boolean[] = [];
  for (let i = 0; i < 7; i++) results.push(await checkAndRecordAttempt(IP, EMAIL));
  check(
    results.slice(0, 5).every(Boolean),
    "the first 5 attempts are allowed",
  );
  check(
    results.slice(5).every((r) => r === false),
    "attempts 6 and 7 are BLOCKED — brute force is stopped",
  );

  const rows = await LoginAttempt.countDocuments({ key: `em:${EMAIL}` });
  check(rows > 0, `attempts are persisted in Mongo (${rows} rows), so a restart can't reset the budget`);

  // ── per-IP budget: catches email rotation ─────────────────────────────────
  console.log("\nper-IP budget (10 / 15 min) — stops rotating the email");
  const rotated: boolean[] = [];
  for (let i = 0; i < 6; i++) {
    rotated.push(await checkAndRecordAttempt(IP, `victim${i}@example.com`));
  }
  check(
    rotated.some((r) => r === false),
    "rotating to fresh emails from the same IP still hits the per-IP cap",
  );

  // ── success clears the budget ─────────────────────────────────────────────
  console.log("\nclearing after a successful sign-in");
  await clearAttempts(IP, EMAIL);
  check(await checkAndRecordAttempt(IP, EMAIL), "a successful login resets the budget");

  // ── a different IP is unaffected ──────────────────────────────────────────
  console.log("\nisolation");
  check(
    await checkAndRecordAttempt("198.51.100.1", "someone-else@example.com"),
    "an unrelated IP + email is not collateral damage",
  );

  await wipe();
  await mongoose.disconnect();

  console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error("\n✗", e);
  process.exit(1);
});
