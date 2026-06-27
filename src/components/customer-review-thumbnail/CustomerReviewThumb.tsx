/* eslint-disable @next/next/no-img-element */
import StarRattings from "../star-ratting/StarRattings";
import GoogleG from "@/assets/svg/google-g.svg";
import type { Review } from "@/lib/reviews";

const CustomerReviewThumb = ({ review }: { review: Review }) => {
  return (
    <div className='relative flex h-full flex-col rounded-2xl border p-5'>
      <div className='mb-3 flex items-center gap-3'>
        {review.authorAvatar ? (
          <img
            src={review.authorAvatar}
            alt={review.authorName}
            width={40}
            height={40}
            loading='lazy'
            referrerPolicy='no-referrer'
            className='h-10 w-10 shrink-0 rounded-full object-cover'
          />
        ) : (
          <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-heading text-lg'>
            {review.authorName.charAt(0)}
          </span>
        )}
        <div className='min-w-0'>
          <h6 className='truncate font-heading text-lg font-semibold italic tracking-wide'>
            {review.authorName}
          </h6>
          <p className='text-xs text-gray-400'>{review.date}</p>
        </div>
        <GoogleG
          className='ml-auto h-5 w-5 shrink-0'
          aria-label='Google review'
        />
      </div>
      <StarRattings rating={review.rating} size={16} />
      <p className='mt-3 line-clamp-5 text-sm leading-6 text-gray-700'>
        {review.text}
      </p>
    </div>
  );
};

export default CustomerReviewThumb;
