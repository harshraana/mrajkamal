import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { checkAndRecordAttempt, clearAttempts, clientIp } from "@/lib/auth/rate-limit";
import { ADMIN_LOGIN } from "@/lib/admin-paths";

/**
 * Single-admin authentication: ADMIN_EMAIL + ADMIN_PASSWORD_HASH from the
 * environment, JWT sessions, no user collection.
 *
 * Note the hash lives in an env var, and dotenv eats unescaped `$` — so
 * `src/lib/env.schema.ts` validates its shape at boot. Without that check a
 * mangled hash presents as "every correct password is wrong", which is a
 * genuinely horrible thing to debug.
 */

/** Distinct codes so the login page can tell "locked out" from "wrong password". */
class InvalidCredentials extends CredentialsSignin {
  code = "invalid_credentials";
}
class RateLimited extends CredentialsSignin {
  code = "rate_limited";
}

const credentialsSchema = z.object({
  email: z.email(),
  password: z.string().min(1).max(200),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
  pages: { signIn: ADMIN_LOGIN },

  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // The second argument is the original Request — that's how we get the IP.
      async authorize(raw, request) {
        const parsed = credentialsSchema.safeParse(raw);
        if (!parsed.success) throw new InvalidCredentials();
        const { email, password } = parsed.data;

        const ip = clientIp(request);
        if (!(await checkAndRecordAttempt(ip, email))) throw new RateLimited();

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminHash = process.env.ADMIN_PASSWORD_HASH;
        if (!adminEmail || !adminHash) throw new InvalidCredentials();

        // Run bcrypt even when the email is wrong, and compare both results only
        // at the end. Short-circuiting on the email would make a wrong-email
        // response measurably faster than a wrong-password one, which leaks
        // which email is the admin's.
        const passwordOk = await bcrypt.compare(password, adminHash);
        const emailOk = email.toLowerCase() === adminEmail.toLowerCase();
        if (!emailOk || !passwordOk) throw new InvalidCredentials();

        await clearAttempts(ip, email);
        return { id: "admin", email: adminEmail, name: "Admin", role: "admin" };
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as { role?: string }).role ?? "admin";
      return token;
    },
    session({ session, token }) {
      if (session.user) session.user.role = token.role as "admin";
      return session;
    },
  },
});
