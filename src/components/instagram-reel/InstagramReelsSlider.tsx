"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import ReelThumbnail from "../reel-thumbnail/ReelThumbnail";
import type { Reel } from "@/lib/instagram";

/**
 * `Keyboard` only — Swiper's `A11y` module calls `new Date()` at initialiser
 * scope, which fails the prerender under Cache Components. ARIA written by hand.
 * Registering no modules at all (the original) left every slide past the first
 * unreachable without a mouse.
 */
export default function InstagramReelsSlider({ reels }: { reels: Reel[] }) {
  const swiper = useRef<SwiperClass | null>(null);

  useEffect(() => {
    swiper.current?.update();
  });

  return (
    <div role='region' aria-roledescription='carousel' aria-label='Instagram reels'>
      <Swiper
        modules={[Keyboard]}
        keyboard={{ enabled: true }}
        observer
        observeParents
        onSwiper={(instance) => {
          swiper.current = instance;
        }}
        spaceBetween={6}
        slidesPerView={2.2}
        breakpoints={{ 768: { slidesPerView: 4, spaceBetween: 16 } }}
      >
        {reels.map((reel, i) => (
          <SwiperSlide
            key={reel.id}
            role='group'
            aria-roledescription='slide'
            aria-label={`${i + 1} of ${reels.length}`}
          >
            <ReelThumbnail reel={reel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
