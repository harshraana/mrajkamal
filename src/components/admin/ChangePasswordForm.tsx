"use client";

import { useActionState, useState, useTransition } from "react";
import { MailCheck } from "lucide-react";
import { toast } from "sonner";
import { requestPasswordOtp, changePassword } from "@/app/actions/account";
import { fieldErrors, idleState } from "@/lib/action-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel, FieldDescription } from "@/components/ui/field";

/**
 * Two-step change-password: send a code to the admin email, then enter the code
 * plus a new password. Both steps call server actions behind `requireAdmin()`.
 */
export default function ChangePasswordForm({ emailConfigured }: { emailConfigured: boolean }) {
  const [state, formAction, pending] = useActionState(changePassword, idleState);
  const [codeSent, setCodeSent] = useState(false);
  const [requesting, startRequest] = useTransition();

  function sendCode() {
    startRequest(async () => {
      const result = await requestPasswordOtp();
      if (result.status === "success") {
        setCodeSent(true);
        toast.success(result.message);
      } else if (result.status === "error") {
        toast.error(result.message);
      }
    });
  }

  return (
    <div className='max-w-[440px] space-y-6'>
      {!emailConfigured && (
        <p className='rounded-lg border border-secondary bg-secondary/20 px-3 py-2 text-sm'>
          Email isn&apos;t configured yet. In development the code is printed to the
          server console; in production you&apos;ll need to set the SMTP variables
          before a code can be emailed.
        </p>
      )}

      <div className='rounded-xl border border-border bg-card p-5'>
        <h2 className='font-heading text-lg italic'>1 · Get a code</h2>
        <p className='mt-1 mb-4 text-sm text-muted-foreground'>
          We&apos;ll email a 6-digit code to your admin address. It expires in 10
          minutes.
        </p>
        <Button type='button' variant='outline' onClick={sendCode} disabled={requesting}>
          {requesting ? "Sending…" : codeSent ? "Resend code" : "Send code"}
        </Button>
        {codeSent && (
          <p className='mt-3 flex items-center gap-1.5 text-sm text-primary'>
            <MailCheck size={15} /> Code sent — check your inbox.
          </p>
        )}
      </div>

      <form action={formAction} className='rounded-xl border border-border bg-card p-5'>
        <h2 className='font-heading text-lg italic'>2 · Set a new password</h2>

        {state.status === "error" && (
          <p
            role='alert'
            className='mt-3 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive'
          >
            {state.message}
          </p>
        )}
        {state.status === "success" && (
          <p className='mt-3 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm'>
            {state.message}
          </p>
        )}

        <div className='mt-4 space-y-4'>
          <Field>
            <FieldLabel htmlFor='otp'>Code from email</FieldLabel>
            <Input
              id='otp'
              name='otp'
              inputMode='numeric'
              autoComplete='one-time-code'
              maxLength={6}
              placeholder='123456'
            />
            <FieldError errors={fieldErrors(state, "otp")} />
          </Field>

          <Field>
            <FieldLabel htmlFor='newPassword'>New password</FieldLabel>
            <Input
              id='newPassword'
              name='newPassword'
              type='password'
              autoComplete='new-password'
            />
            <FieldDescription>At least 8 characters.</FieldDescription>
            <FieldError errors={fieldErrors(state, "newPassword")} />
          </Field>

          <Field>
            <FieldLabel htmlFor='confirmPassword'>Confirm new password</FieldLabel>
            <Input
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              autoComplete='new-password'
            />
            <FieldError errors={fieldErrors(state, "confirmPassword")} />
          </Field>
        </div>

        <Button type='submit' className='mt-5' disabled={pending}>
          {pending ? "Updating…" : "Update password"}
        </Button>
      </form>
    </div>
  );
}
