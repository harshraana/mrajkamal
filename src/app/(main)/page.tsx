/* eslint-disable @next/next/no-img-element */
import React from "react";
import GodrejInterioLogo from "@/assets/svg/godrej-interio.svg";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";
import InstagramReels from "@/components/instagram-reel/InstagramReels";
import CustomerReviews from "@/components/customer-reviews-slider/CustomerReviews";
import Reveal from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const MainPage = () => {
  return (
    <div className='main-page'>
      {/* Section-1 The Intro — above the fold, so it animates in on LOAD with a
          CSS-only entrance (not a scroll reveal). Pure CSS keeps the LCP <h1>
          out of the JS hydration path and visible even without JavaScript. */}
      <section className='flex flex-col h-[100svh] animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out motion-reduce:animate-none'>
        <h1 className='font-heading italic text-4xl text-center py-8 bg-orange-100 mt-[140px]'>
          M Rajkamal: Your Destination for Fine Living Since 1962.
        </h1>
        <div className='flex items-center flex-1'>
          <div className='max-w-[1200px] px-2 mx-auto'>
            <div className='flex flex-wrap px-2 gap-12'>
              <div className='flex flex-1 flex-col gap-y-6'>
                <div className='article-header space-y-6'>
                  <h2 className='font-heading italic text-5xl font-medium'>
                    Furniture
                  </h2>
                  <p className='text-lg leading-7 font-light text-gray-600'>
                    Experience the art of living with our exquisite furniture
                    collections. From timeless classics to modern designs, we
                    blend quality, comfort, and traditional craftsmanship to
                    elevate your spaces.
                  </p>
                </div>
                <div className='article-image aspect-15/12 overflow-hidden rounded-2xl'>
                  <img
                    src={"/images/furniture.png"}
                    alt='img-furniture'
                    className='h-full w-full object-top object-cover'
                  />
                </div>
              </div>
              <div className='flex flex-1 text-right flex-col-reverse gap-y-6'>
                <div className='article-header space-y-6'>
                  <h2 className='font-heading italic  text-5xl font-medium'>
                    Home Lockers
                  </h2>
                  <p className='text-lg leading-7 font-light text-gray-600'>
                    Secure your most valued possessions in style. Our premium
                    range of home lockers features intelligent locking systems
                    and sophisticated design for peace of mind.
                  </p>
                </div>
                <div className='article-image aspect-15/12 overflow-hidden rounded-2xl'>
                  <img
                    src={"/images/lockers.png"}
                    alt='img-lockers'
                    className='h-full w-full object-top object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-2 Authorised Partner */}
      <Reveal className='py-[90px] bg-orange-100'>
        <div className='max-w-[1200px] px-2 mx-auto text-center'>
          <div className='flex flex-col gap-6'>
            <h3 className='font-heading italic text-[42px]'>
              Authorised Partner of
            </h3>
            <div className='flex justify-center'>
              <GodrejInterioLogo
                height={125}
                width={"auto"}
                className='w-auto mix-blend-darken'
              />
              <img
                src={"/images/authorised-partner.png"}
                alt='authorised-badge'
                className='h-20'
              />
            </div>
            <div className='text-center'>
              <a
                target='_blank'
                href='https://interio.com/furniture-stores/Maharashtra/Mumbai/Near-Sena-Bhawan/WDX004801'
                className='inline-flex items-center gap-x-1 bg-primary text-background w-fit rounded-full px-4 py-2 font-semibold'
              >
                Interio by Godreg <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
      {/* Section-4 Featured Products*/}
      <Reveal className='my-[145px]'>
        <div className='max-w-[1200px] px-2 mx-auto text-center'>
          <div className='flex flex-col gap-10'>
            <h3 className='font-heading italic text-[42px]'>
              Featured Products
            </h3>
            {/* Featured Products Slider */}
            <FeaturedProducts></FeaturedProducts>
          </div>
        </div>
      </Reveal>
      {/* Section-5 Materials */}
      <Reveal className='my-[145px]'>
        <div className='max-w-[1200px] px-2 mx-auto text-center'>
          <div className='flex items-center flex-row-reverse'>
            <div className='flex-1'>
              <img src='/images/home-1.png' alt='finest material' />
            </div>
            <div className='flex-1 text-left space-y-4 pr-10'>
              <p className='uppercase tracking-widest text-destructive font-bold'>
                Materials
              </p>
              <h2 className='font-heading italic text-[42px]'>
                Selecting the finest materials for your furniture
              </h2>
              <p className='leading-8 text-[18px] font-light text-gray-600'>
                We meticulously source high-grade, sustainable timber, premium
                upholstery fabrics, durable metals, and non-toxic finishes from
                across the globe. Our dedication to material quality ensures
                long-lasting durability and absolute safety for your family.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      {/* Section-6 Services we provide */}
      <Reveal className='my-[145px]'>
        <div className='max-w-[1200px] px-2 mx-auto text-center'>
          <div className='flex flex-col gap-10'>
            <h3 className='font-heading italic text-[42px]'>
              Services We Provide
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-[80px] mt-8'>
              <div className='space-y-3'>
                <div className='rounded-2xl bg-gray-200 h-[60px] w-[60px] mx-auto'></div>
                <h6 className='font-semibold text-lg'>Fast & Free delivery*</h6>
                <p className='font-light text-gray-600'>
                  Enjoy free delivery based on your location, ensuring your
                  furniture arrives in pristine condition
                </p>
              </div>
              <div className='space-y-3'>
                <div className='rounded-2xl bg-gray-200 h-[60px] w-[60px] mx-auto'></div>
                <h6 className='font-semibold text-lg'>Home measurements*</h6>
                <p className='font-light text-gray-600'>
                  Ensure a perfect fit for your new furniture before you buy.
                  Schedule a complimentary home visit by our team
                </p>
              </div>
              <div className='space-y-3'>
                <div className='rounded-2xl bg-gray-200 h-[60px] w-[60px] mx-auto'></div>
                <h6 className='font-semibold text-lg'>
                  Professional Installation
                </h6>
                <p className='font-light text-gray-600'>
                  Our expert team provides seamless, hassle-free installation
                  for all your furniture pieces.
                </p>
              </div>
              <div className='space-y-3'>
                <div className='rounded-2xl bg-gray-200 h-[60px] w-[60px] mx-auto'></div>
                <h6 className='font-semibold text-lg'>
                  Comprehensive Warranty
                </h6>
                <p className='font-light text-gray-600'>
                  Rest assured with our extensive warranty coverage against
                  manufacturing defects for peace of mind.
                </p>
              </div>
              <div className='space-y-3'>
                <div className='rounded-2xl bg-gray-200 h-[60px] w-[60px] mx-auto'></div>
                <h6 className='font-semibold text-lg'>Timely support</h6>
                <p className='font-light text-gray-600'>
                  Our friendly team is here to assist you with selection,
                  product care, and any after-sales queries.
                </p>
              </div>
              <div className='space-y-3'>
                <div className='rounded-2xl bg-gray-200 h-[60px] w-[60px] mx-auto'></div>
                <h6 className='font-semibold text-lg'>Flexible EMI Options</h6>
                <p className='font-light text-gray-600'>
                  Available affordable and easy monthly instalment plans
                  available with leading banks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      {/* Section-7 Experience */}
      <Reveal className='my-[145px]'>
        <div className='max-w-[1200px] px-2 mx-auto text-center'>
          <div className='flex items-center '>
            <div className='flex-1'>
              <img src='/images/home-2.png' alt='finest material' />
            </div>
            <div className='flex-1 text-left space-y-4 pl-10'>
              <p className='uppercase tracking-widest text-destructive font-bold'>
                Experiences
              </p>
              <h2 className='font-heading italic text-[42px]'>
                We provide you the best Experience
              </h2>
              <p className='leading-8 text-[18px] font-light text-gray-600'>
                Your satisfaction is our focus. From personalised consultations
                to seamless service, we ensure a delightful experience and
                furniture that makes your house a true home.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      {/* Section-8 Instagram Reels */}
      <Reveal className='my-[145px]'>
        <div className='max-w-[1200px] px-2 mx-auto'>
          <div className='flex justify-between items-end'>
            <div>
              <h3 className='font-heading italic text-[32px]'>
                Connect with us on Instagram
              </h3>
              <h3 className='inline-block font-heading text-[42px] bg-gradient-to-r from-[#fd1d1d] to-[#833ab4] bg-clip-text text-transparent'>
                @mrajkamalfurniture
              </h3>
            </div>
            <a
              target='_blank'
              href={"https://www.instagram.com/mrajkamalfurniture/"}
              className='inline-flex items-center gap-x-2 bg-gradient-to-r from-[#fd1d1d] to-[#833ab4] text-background w-fit rounded-full px-8 pt-2 pb-2.5 font-semibold font-heading text-lg hover:no-underline'
            >
              Open Instagram
              <ArrowRight size={16} strokeWidth={3} className='mt-1' />
            </a>
          </div>
          {/* Featured Products Slider */}
          <div className='my-8'>
            <InstagramReels />
          </div>
        </div>
      </Reveal>
      {/* Section-9 Customer Reviews */}
      <Reveal className='my-[145px]'>
        <div className='max-w-[1200px] px-2 mx-auto'>
          <h3 className='font-heading italic text-center text-[42px]'>
            Customer reviews
          </h3>
          {/* Featured Products Slider */}
          <div className='my-8'>
            <CustomerReviews />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default MainPage;
