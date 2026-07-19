import { z } from "zod";

/**
 * FormData is not JSON, and pretending otherwise is how `main` got a raw
 * SyntaxError into its error boundary. Everything here converts a real FormData
 * value into a real type, with a real error message when it can't.
 */

export const objectId = z
  .string()
  .regex(/^[0-9a-f]{24}$/i, "Not a valid id");

/**
 * An HTML checkbox submits "on" when ticked and is ABSENT when not.
 *
 * `z.coerce.boolean()` gets this dangerously wrong: it does JS truthiness, so
 * the string "false" coerces to `true`. Hence the explicit preprocess.
 */
export const checkbox = z.preprocess(
  (v) => v === "on" || v === "true" || v === true,
  z.boolean(),
);

/** An optional number field: "" means "not set", not 0. */
export const optionalNumber = z
  .union([z.literal(""), z.coerce.number().finite().min(0)])
  .transform((v) => (v === "" ? null : v));

/**
 * Repeatable lists travel through a hidden input as a JSON string.
 * A parse failure becomes a field error, not a thrown SyntaxError into the error
 * boundary (which is what `main`'s bare `JSON.parse(formData.get(...))` did).
 *
 * `bounds` is taken here rather than by chaining `.pipe(z.array(item).min(1))`
 * afterwards: once `item` has any `.default()`, its input and output types
 * differ, and a second `.pipe()` over the array then fails to typecheck.
 */
export function jsonArray<T extends z.ZodTypeAny>(
  item: T,
  bounds?: { min?: number; max?: number; minMessage?: string; maxMessage?: string },
) {
  let array = z.array(item);
  if (bounds?.min !== undefined) {
    array = array.min(bounds.min, bounds.minMessage);
  }
  if (bounds?.max !== undefined) {
    array = array.max(bounds.max, bounds.maxMessage);
  }

  return z
    .string()
    .transform((raw, ctx) => {
      try {
        const parsed: unknown = JSON.parse(raw || "[]");
        if (!Array.isArray(parsed)) {
          ctx.addIssue({ code: "custom", message: "Expected a list" });
          return z.NEVER;
        }
        return parsed;
      } catch {
        ctx.addIssue({ code: "custom", message: "Malformed list" });
        return z.NEVER;
      }
    })
    .pipe(array);
}

export const formDataToObject = (formData: FormData): Record<string, unknown> =>
  Object.fromEntries(formData.entries());
