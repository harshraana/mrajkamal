"use server";

import { z } from "zod";
import { updateTag } from "next/cache";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Review from "@/lib/models/Review";
import { requireAdmin } from "@/lib/auth/dal";
import { recomputeProductRating } from "@/lib/product-reviews";
import { reviewInput } from "@/lib/validation/product";
import { formDataToObject } from "@/lib/validation/form";
import { tags } from "@/lib/cache-tags";
import { errorState, successState, type ActionState } from "@/lib/action-state";

/**
 * Every review mutation must:
 *   1. recompute the product's rating aggregate, and
 *   2. invalidate the product itself — not just the reviews.
 *
 * (2) is easy to forget. `ratingAvg` is denormalised onto the Product and shows
 * up on the product CARD and in the AggregateRating JSON-LD, so a review change
 * that only invalidated the reviews tag would leave stale stars on the catalogue
 * and hand Google a rating that disagrees with the page.
 */
async function afterReviewChange(productId: string) {
  await recomputeProductRating(productId);

  const product = await Product.findById(productId).select("slug").lean();

  updateTag(tags.reviews(productId));
  updateTag(tags.productById(productId));
  updateTag(tags.products);
  updateTag(tags.featured);
  if (product?.slug) updateTag(tags.product(String(product.slug)));
}

export async function saveReview(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = reviewInput.safeParse(formDataToObject(formData));
  if (!parsed.success) {
    return errorState(
      "Please fix the highlighted fields.",
      z.flattenError(parsed.error).fieldErrors,
    );
  }
  const d = parsed.data;

  await connectDB();

  const fields = {
    product: d.productId,
    authorName: d.authorName,
    rating: d.rating,
    text: d.text, // plain text, never HTML
    reviewedAt: d.reviewedAt,
    isPublished: d.isPublished,
  };

  try {
    if (d.id) {
      await Review.findByIdAndUpdate(d.id, { $set: fields }, { runValidators: true });
    } else {
      await Review.create(fields);
    }
  } catch (error) {
    console.error("[saveReview]", error);
    return errorState("Could not save the review.");
  }

  await afterReviewChange(d.productId);
  return successState(d.id ? "Review updated." : "Review added.");
}

export async function deleteReview(id: string, productId: string): Promise<void> {
  await requireAdmin();
  await connectDB();

  await Review.findByIdAndDelete(id);
  await afterReviewChange(productId);
}

export async function setReviewPublished(
  id: string,
  productId: string,
  isPublished: boolean,
): Promise<void> {
  await requireAdmin();
  await connectDB();

  await Review.findByIdAndUpdate(id, { $set: { isPublished } }, { runValidators: true });
  // Unpublishing must also drop the review out of the average — otherwise the
  // rating on screen stops matching the reviews on screen.
  await afterReviewChange(productId);
}
