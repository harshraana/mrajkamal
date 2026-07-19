/**
 * Fails `predev` / `prebuild` when the server environment is invalid.
 *
 * Why this exists as well as `src/instrumentation.ts`: instrumentation's
 * `register()` only runs when a *server* boots — it is NOT invoked during
 * `next build` (verified empirically). Without this script a build with an
 * empty `IMAGEKIT_PRIVATE_KEY` succeeds and ships a broken artifact.
 *
 *   npm run check-env
 */
import { loadEnvConfig } from "@next/env";
import { parseServerEnv } from "../src/lib/env.schema";

// Populates process.env from .env.local et al, using Next's own precedence
// rules — so this script sees exactly what the app will see, including the
// .env.local-shadows-.env behaviour that started all this.
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

try {
  parseServerEnv();
  console.log("✓ env ok");
} catch (error) {
  console.error(`\n✗ ${(error as Error).message}`);
  process.exit(1);
}
