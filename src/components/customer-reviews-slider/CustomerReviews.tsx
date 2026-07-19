import { Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/reviews";
import CustomerReviewsSlider from "./CustomerReviewsSlider";
import GoogleG from "@/assets/svg/google-g.svg";
import { Button } from "../ui/button";

const CustomerReviews = async () => {
  const data = await getGoogleReviews();

  if (data.reviews.length === 0) {
    return (
      <p className='py-8 text-center font-light text-gray-500'>
        Reviews are taking a moment — meanwhile, see them on{" "}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://share.google/1wxrIO4Qe7kNsJR5V'
          className='underline'
        >
          Google
        </a>
        .
      </p>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Overall Google rating */}
      <div className='flex flex-col items-center gap-1'>
        <div className='flex items-center gap-2'>
          <GoogleG className='h-6 w-6' aria-hidden='true' />
          <span className='text-lg font-semibold'>
            {data.rating.toFixed(1)}
          </span>
          <Star size={18} fill='orange' stroke='orange' />
          <span className='text-sm text-gray-500'>
            · {data.totalCount} Google reviews
          </span>
        </div>
      </div>
      <CustomerReviewsSlider reviews={data.reviews} />
      <div className='text-center'>
        {data.writeReviewUrl && (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={data.writeReviewUrl}
            className='text-sm text-primary underline'
          >
            <Button size={"lg"} className={"px-6 py-5"}>
              Write your review
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
