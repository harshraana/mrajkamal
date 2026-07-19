import "server-only";
import { parseServerEnv } from "./env.schema";

/**
 * Validated server environment. Import this instead of touching `process.env`.
 *
 * Parsed at module scope, and imported from `src/instrumentation.ts`, so a
 * missing or malformed variable crashes the server at boot with a field-level
 * message rather than surfacing later as an opaque 500 on the first upload.
 *
 * `next build` does NOT run instrumentation (verified), so the build is gated
 * separately by `scripts/check-env.ts` on `prebuild`.
 */
export const serverEnv = parseServerEnv();
