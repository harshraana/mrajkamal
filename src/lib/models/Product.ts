import "server-only";
import mongoose, { Schema, models, type InferSchemaType, type Model } from "mongoose";
import { PRODUCT_CATEGORY_VALUES } from "@/lib/constants/catalog";

/**
 * Every stored image carries its ImageKit `fileId`.
 *
 * This is the fix for the worst data bug on `main`. There, `images` was a bare
 * `string[]` of URLs, and the admin form reconstructed entries as
 * `{ url, fileId: url }` — a *fake* fileId. So removing an image sent the URL to
 * ImageKit's delete endpoint, which silently failed in a background catch, and
 * **every removed image was orphaned in ImageKit forever**. Deleting a product
 * leaked its whole image set the same way.
 *
 * `fileId: ""` is meaningful: it marks a seeded `/public` asset that ImageKit
 * does not own, so the delete path knows to skip it rather than error.
 */
export const ImageRefSchema = new Schema(
  {
    /**
     * NOT `required`. An empty url is a legitimate value meaning "no image here"
     * — most of the client logos have none, and an admin may clear the About
     * photo. `toImageDTO()` maps an empty url to `null`, so the UI sees an
     * absent image rather than a broken <img>.
     *
     * Product images are guarded where it actually matters instead: the array
     * validator below requires 1–10, and the Zod schema requires each one to be
     * a real URL.
     */
    url: { type: String, default: "" },
    fileId: { type: String, default: "" },
    alt: { type: String, default: "" },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
  },
  { _id: false },
);

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 160 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },

    /**
     * Slugs this product used to live at. A rename would otherwise 404 every
     * indexed URL and every WhatsApp link already sent to a customer; instead
     * the PDP looks up slugHistory and 308s to the canonical URL.
     */
    slugHistory: { type: [String], default: [] },

    /** TinyMCE output — ALREADY SANITIZED on write. The DB never holds raw HTML. */
    descriptionHtml: { type: String, default: "", maxlength: 60_000 },
    /** Plaintext projection of the above. Powers admin search and meta descriptions. */
    descriptionText: { type: String, default: "", maxlength: 20_000 },

    price: { type: Number, required: true, min: 0 },
    /** Optional "was" price. The strikethrough renders only when mrp > price. */
    mrp: { type: Number, default: null, min: 0 },

    category: { type: String, enum: PRODUCT_CATEGORY_VALUES, required: true },

    /**
     * images[0] IS the thumbnail — derived, never stored twice. `main` kept a
     * separate `thumbnailImage` field alongside `images` and the two drifted.
     */
    images: {
      type: [ImageRefSchema],
      default: [],
      validate: {
        validator: (arr: { url?: string }[]) =>
          arr.length >= 1 && arr.length <= 10 && arr.every((i) => Boolean(i?.url)),
        message: "A product needs between 1 and 10 images, each with a URL",
      },
    },

    features: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },

    /** Optional override for the opening line of the WhatsApp inquiry message. */
    whatsappMessage: { type: String, default: "", maxlength: 500 },

    /** Denormalised from Review. Recomputed on every review create/update/delete. */
    ratingAvg: { type: Number, default: 0, min: 0, max: 5 },
    ratingCount: { type: Number, default: 0, min: 0 },

    seo: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
    },
  },
  { timestamps: true },
);

// `unique: true` on slug already creates the index — declaring it again here
// (as `main` did) makes Mongoose warn about a duplicate index.
ProductSchema.index({ isActive: 1, isFeatured: 1, createdAt: -1 }); // featured rail
ProductSchema.index({ isActive: 1, category: 1, createdAt: -1 }); // catalogue + filter
ProductSchema.index({ slugHistory: 1 }); // old-URL → canonical lookup
ProductSchema.index({ name: "text", descriptionText: "text" }); // admin search

export type ProductDoc = InferSchemaType<typeof ProductSchema>;

const Product: Model<ProductDoc> =
  (models.Product as Model<ProductDoc>) ?? mongoose.model<ProductDoc>("Product", ProductSchema);

export default Product;
