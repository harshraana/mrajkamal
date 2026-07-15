import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import { Button } from "@/components/ui/button";

/**
 * An async Server Component that fetches, then hands plain data to a thin client
 * slider — the same shape as <CustomerReviews> and <InstagramReels>. The Swiper
 * is the only thing that has to be client-side.
 *
 * Renders nothing at all when there are no featured products, rather than an
 * empty carousel. The section heading lives here too, so it disappears with it.
 */
export default async function FeaturedProducts({ heading }: { heading: string }) {
  const products = await getFeaturedProducts();
  if (products.length === 0) return null;

  return (
    <div className='flex flex-col gap-10'>
      <h2 className='font-heading text-3xl italic sm:text-4xl lg:text-[42px]'>{heading}</h2>

      <FeaturedProductsSlider products={products} />

      <div>
        <Link href='/products' className='hover:no-underline'>
          <Button variant='outline' size='lg'>
            See all products
          </Button>
        </Link>
      </div>
    </div>
  );
}
