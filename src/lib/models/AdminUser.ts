import "server-only";
import mongoose, { Schema, models, type InferSchemaType, type Model } from "mongoose";

/**
 * The admin account — now in the database instead of environment variables.
 *
 * Moving it here is what makes the password changeable at runtime (via the OTP
 * flow) without a redeploy. It's still effectively a single admin; a collection
 * just leaves the door open to more later.
 *
 * The OTP fields back the "change password" flow and are cleared after use. They
 * live on this doc rather than a separate collection because there is exactly one
 * admin and one in-flight reset at a time — no need for a keyed table.
 */
const AdminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },

    /** bcrypt of the current 6-digit reset code, or null when none is pending. */
    otpHash: { type: String, default: null },
    otpExpiresAt: { type: Date, default: null },
    /** Wrong-code attempts against the current OTP; the code is burned at the cap. */
    otpAttempts: { type: Number, default: 0 },
    /** For the resend cooldown. */
    otpLastSentAt: { type: Date, default: null },
  },
  { timestamps: true },
);

export type AdminUserDoc = InferSchemaType<typeof AdminUserSchema>;

const AdminUser: Model<AdminUserDoc> =
  (models.AdminUser as Model<AdminUserDoc>) ??
  mongoose.model<AdminUserDoc>("AdminUser", AdminUserSchema);

export default AdminUser;
