/**
 * Seed defaults for the single admin account.
 *
 * Used only by the seed scripts to CREATE the initial admin. Once seeded, the
 * email and password live in the database (AdminUser), and the password is
 * changed from the dashboard via the OTP flow — never from here.
 */
export const INITIAL_ADMIN_EMAIL = "mrajkamalfurniture@gmail.com";

/**
 * Temporary password for first login. Change it immediately from the dashboard.
 * It is intentionally simple because it is meant to be replaced, not kept.
 */
export const INITIAL_ADMIN_PASSWORD = "admin@1234";
