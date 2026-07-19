import "server-only";
import { categoryLabel, type ProductCategory } from "@/lib/constants/catalog";
import { sanitizeRichText } from "@/lib/sanitize";
import type { ImageRefDTO, ProductCardDTO, ProductDetailDTO, ReviewDTO } from "@/types";

/**
 * Mongoose document → plain object.
 *
 * Mandatory, not cosmetic: `'use cache'` refuses to serialize class instances,
 * and `ObjectId` is one. Every cached read must pass through here or the cache
 * entry blows up at runtime.
 */

/**
 * What `.lean()` actually hands back.
 *
 * Every field is optional AND nullable on purpose. Mongoose's inferred lean type
 * emits `| null` for nested paths with defaults (`seo`, `mrp`), and a document
 * written before a schema field existed simply won't have it. Being permissive
 * here — and defaulting with `??`, which catches null as well as undefined —
 * keeps a half-migrated document from crashing a page render.
 */
type LeanImage = {
  url?: string | null;
  fileId?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
};

type LeanProduct = {
  _id: unknown;
  name?: string | null;
  slug?: string | null;
  category?: string | null;
  price?: number | null;
  mrp?: number | null;
  images?: LeanImage[] | null;
  features?: string[] | null;
  isFeatured?: boolean | null;
  isActive?: boolean | null;
  whatsappMessage?: string | null;
  ratingAvg?: number | null;
  ratingCount?: number | null;
  descriptionHtml?: string | null;
  descriptionText?: string | null;
  seo?: { title?: string | null; description?: string | null } | null;
};

type LeanReview = {
  _id: unknown;
  authorName?: string | null;
  rating?: number | null;
  text?: string | null;
  reviewedAt?: Date | string | null;
};

export function toImageDTO(img: LeanImage | null | undefined): ImageRefDTO | null {
  if (!img?.url) return null;
  return {
    url: img.url,
    fileId: img.fileId ?? "",
    alt: img.alt ?? "",
    width: img.width ?? 0,
    height: img.height ?? 0,
  };
}

export function toProductCardDTO(p: LeanProduct): ProductCardDTO {
  const price = p.price ?? 0;
  const mrp = typeof p.mrp === "number" ? p.mrp : null;

  return {
    id: String(p._id),
    name: p.name ?? "",
    slug: p.slug ?? "",
    category: (p.category ?? "other") as ProductCategory,
    categoryLabel: categoryLabel(p.category ?? "other"),
    price,
    mrp,
    // Precomputed once here so no call site can get the comparison wrong, and
    // so an MRP that is <= the price simply never renders a strikethrough.
    hasDiscount: mrp !== null && mrp > price,
    thumbnail: toImageDTO(p.images?.[0]),
    ratingAvg: p.ratingAvg ?? 0,
    ratingCount: p.ratingCount ?? 0,
    isFeatured: Boolean(p.isFeatured),
    isActive: p.isActive ?? true,
    whatsappMessage: p.whatsappMessage ?? "",
  };
}

export function toProductDetailDTO(p: LeanProduct): ProductDetailDTO {
  return {
    ...toProductCardDTO(p),
    // Sanitized on write already. Sanitized AGAIN on read as defence-in-depth:
    // it costs nothing (this runs once per cache entry, not per request) and it
    // covers anything written by the seed script, by a migration, or by someone
    // poking the collection directly with mongosh.
    descriptionHtml: sanitizeRichText(p.descriptionHtml ?? ""),
    descriptionText: p.descriptionText ?? "",
    images: (p.images ?? []).map(toImageDTO).filter((i): i is ImageRefDTO => i !== null),
    features: (p.features ?? []).filter(Boolean),
    seo: {
      title: p.seo?.title ?? "",
      description: p.seo?.description ?? "",
    },
  };
}

export function toReviewDTO(r: LeanReview): ReviewDTO {
  const when = r.reviewedAt ? new Date(r.reviewedAt) : null;
  const valid = when && !Number.isNaN(when.getTime());

  return {
    id: String(r._id),
    authorName: r.authorName ?? "",
    rating: r.rating ?? 5,
    // Plain text by construction — no sanitizing needed, and it must never be
    // rendered as HTML.
    text: r.text ?? "",
    // Formatted on the SERVER. Formatting on the client would render a different
    // string under a different locale and cause a hydration mismatch.
    date: valid
      ? when.toLocaleDateString("en-US", { month: "short", year: "numeric" })
      : "",
    isoDate: valid ? when.toISOString() : "",
  };
}
