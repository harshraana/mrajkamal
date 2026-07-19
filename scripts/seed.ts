/**
 * Seeds the database.
 *
 *   npm run seed            # site content only, never overwrites admin edits
 *   npm run seed -- --force # overwrite site content with the defaults
 *   npm run seed -- --demo  # also insert sample products + reviews
 *
 * The site content is written with `$setOnInsert`, so re-running is idempotent
 * and cannot clobber anything an admin has changed. `--force` is the explicit
 * opt-out.
 */
import { loadEnvConfig } from "@next/env";
// Type-only: erased at runtime, so it can't pull a server-only module in early.
import type { ProductCategory } from "../src/lib/constants/catalog";

// Must run BEFORE anything that reads process.env is imported. Uses Next's own
// precedence rules, so the script sees exactly what the app sees.
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

const args = new Set(process.argv.slice(2));
const FORCE = args.has("--force");
const DEMO = args.has("--demo");

async function main() {
  const mongoose = (await import("mongoose")).default;
  const { DEFAULT_SITE_CONTENT } = await import("../src/lib/site-content.defaults");
  const { sanitizeRichText, htmlToText } = await import("../src/lib/sanitize.core");
  const { slugCandidates, isDuplicateKeyError } = await import("../src/lib/slug");

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  await mongoose.connect(uri, { bufferCommands: false });
  console.log(`connected to ${uri.replace(/\/\/[^@]*@/, "//***@")}`);

  const { default: SiteContent } = await import("../src/lib/models/SiteContent");
  const { default: Product } = await import("../src/lib/models/Product");
  const { default: Review } = await import("../src/lib/models/Review");

  // ── Site content ──────────────────────────────────────────────────────────
  const content = {
    ...DEFAULT_SITE_CONTENT,
    about: {
      ...DEFAULT_SITE_CONTENT.about,
      // The seed writes through the same sanitizer as the admin form, so the DB
      // can never hold HTML the app wouldn't have accepted from a human.
      bodyHtml: sanitizeRichText(DEFAULT_SITE_CONTENT.about.bodyHtml),
    },
  };

  const existing = await SiteContent.findOne({ key: "singleton" }).lean();

  if (existing && !FORCE) {
    console.log("• site content already exists — left untouched (use --force to overwrite)");
  } else {
    await SiteContent.updateOne(
      { key: "singleton" },
      FORCE ? { $set: content } : { $setOnInsert: content },
      { upsert: true, runValidators: true },
    );
    console.log(`✓ site content ${existing ? "overwritten" : "inserted"}`);
  }

  // ── Demo catalogue ────────────────────────────────────────────────────────
  if (DEMO) {
    const samples: {
      name: string;
      category: ProductCategory;
      price: number;
      mrp: number | null;
      isFeatured: boolean;
      features: string[];
      html: string;
    }[] = [
      {
        name: "Slimline 3-Door Steel Wardrobe",
        category: "wardrobe",
        price: 18499,
        mrp: 24000,
        isFeatured: true,
        features: ["Powder-coated steel", "Anti-corrosive treatment", "Lockable centre door"],
        html: "<p>A full-height <strong>three-door wardrobe</strong> in high-grade steel, powder-coated and treated against corrosion. Built to be lived with.</p><ul><li>Adjustable shelves</li><li>Full-length mirror</li></ul>",
      },
      {
        name: "Sofa cum Bed — Fabric, 3 Seater",
        category: "sofa-cum-bed",
        price: 27999,
        mrp: 34500,
        isFeatured: true,
        features: ["Converts in one motion", "High-density foam", "Removable covers"],
        html: "<p>Seats three, sleeps two. A <em>one-motion</em> conversion with high-density foam that holds its shape.</p>",
      },
      {
        name: "Godrej Home Locker — Digital",
        category: "locker",
        price: 15250,
        mrp: null,
        isFeatured: true,
        features: ["Digital keypad", "Emergency override key", "Anti-drill plate"],
        html: "<p>Digital keypad locker with an anti-drill plate and an emergency override key.</p>",
      },
      {
        name: "Executive Office Table",
        category: "office",
        price: 21000,
        mrp: 26000,
        isFeatured: false,
        features: ["Cable management", "Lockable drawers"],
        html: "<p>A wide executive desk with integrated cable management and lockable drawers.</p>",
      },
      {
        name: "Two-Door Steel Cupboard",
        category: "cupboard",
        price: 12000,
        mrp: 18000,
        isFeatured: true,
        features: ["4 adjustable shelves", "Powder-coated finish"],
        html: "<p>The classic two-door steel cupboard, with four adjustable shelves.</p>",
      },
    ];

    let created = 0;
    for (const s of samples) {
      const html = sanitizeRichText(s.html);
      const doc = {
        name: s.name,
        descriptionHtml: html,
        descriptionText: htmlToText(html),
        price: s.price,
        mrp: s.mrp,
        category: s.category,
        // Seeded products reuse an existing /public image, with fileId "" so the
        // ImageKit delete path knows to skip it.
        images: [{ url: "/products/product-1.png", fileId: "", alt: s.name, width: 0, height: 0 }],
        features: s.features,
        isFeatured: s.isFeatured,
        isActive: true,
      };

      if (await Product.exists({ name: s.name })) continue;

      // Write-and-retry: the unique index is the arbiter, so there is no
      // read-then-write race to lose.
      for (const slug of slugCandidates(s.name)) {
        try {
          const p = await Product.create({ ...doc, slug });
          created++;

          const reviews = [
            { authorName: "Anjali M.", rating: 5, text: "Excellent build quality. The finish is exactly as shown in the store." },
            { authorName: "Rohit K.", rating: 4, text: "Good product, delivery was on time. Installation team was professional." },
            { authorName: "Sameer D.", rating: 5, text: "Been using it for months now, still looks brand new. Worth the price." },
          ];
          await Review.insertMany(
            reviews.map((r, i) => ({
              ...r,
              product: p._id,
              reviewedAt: new Date(2026, 5 - i, 12),
              isPublished: true,
            })),
          );

          const avg = reviews.reduce((n, r) => n + r.rating, 0) / reviews.length;
          await Product.updateOne(
            { _id: p._id },
            { $set: { ratingAvg: Math.round(avg * 10) / 10, ratingCount: reviews.length } },
          );
          break;
        } catch (error) {
          if (isDuplicateKeyError(error, "slug")) continue;
          throw error;
        }
      }
    }
    console.log(`✓ demo: ${created} product(s) created, each with 3 reviews`);
  }

  await mongoose.disconnect();
  console.log("done");
}

main().catch((error) => {
  console.error("\n✗ seed failed:", error);
  process.exit(1);
});
