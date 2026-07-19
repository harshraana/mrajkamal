import "server-only";
import { connectDB } from "@/lib/db";
import LoginAttempt from "@/lib/models/LoginAttempt";

/**
 * Sliding-window rate limit on admin sign-in.
 *
 * `main` had none: a single admin credential with unlimited bcrypt attempts and
 * no lockout, which is straightforwardly brute-forceable.
 *
 * Two independent budgets. The per-email limit stops someone hammering the one
 * account that exists; the (looser) per-IP limit stops one host burning through
 * attempts by varying the email.
 */
const WINDOW_MS = 15 * 60_000;
const MAX_PER_EMAIL = 5;
const MAX_PER_IP = 10;

/** Best-effort client IP. Behind a proxy/CDN, x-forwarded-for's first entry is the client. */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

/**
 * Records the attempt and reports whether it is allowed.
 *
 * The attempt is written BEFORE the password is checked, on purpose. Recording
 * only failures would let an attacker with a valid password reset their own
 * budget, and — more importantly — a crash or timeout mid-check would leave the
 * attempt uncounted. Counting every attempt up front is the conservative order.
 *
 * Fails OPEN on a database error: a Mongo blip should lock the owner out of
 * their own admin panel, not the other way round. The real credential check
 * still stands behind this.
 */
export async function checkAndRecordAttempt(ip: string, email: string): Promise<boolean> {
  const em = email.trim().toLowerCase();

  try {
    await connectDB();
    const since = new Date(Date.now() - WINDOW_MS);

    const [byIp, byEmail] = await Promise.all([
      LoginAttempt.countDocuments({ key: `ip:${ip}`, at: { $gte: since } }),
      LoginAttempt.countDocuments({ key: `em:${em}`, at: { $gte: since } }),
    ]);

    if (byIp >= MAX_PER_IP || byEmail >= MAX_PER_EMAIL) return false;

    await LoginAttempt.insertMany([{ key: `ip:${ip}` }, { key: `em:${em}` }]);
    return true;
  } catch (error) {
    console.error("[rate-limit] failed open:", error);
    return true;
  }
}

/** Clear the budget after a successful sign-in, so normal use never accumulates a lockout. */
export async function clearAttempts(ip: string, email: string): Promise<void> {
  try {
    await connectDB();
    await LoginAttempt.deleteMany({
      key: { $in: [`ip:${ip}`, `em:${email.trim().toLowerCase()}`] },
    });
  } catch (error) {
    console.error("[rate-limit] clear failed:", error);
  }
}
