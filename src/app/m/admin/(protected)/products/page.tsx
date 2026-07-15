import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Review from "@/lib/models/Review";
import { requireAdmin } from "@/lib/auth/dal";
import { adminPath } from "@/lib/admin-paths";
import { PRODUCT_CATEGORIES, categoryLabel } from "@/lib/constants/catalog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import ProductRowActions from "@/components/admin/ProductRowActions";

const PER_PAGE = 20;

type Search = { q?: string; category?: string; status?: string; page?: string };

/**
 * Search, filter and pagination all live in `searchParams` via a plain GET form.
 *
 * That means the URLs are shareable, the back button works, and the whole thing
 * still functions with JavaScript off. `main` did `Product.find()` with no limit
 * and no search at all — fine at 5 products, unusable at 500.
 */
async function ProductTable({ searchParams }: { searchParams: Promise<Search> }) {
  await requireAdmin();
  const { q = "", category = "", status = "", page = "1" } = await searchParams;

  await connectDB();

  const current = Math.max(1, Number(page) || 1);
  // Mongoose 9 no longer exports `FilterQuery` (it's `Filter` now, with a
  // different shape). A plain record is enough here and doesn't couple the page
  // to a type that moved between majors.
  const filter: Record<string, unknown> = {};
  if (q.trim()) filter.$text = { $search: q.trim() }; // uses the name+description text index
  if (category) filter.category = category;
  if (status === "active") filter.isActive = true;
  if (status === "inactive") filter.isActive = false;

  const [rows, total] = await Promise.all([
    Product.find(filter)
      .select("name slug category price mrp images isFeatured isActive ratingAvg ratingCount")
      .sort({ updatedAt: -1 })
      .skip((current - 1) * PER_PAGE)
      .limit(PER_PAGE)
      .lean(),
    Product.countDocuments(filter),
  ]);

  const reviewCounts = await Review.aggregate<{ _id: unknown; n: number }>([
    { $match: { product: { $in: rows.map((r) => r._id) } } },
    { $group: { _id: "$product", n: { $sum: 1 } } },
  ]);
  const reviewsById = new Map(reviewCounts.map((r) => [String(r._id), r.n]));

  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  const qs = (p: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (status) params.set("status", status);
    if (p > 1) params.set("page", String(p));
    const s = params.toString();
    return s ? `?${s}` : "";
  };

  if (rows.length === 0) {
    return (
      <div className='rounded-xl border border-dashed border-border p-10 text-center'>
        <p className='font-medium'>No products match</p>
        <p className='mt-1 text-sm text-muted-foreground'>
          {q || category || status
            ? "Try clearing the filters."
            : "Add your first product to fill the catalogue."}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='overflow-x-auto rounded-xl border border-border bg-card'>
        <table className='w-full text-sm'>
          <thead className='border-b border-border text-left text-xs text-muted-foreground'>
            <tr>
              <th className='p-3 font-medium'>Product</th>
              <th className='p-3 font-medium'>Category</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium'>Reviews</th>
              <th className='p-3 font-medium'>Status</th>
              <th className='p-3 font-medium'></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const id = String(p._id);
              const cover = p.images?.[0];
              const hasDiscount = typeof p.mrp === "number" && p.mrp > (p.price ?? 0);

              return (
                <tr key={id} className='border-b border-border last:border-0'>
                  <td className='p-3'>
                    <div className='flex items-center gap-3'>
                      <div className='relative h-11 w-11 shrink-0 overflow-hidden rounded-md bg-muted'>
                        {cover?.url && (
                          <Image
                            src={cover.url}
                            alt=''
                            fill
                            sizes='44px'
                            className='object-cover'
                          />
                        )}
                      </div>
                      <div className='min-w-0'>
                        <p className='truncate font-medium'>{p.name}</p>
                        <p className='truncate font-mono text-xs text-muted-foreground'>
                          /{p.slug}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className='p-3 whitespace-nowrap text-muted-foreground'>
                    {categoryLabel(String(p.category))}
                  </td>
                  <td className='p-3 whitespace-nowrap'>
                    ₹{(p.price ?? 0).toLocaleString("en-IN")}
                    {hasDiscount && (
                      <span className='ml-1.5 text-xs text-muted-foreground line-through'>
                        ₹{Number(p.mrp).toLocaleString("en-IN")}
                      </span>
                    )}
                  </td>
                  <td className='p-3 whitespace-nowrap'>
                    <Link
                      href={adminPath(`/products/${id}/reviews`)}
                      className='text-muted-foreground hover:text-primary'
                    >
                      {p.ratingCount ? `${p.ratingAvg}★ (${reviewsById.get(id) ?? 0})` : "—"}
                    </Link>
                  </td>
                  <td className='p-3'>
                    <div className='flex flex-wrap gap-1'>
                      <Badge variant={p.isActive ? "default" : "secondary"}>
                        {p.isActive ? "Live" : "Hidden"}
                      </Badge>
                      {p.isFeatured && <Badge variant='outline'>Featured</Badge>}
                    </div>
                  </td>
                  <td className='p-3'>
                    <ProductRowActions
                      id={id}
                      name={String(p.name)}
                      isActive={Boolean(p.isActive)}
                      isFeatured={Boolean(p.isFeatured)}
                      imageCount={p.images?.length ?? 0}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='mt-4 flex items-center justify-between text-sm text-muted-foreground'>
        <p>
          {total} product{total === 1 ? "" : "s"}
          {pages > 1 && ` · page ${current} of ${pages}`}
        </p>
        {pages > 1 && (
          <div className='flex gap-2'>
            {current > 1 && (
              <Link href={qs(current - 1)} className='hover:no-underline'>
                <Button variant='outline' size='sm'>
                  Previous
                </Button>
              </Link>
            )}
            {current < pages && (
              <Link href={qs(current + 1)} className='hover:no-underline'>
                <Button variant='outline' size='sm'>
                  Next
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}

/** Reads searchParams too, so it also has to live inside the Suspense boundary. */
async function Filters({ searchParams }: { searchParams: Promise<Search> }) {
  const { q = "", category = "", status = "" } = await searchParams;

  return (
    <form className='mb-5 flex flex-wrap gap-2'>
      <Input
        name='q'
        defaultValue={q}
        placeholder='Search name or description…'
        className='w-full sm:w-[260px]'
      />
      <select
        name='category'
        defaultValue={category}
        className='h-9 rounded-lg border border-input bg-transparent px-3 text-sm'
      >
        <option value=''>All categories</option>
        {PRODUCT_CATEGORIES.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
      <select
        name='status'
        defaultValue={status}
        className='h-9 rounded-lg border border-input bg-transparent px-3 text-sm'
      >
        <option value=''>Any status</option>
        <option value='active'>Live</option>
        <option value='inactive'>Hidden</option>
      </select>
      <Button type='submit' variant='outline'>
        Filter
      </Button>
      {(q || category || status) && (
        <Link href={adminPath("/products")} className='hover:no-underline'>
          <Button type='button' variant='ghost'>
            Clear
          </Button>
        </Link>
      )}
    </form>
  );
}

export default function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  return (
    <div className='mx-auto max-w-[1100px]'>
      <header className='mb-6 flex flex-wrap items-center justify-between gap-3'>
        <div>
          <h1 className='font-heading text-3xl italic'>Products</h1>
          <p className='mt-1 text-sm text-muted-foreground'>
            These fill the catalogue and the home page.
          </p>
        </div>
        <Link href={adminPath("/products/new")} className='hover:no-underline'>
          <Button>Add a product</Button>
        </Link>
      </header>

      <Suspense fallback={<Skeleton className='mb-5 h-9 w-full max-w-[600px]' />}>
        <Filters searchParams={searchParams} />
      </Suspense>

      <Suspense fallback={<Skeleton className='h-[400px] rounded-xl' />}>
        <ProductTable searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
