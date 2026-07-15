import "server-only";
import mongoose, { Schema, models, type InferSchemaType, type Model } from "mongoose";

/**
 * One row per admin login attempt, for rate limiting.
 *
 * Mongo-backed rather than an in-memory Map, deliberately. A Map resets on every
 * dev HMR reload and every production restart — so anyone who can make the
 * process cycle bypasses the limit entirely — and the Proxy docs explicitly warn
 * against relying on shared globals across that boundary. Mongo is already a
 * hard dependency here, it survives restarts, and it gives us TTL expiry free.
 */
const LoginAttemptSchema = new Schema({
  /** "ip:1.2.3.4" or "em:admin@example.com" — one row is inserted per key. */
  key: { type: String, required: true, index: true },

  /**
   * Mongo's TTL monitor deletes these ~60s after they expire, so the collection
   * prunes itself and we never have to sweep it.
   */
  at: { type: Date, required: true, default: () => new Date(), expires: 900 },
});

export type LoginAttemptDoc = InferSchemaType<typeof LoginAttemptSchema>;

const LoginAttempt: Model<LoginAttemptDoc> =
  (models.LoginAttempt as Model<LoginAttemptDoc>) ??
  mongoose.model<LoginAttemptDoc>("LoginAttempt", LoginAttemptSchema);

export default LoginAttempt;
