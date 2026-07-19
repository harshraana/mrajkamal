import { z } from "zod";
import { SERVICE_ICON_NAME_VALUES } from "@/lib/constants/service-icons";
import { jsonArray } from "./form";

/**
 * The site editor is four tabs, four forms, four actions — and therefore four
 * schemas. Each one validates and writes only its own subtree, via a scoped
 * dotted `$set`, so saving the Footer tab physically cannot clobber a field on
 * the Home tab even though they share one document.
 */

const image = z.object({
  url: z.string().default(""),
  fileId: z.string().default(""),
  alt: z.string().max(200).default(""),
  width: z.coerce.number().int().min(0).default(0),
  height: z.coerce.number().int().min(0).default(0),
});

const link = z.object({
  label: z.string().trim().min(1, "Label is required").max(80),
  href: z.string().trim().min(1, "Link is required").max(500),
  external: z.boolean().default(false),
});

export const homeTabInput = z.object({
  heroH1: z.string().max(200).default(""),
  blocks: jsonArray(
    z.object({
      heading: z.string().max(120).default(""),
      body: z.string().max(1000).default(""),
      image: image,
    }),
  ),
  partnerHeading: z.string().max(120).default(""),
  partnerCtaLabel: z.string().max(80).default(""),
  partnerCtaHref: z.string().max(500).default(""),
  partnerLogoBadge: z.string().transform((s) => image.parse(JSON.parse(s || "{}"))),

  featuredHeading: z.string().max(120).default(""),

  materials: z.string().transform((s) =>
    z
      .object({
        eyebrow: z.string().max(60).default(""),
        heading: z.string().max(200).default(""),
        body: z.string().max(1500).default(""),
        image,
      })
      .parse(JSON.parse(s || "{}")),
  ),
  experience: z.string().transform((s) =>
    z
      .object({
        eyebrow: z.string().max(60).default(""),
        heading: z.string().max(200).default(""),
        body: z.string().max(1500).default(""),
        image,
      })
      .parse(JSON.parse(s || "{}")),
  ),

  servicesHeading: z.string().max(120).default(""),
  services: jsonArray(
    z.object({
      // enum-bound: an icon the UI can't render is unwritable.
      icon: z.enum(SERVICE_ICON_NAME_VALUES),
      title: z.string().trim().min(1, "Title is required").max(120),
      desc: z.string().max(500).default(""),
    }),
  ).pipe(z.array(z.any()).max(12, "At most 12 services")),

  clientsHeading: z.string().max(120).default(""),
  clients: jsonArray(
    z.object({
      name: z.string().trim().min(1, "Name is required").max(120),
      logo: image.optional().default({ url: "", fileId: "", alt: "", width: 0, height: 0 }),
    }),
  ),

  instagramHeading: z.string().max(120).default(""),
  instagramHandle: z.string().max(80).default(""),
  instagramUrl: z.string().max(500).default(""),
  instagramCtaLabel: z.string().max(80).default(""),

  reviewsHeading: z.string().max(120).default(""),
});

export const aboutTabInput = z.object({
  heading: z.string().max(200).default(""),
  subheading: z.string().max(200).default(""),
  bodyHtml: z.string().max(60_000).default(""),
  image: z.string().transform((s) => image.parse(JSON.parse(s || "{}"))),

  /**
   * A URL, not an HTML blob — and it must be a Google Maps *embed* URL.
   *
   * Storing raw <iframe> markup, which is what the page used to hardcode, would
   * hand the admin form an arbitrary-HTML injection point. Constraining the
   * origin means the page can safely build its own iframe around it.
   */
  mapEmbedUrl: z
    .string()
    .trim()
    .default("")
    .refine(
      (u) => u === "" || u.startsWith("https://www.google.com/maps/embed?"),
      "Must be a Google Maps embed URL (https://www.google.com/maps/embed?…)",
    ),

  storeHeading: z.string().max(120).default(""),
  addressText: z.string().max(500).default(""),
  storeHours: jsonArray(
    z.object({
      label: z.string().trim().min(1).max(40),
      value: z.string().trim().min(1).max(120),
    }),
  ),
  contactHeading: z.string().max(120).default(""),
});

export const footerTabInput = z.object({
  nav: jsonArray(link),

  quickLinksHeading: z.string().max(120).default(""),
  quickLinks: jsonArray(link),
  findUsOnHeading: z.string().max(120).default(""),
  findUsOn: jsonArray(link),

  contactHeading: z.string().max(120).default(""),
  contactPhone: z.string().max(40).default(""),
  contactEmail: z.union([z.literal(""), z.email("Not a valid email")]).default(""),

  addressHeading: z.string().max(120).default(""),
  address: z.string().max(500).default(""),
  openingHours: z.string().max(200).default(""),
  copyright: z.string().max(200).default(""),
});

export const seoTabInput = z.object({
  title: z.string().max(120).default(""),
  description: z.string().max(320).default(""),
  ogImage: z.string().transform((s) => image.parse(JSON.parse(s || "{}"))),

  businessName: z.string().max(120).default(""),
  streetAddress: z.string().max(300).default(""),
  addressLocality: z.string().max(120).default(""),
  addressRegion: z.string().max(120).default(""),
  postalCode: z.string().max(20).default(""),
  latitude: z.coerce.number().min(-90).max(90).default(0),
  longitude: z.coerce.number().min(-180).max(180).default(0),
  foundingDate: z.string().max(10).default(""),
  opensAt: z.string().max(5).default(""),
  closesAt: z.string().max(5).default(""),
  openDays: jsonArray(z.string().max(12)),
});
