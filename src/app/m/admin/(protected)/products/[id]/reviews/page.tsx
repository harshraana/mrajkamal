import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Types } from "mongoose";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Review from "@/lib/models/Review";
import { requireAdmin } from "@/lib/auth/dal";
import { adminPath } from "@/lib/admin-paths";
import ReviewManager from "@/components/admin/ReviewManager";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Takes the `params` PROMISE, not the resolved value.
 *
 * `params` is a runtime API, so whoever awaits it must be inside the <Suspense>
 * boundary. Awaiting it in the outer page component and passing the string down
 * looks tidier but puts the uncached read outside the boundary — and the build
 * fails.
 */
async function Reviews({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await requireAdmin();
  if (!Types.ObjectId.isValid(id)) notFound();

  await connectDB();
  const product = await Product.findById(id).select("name slug ratingAvg ratingCount").lean();
  if (!product) notFound();

  // Includes UNPUBLISHED reviews — the admin needs to see what they've hidden.
  // The public reader (`getProductReviews`) filters them out.
  const rows = await Review.find({ product: id }).sort({ reviewedAt: -1 }).lean();

  const reviews = rows.map((r) => ({
    id: String(r._id),
    authorName: String(r.authorName ?? ""),
    rating: Number(r.rating ?? 5),
    text: String(r.text ?? ""),
    isoDate: (r.reviewedAt instanceof Date ? r.reviewedAt : new Date()).toISOString(),
    isPublished: Boolean(r.isPublished),
  }));

  return (
    <>
      <header className='mb-8'>
        <Link
          href={adminPath(`/products/${id}/edit`)}
          className='text-sm text-muted-foreground hover:text-primary'
        >
          ← {product.name}
        </Link>
        <h1 className='mt-2 font-heading text-3xl italic'>Reviews</h1>
        <p className='mt-1 text-sm text-muted-foreground'>
          {product.ratingCount
            ? `${product.ratingAvg}★ from ${product.ratingCount} published review${product.ratingCount === 1 ? "" : "s"}. `
            : "No published reviews yet. "}
          These show on the product page and drive its star rating in Google search
          results.
        </p>
      </header>

      <ReviewManager productId={id} reviews={reviews} />
    </>
  );
}

export default function ProductReviewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className='mx-auto max-w-[820px]'>
      <Suspense fallback={<Skeleton className='h-[400px] rounded-xl' />}>
        <Reviews params={params} />
      </Suspense>
    </div>
  );
}
