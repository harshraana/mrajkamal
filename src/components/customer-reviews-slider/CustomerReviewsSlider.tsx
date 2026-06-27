"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerReviewThumb from "../customer-review-thumbnail/CustomerReviewThumb";
import type { Review } from "@/lib/reviews";

const CustomerReviewsSlider = ({ reviews }: { reviews: Review[] }) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id} className='!h-auto'>
          <CustomerReviewThumb review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerReviewsSlider;
