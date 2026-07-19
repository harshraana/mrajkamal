/**
 * Runs once per server instance, before any request is handled.
 *
 * Importing the env module here is the whole point: `src/lib/env.ts` parses and
 * validates the server environment at module scope, so a missing or malformed
 * variable throws *here* — at boot, with a field-level message — instead of
 * surfacing much later as an opaque 500 on the first upload or login.
 */
export async function register() {
  // Guard the runtime: `server-only` modules (and `process.env` secrets) must
  // never be pulled into the edge bundle.
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("@/lib/env");
  }
}
