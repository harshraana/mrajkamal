/**
 * Exercises the data-layer invariants against a real database.
 *
 *   npm run verify:data
 *
 * The cached read functions (`getProducts` etc.) can't run here — `'use cache'`
 * only works inside the Next runtime — so this covers everything underneath
 * them: the slug race, validator enforcement, and the rating recompute. The
 * cached readers get exercised through the pages.
 *
 * Cleans up after itself.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");

let pass = 0;
let fail = 0;
const check = (ok: boolean, label: string, detail = "") => {
  if (ok) {
    pass++;
    console.log(`  ok    ${label}${detail ? ` — ${detail}` : ""}`);
  } else {
    fail++;
    console.log(`  FAIL  ${label}${detail ? ` — ${detail}` : ""}`);
  }
};

async function main() {
  const mongoose = (await import("mongoose")).default;
  await mongoose.connect(process.env.MONGODB_URI!, { bufferCommands: false });

  const { default: Product } = await import("../src/lib/models/Product");
  const { default: Review } = await import("../src/lib/models/Review");
  const { slugCandidates, isDuplicateKeyError } = await import("../src/lib/slug");
  const { recomputeProductRating } = await import("../src/lib/product-reviews");

  const MARK = "__verify__";
  const cleanup = async () => {
    const ids = (await Product.find({ name: new RegExp(MARK) }).select("_id").lean()).map(
      (p) => p._id,
    );
    await Review.deleteMany({ product: { $in: ids } });
    await Product.deleteMany({ name: new RegExp(MARK) });
  };
  await cleanup();

  const base = {
    descriptionHtml: "<p>x</p>",
    descriptionText: "x",
    price: 1000,
    category: "sofa" as const,
    images: [{ url: "/products/product-1.png", fileId: "", alt: "", width: 0, height: 0 }],
  };

  const create = async (name: string) => {
    for (const slug of slugCandidates(name)) {
      try {
        return await Product.create({ ...base, name, slug });
      } catch (e) {
        if (isDuplicateKeyError(e, "slug")) continue;
        throw e;
      }
    }
    throw new Error("exhausted slug candidates");
  };

  // ── 1. Slug collision: same name twice must NOT throw E11000 ───────────────
  console.log("\nslug uniqueness");
  const a = await create(`Sofa Bed ${MARK}`);
  const b = await create(`Sofa Bed ${MARK}`);
  check(a.slug !== b.slug, "two products with the same name get distinct slugs", `${a.slug} / ${b.slug}`);
  check(b.slug === `${a.slug}-2`, "the second falls back to -2");

  // Concurrent creates — the real TOCTOU race `main` lost.
  const racers = await Promise.all(
    Array.from({ length: 5 }, () => create(`Race Test ${MARK}`).catch((e) => e as Error)),
  );
  const errs = racers.filter((r) => r instanceof Error);
  const slugs = racers.filter((r) => !(r instanceof Error)).map((r) => (r as { slug: string }).slug);
  check(errs.length === 0, "5 CONCURRENT creates of the same name: no unhandled E11000", `${slugs.length} created`);
  check(new Set(slugs).size === slugs.length, "all concurrent slugs are unique", slugs.join(", "));

  // ── 2. Validators must actually run on UPDATE ─────────────────────────────
  // `main` called findByIdAndUpdate without runValidators, so schema rules were
  // bypassed on every edit and a negative price / bogus category was writable.
  console.log("\nvalidators on update (runValidators)");
  const neg = await Product.findByIdAndUpdate(
    a._id,
    { $set: { price: -5 } },
    { runValidators: true, returnDocument: 'after' },
  ).catch((e) => e as Error);
  check(neg instanceof Error, "negative price is REJECTED on update");

  const badCat = await Product.findByIdAndUpdate(
    a._id,
    { $set: { category: "hacked" } },
    { runValidators: true, returnDocument: 'after' },
  ).catch((e) => e as Error);
  check(badCat instanceof Error, "invalid category is REJECTED on update");

  const noImages = await Product.findByIdAndUpdate(
    a._id,
    { $set: { images: [] } },
    { runValidators: true, returnDocument: 'after' },
  ).catch((e) => e as Error);
  check(noImages instanceof Error, "an empty image list is REJECTED on update");

  // Prove the same write SUCCEEDS without runValidators — i.e. that the flag is
  // what's doing the work, not some incidental behaviour.
  await Product.findByIdAndUpdate(a._id, { $set: { price: -5 } });
  const poisoned = await Product.findById(a._id).select("price").lean();
  check(
    poisoned?.price === -5,
    "…and WITHOUT runValidators the same write lands (proving the flag is load-bearing)",
  );
  await Product.findByIdAndUpdate(a._id, { $set: { price: 1000 } }, { runValidators: true });

  // ── 3. Rating recompute ───────────────────────────────────────────────────
  console.log("\nrating aggregate");
  await Review.insertMany(
    [5, 4, 3].map((rating, i) => ({
      product: a._id,
      authorName: `R${i}`,
      rating,
      text: "t",
      reviewedAt: new Date(),
      isPublished: true,
    })),
  );
  await recomputeProductRating(String(a._id));
  let p = await Product.findById(a._id).select("ratingAvg ratingCount").lean();
  check(p?.ratingAvg === 4 && p?.ratingCount === 3, "5,4,3 → avg 4.0, count 3", `got ${p?.ratingAvg}/${p?.ratingCount}`);

  await Review.deleteOne({ product: a._id, rating: 3 });
  await recomputeProductRating(String(a._id));
  p = await Product.findById(a._id).select("ratingAvg ratingCount").lean();
  check(p?.ratingAvg === 4.5 && p?.ratingCount === 2, "deleting the 3★ → avg 4.5, count 2", `got ${p?.ratingAvg}/${p?.ratingCount}`);

  // Unpublishing must ALSO drop it out of the average, or the number shown to
  // Google stops matching the reviews visible on the page.
  await Review.updateOne({ product: a._id, rating: 4 }, { $set: { isPublished: false } });
  await recomputeProductRating(String(a._id));
  p = await Product.findById(a._id).select("ratingAvg ratingCount").lean();
  check(p?.ratingAvg === 5 && p?.ratingCount === 1, "unpublishing the 4★ → avg 5.0, count 1", `got ${p?.ratingAvg}/${p?.ratingCount}`);

  await Review.deleteMany({ product: a._id });
  await recomputeProductRating(String(a._id));
  p = await Product.findById(a._id).select("ratingAvg ratingCount").lean();
  check(p?.ratingAvg === 0 && p?.ratingCount === 0, "no reviews → 0 (so JSON-LD omits aggregateRating)", `got ${p?.ratingAvg}/${p?.ratingCount}`);

  await cleanup();
  await mongoose.disconnect();

  console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error("\n✗", e);
  process.exit(1);
});
