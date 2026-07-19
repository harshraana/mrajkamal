/**
 * Creates (or resets) the single admin account.
 *
 *   npm run seed:admin           # create it if it doesn't exist; leave it alone otherwise
 *   npm run seed:admin -- --force  # reset the password back to the temp one (recovery path)
 *
 * The password is stored in the database, so it can be changed at runtime from
 * the dashboard. `--force` is the way back in if you ever forget it and get
 * locked out (there is deliberately no forgot-password on the login page).
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

const FORCE = process.argv.includes("--force");

async function main() {
  const mongoose = (await import("mongoose")).default;
  const bcrypt = (await import("bcryptjs")).default;
  const { INITIAL_ADMIN_EMAIL, INITIAL_ADMIN_PASSWORD } = await import(
    "../src/lib/constants/admin"
  );

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  await mongoose.connect(uri, { bufferCommands: false });
  const { default: AdminUser } = await import("../src/lib/models/AdminUser");

  const email = INITIAL_ADMIN_EMAIL.toLowerCase();
  const existing = await AdminUser.findOne({ email });

  if (existing && !FORCE) {
    console.log(`• admin ${email} already exists — left untouched (use --force to reset the password)`);
  } else {
    const passwordHash = await bcrypt.hash(INITIAL_ADMIN_PASSWORD, 12);
    await AdminUser.updateOne(
      { email },
      {
        $set: { passwordHash },
        // Clear any in-flight reset code on a reset.
        $unset: { otpHash: "", otpExpiresAt: "", otpLastSentAt: "" },
        $setOnInsert: { email },
      },
      { upsert: true },
    );
    console.log(`✓ admin ${email} ${existing ? "password reset" : "created"}`);
    console.log(`\n  ⚠  Temporary password: ${INITIAL_ADMIN_PASSWORD}`);
    console.log("     Sign in and change it from the dashboard (Account) immediately.\n");
  }

  await mongoose.disconnect();
}

main().catch((error) => {
  console.error("\n✗ seed:admin failed:", error);
  process.exit(1);
});
