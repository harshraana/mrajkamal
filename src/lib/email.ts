import "server-only";
import nodemailer from "nodemailer";

/**
 * Outbound email over SMTP, used to send the admin password-reset OTP.
 *
 * Configured for Gmail by default (send from mrajkamalfurniture@gmail.com using
 * a Google "app password"), but the settings are generic SMTP — point them at
 * any provider (Brevo, SendGrid, Resend, …) by changing the env vars.
 *
 * Env (all optional at boot — the app runs and logs in without them; only the
 * change-password flow needs them):
 *   SMTP_HOST   default smtp.gmail.com
 *   SMTP_PORT   default 465 (implicit TLS). 587 uses STARTTLS.
 *   SMTP_USER   the mailbox, e.g. mrajkamalfurniture@gmail.com
 *   SMTP_PASS   the app password (NOT the Google account password)
 *   SMTP_FROM   optional display form, defaults to "M Rajkamal <SMTP_USER>"
 */

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

function readConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT?.trim() || "465");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) return null; // host/port have defaults; credentials don't

  const from = process.env.SMTP_FROM?.trim() || `M Rajkamal <${user}>`;
  return { host, port, user, pass, from };
}

export function isEmailConfigured(): boolean {
  return readConfig() !== null;
}

/**
 * Send the password-reset code.
 *
 * When SMTP isn't configured:
 *   • in development, the code is logged to the server console so the flow is
 *     still testable locally without a real app password;
 *   • in production, it throws — a silently-dropped OTP would look to the admin
 *     like the reset simply doesn't work.
 */
export async function sendPasswordOtpEmail(to: string, code: string): Promise<void> {
  const config = readConfig();

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      // Dev-only affordance. This branch is unreachable in production (NODE_ENV
      // is "production" there), so the code is never logged on a live server.
      console.warn(
        `\n[dev] SMTP not configured — password-reset OTP for ${to}: ${code}\n`,
      );
      return;
    }
    throw new Error("Email (SMTP) is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465, // 465 = implicit TLS; 587 = STARTTLS (secure:false)
    auth: { user: config.user, pass: config.pass },
  });

  await transporter.sendMail({
    from: config.from,
    to,
    subject: "Your M Rajkamal admin password reset code",
    text: [
      `Your password reset code is ${code}.`,
      "",
      "It expires in 10 minutes. Enter it in the admin panel to set a new password.",
      "",
      "If you didn't request this, you can ignore this email — your password stays the same.",
    ].join("\n"),
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:440px;margin:0 auto;padding:24px">
        <p style="color:#646464;font-size:13px;letter-spacing:1px;margin:0 0 8px">M RAJKAMAL · ADMIN</p>
        <h1 style="font-size:20px;margin:0 0 16px">Password reset code</h1>
        <p style="font-size:15px;color:#333">Enter this code in the admin panel to set a new password:</p>
        <p style="font-size:34px;font-weight:700;letter-spacing:8px;margin:16px 0;color:#f54a00">${code}</p>
        <p style="font-size:13px;color:#888">It expires in 10 minutes. If you didn't request this, ignore this email — your password stays the same.</p>
      </div>
    `,
  });
}
