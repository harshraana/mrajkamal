"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { Types } from "mongoose";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Review from "@/lib/models/Review";
import { requireAdmin } from "@/lib/auth/dal";
import { productInput } from "@/lib/validation/product";
import { formDataToObject } from "@/lib/validation/form";
import { sanitizeRichText, htmlToText } from "@/lib/sanitize";
import { slugCandidates, isDuplicateKeyError } from "@/lib/slug";
import { tags } from "@/lib/cache-tags";
import { deleteFiles, deleteFolder, productFolder } from "@/lib/imagekit";
import { errorState, type ActionState } from "@/lib/action-state";
import { adminPath } from "@/lib/admin-paths";

const FEATURED_LIMIT = 10;

/** Invalidate everything a product write can affect. */
function invalidate(id: string, slugs: string[]) {
  updateTag(tags.products);
  updateTag(tags.featured);
  updateTag(tags.productById(id));
  for (const slug of slugs.filter(Boolean)) updateTag(tags.product(slug));
}

/**
 * Create or update a product.
 *
 * `updateTag` — not `revalidateTag` — because it expires the entry immediately.
 * `revalidateTag` serves the STALE value while it refetches, so the admin would
 * hit Save, click through to the site, and see their previous content.
 */
export async function saveProduct(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  // EVERY action re-checks. A Server Action is a POST endpoint reachable
  // directly; the layout's guard does not extend to it.
  await requireAdmin();

  const parsed = productInput.safeParse(formDataToObject(formData));
  if (!parsed.success) {
    return errorState(
      "Please fix the highlighted fields.",
      z.flattenError(parsed.error).fieldErrors,
    );
  }
  const d = parsed.data;

  await connectDB();

  // Max 10 featured. Enforced server-side — the client cap is a courtesy, not a
  // control. (With one admin the count-then-write race is theoretical; a hard
  // guarantee would need a transaction.)
  if (d.isFeatured) {
    const count = await Product.countDocuments({
      isFeatured: true,
      isActive: true,
      _id: { $ne: d.id },
    });
    if (count >= FEATURED_LIMIT) {
      return errorState("You already have 10 featured products.", {
        isFeatured: [`Un-feature one first — the home page shows at most ${FEATURED_LIMIT}.`],
      });
    }
  }

  // Sanitize on WRITE, so the database never holds hostile HTML.
  const descriptionHtml = sanitizeRichText(d.descriptionHtml);
  const descriptionText = htmlToText(descriptionHtml);

  const existing = await Product.findById(d.id).select("slug slugHistory images").lean();

  const fields = {
    name: d.name,
    category: d.category,
    price: d.price,
    mrp: d.mrp,
    descriptionHtml,
    descriptionText,
    features: d.features.filter(Boolean),
    images: d.images,
    isFeatured: d.isFeatured,
    isActive: d.isActive,
    whatsappMessage: d.whatsappMessage,
    seo: { title: d.seoTitle, description: d.seoDescription },
  };

  const touchedSlugs: string[] = [];

  try {
    if (!existing) {
      // Write-and-retry. The unique index arbitrates, so two concurrent creates
      // of the same name cannot both "win" a slug — which is the TOCTOU race
      // `main`'s findOne-then-create lost, surfacing a raw E11000.
      let created = false;
      for (const slug of slugCandidates(d.name)) {
        try {
          await Product.create({ _id: new Types.ObjectId(d.id), ...fields, slug });
          touchedSlugs.push(slug);
          created = true;
          break;
        } catch (error) {
          if (isDuplicateKeyError(error, "slug")) continue;
          throw error;
        }
      }
      if (!created) return errorState("Could not generate a unique URL for that name.");
    } else {
      const prevSlug = String(existing.slug);
      let nextSlug = prevSlug;

      // Renaming re-slugs. The old slug is kept in slugHistory so indexed URLs
      // and WhatsApp links already sent to customers 308 to the new one instead
      // of 404ing — on `main` they simply broke.
      const desired = slugCandidates(d.name).next().value as string;
      if (desired !== prevSlug) {
        for (const slug of slugCandidates(d.name)) {
          const taken = await Product.exists({ slug, _id: { $ne: d.id } });
          if (!taken) {
            nextSlug = slug;
            break;
          }
        }
      }

      await Product.findByIdAndUpdate(
        d.id,
        {
          $set: { ...fields, slug: nextSlug },
          ...(nextSlug !== prevSlug ? { $addToSet: { slugHistory: prevSlug } } : {}),
        },
        // runValidators is load-bearing: Mongoose does NOT run schema validators
        // on update by default, which is how `main` allowed a negative price and
        // an invalid category through the edit form.
        { runValidators: true, returnDocument: "after" },
      );

      touchedSlugs.push(prevSlug, nextSlug);

      // Any image the admin removed is deleted from ImageKit for real. `main`
      // sent the URL as a fileId, so the delete silently failed and every
      // removed image was orphaned forever.
      const keptIds = new Set(d.images.map((image) => image.fileId).filter(Boolean));
      const dropped = (existing.images ?? [])
        .map((image: { fileId?: string | null }) => image.fileId ?? "")
        .filter((fileId) => fileId !== "" && !keptIds.has(fileId));
      if (dropped.length) await deleteFiles(dropped);
    }
  } catch (error) {
    if (isDuplicateKeyError(error, "slug")) {
      return errorState("A product with a very similar name already exists.", {
        name: ["Try a slightly different name."],
      });
    }
    console.error("[saveProduct]", error);
    return errorState("Could not save the product. Please try again.");
  }

  invalidate(d.id, touchedSlugs);
  // Must sit OUTSIDE the try/catch: redirect() works by throwing NEXT_REDIRECT,
  // and a catch block would swallow it.
  redirect(adminPath("/products"));
}

