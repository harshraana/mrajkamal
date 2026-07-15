import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Types } from "mongoose";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import { requireAdmin } from "@/lib/auth/dal";
import { adminPath } from "@/lib/admin-paths";
import { toProductDetailDTO } from "@/lib/dto";
import ProductForm from "@/components/admin/ProductForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

/**
 * Takes the `params` PROMISE, not the resolved id — `params` is a runtime API,
 * so whatever awaits it has to sit INSIDE the <Suspense> boundary.
 */
async function EditForm({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await requireAdmin();
  if (!Types.ObjectId.isValid(id)) notFound();

  await connectDB();
  const doc = await Product.findById(id).lean();
  if (!doc) notFound();

  // The same DTO mapping the public site uses — so the form is editing exactly
  // what the site renders, with no second serialization to drift out of sync.
  const product = toProductDetailDTO(doc);

  return (
    <>
      <header className='mb-8 flex flex-wrap items-start justify-between gap-3'>
        <div>
          <Link
            href={adminPath("/products")}
            className='text-sm text-muted-foreground hover:text-primary'
          >
            ← Products
          </Link>
          <h1 className='mt-2 font-heading text-3xl italic'>{product.name}</h1>
          <p className='mt-1 font-mono text-xs text-muted-foreground'>
            /products/{product.slug}
          </p>
        </div>

        <div className='flex gap-2'>
          <Link href={adminPath(`/products/${id}/reviews`)} className='hover:no-underline'>
            <Button variant='outline' size='sm'>
              Reviews ({product.ratingCount})
            </Button>
          </Link>
          <a
            href={`/products/${product.slug}`}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:no-underline'
          >
            <Button variant='outline' size='sm'>
              View
            </Button>
          </a>
        </div>
      </header>

      <ProductForm productId={id} product={product} />
    </>
  );
}

export default function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className='mx-auto max-w-[820px]'>
      <Suspense fallback={<Skeleton className='h-[600px] rounded-xl' />}>
        <EditForm params={params} />
      </Suspense>
    </div>
  );
}
