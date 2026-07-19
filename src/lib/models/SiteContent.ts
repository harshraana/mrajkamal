import "server-only";
import mongoose, { Schema, models, type InferSchemaType, type Model } from "mongoose";
import { ImageRefSchema } from "./Product";
import { SERVICE_ICON_NAME_VALUES } from "@/lib/constants/service-icons";

/**
 * Every piece of copy and imagery on the public site, in one document.
 *
 * ONE document rather than a set of models, because the whole thing is read as a
 * unit on every page render (one findOne beats five) and edited by one person.
 *
 * The isolation you'd normally get from separate models comes from the *write*
 * side instead: the editor is four tabs with four separate server actions, each
 * doing a scoped dotted `$set` (`{"footer.copyright": ...}`). So saving the
 * Footer tab physically cannot clobber a field on the Home tab, even though
 * they live in the same document.
 */

const nested = { _id: false } as const;

const LinkSchema = new Schema(
  {
    label: { type: String, required: true },
    href: { type: String, required: true },
    external: { type: Boolean, default: false },
  },
  nested,
);

/** The two side-by-side hero blocks: "Furniture" and "Home Lockers". */
const HeroBlockSchema = new Schema(
  {
    heading: { type: String, default: "" },
    body: { type: String, default: "" },
    image: { type: ImageRefSchema, default: () => ({}) },
  },
  nested,
);

/** The mirrored media+text sections: "Materials" and "Experiences". */
const FeatureSectionSchema = new Schema(
  {
    eyebrow: { type: String, default: "" },
    heading: { type: String, default: "" },
    body: { type: String, default: "" },
    image: { type: ImageRefSchema, default: () => ({}) },
  },
  nested,
);

const ServiceSchema = new Schema(
  {
    // enum-constrained, so an icon name the UI can't render is unwritable.
    icon: { type: String, enum: SERVICE_ICON_NAME_VALUES, required: true },
    title: { type: String, required: true },
    desc: { type: String, default: "" },
  },
  nested,
);

const ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: ImageRefSchema, default: () => ({}) },
  },
  nested,
);

const HoursRowSchema = new Schema(
  {
    label: { type: String, required: true }, // "Opens:" / "Closed:"
    value: { type: String, required: true }, // "10am - 8pm (Tuesday to Sunday)"
  },
  nested,
);

const SiteContentSchema = new Schema(
  {
    /**
     * Singleton guard. `unique` means a second document is a write error rather
     * than a silently-ignored duplicate; `immutable` means it can't be renamed
     * into existence as a second one.
     */
    key: { type: String, default: "singleton", unique: true, immutable: true },

    /** Header AND MobileMenu both read this — they duplicate the array today. */
    nav: { type: [LinkSchema], default: [] },

    home: {
      heroH1: { type: String, default: "" },
      blocks: { type: [HeroBlockSchema], default: [] },

      partner: {
        heading: { type: String, default: "" },
        logoBadge: { type: ImageRefSchema, default: () => ({}) },
        ctaLabel: { type: String, default: "" },
        ctaHref: { type: String, default: "" },
      },

      featuredHeading: { type: String, default: "" },

      materials: { type: FeatureSectionSchema, default: () => ({}) },
      experience: { type: FeatureSectionSchema, default: () => ({}) },

      servicesHeading: { type: String, default: "" },
      services: { type: [ServiceSchema], default: [] },

      clientsHeading: { type: String, default: "" },
      clients: { type: [ClientSchema], default: [] },

      instagram: {
        heading: { type: String, default: "" },
        handle: { type: String, default: "" },
        url: { type: String, default: "" },
        ctaLabel: { type: String, default: "" },
      },

      reviewsHeading: { type: String, default: "" },
    },

    about: {
      heading: { type: String, default: "" },
      subheading: { type: String, default: "" },
      /** TinyMCE — sanitized on write, like Product.descriptionHtml. */
      bodyHtml: { type: String, default: "", maxlength: 60_000 },
      image: { type: ImageRefSchema, default: () => ({}) },
      /**
       * A URL, NOT an HTML blob. The page builds its own <iframe> around it and
       * Zod enforces the google.com/maps/embed origin. Storing raw iframe HTML
       * would hand the admin form an arbitrary-HTML injection point.
       */
      mapEmbedUrl: { type: String, default: "" },
      storeHeading: { type: String, default: "" },
      addressText: { type: String, default: "" },
      storeHours: { type: [HoursRowSchema], default: [] },
      contactHeading: { type: String, default: "" },
    },

    footer: {
      quickLinksHeading: { type: String, default: "" },
      quickLinks: { type: [LinkSchema], default: [] },
      findUsOnHeading: { type: String, default: "" },
      findUsOn: { type: [LinkSchema], default: [] },
      contactHeading: { type: String, default: "" },
      contact: {
        phone: { type: String, default: "" },
        email: { type: String, default: "" },
      },
      addressHeading: { type: String, default: "" },
      address: { type: String, default: "" },
      openingHours: { type: String, default: "" },
      copyright: { type: String, default: "" },
    },

    /** Business facts that feed the LocalBusiness/FurnitureStore JSON-LD. */
    business: {
      name: { type: String, default: "" },
      streetAddress: { type: String, default: "" },
      addressLocality: { type: String, default: "" },
      addressRegion: { type: String, default: "" },
      postalCode: { type: String, default: "" },
      latitude: { type: Number, default: 0 },
      longitude: { type: Number, default: 0 },
      foundingDate: { type: String, default: "" },
      opensAt: { type: String, default: "" }, // "10:00" — ISO-8601 time for schema.org
      closesAt: { type: String, default: "" }, // "20:00"
      openDays: { type: [String], default: [] }, // omitted days ⇒ closed
    },

    seo: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      ogImage: { type: ImageRefSchema, default: () => ({}) },
    },
  },
  { timestamps: true, minimize: false },
);

export type SiteContentDoc = InferSchemaType<typeof SiteContentSchema>;

const SiteContent: Model<SiteContentDoc> =
  (models.SiteContent as Model<SiteContentDoc>) ??
  mongoose.model<SiteContentDoc>("SiteContent", SiteContentSchema);

export default SiteContent;
