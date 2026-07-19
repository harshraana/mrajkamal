import Link from "next/link";
import StarRattings from "@/components/star-ratting/StarRattings";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import SmartImage from "@/components/media/SmartImage";
import { formatINR } from "@/lib/site-url";
import { productInquiryUrl } from "@/lib/whatsapp";
import type { ProductCardDTO } from "@/types";

/**
 * A product card.
 *
 * Three things it deliberately does NOT do:
 *
 * 1. **No `onClick` anywhere.** This component is compiled into BOTH graphs — the
 *    server graph (the catalogue grid, a Server Component) and the client graph
 *    (the featured Swiper, which is `"use client"`). An event handler would throw
 *    "Event handlers cannot be passed to Client Component props" in the former.
 *    The WhatsApp control is a real `<a href>`, so it works, needs no JS, and is
 *    a right-clickable link like users expect.
 *
 * 2. **No `<button>` inside the `<a>`.** The card is wrapped in a <Link>, so
 *    putting a Base UI <Button> (which renders a native <button>) inside it would
 *    produce `<a><button>…</button></a>` — nested interactive content, which the
 *    HTML spec forbids. The WhatsApp link is therefore a SIBLING of the card
 *    link, overlaid on top, not a child of it.
 *
 * 3. **No hardcoded anything.** It took zero props before and rendered one fake
 *    product with a dead WhatsApp button that had no href at all.
 */
export default function ProductThumbnail({ product }: { product: ProductCardDTO }) {
  const href = `/products/${product.slug}`;

  return (
    <div className='group relative rounded-xl border border-border p-1 transition hover:shadow-md'>
      <Link href={href} className='block hover:no-underline'>
        <div className='overflow-hidden rounded-lg bg-muted'>
          <SmartImage
            image={product.thumbnail}
            alt={product.thumbnail?.alt || product.name}
            width={400}
            height={400}
            sizes='(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 280px'
            className='aspect-square w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.03]'
          />
        </div>

        <div className='px-3 py-2.5 pr-14 text-left'>
          <h3 className='mb-1 truncate font-medium text-foreground'>{product.name}</h3>

          <p className='flex items-end gap-2'>
            {product.hasDiscount && product.mrp !== null && (
              <span className='text-[14px] text-gray-400 line-through'>
                ₹{formatINR(product.mrp)}
              </span>
            )}
            <span className='text-[18px] font-semibold'>₹{formatINR(product.price)}</span>
          </p>

          {product.ratingCount > 0 && (
            <div className='mt-2 flex items-center gap-1.5'>
              <StarRattings rating={product.ratingAvg} size={14} />
              <span className='text-xs text-muted-foreground'>({product.ratingCount})</span>
            </div>
          )}
        </div>
      </Link>

      {/* A sibling of the card link, not a child — see (2) above. */}
      <a
        href={productInquiryUrl(product)}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Ask about ${product.name} on WhatsApp`}
        title='Inquire on WhatsApp'
        className='absolute right-3 bottom-3 hover:no-underline'
      >
        <WhatsappIcon size={38} />
      </a>
    </div>
  );
}
