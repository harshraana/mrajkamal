/**
 * Bring the live database's indexes into exact lockstep with the Mongoose
 * schemas: create any that are missing AND DROP any that are no longer declared
 * (e.g. an index removed to save storage on the free cluster).
 *
 *   npm run db:sync-indexes
 *
 * This is the ONLY thing that removes a dropped index — Mongoose's autoIndex
 * only ever ADDS. Safe to re-run; a no-op once already in sync. The schema is
 * the source of truth, so any index added out-of-band (e.g. via mongosh) that
 * isn't in a schema will be dropped.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

async function main() {
  const mongoose = (await import("mongoose")).default;
  await mongoose.connect(process.env.MONGODB_URI!, { bufferCommands: false });
  console.log("db:", mongoose.connection.db?.databaseName, "\n");

  // Import every model so its schema (and its indexes) is registered.
  const models = {
    Product: (await import("@/lib/models/Product")).default,
    Review: (await import("@/lib/models/Review")).default,
    AdminUser: (await import("@/lib/models/AdminUser")).default,
    LoginAttempt: (await import("@/lib/models/LoginAttempt")).default,
    SiteContent: (await import("@/lib/models/SiteContent")).default,
  };

  for (const [name, model] of Object.entries(models)) {
    const dropped: string[] = await model.syncIndexes();
    console.log(
      `${name}: synced` +
        (dropped.length ? `  (dropped: ${dropped.join(", ")})` : "  (nothing to drop)"),
    );
  }

  await mongoose.disconnect();
  console.log("\ndone");
}
main().catch((e) => { console.error(e); process.exit(1); });
