import type { SiteContentDTO } from "@/types";

/**
 * The site's copy and imagery, transcribed from the JSX it used to be hardcoded
 * in, so that the moment the CMS lands the public site renders IDENTICALLY.
 *
 * Seeded with `$setOnInsert`, so re-running the seed can never clobber an admin's
 * edits. After the first insert the database — not this file — is the truth.
 *
 * Three long-standing content bugs are corrected here rather than faithfully
 * preserved:
 *   • "Interio by Godreg" → "Godrej" (misspelled brand name, twice, user-facing)
 *   • tel:+91 983 353 3076 → tel:+919833533076 (spaces are invalid in a tel: URI
 *     per RFC 3966; the About page already had it right, the footer did not)
 *   • Footer "Quick links" all pointed at "/" — they now point at the catalogue
 *     categories they are named after, which is what they were always for.
 */

const img = (url: string, alt: string) => ({
  url,
  fileId: "", // "" = a /public asset ImageKit doesn't own. Never try to delete it.
  alt,
  width: 0,
  height: 0,
});

const PHONE = "+919833533076";
const PHONE_DISPLAY = "+91 983 353 3076";
const EMAIL = "mrajkamalfurniture@gmail.com";
const ADDRESS =
  "7, Haji Ebrahim Patel Trust Building Junction of Gokhale Road, and, Ranade Rd, Dadar West, Dadar, Mumbai, Maharashtra 400028";
const INSTAGRAM = "https://www.instagram.com/mrajkamalfurniture/";
const INTERIO =
  "https://interio.com/furniture-stores/Maharashtra/Mumbai/Near-Sena-Bhawan/WDX004801";

