"use client";

import { useActionState } from "react";
import { adminSignIn } from "@/app/actions/auth";
import { idleState } from "@/lib/action-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

export default function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const [state, formAction, pending] = useActionState(adminSignIn, idleState);

  return (
    <form action={formAction} className='space-y-5'>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />

      {state.status === "error" && (
        <p
          role='alert'
          className='rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive'
        >
          {state.message}
        </p>
      )}

      <Field>
        <FieldLabel htmlFor='email'>Email</FieldLabel>
        <Input
          id='email'
          name='email'
          type='email'
          autoComplete='username'
          required
          autoFocus
        />
      </Field>

      <Field>
        <FieldLabel htmlFor='password'>Password</FieldLabel>
        <Input
          id='password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
        />
      </Field>

      <Button type='submit' size='lg' className='w-full' disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
