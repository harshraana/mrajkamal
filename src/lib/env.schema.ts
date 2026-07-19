import { z } from "zod";

/**
 * The server-environment contract, in a module a plain Node script can import.
 *
 * Deliberately NOT marked `server-only`: `scripts/check-env.ts` runs this on
 * `predev`/`prebuild`, outside the React Server Component graph, where the
 * `server-only` package throws by design. `src/lib/env.ts` is the RSC-facing
 * wrapper that adds the guard.
 *
 * The admin email + password used to be here (ADMIN_EMAIL, ADMIN_PASSWORD_HASH).
 * They moved into the database (`AdminUser`) so the password can be changed at
 * runtime via the dashboard's OTP flow — which also retired the whole
 * "escape the '$' in a bcrypt hash" headache, since no hash lives in env now.
 *
 * SMTP settings for the OTP email are intentionally NOT required here: the app
 * boots and logs in without them; only the change-password flow needs email, and
 * it fails with a clear message if SMTP isn't set (see `src/lib/email.ts`).
 */
export const serverEnvSchema = z.object({
  MONGODB_URI: z.string().min(1, "is required"),

  AUTH_SECRET: z.string().min(32, "must be at least 32 characters"),

  IMAGEKIT_PUBLIC_KEY: z.string().min(1, "is required"),
  IMAGEKIT_PRIVATE_KEY: z.string().min(1, "is required"),
  IMAGEKIT_URL_ENDPOINT: z.url("must be a URL"),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

/** Throws with a field-by-field report. Used at boot AND at build. */
export function parseServerEnv(source: NodeJS.ProcessEnv = process.env): ServerEnv {
  const result = serverEnvSchema.safeParse(source);
  if (result.success) return result.data;

  const issues = Object.entries(z.flattenError(result.error).fieldErrors)
    .map(([key, messages]) => `  • ${key} ${messages?.join("; ")}`)
    .join("\n");

  throw new Error(
    `Invalid server environment. Check .env.local against .env.example:\n\n${issues}\n`,
  );
}
