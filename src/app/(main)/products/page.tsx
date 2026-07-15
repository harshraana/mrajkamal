import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ProductThumbnail from "@/components/product-thumbnail/ProductThumbnail";
import JsonLd from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getProducts } from "@/lib/products";
import {
  PRODUCT_CATEGORIES,
  categoryLabel,
  isProductCategory,
} from "@/lib/constants/catalog";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/json-ld";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Furniture Catalogue",
  description:
    "Browse sofas, sofa-cum-beds, wardrobes, cupboards, home lockers and office furniture from M Rajkamal — authorised Godrej Interio dealer in Dadar West, Mumbai.",
  alternates: { canonical: "/products" },
};

const PER_PAGE = 12;

type Search = { category?: string; page?: string };

/**
 * Reads `searchParams` — a runtime API — so it must sit inside <Suspense> under
 * Cache Components. `getProducts` is itself cached, so after the first hit this
 * is served from the cache entry rather than from Mongo.
 */
async function Catalogue({ searchParams }: { searchParams: Promise<Search> }) {
  const { category = "", page = "1" } = await searchParams;

  const active = isProductCategory(category) ? category : "";
  const current = Math.max(1, Number(page) || 1);

  const { items, total, pages } = await getProducts({
    category: active,
    page: current,
    perPage: PER_PAGE,
  });

  const href = (cat: string, p = 1) => {
    const params = new URLSearchParams();
    if (cat) params.set("category", cat);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return `/products${qs ? `?${qs}` : ""}`;
  };

  const chip = (isActive: boolean) =>
    cn(
      "rounded-full border px-4 py-1.5 text-sm transition hover:no-underline",
      isActive
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border text-gray-600 hover:border-primary hover:text-primary",
    );

  return (
    <>
      {items.length > 0 && (
        <JsonLd
          data={itemListJsonLd(
            items.map((p) => p.slug),
            (current - 1) * PER_PAGE + 1,
          )}
        />
      )}

      {/* Plain links, not a JS filter: every filtered view gets its own
          shareable, crawlable URL, and it works with JavaScript off. */}
      <nav aria-label='Product categories' className='mb-8 flex flex-wrap gap-2'>
        <Link
          href={href("")}
          aria-current={active === "" ? "page" : undefined}
          className={chip(active === "")}
        >
          All
        </Link>
        {PRODUCT_CATEGORIES.map((c) => (
          <Link
            key={c.value}
            href={href(c.value)}
            aria-current={active === c.value ? "page" : undefined}
            className={chip(active === c.value)}
          >
            {c.label}
          </Link>
        ))}
      </nav>

      {items.length === 0 ? (
        <div className='rounded-2xl border border-dashed border-border py-16 text-center'>
          <p className='font-heading text-xl italic'>
            {active
              ? `No ${categoryLabel(active).toLowerCase()} listed just yet`
              : "The catalogue is on its way"}
          </p>
          <p className='mx-auto mt-2 max-w-[420px] font-light text-gray-600'>
            Get in touch and we&apos;ll tell you what&apos;s in the showroom right now.
          </p>
          <div className='mt-6 flex justify-center gap-3'>
            {active && (
              <Link href='/products' className='hover:no-underline'>
                <Button variant='outline'>See everything</Button>
              </Link>
            )}
            <Link href='/about#contactUs' className='hover:no-underline'>
              <Button>Contact us</Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6'>
            {items.map((product) => (
              <li key={product.id}>
                <ProductThumbnail product={product} />
              </li>
            ))}
          </ul>

          <div className='mt-10 flex items-center justify-between'>
            <p className='text-sm text-gray-600'>
              {total} product{total === 1 ? "" : "s"}
              {pages > 1 && ` · page ${current} of ${pages}`}
            </p>

            {pages > 1 && (
              <div className='flex gap-2'>
                {current > 1 && (
                  <Link href={href(active, current - 1)} className='hover:no-underline'>
                    <Button variant='outline' size='sm'>
                      Previous
                    </Button>
                  </Link>
                )}
                {current < pages && (
                  <Link href={href(active, current + 1)} className='hover:no-underline'>
                    <Button variant='outline' size='sm'>
                      Next
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

function CatalogueSkeleton() {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6'>
      {Array.from({ length: 8 }, (_, i) => (
        <Skeleton key={i} className='aspect-[3/4] rounded-xl' />
      ))}
    </div>
  );
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  return (
    <div className='mt-20'>
      <Container className='py-12 md:py-16 lg:py-[80px]'>
        <JsonLd
          data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Products" }])}
        />

        {/* A VISIBLE breadcrumb — Google requires BreadcrumbList markup to reflect
            breadcrumbs that genuinely appear on the page. */}
        <nav aria-label='Breadcrumb' className='mb-4 text-sm text-gray-600'>
          <ol className='flex gap-2'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li aria-hidden='true'>/</li>
            <li aria-current='page' className='text-foreground'>
              Products
            </li>
          </ol>
        </nav>

        <h1 className='font-heading text-3xl italic sm:text-4xl lg:text-[42px]'>
          Our furniture
        </h1>
        <p className='mt-4 max-w-[620px] font-light text-gray-600'>
          Made-to-measure steel furniture and the Godrej Interio range — sofas,
          wardrobes, home lockers and more. Ask about any piece on WhatsApp.
        </p>

        <div className='mt-10'>
          <Suspense fallback={<CatalogueSkeleton />}>
            <Catalogue searchParams={searchParams} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
