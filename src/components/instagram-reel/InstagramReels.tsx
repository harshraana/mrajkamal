"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReelThumbnail from "../reel-thumbnail/ReelThumbnail";

const InstagramReels = () => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ReelThumbnail />
          </SwiperSlide>
          <SwiperSlide>
            <ReelThumbnail />
          </SwiperSlide>
          <SwiperSlide>
            <ReelThumbnail />
          </SwiperSlide>
          <SwiperSlide>
            <ReelThumbnail />
          </SwiperSlide>
          <SwiperSlide>
            <ReelThumbnail />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default InstagramReels;
