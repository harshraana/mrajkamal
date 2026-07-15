import type { ProductCategory } from "@/lib/constants/catalog";
import type { ServiceIconName } from "@/lib/constants/service-icons";

/**
 * The DTOs the UI actually renders.
 *
 * These are not a nicety on top of the Mongoose documents — they are load-bearing.
 * `'use cache'` cannot serialize class instances, and a Mongoose document (and
 * every `ObjectId` inside it) is one. So `.lean()` + mapping to these plain
 * objects is mandatory, not stylistic.
 *
 * They also let us precompute anything the UI would otherwise re-derive at every
 * call site (`hasDiscount`, `categoryLabel`, formatted dates).
 */

export type ImageRefDTO = {
  /**
   * EITHER a `/public` path ("/images/furniture.png", from the seed) OR an
   * absolute ImageKit URL ("https://ik.imagekit.io/..."), once an admin has
   * replaced it. Every render site must handle both — that is what `<SmartImage>`
   * is for.
   */
  url: string;
  /** "" means a seeded /public asset that ImageKit does not own — never try to delete it. */
  fileId: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductCardDTO = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;

  price: number;
  /** The "was" price. null when there is no discount. */
  mrp: number | null;
  /** Precomputed `mrp !== null && mrp > price`. The UI never re-derives this. */
  hasDiscount: boolean;

  /** images[0], or null for a product with no images (shouldn't happen; render defensively). */
  thumbnail: ImageRefDTO | null;

  /** 0 when the product has no reviews yet. */
  ratingAvg: number;
  ratingCount: number;

  isFeatured: boolean;
  /**
   * Public readers only ever fetch active products, so this is always true on
   * the site. It's here for the admin, which edits hidden products too.
   */
  isActive: boolean;
  /** Optional override for the first line of the WhatsApp inquiry message. */
  whatsappMessage: string;
};

export type ProductDetailDTO = ProductCardDTO & {
  /** ALREADY SANITIZED server-side. Safe for dangerouslySetInnerHTML. */
  descriptionHtml: string;
  /** Plaintext projection. Use for meta descriptions and JSON-LD. */
  descriptionText: string;
  images: ImageRefDTO[];
  features: string[];
  seo: { title: string; description: string };
};

export type ReviewDTO = {
  id: string;
  authorName: string;
  /** 1–5, whole numbers. */
  rating: number;
  /** PLAIN TEXT. Render as {text} — never dangerouslySetInnerHTML. */
  text: string;
  /** Pre-formatted on the server ("May 2026") to avoid locale hydration drift. */
  date: string;
  /** ISO-8601, for the JSON-LD `datePublished` and <time dateTime>. */
  isoDate: string;
};

// ── Site content ────────────────────────────────────────────────────────────

export type LinkDTO = { label: string; href: string; external: boolean };
export type HeroBlockDTO = { heading: string; body: string; image: ImageRefDTO };
export type FeatureSectionDTO = {
  eyebrow: string;
  heading: string;
  body: string;
  image: ImageRefDTO;
};
export type ServiceDTO = { icon: ServiceIconName; title: string; desc: string };
export type ClientDTO = { name: string; logo: ImageRefDTO };
export type HoursRowDTO = { label: string; value: string };

export type SiteContentDTO = {
  nav: LinkDTO[];
  home: {
    heroH1: string;
    blocks: HeroBlockDTO[];
    partner: {
      heading: string;
      logoBadge: ImageRefDTO;
      ctaLabel: string;
      ctaHref: string;
    };
    featuredHeading: string;
    materials: FeatureSectionDTO;
    experience: FeatureSectionDTO;
    servicesHeading: string;
    services: ServiceDTO[];
    clientsHeading: string;
    clients: ClientDTO[];
    instagram: { heading: string; handle: string; url: string; ctaLabel: string };
    reviewsHeading: string;
  };
  about: {
    heading: string;
    subheading: string;
    /** ALREADY SANITIZED. */
    bodyHtml: string;
    image: ImageRefDTO;
    /** A URL, not an HTML blob. The page builds its own <iframe>. */
    mapEmbedUrl: string;
    storeHeading: string;
    addressText: string;
    storeHours: HoursRowDTO[];
    contactHeading: string;
  };
  footer: {
    quickLinksHeading: string;
    quickLinks: LinkDTO[];
    findUsOnHeading: string;
    findUsOn: LinkDTO[];
    contactHeading: string;
    contact: { phone: string; email: string };
    addressHeading: string;
    address: string;
    openingHours: string;
    copyright: string;
  };
  /** Feeds the FurnitureStore / LocalBusiness JSON-LD. */
  business: {
    name: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    foundingDate: string;
    opensAt: string;
    closesAt: string;
    /** Days omitted from this list are advertised as closed. */
    openDays: string[];
  };
  seo: { title: string; description: string; ogImage: ImageRefDTO };
};
