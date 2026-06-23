"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerReviewThumb from "../customer-review-thumbnail/CustomerReviewThumb";

const CustomerReviews = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CustomerReviewThumb />
      </SwiperSlide>
      <SwiperSlide>
        <CustomerReviewThumb />
      </SwiperSlide>
      <SwiperSlide>
        <CustomerReviewThumb />
      </SwiperSlide>
      <SwiperSlide>
        <CustomerReviewThumb />
      </SwiperSlide>
      <SwiperSlide>
        <CustomerReviewThumb />
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomerReviews;
