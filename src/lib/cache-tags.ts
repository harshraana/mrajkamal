/**
 * Cache-tag vocabulary.
 *
 * Every cached read tags itself from here, and every mutation invalidates from
 * here — so a typo can't silently produce a cache entry nothing will ever
 * invalidate.
 *
 * Invalidate with `updateTag()` from Server Actions (immediate expiry →
 * read-your-own-writes, so the admin sees their save on the very next load) and
 * `revalidateTag(tag, profile)` from Route Handlers, where `updateTag` throws.
 *
 * NOT `revalidatePath` — `main` called `revalidatePath("/")` on every write,
 * which discards unrelated cached data across the whole site.
 */
export const tags = {
  /** The CMS singleton. Every public page depends on it. */
  siteContent: "site-content",

  /** Any product list view. */
  products: "products",

  /** The home-page featured rail specifically. */
  featured: "products:featured",

  /** One product, by its current slug. */
  product: (slug: string) => `product:${slug}`,

  /**
   * One product, by id.
   *
   * Needed as well as the slug tag because a rename changes the slug: an update
   * has to invalidate the entry regardless of which slug it was cached under.
   */
  productById: (id: string) => `product-id:${id}`,

  /** The reviews of one product. Also affects that product's rating average. */
  reviews: (productId: string) => `reviews:${productId}`,
} as const;