export const DEFAULT_SITE_CONTENT: SiteContentDTO = {
  nav: [
    { label: "Home", href: "/", external: false },
    { label: "Products", href: "/products", external: false },
    { label: "About", href: "/about", external: false },
  ],

  home: {
    heroH1: "M Rajkamal: Your Destination for Fine Living Since 1962.",

    blocks: [
      {
        heading: "Furniture",
        body: "Experience the art of living with our exquisite furniture collections. From timeless classics to modern designs, we blend quality, comfort, and traditional craftsmanship to elevate your spaces.",
        image: img("/images/furniture.png", "Godrej Interio furniture display at M Rajkamal"),
      },
      {
        heading: "Home Lockers",
        body: "Secure your most valued possessions in style. Our premium range of home lockers features intelligent locking systems and sophisticated design for peace of mind.",
        image: img("/images/lockers.png", "Godrej home locker and safe"),
      },
    ],

    partner: {
      heading: "Authorised Partner of",
      logoBadge: img("/images/authorised-partner.png", "Godrej Interio authorised partner badge"),
      ctaLabel: "Interio by Godrej",
      ctaHref: INTERIO,
    },

    featuredHeading: "Featured Products",

    materials: {
      eyebrow: "Materials",
      heading: "Selecting the finest materials for your furniture",
      body: "We meticulously source high-grade, sustainable timber, premium upholstery fabrics, durable metals, and non-toxic finishes from across the globe. Our dedication to material quality ensures long-lasting durability and absolute safety for your family.",
      image: img("/images/home-1.png", "Close-up of premium furniture materials"),
    },

    experience: {
      eyebrow: "Experiences",
      heading: "We provide you the best Experience",
      body: "Your satisfaction is our focus. From personalised consultations to seamless service, we ensure a delightful experience and furniture that makes your house a true home.",
      image: img("/images/home-2.png", "Customer consultation at the M Rajkamal showroom"),
    },

    servicesHeading: "Services We Provide",
    services: [
      {
        icon: "Truck",
        title: "Fast & Free delivery*",
        desc: "Enjoy free delivery based on your location, ensuring your furniture arrives in pristine condition",
      },
      {
        icon: "Ruler",
        title: "Home measurements*",
        desc: "Ensure a perfect fit for your new furniture before you buy. Schedule a complimentary home visit by our team",
      },
      {
        icon: "Wrench",
        title: "Professional Installation",
        desc: "Our expert team provides seamless, hassle-free installation for all your furniture pieces.",
      },
      {
        icon: "ShieldCheck",
        title: "Comprehensive Warranty",
        desc: "Rest assured with our extensive warranty coverage against manufacturing defects for peace of mind.",
      },
      {
        icon: "Headset",
        title: "Timely support",
        desc: "Our friendly team is here to assist you with selection, product care, and any after-sales queries.",
      },
      {
        icon: "CreditCard",
        title: "Flexible EMI Options",
        desc: "Available affordable and easy monthly instalment plans available with leading banks.",
      },
    ],

    clientsHeading: "Our Clients",
    clients: [
      "Jindal Steel",
      "Rachana Sansad College of Architecture",
      "GST Office, Mumbai",
      "Aditya Birla Group",
      "Sanjeev Goenka Group",
      "Sane Guruji Vidyalaya",
      "Kohinoor City",
      "Indian Institute of Hotel Management",
      "Tirumala Tirupati Devasthanams",
      "Unilazer Ventures Pvt. Ltd.",
      "RSVP Films",
      "Shemaroo Films",
    ].map((name) => ({ name, logo: img("", "") })),

    instagram: {
      heading: "Connect with us on Instagram",
      handle: "@mrajkamalfurniture",
      url: INSTAGRAM,
      ctaLabel: "Open Instagram",
    },

    reviewsHeading: "Customer reviews",
  },

  about: {
    heading: "M Rajkamal – Authorised Godrej Interio Dealer",
    subheading: "Three Generations of Trust, Crafted in Steel.",
    bodyHtml: [
      "<p>We are a third-generation furniture company rooted in craftsmanship, trust, and a deep passion for thoughtful living spaces. Located in Dadar West, Mumbai, M. Rajkamal has been a trusted name for premium mild steel and wrought iron furniture — built with modern designs, attractive finishes, and uncompromising quality.</p>",
      "<p>Every piece we create starts with high-grade, thick steel that goes through multiple stages of cleaning, de-rusting, and anti-corrosive treatment, ensuring furniture that is built to last. Our powder-coated and wooden-finished products bring together durability and aesthetic elegance — whether it's office furniture, wall units, wardrobe sets, sofa-cum-beds, or custom storage solutions.</p>",
      "<p>What truly sets us apart is our commitment to made-to-measure craftsmanship. We visit your space, take precise measurements, understand your requirements, and suggest designs that make the most of every inch — so no space ever goes to waste. Your room, your size, your style.</p>",
      "<p>As an authorised Godrej Interio dealer, we also offer a curated selection of sofas, wardrobes, lockers, beds, and more — combining trusted quality with designs that elevate everyday living.</p>",
      "<p>With a loyal customer base spread across Mumbai and Maharashtra, we take pride in delivering furniture that doesn't just fill a room — it completes it.</p>",
    ].join(""),
    image: img("/images/about-mrajkamal.png", "M Rajkamal furniture store"),
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9269159149285!2d72.83575527691664!3d19.022941853632894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec542443581%3A0x2bf3f57a345df79a!2sGodrej%20Interio%20-%20M%20Rajkamal%20Furniture!5e0!3m2!1sen!2sin!4v1778680164102!5m2!1sen!2sin",
    storeHeading: "Visit Our Store",
    addressText: ADDRESS,
    storeHours: [
      { label: "Opens:", value: "10am - 8pm (Tuesday to Sunday)" },
      { label: "Closed:", value: "On Mondays" },
    ],
    contactHeading: "Contact",
  },

  footer: {
    quickLinksHeading: "Quick links",
    quickLinks: [
      // Previously all href="/" — they now go where their labels promise.
      { label: "Sofa cum Beds", href: "/products?category=sofa-cum-bed", external: false },
      { label: "Lockers", href: "/products?category=locker", external: false },
      { label: "Cupboards", href: "/products?category=cupboard", external: false },
    ],

    findUsOnHeading: "Find us on",
    findUsOn: [
      {
        label: "Just Dial",
        href: "https://www.justdial.com/Mumbai/M-Rajkamal-Furniture-Dadar-West/022PXX22-XX22-160924164449-R7S2_BZDET",
        external: true,
      },
      { label: "Instagram", href: INSTAGRAM, external: true },
      { label: "Interio by Godrej", href: INTERIO, external: true },
      { label: "IndiaMart", href: "https://www.indiamart.com/m-rajkamal-furniture/", external: true },
    ],

    contactHeading: "Contact",
    contact: { phone: PHONE_DISPLAY, email: EMAIL },

    addressHeading: "Shop Address",
    address: ADDRESS,
    openingHours: "Opens: 10am - 8pm (Tue to Sun)",
    copyright: "Copyright © 2026 mrajkamalfurniture.com - All Rights Reserved.",
  },

  business: {
    name: "M Rajkamal Furniture",
    streetAddress:
      "7, Haji Ebrahim Patel Trust Building, Junction of Gokhale Road and Ranade Rd",
    addressLocality: "Dadar West, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400028",
    // Pulled straight out of the Google Maps embed already on the About page:
    // !2d<longitude> !3d<latitude>.
    latitude: 19.022941853632894,
    longitude: 72.83575527691664,
    foundingDate: "1962",
    opensAt: "10:00",
    closesAt: "20:00",
    // Monday is absent on purpose — omitted days are advertised as closed.
    openDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },

  seo: {
    title: "M Rajkamal – Premium Furniture Store in Dadar West, Mumbai",
    description:
      "Authorised Godrej Interio dealer in Dadar West, Mumbai since 1962. Sofas, wardrobes, home lockers, beds and made-to-measure steel furniture, with free delivery and professional installation.",
    ogImage: img("/images/home-1.png", "M Rajkamal Furniture"),
  },
};

/** The phone number in E.164, for tel: links and schema.org. */
export const CONTACT_PHONE_E164 = PHONE;
