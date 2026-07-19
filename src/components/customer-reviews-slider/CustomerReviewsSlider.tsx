"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import CustomerReviewThumb from "../customer-review-thumbnail/CustomerReviewThumb";
import type { Review } from "@/lib/reviews";

/**
 * Store-wide Google reviews (via Featurable) — not the per-product ones.
 *
 * This registered NO Swiper modules at all, which meant no keyboard navigation:
 * everything past the first visible slide was unreachable without a mouse. Of 15
 * reviews, 12 could not be read at all with a keyboard.
 *
 * `Keyboard` only. Swiper's `A11y` module calls `new Date()` at initialiser scope
 * (a11y.mjs:36), which is a non-deterministic call during prerender and fails the
 * build under Cache Components — so the ARIA is written by hand instead.
 */
export default function CustomerReviewsSlider({ reviews }: { reviews: Review[] }) {
  const swiper = useRef<SwiperClass | null>(null);

  // Re-measure when React <Activity> re-shows a hidden route (a hidden container
  // measures 0×0).
  useEffect(() => {
    swiper.current?.update();
  });

  return (
    <div role='region' aria-roledescription='carousel' aria-label='Customer reviews'>
      <Swiper
        modules={[Keyboard]}
        keyboard={{ enabled: true }}
        observer
        observeParents
        onSwiper={(instance) => {
          swiper.current = instance;
        }}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, i) => (
          <SwiperSlide
            key={review.id}
            className='!h-auto'
            role='group'
            aria-roledescription='slide'
            aria-label={`${i + 1} of ${reviews.length}`}
          >
            <CustomerReviewThumb review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
