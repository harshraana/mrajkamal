import React from "react";
import StarRattings from "../star-ratting/StarRattings";

const CustomerReviewThumb = () => {
  return (
    <div className='relative border rounded-2xl p-4'>
      <div className='mb-4'>
        <h6 className='font-heading text-lg italic font-semibold tracking-wider'>
          Harsh Rana
        </h6>
        <p className='text-xs text-gray-400'>Ahmedabad</p>
      </div>
      <p className='mb-4'>
        “We are in love with our new wardrobe set! The quality is exceptional,
        and it has so much functional storage space.“
      </p>
      <StarRattings />
    </div>
  );
};

export default CustomerReviewThumb;
