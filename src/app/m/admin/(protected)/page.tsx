import { Suspense } from "react";
import Link from "next/link";
import { MessageSquare, Package, Star, TriangleAlert } from "lucide-react";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Review from "@/lib/models/Review";
import { requireAdmin } from "@/lib/auth/dal";
import { adminPath } from "@/lib/admin-paths";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Admin reads are deliberately UNCACHED — there is no `use cache` anywhere under
 * /admin. The admin must see their own writes immediately, so a plain Mongoose
 * read is correct here, not an oversight.
 *
 * Under Cache Components that uncached read has to sit inside <Suspense>, which
 * is why the stats are their own component.
 */
async function Stats() {
  await requireAdmin();
  await connectDB();

  const [total, active, featured, reviews] = await Promise.all([
    Product.countDocuments(),
    Product.countDocuments({ isActive: true }),
    Product.countDocuments({ isActive: true, isFeatured: true }),
    Review.countDocuments({ isPublished: true }),
  ]);

  const stats = [
    { label: "Products", value: total, icon: Package },
    { label: "Live on site", value: active, icon: Package },
    { label: "Featured", value: `${featured} / 10`, icon: Star },
    { label: "Reviews", value: reviews, icon: MessageSquare },
  ];

  return (
    <>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className='rounded-xl border border-border bg-card p-4'>
            <div className='mb-2 flex items-center gap-2 text-muted-foreground'>
              <Icon size={15} />
              <span className='text-xs'>{label}</span>
            </div>
            <p className='font-heading text-2xl'>{value}</p>
          </div>
        ))}
      </div>

      {total === 0 && (
        <div className='mt-6 flex items-start gap-3 rounded-xl border border-secondary bg-secondary/20 p-4'>
          <TriangleAlert size={18} className='mt-0.5 shrink-0 text-secondary-foreground' />
          <div className='text-sm'>
            <p className='font-medium'>No products yet</p>
            <p className='text-muted-foreground'>
              The catalogue and the home page&apos;s featured row stay empty until you
              add one.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function StatsSkeleton() {
  return (
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
      {[0, 1, 2, 3].map((i) => (
        <Skeleton key={i} className='h-[86px] rounded-xl' />
      ))}
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className='mx-auto max-w-[1100px]'>
      <header className='mb-8'>
        <h1 className='font-heading text-3xl italic'>Dashboard</h1>
        <p className='mt-1 text-sm text-muted-foreground'>
          Everything on the public site is managed from here.
        </p>
      </header>

      <Suspense fallback={<StatsSkeleton />}>
        <Stats />
      </Suspense>

      <div className='mt-6 flex flex-wrap gap-3'>
        <Link href={adminPath("/products/new")} className='hover:no-underline'>
          <Button>Add a product</Button>
        </Link>
        <Link href={adminPath("/products")} className='hover:no-underline'>
          <Button variant='outline'>Manage products</Button>
        </Link>
        <Link href={adminPath("/site")} className='hover:no-underline'>
          <Button variant='outline'>Edit site content</Button>
        </Link>
      </div>
    </div>
  );
}
