"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ReelThumbnail from "../reel-thumbnail/ReelThumbnail";
import type { Reel } from "@/lib/instagram";

const InstagramReelsSlider = ({ reels }: { reels: Reel[] }) => {
  return (
    <Swiper
      spaceBetween={6}
      slidesPerView={2.2}
      breakpoints={{ 768: { slidesPerView: 4, spaceBetween: 16 } }}
    >
      {reels.map((reel) => (
        <SwiperSlide key={reel.id}>
          <ReelThumbnail reel={reel} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InstagramReelsSlider;
