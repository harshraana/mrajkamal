"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import ProductThumbnail from "@/components/product-thumbnail/ProductThumbnail";
import type { ProductCardDTO } from "@/types";

/**
 * The featured carousel.
 *
 * **Swiper's `A11y` module is deliberately NOT used**, even though a carousel
 * obviously wants it. `swiper/modules/a11y.mjs:36` does
 * `let visibilityChangedTimestamp = new Date().getTime()` at initialiser scope —
 * which runs during Swiper's construction, i.e. during render. Under Cache
 * Components that is a non-deterministic call in a prerendered Client Component
 * and it fails the build outright. Wrapping the carousel in <Suspense> would
 * silence it, but at the cost of pulling every featured product out of the
 * static HTML, which is exactly the content we most want crawlable.
 *
 * So the ARIA is written by hand below (region + roledescription + labelled
 * slides), and `Keyboard` — which has no Date call — provides the actual
 * arrow-key navigation. That is the part that mattered: every Swiper in this
 * codebase previously registered NO modules at all, so slides past the first
 * were simply unreachable without a mouse.
 *
 * The Effect re-measures on every hide→visible transition: `cacheComponents`
 * enables React `<Activity>`, so a route you navigate away from stays MOUNTED
 * but hidden — and a hidden container measures 0×0.
 */
export default function FeaturedProductsSlider({
  products,
}: {
  products: ProductCardDTO[];
}) {
  const swiper = useRef<SwiperClass | null>(null);

  useEffect(() => {
    swiper.current?.update();
  });

  return (
    <div
      role='region'
      aria-roledescription='carousel'
      aria-label='Featured products'
      className='w-full'
    >
      <Swiper
        className='w-full min-w-0'
        modules={[Keyboard]}
        keyboard={{ enabled: true }}
        observer
        observeParents
        onSwiper={(instance) => {
          swiper.current = instance;
        }}
        spaceBetween={16}
        slidesPerView={1.3}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide
            key={product.id}
            className='h-auto pb-1'
            role='group'
            aria-roledescription='slide'
            aria-label={`${i + 1} of ${products.length}`}
          >
            <ProductThumbnail product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
