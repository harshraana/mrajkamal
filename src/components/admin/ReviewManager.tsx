"use client";

import { useActionState, useState, useTransition } from "react";
import { Eye, EyeOff, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { saveReview, deleteReview, setReviewPublished } from "@/app/actions/reviews";
import { fieldErrors, idleState } from "@/lib/action-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import StarRattings from "@/components/star-ratting/StarRattings";

type AdminReview = {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  isoDate: string;
  isPublished: boolean;
};

export default function ReviewManager({
  productId,
  reviews,
}: {
  productId: string;
  reviews: AdminReview[];
}) {
  const [state, formAction, pending] = useActionState(saveReview, idleState);
  const [adding, setAdding] = useState(reviews.length === 0);
  const [busy, startTransition] = useTransition();

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className='space-y-8'>
      {state.status === "success" && (
        <p className='rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm'>
          {state.message}
        </p>
      )}

      {adding ? (
        <form
          action={formAction}
          className='space-y-4 rounded-xl border border-border bg-card p-5'
        >
          <input type='hidden' name='productId' value={productId} />
          <h2 className='font-heading text-lg italic'>Add a review</h2>

          {state.status === "error" && (
            <p
              role='alert'
              className='rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive'
            >
              {state.message}
            </p>
          )}

          <div className='grid gap-4 sm:grid-cols-3'>
            <Field>
              <FieldLabel htmlFor='authorName'>Customer name</FieldLabel>
              <Input id='authorName' name='authorName' required />
              <FieldError errors={fieldErrors(state, "authorName")} />
            </Field>

            <Field>
              <FieldLabel htmlFor='rating'>Rating</FieldLabel>
              <select
                id='rating'
                name='rating'
                defaultValue='5'
                className='h-9 rounded-lg border border-input bg-transparent px-3 text-sm'
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n} star{n === 1 ? "" : "s"}
                  </option>
                ))}
              </select>
              <FieldError errors={fieldErrors(state, "rating")} />
            </Field>

            <Field>
              <FieldLabel htmlFor='reviewedAt'>Date</FieldLabel>
              <Input
                id='reviewedAt'
                name='reviewedAt'
                type='date'
                defaultValue={today}
                required
              />
              <FieldError errors={fieldErrors(state, "reviewedAt")} />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor='text'>Review</FieldLabel>
            {/* Plain text on purpose — no rich-text editor here, so reviews carry
                no XSS surface at all. */}
            <Textarea id='text' name='text' rows={3} required />
            <FieldError errors={fieldErrors(state, "text")} />
          </Field>

          <label className='flex items-center gap-2 text-sm'>
            <input type='checkbox' name='isPublished' defaultChecked className='size-4' />
            Show on the site
          </label>

          <div className='flex gap-2'>
            <Button type='submit' disabled={pending}>
              {pending ? "Saving…" : "Add review"}
            </Button>
            {reviews.length > 0 && (
              <Button type='button' variant='outline' onClick={() => setAdding(false)}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      ) : (
        <Button onClick={() => setAdding(true)} className='gap-1'>
          <Plus size={15} /> Add a review
        </Button>
      )}

      {reviews.length > 0 && (
        <ul className='space-y-3'>
          {reviews.map((r) => (
            <li
              key={r.id}
              className='flex flex-wrap items-start gap-3 rounded-xl border border-border bg-card p-4'
            >
              <div className='min-w-0 flex-1'>
                <div className='flex flex-wrap items-center gap-2'>
                  <p className='font-medium'>{r.authorName}</p>
                  <StarRattings rating={r.rating} size={13} />
                  <span className='text-xs text-muted-foreground'>
                    {r.isoDate.slice(0, 10)}
                  </span>
                  {!r.isPublished && <Badge variant='secondary'>Hidden</Badge>}
                </div>
                <p className='mt-1 text-sm text-muted-foreground'>{r.text}</p>
              </div>

              <div className='flex gap-1'>
                <Button
                  variant='ghost'
                  size='icon-sm'
                  disabled={busy}
                  aria-label={r.isPublished ? "Hide review" : "Show review"}
                  title={
                    r.isPublished
                      ? "Hide — this also removes it from the rating average"
                      : "Show on the site"
                  }
                  onClick={() =>
                    startTransition(async () => {
                      await setReviewPublished(r.id, productId, !r.isPublished);
                      toast.success(r.isPublished ? "Review hidden." : "Review shown.");
                    })
                  }
                >
                  {r.isPublished ? <Eye size={15} /> : <EyeOff size={15} />}
                </Button>

                <Button
                  variant='ghost'
                  size='icon-sm'
                  disabled={busy}
                  aria-label='Delete review'
                  onClick={() =>
                    startTransition(async () => {
                      await deleteReview(r.id, productId);
                      toast.success("Review deleted.");
                    })
                  }
                >
                  <Trash2 size={15} className='text-destructive' />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
