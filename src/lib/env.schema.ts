import { z } from "zod";

/**
 * The server-environment contract, in a module a plain Node script can import.
 *
 * Deliberately NOT marked `server-only`: `scripts/check-env.ts` runs this on
 * `predev`/`prebuild`, outside the React Server Component graph, where the
 * `server-only` package throws by design. `src/lib/env.ts` is the RSC-facing
 * wrapper that adds the guard.
 */

/**
 * A bcrypt hash: `$2<a|b|y>$<cost>$<22-char salt + 31-char digest>` — 60 chars.
 *
 * The strictness earns its keep. dotenv expands `$` as a variable reference, so
 * an unescaped hash in a .env file is silently eaten down to `""` — and quoting
 * does NOT protect it, because quotes are stripped before expansion runs. The
 * hash has to be written backslash-escaped (`\$2b\$12\$...`). Without this check
 * the only symptom is that every correct password is rejected as invalid.
 */
const bcryptHash = z
  .string()
  .regex(
    /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/,
    "not a valid bcrypt hash — if it looks correct in .env.local, the '$' separators " +
      "are probably unescaped (dotenv expands them away). Write it as \\$2b\\$12\\$...",
  );

export const serverEnvSchema = z.object({
  MONGODB_URI: z.string().min(1, "is required"),

  AUTH_SECRET: z.string().min(32, "must be at least 32 characters"),
  ADMIN_EMAIL: z.email("must be a valid email address"),
  ADMIN_PASSWORD_HASH: bcryptHash,

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
