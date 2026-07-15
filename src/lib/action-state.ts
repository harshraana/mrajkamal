/**
 * The return shape of every Server Action, consumed by `useActionState`.
 *
 * `main` had no equivalent: an action threw `new Error("Unauthorized")` or a raw
 * Zod SyntaxError, which hit the global error boundary, and the form's catch
 * block just `console.error`'d and un-disabled the button — so the user clicked
 * Save, nothing happened, and nothing explained why.
 *
 * The rule here: expected failures (validation, business rules) come back as
 * DATA and render next to the offending field. Only genuine faults throw.
 */

export type FieldErrors = Record<string, string[] | undefined>;

export type ActionState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: FieldErrors };

export const idleState: ActionState = { status: "idle" };

export const errorState = (message: string, fieldErrors?: FieldErrors): ActionState => ({
  status: "error",
  message,
  fieldErrors,
});

export const successState = (message: string): ActionState => ({
  status: "success",
  message,
});

/**
 * Adapts `fieldErrors` to the shape shadcn's <FieldError> wants
 * (`Array<{ message?: string }>`), so a form can just write:
 *
 *   <FieldError errors={fieldErrors(state, "price")} />
 */
export function fieldErrors(
  state: ActionState,
  name: string,
): { message: string }[] | undefined {
  if (state.status !== "error") return undefined;
  const messages = state.fieldErrors?.[name];
  return messages?.length ? messages.map((message) => ({ message })) : undefined;
}
