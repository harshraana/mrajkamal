import { z } from "zod";
import { PRODUCT_CATEGORY_VALUES } from "@/lib/constants/catalog";
import { checkbox, jsonArray, objectId, optionalNumber } from "./form";

/**
 * ONE schema, used by create AND update.
 *
 * On `main` these were separate code paths and `updateProduct` had no validation
 * at all — combined with `findByIdAndUpdate` running without `runValidators`,
 * that meant a negative price and a bogus category were both writable through
 * the edit form. Sharing the schema makes that class of drift impossible.
 */

export const imageRef = z.object({
  url: z
    .string()
    .min(1)
    .refine(
      (u) => u.startsWith("https://ik.imagekit.io/") || u.startsWith("/"),
      "Images must come from ImageKit or /public",
    ),
  fileId: z.string().default(""),
  alt: z.string().max(200).default(""),
  width: z.coerce.number().int().min(0).default(0),
  height: z.coerce.number().int().min(0).default(0),
});

export const productInput = z
  .object({
    // Minted server-side BEFORE the form renders, so uploads can go straight
    // into /mrajkamal/products/<id>/ without a later move.
    id: objectId,

    name: z.string().trim().min(2, "Name is too short").max(160),
    category: z.enum(PRODUCT_CATEGORY_VALUES, { error: "Choose a category" }),

    price: z.coerce
      .number({ error: "Price must be a number" })
      .finite()
      .min(0, "Price cannot be negative"),
    mrp: optionalNumber,

    descriptionHtml: z.string().max(60_000).default(""),

    features: jsonArray(z.string().trim().min(1).max(200), {
      max: 20,
      maxMessage: "At most 20 features",
    }),

    images: jsonArray(imageRef, {
      min: 1,
      minMessage: "Add at least one image",
      max: 10,
      maxMessage: "At most 10 images",
    }),

    isFeatured: checkbox,
    isActive: checkbox,
    whatsappMessage: z.string().max(500).default(""),

    seoTitle: z.string().max(120).default(""),
    seoDescription: z.string().max(320).default(""),
  })
  .refine((d) => d.mrp === null || d.mrp > d.price, {
    path: ["mrp"],
    // An MRP at or below the price would render a strikethrough claiming a
    // discount that doesn't exist — which is a pricing lie, not a UI nit.
    error: "M.R.P. must be higher than the selling price",
  });

export type ProductInput = z.infer<typeof productInput>;

export const reviewInput = z.object({
  id: objectId.optional(),
  productId: objectId,
  authorName: z.string().trim().min(2, "Name is too short").max(80),
  rating: z.coerce
    .number()
    .int("Rating must be a whole number")
    .min(1, "Minimum 1 star")
    .max(5, "Maximum 5 stars"),
  // Plain text. No rich-text editor on reviews, so no XSS surface at all.
  text: z.string().trim().min(4, "Review is too short").max(2000),
  reviewedAt: z.coerce.date(),
  isPublished: checkbox,
});

export type ReviewInput = z.infer<typeof reviewInput>;
