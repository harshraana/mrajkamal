import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductReviews from "@/components/pdp/ProductReviews";
import ProductThumbnail from "@/components/product-thumbnail/ProductThumbnail";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import StarRattings from "@/components/star-ratting/StarRattings";
import JsonLd from "@/components/seo/JsonLd";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getAllProductSlugs,
  getProductBySlug,
  getSimilarProducts,
} from "@/lib/products";
import { getProductReviews } from "@/lib/product-reviews";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/json-ld";
import { productInquiryUrl } from "@/lib/whatsapp";
import { formatINR } from "@/lib/site-url";

/**
 * Under Cache Components this MUST return at least one param — an empty array is
 * a build error. When the catalogue is empty (a fresh CI checkout with no
 * database), we return a placeholder slug that the page then 404s, which keeps
 * the build's validation working without inventing a fake product.
 *
 * Products added later are NOT missing: an unknown slug still renders at runtime
 * and is persisted to disk after the first successful request. That is exactly
 * the behaviour a CMS wants, so `dynamicParams` is deliberately left alone.
 */
export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  if (slugs.length === 0) return [{ slug: "__placeholder__" }];
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // React.cache() dedupes this with the page body's call, so a product page is
  // ONE database read, not two. `main` did two per view.
  const product = await getProductBySlug(slug);

  if (!product) return { title: "Product not found" };

  const title = product.seo.title || product.name;
  const description =
    product.seo.description || product.descriptionText.slice(0, 160) ||
    `${product.name} at M Rajkamal, authorised Godrej Interio dealer in Dadar West, Mumbai.`;

  const url = `/products/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      // opengraph-image.tsx in this folder supplies the image automatically —
      // and it is load-bearing, because it is what WhatsApp renders as the link
      // preview when a customer taps "Inquire on WhatsApp".
    },
  };
}

async function ProductDetail({ slug }: { slug: string }) {
  if (slug === "__placeholder__") notFound();

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  /**
   * The requested slug may be an OLD one, kept in slugHistory after a rename.
   * Redirect to the canonical URL with a 308 rather than serving two URLs for
   * the same product — otherwise every indexed link and every WhatsApp message
   * already sent to a customer would 404 (which is what `main` did).
   */
  if (product.slug !== slug) permanentRedirect(`/products/${product.slug}`);

  const [reviews, similar] = await Promise.all([
    getProductReviews(product.id),
    getSimilarProducts(product, 4),
  ]);

  const whatsappHref = productInquiryUrl(product);

  return (
    <>
      <JsonLd data={productJsonLd(product, reviews)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: product.categoryLabel, href: `/products?category=${product.category}` },
          { name: product.name },
        ])}
      />

      <nav aria-label='Breadcrumb' className='mb-6 text-sm text-gray-600'>
        <ol className='flex flex-wrap gap-2'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li aria-hidden='true'>/</li>
          <li>
            <Link href='/products'>Products</Link>
          </li>
          <li aria-hidden='true'>/</li>
          <li>
            <Link href={`/products?category=${product.category}`}>
              {product.categoryLabel}
            </Link>
          </li>
          <li aria-hidden='true'>/</li>
          <li aria-current='page' className='truncate text-foreground'>
            {product.name}
          </li>
        </ol>
      </nav>

      <div className='grid gap-8 lg:grid-cols-2 lg:gap-14'>
        {/* Keyed by slug so the selected image can't leak across products when
            Activity keeps the previous route mounted. */}
        <ProductGallery key={product.slug} images={product.images} name={product.name} />

        <div>
          <p className='mb-2 text-sm tracking-widest text-destructive uppercase'>
            {product.categoryLabel}
          </p>

          <h1 className='font-heading text-3xl italic sm:text-4xl'>{product.name}</h1>

          {product.ratingCount > 0 && (
            <a href='#reviews-heading' className='mt-3 flex w-fit items-center gap-2 hover:no-underline'>
              <StarRattings rating={product.ratingAvg} size={16} />
              <span className='text-sm text-gray-600 underline'>
                {product.ratingCount} review{product.ratingCount === 1 ? "" : "s"}
              </span>
            </a>
          )}

          <div className='mt-5 flex flex-wrap items-end gap-3'>
            <p className='font-heading text-3xl'>₹{formatINR(product.price)}</p>
            {product.hasDiscount && product.mrp !== null && (
              <>
                <p className='text-lg text-gray-400 line-through'>
                  ₹{formatINR(product.mrp)}
                </p>
                <p className='rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary'>
                  {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off
                </p>
              </>
            )}
          </div>
          <p className='mt-1 text-xs text-gray-500'>Inclusive of all taxes.</p>

          {/*
            The inquiry button. There is no cart and no checkout — this opens
            WhatsApp with the product name, price and a link to this page.
            The product PHOTO appears in the chat because WhatsApp's crawler
            reads this page's OG image; wa.me itself supports only ?text=.
          */}
          <a
            href={whatsappHref}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:no-underline hover:brightness-95 sm:w-auto'
          >
            <WhatsappIcon size={22} />
            Inquire on WhatsApp
          </a>

          {product.features.length > 0 && (
            <ul className='mt-8 space-y-2'>
              {product.features.map((feature) => (
                <li key={feature} className='flex items-start gap-2 text-sm'>
                  <Check size={16} className='mt-0.5 shrink-0 text-primary' />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {product.descriptionHtml && (
            <div className='mt-8 border-t border-border pt-8'>
              <h2 className='mb-3 font-heading text-xl italic'>Description</h2>
              {/* Sanitized on write AND again in the DTO serializer on read. */}
              <div
                className='space-y-4 text-sm leading-7 text-gray-700 [&_h2]:font-heading [&_h2]:text-lg [&_h3]:font-heading [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1'
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          )}
        </div>
      </div>

      <ProductReviews product={product} reviews={reviews} />

      {similar.length > 0 && (
        <section aria-labelledby='similar-heading' className='mt-16 lg:mt-24'>
          <div className='mb-6 flex items-center justify-between'>
            <h2 id='similar-heading' className='font-heading text-2xl italic sm:text-3xl'>
              Similar items
            </h2>
            <Link
              href={`/products?category=${product.category}`}
              className='flex items-center gap-1 text-sm hover:text-primary'
            >
              See all {product.categoryLabel.toLowerCase()}
              <ArrowRight size={14} />
            </Link>
          </div>

          <ul className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6'>
            {similar.map((item) => (
              <li key={item.id}>
                <ProductThumbnail product={item} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className='mt-20'>
      <Container className='py-10 md:py-14'>
        <Suspense fallback={<Skeleton className='h-[600px] rounded-2xl' />}>
          <ProductDetail slug={slug} />
        </Suspense>
      </Container>
    </div>
  );
}
