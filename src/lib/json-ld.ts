import { SITE_URL, absoluteUrl } from "@/lib/site-url";
import { toE164 } from "@/lib/contact";
import type { ProductDetailDTO, ReviewDTO, SiteContentDTO } from "@/types";

/**
 * Structured data — what actually gets M Rajkamal into local search results and
 * puts star ratings on product listings.
 */

/** Stable node id, so an Offer can point its `seller` at the store. */
const STORE_ID = `${SITE_URL}/#store`;

/**
 * FurnitureStore — a schema.org subtype of Store → LocalBusiness.
 *
 * Rendered in the `(main)` layout, NOT the root layout: the root also wraps
 * /admin, and the admin panel has no business claiming to be a shopfront.
 *
 * NOTE: deliberately NO `aggregateRating` on the store node. The store's rating
 * comes from its Google Business Profile (surfaced here via Featurable). Marking
 * up *Google's own* ratings as first-party `aggregateRating` is self-serving
 * markup — Google ignores it at best and issues a manual action at worst. It
 * generates the store's SERP stars from GBP directly. `aggregateRating` belongs
 * on Product, where the reviews genuinely are first-party.
 */
export function storeJsonLd(content: SiteContentDTO) {
  const b = content.business;
  const social = content.footer.findUsOn.map((l) => l.href).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "@id": STORE_ID,
    name: b.name || "M Rajkamal Furniture",
    url: SITE_URL,
    description: content.seo.description,
    ...(content.seo.ogImage?.url ? { image: [absoluteUrl(content.seo.ogImage.url)] } : {}),
    ...(b.foundingDate ? { foundingDate: b.foundingDate } : {}),
    ...(content.footer.contact.phone
      ? { telephone: toE164(content.footer.contact.phone) }
      : {}),
    ...(content.footer.contact.email ? { email: content.footer.contact.email } : {}),

    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      postalCode: b.postalCode,
      addressCountry: "IN",
    },

    ...(b.latitude && b.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: b.latitude,
            longitude: b.longitude,
          },
        }
      : {}),

    ...(b.openDays.length && b.opensAt && b.closesAt
      ? {
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              // Days omitted from openDays are simply absent, which schema.org
              // reads as closed. Monday is intentionally not in the list.
              dayOfWeek: b.openDays,
              opens: b.opensAt,
              closes: b.closesAt,
            },
          ],
        }
      : {}),

    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, EMI",
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "State", name: "Maharashtra" },
    ],
    ...(social.length ? { sameAs: social } : {}),
  };
}

/**
 * Product + Offer + AggregateRating + Review.
 *
 * This is what produces the star rating on a product in Google's results — and
 * it is legitimate here because the reviews are first-party and are rendered on
 * the page itself.
 *
 * Two rules that are easy to get wrong:
 *   • `aggregateRating` must be OMITTED ENTIRELY when there are no reviews.
 *     Emitting `reviewCount: 0` is an error in Search Console, not a zero.
 *   • The `review` array must be the same reviews a visitor can actually SEE on
 *     the page. Marking up reviews you don't display is a policy violation.
 */
export function productJsonLd(product: ProductDetailDTO, reviews: ReviewDTO[]) {
  const url = `${SITE_URL}/products/${product.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    // Required by Google, and must be ABSOLUTE.
    image: product.images.map((i) => absoluteUrl(i.url)),
    // Plaintext — never descriptionHtml.
    description: product.descriptionText.slice(0, 5000),
    sku: product.id,
    category: product.categoryLabel,
    brand: { "@type": "Brand", name: "Godrej Interio" },

    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      // A NUMBER. No "₹", no thousands separators — Google rejects those.
      price: product.price,
      // Honest: there is no cart and no checkout. Claiming InStock would be a
      // promise the site can't keep.
      availability: "https://schema.org/InStoreOnly",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": STORE_ID },
    },

    ...(product.ratingCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: product.ratingAvg,
            reviewCount: product.ratingCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),

    ...(reviews.length > 0
      ? {
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.authorName },
            datePublished: r.isoDate,
            reviewBody: r.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        }
      : {}),
  };
}

/**
 * BreadcrumbList.
 *
 * Google requires the markup to reflect breadcrumbs that are actually VISIBLE on
 * the page, so this is always emitted alongside a real <nav aria-label="Breadcrumb">.
 * The final crumb carries a name but no `item` — it's the current page.
 */
export function breadcrumbJsonLd(trail: { name: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}

/** ItemList for the catalogue — the URL-only "summary page" form. */
export function itemListJsonLd(slugs: string[], startPosition = 1) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: slugs.map((slug, i) => ({
      "@type": "ListItem",
      position: startPosition + i,
      url: `${SITE_URL}/products/${slug}`,
    })),
  };
}
