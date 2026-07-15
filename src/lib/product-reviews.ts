import "server-only";
import { cache } from "react";
import { cacheLife, cacheTag } from "next/cache";
import { Types } from "mongoose";
import { connectDB, isDbConfigured } from "@/lib/db";
import Product from "@/lib/models/Product";
import Review from "@/lib/models/Review";
import { tags } from "@/lib/cache-tags";
import { toReviewDTO } from "@/lib/dto";
import type { ReviewDTO } from "@/types";

/**
 * Admin-managed, per-product customer reviews.
 *
 * NOT to be confused with `src/lib/reviews.ts`, which fetches the store-wide
 * Google reviews from Featurable and feeds <CustomerReviews>. Different source,
 * different collection, different purpose — the similar filenames are the only
 * thing they share.
 */

async function forProduct(productId: string): Promise<ReviewDTO[]> {
  "use cache";
  cacheLife("days");
  cacheTag(tags.reviews(productId));

  if (!isDbConfigured() || !Types.ObjectId.isValid(productId)) return [];
  try {
    await connectDB();
    const rows = await Review.find({ product: productId, isPublished: true })
      .sort({ reviewedAt: -1 })
      .lean();
    return rows.map(toReviewDTO);
  } catch (error) {
    console.error("[getProductReviews]", error);
    return [];
  }
}
export const getProductReviews = cache(forProduct);

/**
 * Recompute a product's denormalised rating from its published reviews.
 *
 * Must be called at the end of EVERY review mutation — create, update, delete,
 * and publish-toggle. `ratingAvg`/`ratingCount` are what the product card, the
 * star rating, and the `AggregateRating` JSON-LD all read; if this drifts, Google
 * gets shown a rating that doesn't match the reviews visible on the page, which
 * is exactly the kind of mismatch that costs you the rich result.
 *
 * Unpublished reviews are excluded on purpose: hiding a review must also remove
 * its influence on the average, or the number stops matching what's on screen.
 */
export async function recomputeProductRating(productId: string): Promise<void> {
  await connectDB();

  const [agg] = await Review.aggregate<{ avg: number; count: number }>([
    { $match: { product: new Types.ObjectId(productId), isPublished: true } },
    { $group: { _id: null, avg: { $avg: "$rating" }, count: { $sum: 1 } } },
  ]);

  await Product.updateOne(
    { _id: productId },
    {
      $set: {
        // One decimal place: schema.org wants a number, and "4.333333" in a
        // ratingValue reads as noise.
        ratingAvg: agg ? Math.round(agg.avg * 10) / 10 : 0,
        ratingCount: agg?.count ?? 0,
      },
    },
  );
}
