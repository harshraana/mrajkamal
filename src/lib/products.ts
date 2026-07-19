import "server-only";
import { cache } from "react";
import { cacheLife, cacheTag } from "next/cache";
import { connectDB, isDbConfigured } from "@/lib/db";
import Product from "@/lib/models/Product";
import { tags } from "@/lib/cache-tags";
import { toProductCardDTO, toProductDetailDTO } from "@/lib/dto";
import { isProductCategory } from "@/lib/constants/catalog";
import type { ProductCardDTO, ProductDetailDTO } from "@/types";

/**
 * Public product reads.
 *
 * Two layers of caching, doing two different jobs:
 *
 *   'use cache'  — persists the result ACROSS requests, tagged so an admin write
 *                  can invalidate exactly this entry. Replaces `main`'s
 *                  `force-dynamic`, which sent every single visitor to Mongo.
 *
 *   React cache() — dedupes WITHIN one render pass. This is what kills `main`'s
 *                  double query per product view: `generateMetadata` and the page
 *                  body both call getProductBySlug, and without it that's two
 *                  identical round-trips for every page view.
 *
 * Every function degrades to empty rather than throwing: these run at build time
 * too, where CI may have no Mongo, and a dead database should not fail the build.
 */

const FEATURED_LIMIT = 10;

async function featured(): Promise<ProductCardDTO[]> {
  "use cache";
  cacheLife("days");
  cacheTag(tags.products, tags.featured);

  if (!isDbConfigured()) return [];
  try {
    await connectDB();
    const rows = await Product.find({ isActive: true, isFeatured: true })
      .sort({ createdAt: -1 })
      .limit(FEATURED_LIMIT)
      .lean();
    return rows.map(toProductCardDTO);
  } catch (error) {
    console.error("[getFeaturedProducts]", error);
    return [];
  }
}
export const getFeaturedProducts = cache(featured);

export type GetProductsOptions = {
  category?: string;
  page?: number;
  perPage?: number;
};

async function list(
  category: string,
  page: number,
  perPage: number,
): Promise<{ items: ProductCardDTO[]; total: number; pages: number }> {
  "use cache";
  cacheLife("days");
  // Tagged per-category as well as globally, so editing one product in one
  // category doesn't have to blow away every other category's cached page.
  cacheTag(tags.products);
  if (category) cacheTag(`products:cat:${category}`);

  const empty = { items: [], total: 0, pages: 0 };
  if (!isDbConfigured()) return empty;

  try {
    await connectDB();
    const filter: Record<string, unknown> = { isActive: true };
    if (category) filter.category = category;

    const [rows, total] = await Promise.all([
      Product.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * perPage)
        .limit(perPage)
        .lean(),
      Product.countDocuments(filter),
    ]);

    return {
      items: rows.map(toProductCardDTO),
      total,
      pages: Math.max(1, Math.ceil(total / perPage)),
    };
  } catch (error) {
    console.error("[getProducts]", error);
    return empty;
  }
}

export const getProducts = cache(
  ({ category = "", page = 1, perPage = 12 }: GetProductsOptions = {}) =>
    // Validate the category here rather than inside the cached function, so a
    // junk `?category=` from a crawler can't mint a fresh cache entry per value.
    list(isProductCategory(category) ? category : "", Math.max(1, page), perPage),
);

async function bySlug(slug: string): Promise<ProductDetailDTO | null> {
  "use cache";
  cacheLife("days");
  cacheTag(tags.products, tags.product(slug));

  if (!isDbConfigured()) return null;
  try {
    await connectDB();

    // Also match slugHistory: a renamed product must keep serving its old URL
    // (the page then 308s to the canonical one) instead of 404ing every link
    // already indexed by Google or sent to a customer over WhatsApp.
    const doc = await Product.findOne({
      $or: [{ slug }, { slugHistory: slug }],
      isActive: true,
    }).lean();

    if (!doc) return null;

    // Tag from the data we just read. This is what lets updateProduct invalidate
    // by id without having to know every historical slug the product ever had.
    cacheTag(tags.productById(String(doc._id)), tags.product(doc.slug ?? slug));

    return toProductDetailDTO(doc);
  } catch (error) {
    console.error("[getProductBySlug]", error);
    return null;
  }
}
export const getProductBySlug = cache(bySlug);

/** Every live slug, for generateStaticParams and the sitemap. */
async function allSlugs(): Promise<{ slug: string; updatedAt: string }[]> {
  "use cache";
  cacheLife("days");
  cacheTag(tags.products);

  if (!isDbConfigured()) return [];
  try {
    await connectDB();
    const rows = await Product.find({ isActive: true })
      .select("slug updatedAt")
      .sort({ createdAt: -1 })
      .lean();
    return rows.map((r) => ({
      slug: String(r.slug),
      updatedAt: (r.updatedAt instanceof Date ? r.updatedAt : new Date()).toISOString(),
    }));
  } catch (error) {
    console.error("[getAllProductSlugs]", error);
    return [];
  }
}
export const getAllProductSlugs = cache(allSlugs);

/**
 * "Similar Items" for the product detail page.
 *
 * Same category, self excluded, ranked by price proximity (a log-ratio, so
 * "within 20%" means the same thing at ₹5,000 and ₹50,000), tie-broken by review
 * count. Tops up from featured, then from anything, when a category is too thin
 * to fill the row.
 *
 * Deliberately NO Math.random(): non-deterministic values inside prerendered
 * code force the page out of the static prerender, and price proximity produces
 * better "you might also like" results than shuffling anyway.
 */
export const getSimilarProducts = cache(
  async (product: ProductCardDTO, limit = 4): Promise<ProductCardDTO[]> => {
    const { items } = await getProducts({ category: product.category, perPage: 24 });

    const seen = new Set<string>([product.id]);
    const picked: ProductCardDTO[] = [];

    const take = (candidates: ProductCardDTO[]) => {
      for (const c of candidates) {
        if (picked.length >= limit) return;
        if (seen.has(c.id)) continue;
        seen.add(c.id);
        picked.push(c);
      }
    };

    const priceRank = (a: ProductCardDTO, b: ProductCardDTO) => {
      const d = (p: ProductCardDTO) =>
        Math.abs(Math.log((p.price || 1) / (product.price || 1)));
      const diff = d(a) - d(b);
      return Math.abs(diff) > 1e-6 ? diff : b.ratingCount - a.ratingCount;
    };

    take([...items].sort(priceRank));
    if (picked.length < limit) take(await getFeaturedProducts());
    if (picked.length < limit) take((await getProducts({ perPage: 12 })).items);

    return picked.slice(0, limit);
  },
);