/** Soft-delete / restore. Keeps the row and its images. */
export async function setProductActive(id: string, isActive: boolean): Promise<void> {
  await requireAdmin();
  await connectDB();

  const product = await Product.findByIdAndUpdate(
    id,
    { $set: { isActive } },
    { runValidators: true, returnDocument: "after" },
  )
    .select("slug")
    .lean();

  invalidate(id, [String(product?.slug ?? "")]);
}

export async function setProductFeatured(id: string, isFeatured: boolean): Promise<void> {
  await requireAdmin();
  await connectDB();

  if (isFeatured) {
    const count = await Product.countDocuments({
      isFeatured: true,
      isActive: true,
      _id: { $ne: id },
    });
    if (count >= FEATURED_LIMIT) return; // silently ignored; the UI disables it too
  }

  const product = await Product.findByIdAndUpdate(
    id,
    { $set: { isFeatured } },
    { runValidators: true, returnDocument: "after" },
  )
    .select("slug")
    .lean();

  invalidate(id, [String(product?.slug ?? "")]);
}

/**
 * Hard-delete: the product, its reviews, and its ImageKit folder.
 *
 * Order matters. The Mongo document goes FIRST, then the images. Reversed, a
 * failure between the two steps would leave a live product pointing at URLs
 * whose files no longer exist — a visibly broken page. This way the worst case
 * is orphaned files, which `scripts/reconcile-imagekit.ts` sweeps up.
 */
export async function deleteProduct(id: string): Promise<void> {
  await requireAdmin();
  await connectDB();

  const product = await Product.findById(id).select("slug slugHistory images").lean();
  if (!product) return;

  const fileIds = (product.images ?? []).map((i) => i.fileId).filter(Boolean) as string[];

  await Review.deleteMany({ product: id });
  await Product.findByIdAndDelete(id);

  await deleteFiles(fileIds);
  await deleteFolder(productFolder(id));

  invalidate(id, [String(product.slug), ...(product.slugHistory ?? []).map(String)]);
  redirect(adminPath("/products"));
}

/**
 * Discard images uploaded on a "new product" form that was then abandoned.
 *
 * Guarded by an existence check so it can NEVER touch a real product's folder,
 * however it is called.
 */
export async function discardDraftImages(id: string): Promise<void> {
  await requireAdmin();
  await connectDB();

  if (Types.ObjectId.isValid(id) && !(await Product.exists({ _id: id }))) {
    // Only ever a draft's folder. If a product with this id exists, this is not
    // a draft and we must not touch its images.
    await deleteFolder(productFolder(id));
  }

  redirect(adminPath("/products"));
}
