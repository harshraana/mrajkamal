"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductThumbnail from "../product-thumbnail/ProductThumbnail";

const FeaturedProducts = () => {
  return (
    <Swiper
      className='w-full min-w-0'
      spaceBetween={16}
      slidesPerView={1.3}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      <SwiperSlide>
        <ProductThumbnail />
      </SwiperSlide>
      <SwiperSlide>
        <ProductThumbnail />
      </SwiperSlide>
      <SwiperSlide>
        <ProductThumbnail />
      </SwiperSlide>
      <SwiperSlide>
        <ProductThumbnail />
      </SwiperSlide>
      <SwiperSlide>
        <ProductThumbnail />
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturedProducts;
