import StarRattings from "@/components/star-ratting/StarRattings";
import type { ProductDetailDTO, ReviewDTO } from "@/types";

/**
 * The per-product reviews (admin-managed) — distinct from the store-wide Google
 * reviews slider on the home page.
 *
 * These are the SAME reviews that go into the Product JSON-LD's `review` array.
 * That is not a coincidence and must stay true: Google's policy is that marked-up
 * reviews have to be visible on the page. Rendering from the same `reviews` prop
 * the JSON-LD is built from is what guarantees it.
 *
 * `review.text` is PLAIN TEXT — rendered as `{text}`, never as HTML. There is no
 * rich-text editor behind it, so there is no XSS surface to defend.
 */
export default function ProductReviews({
  product,
  reviews,
}: {
  product: ProductDetailDTO;
  reviews: ReviewDTO[];
}) {
  if (reviews.length === 0) return null;

  return (
    <section aria-labelledby='reviews-heading' className='mt-16 lg:mt-24'>
      <div className='mb-6 flex flex-wrap items-center gap-3'>
        <h2 id='reviews-heading' className='font-heading text-2xl italic sm:text-3xl'>
          Customer reviews
        </h2>
        <div className='flex items-center gap-2'>
          <StarRattings rating={product.ratingAvg} size={16} />
          <span className='text-sm text-gray-600'>
            {product.ratingAvg} out of 5 · {product.ratingCount} review
            {product.ratingCount === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      <ul className='grid gap-4 sm:grid-cols-2'>
        {reviews.map((review) => (
          <li key={review.id} className='rounded-2xl border border-border bg-card p-5'>
            <div className='mb-2 flex items-center justify-between gap-2'>
              <p className='font-medium'>{review.authorName}</p>
              {/* The date was formatted on the SERVER — formatting it here would
                  render differently under a different locale and cause a
                  hydration mismatch. */}
              <time dateTime={review.isoDate} className='text-xs text-gray-500'>
                {review.date}
              </time>
            </div>
            <StarRattings rating={review.rating} size={14} />
            <p className='mt-2 text-sm leading-6 text-gray-700'>{review.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
