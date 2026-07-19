import "server-only";
import mongoose, { Schema, models, type InferSchemaType, type Model } from "mongoose";

/**
 * A per-product customer review, entered by the admin.
 *
 * Distinct from `src/lib/reviews.ts`, which fetches the *store-wide* Google
 * reviews from Featurable and has nothing to do with this collection. Two
 * different concepts; keep them apart.
 *
 * `text` is PLAIN TEXT, never HTML. There is no rich-text editor on reviews and
 * nothing renders them with dangerouslySetInnerHTML, so this collection has no
 * XSS surface at all — worth preserving.
 */
const ReviewSchema = new Schema(
  {
    // No standalone index here on purpose: `product` is the PREFIX of the
    // compound index below, which already serves every `find({ product })`
    // query. A separate `product_1` index would be redundant storage that grows
    // with the review count — exactly what we don't want on a 512 MB cluster.
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },

    authorName: { type: String, required: true, trim: true, maxlength: 80 },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      validate: {
        validator: Number.isInteger,
        message: "Rating must be a whole number from 1 to 5",
      },
    },

    text: { type: String, required: true, trim: true, maxlength: 2000 },

    /** When the customer left the review — not when the admin typed it in. */
    reviewedAt: { type: Date, required: true, default: () => new Date() },

    /** Unpublishing hides it from the site AND drops it out of the rating average. */
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true },
);

ReviewSchema.index({ product: 1, isPublished: 1, reviewedAt: -1 });

export type ReviewDoc = InferSchemaType<typeof ReviewSchema>;

const Review: Model<ReviewDoc> =
  (models.Review as Model<ReviewDoc>) ?? mongoose.model<ReviewDoc>("Review", ReviewSchema);

export default Review;
