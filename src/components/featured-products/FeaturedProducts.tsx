"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductThumbnail from "../product-thumbnail/ProductThumbnail";

const FeaturedProducts = () => {
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
      </div>
    </>
  );
};

export default FeaturedProducts;
