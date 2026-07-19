import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { checkAndRecordAttempt, clearAttempts, clientIp } from "@/lib/auth/rate-limit";
import { ADMIN_LOGIN } from "@/lib/admin-paths";
import { authenticateAdmin } from "@/lib/admin-user";

/**
 * Single-admin authentication against the `AdminUser` collection, JWT sessions.
 *
 * The credentials used to live in env vars; they moved to the database so the
 * password can be changed at runtime through the dashboard's OTP flow. Seed the
 * initial admin with `npm run seed:admin`.
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

        // The admin now lives in the database, so the password can be changed at
        // runtime (via the OTP flow) without a redeploy. authenticateAdmin runs
        // bcrypt in both the found and not-found branches, so a wrong email and a
        // wrong password take the same time.
        const admin = await authenticateAdmin(email, password);
        if (!admin) throw new InvalidCredentials();

        await clearAttempts(ip, email);
        return { id: String(admin._id), email: admin.email, name: "Admin", role: "admin" };
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
