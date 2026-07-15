import Image from "next/image";
import StarRattings from "../star-ratting/StarRattings";
import GoogleG from "@/assets/svg/google-g.svg";
import type { Review } from "@/lib/reviews";

export default function CustomerReviewThumb({ review }: { review: Review }) {
  return (
    <div className='relative flex h-full flex-col rounded-2xl border border-border p-5'>
      <div className='mb-3 flex items-center gap-3'>
        {review.authorAvatar ? (
          // next/image, not a raw <img>. The avatars come from
          // lh3.googleusercontent.com, which is allowlisted in next.config.ts.
          <Image
            src={review.authorAvatar}
            alt=''
            width={40}
            height={40}
            loading='lazy'
            className='h-10 w-10 shrink-0 rounded-full object-cover'
          />
        ) : (
          <span
            aria-hidden='true'
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-heading text-lg'
          >
            {review.authorName.charAt(0)}
          </span>
        )}

        <div className='min-w-0'>
          {/* An <h3>, not an <h6>. The footer and these cards used <h6> purely
              for its size, which left holes all over the document outline. */}
          <h3 className='truncate font-heading text-lg font-semibold tracking-wide italic'>
            {review.authorName}
          </h3>
          {/* text-gray-500, not gray-400: the audit measured gray-400 on this
              background at 2.47:1, which fails WCAG AA for small text. */}
          <p className='text-xs text-gray-500'>{review.date}</p>
        </div>

        <GoogleG className='ml-auto h-5 w-5 shrink-0' aria-label='Google review' />
      </div>

      <StarRattings rating={review.rating} size={16} />

      <p className='mt-3 line-clamp-5 text-sm leading-6 text-gray-700'>{review.text}</p>
    </div>
  );
}
