import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";
import { PRODUCT_CATEGORIES } from "@/lib/constants/catalog";
import { SITE_URL } from "@/lib/site-url";

/**
 * The site had no sitemap at all.
 *
 * Every product gets an entry with its real `lastModified`, so Google recrawls a
 * product when it actually changes rather than on a guess. Category views are
 * included too — they're legitimate landing pages for searches like
 * "home lockers Dadar".
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProductSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.map((c) => ({
    url: `${SITE_URL}/products?category=${c.value}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map(({ slug, updatedAt }) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: new Date(updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
