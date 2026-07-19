import { Suspense } from "react";
import { Types } from "mongoose";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/dal";
import { adminPath } from "@/lib/admin-paths";
import ProductForm from "@/components/admin/ProductForm";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * `requireAdmin()` reads cookies — a runtime API — so it has to sit inside the
 * <Suspense> boundary, like every other uncached read under Cache Components.
 */
async function NewProductForm() {
  await requireAdmin();

  /**
   * Mint the product's ObjectId HERE, on the server, before the form renders.
   *
   * This is what makes the folder-per-product rule work. Images are uploaded
   * before the product is submitted, but the folder must be named with the
   * product id — so the id has to exist first. Minting it up front sends uploads
   * straight into /mrajkamal/products/<id>/, and `saveProduct` then creates the
   * document with that exact `_id`. No temp folder, no move-on-save, no
   * half-written draft rows.
   *
   * The cost: abandoning the form leaves an orphan folder. Hence the Discard
   * button, and `npm run imagekit:reconcile` as the sweeper.
   */
  const productId = new Types.ObjectId().toString();

  return <ProductForm productId={productId} />;
}

export default function NewProductPage() {
  return (
    <div className='mx-auto max-w-[820px]'>
      <header className='mb-8'>
        <Link
          href={adminPath("/products")}
          className='text-sm text-muted-foreground hover:text-primary'
        >
          ← Products
        </Link>
        <h1 className='mt-2 font-heading text-3xl italic'>New product</h1>
      </header>

      <Suspense fallback={<Skeleton className='h-[600px] rounded-xl' />}>
        <NewProductForm />
      </Suspense>
    </div>
  );
}
