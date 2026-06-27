/* eslint-disable @next/next/no-img-element */
import React from "react";
import GodrejInterioLogo from "@/assets/svg/godrej-interio.svg";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";
import InstagramReels from "@/components/instagram-reel/InstagramReels";
import CustomerReviews from "@/components/customer-reviews-slider/CustomerReviews";
import Reveal from "@/components/animations/Reveal";
import {
  ArrowRight,
  CreditCard,
  Headset,
  Ruler,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fast & Free delivery*",
    desc: "Enjoy free delivery based on your location, ensuring your furniture arrives in pristine condition",
  },
  {
    icon: Ruler,
    title: "Home measurements*",
    desc: "Ensure a perfect fit for your new furniture before you buy. Schedule a complimentary home visit by our team",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    desc: "Our expert team provides seamless, hassle-free installation for all your furniture pieces.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Warranty",
    desc: "Rest assured with our extensive warranty coverage against manufacturing defects for peace of mind.",
  },
  {
    icon: Headset,
    title: "Timely support",
    desc: "Our friendly team is here to assist you with selection, product care, and any after-sales queries.",
  },
  {
    icon: CreditCard,
    title: "Flexible EMI Options",
    desc: "Available affordable and easy monthly instalment plans available with leading banks.",
  },
];

const MainPage = () => {
  return (
    <div className='main-page'>
      {/* Section-1 The Intro — above the fold, so it animates in on LOAD with a
          CSS-only entrance (not a scroll reveal). Pure CSS keeps the LCP <h1>
          out of the JS hydration path and visible even without JavaScript. */}
      <section className='flex flex-col min-h-[100svh] md:h-[100svh] animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out motion-reduce:animate-none'>
        <h1 className='font-heading italic text-2xl sm:text-3xl lg:text-4xl text-center py-6 sm:py-8 bg-orange-100 mt-24 md:mt-[140px]'>
          M Rajkamal: Your Destination for Fine Living Since 1962.
        </h1>
        <div className='flex items-center flex-1'>
          <div className='max-w-[1200px] w-full px-4 sm:px-6 lg:px-8 mx-auto'>
            <div className='flex flex-col md:flex-row gap-10 md:gap-12 py-10 md:py-0'>
              <div className='flex flex-1 flex-col gap-y-6'>
                <div className='article-header space-y-6'>
                  <h2 className='font-heading italic text-3xl sm:text-4xl lg:text-5xl font-medium'>
                    Furniture
                  </h2>
                  <p className='text-base sm:text-lg leading-7 font-light text-gray-600'>
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
              <div className='flex flex-1 flex-col md:text-right md:flex-col-reverse gap-y-6'>
                <div className='article-header space-y-6'>
                  <h2 className='font-heading italic text-3xl sm:text-4xl lg:text-5xl font-medium'>
                    Home Lockers
                  </h2>
                  <p className='text-base sm:text-lg leading-7 font-light text-gray-600'>
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
      <Reveal className='py-14 md:py-20 lg:py-[90px] bg-orange-100'>
        <div className='max-w-[1200px] px-4 mx-auto text-center'>
          <div className='flex flex-col gap-6'>
            <h3 className='font-heading italic text-3xl sm:text-4xl lg:text-[42px]'>
              Authorised Partner of
            </h3>
            <div className='flex flex-wrap justify-center items-center gap-4'>
              <GodrejInterioLogo className='w-40 sm:w-52 lg:w-60 h-auto mix-blend-darken' />
              <img
                src={"/images/authorised-partner.png"}
                alt='authorised-badge'
                className='h-14 sm:h-16 lg:h-20 w-auto'
              />
            </div>
            <div className='text-center'>
              <a
                target='_blank'
                href='https://interio.com/furniture-stores/Maharashtra/Mumbai/Near-Sena-Bhawan/WDX004801'
                className='inline-flex items-center gap-x-1 bg-primary text-background w-fit mx-auto rounded-full px-4 py-2 font-semibold'
              >
                Interio by Godreg <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
      {/* Section-4 Featured Products*/}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <div className='max-w-[1200px] px-4 mx-auto text-center'>
          <div className='flex flex-col gap-10'>
            <h3 className='font-heading italic text-3xl sm:text-4xl lg:text-[42px]'>
              Featured Products
            </h3>
            {/* Featured Products Slider */}
            <FeaturedProducts></FeaturedProducts>
          </div>
        </div>
      </Reveal>
      {/* Section-5 Materials */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <div className='max-w-[1200px] px-4 mx-auto text-center'>
          <div className='flex flex-col md:flex-row md:items-center md:flex-row-reverse gap-8'>
            <div className='w-full md:flex-1'>
              <img
                src='/images/home-1.png'
                alt='finest material'
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className='w-full md:flex-1 text-left space-y-4 md:pr-10'>
              <p className='uppercase tracking-widest text-destructive font-bold'>
                Materials
              </p>
              <h2 className='font-heading italic text-3xl sm:text-4xl lg:text-[42px]'>
                Selecting the finest materials for your furniture
              </h2>
              <p className='leading-8 text-base sm:text-[18px] font-light text-gray-600'>
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
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <div className='max-w-[1200px] px-4 mx-auto text-center'>
          <div className='flex flex-col gap-10'>
            <h3 className='font-heading italic text-3xl sm:text-4xl lg:text-[42px]'>
              Services We Provide
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-[80px] mt-8'>
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className='space-y-3'>
                  <div className='mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h6 className='font-semibold text-lg'>{title}</h6>
                  <p className='font-light text-gray-600'>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      {/* Section-7 Experience */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <div className='max-w-[1200px] px-4 mx-auto text-center'>
          <div className='flex flex-col md:flex-row md:items-center gap-8'>
            <div className='w-full md:flex-1'>
              <img
                src='/images/home-2.png'
                alt='finest material'
                className='w-full h-auto rounded-2xl'
              />
            </div>
            <div className='w-full md:flex-1 text-left space-y-4 md:pl-10'>
              <p className='uppercase tracking-widest text-destructive font-bold'>
                Experiences
              </p>
              <h2 className='font-heading italic text-3xl sm:text-4xl lg:text-[42px]'>
                We provide you the best Experience
              </h2>
              <p className='leading-8 text-base sm:text-[18px] font-light text-gray-600'>
                Your satisfaction is our focus. From personalised consultations
                to seamless service, we ensure a delightful experience and
                furniture that makes your house a true home.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      {/* Section-8 Instagram Reels */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <div className='max-w-[1200px] px-4 mx-auto'>
          <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-end'>
            <div>
              <h3 className='font-heading italic text-2xl sm:text-3xl lg:text-[32px]'>
                Connect with us on Instagram
              </h3>
              <h3 className='inline-block font-heading text-3xl sm:text-4xl lg:text-[42px] bg-gradient-to-r from-[#fd1d1d] to-[#833ab4] bg-clip-text text-transparent'>
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
          {/* Instagram Reels Slider */}
          <div className='my-8'>
            <InstagramReels />
          </div>
        </div>
      </Reveal>
      {/* Section-9 Customer Reviews */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <div className='max-w-[1200px] px-4 mx-auto'>
          <h3 className='font-heading italic text-center text-3xl sm:text-4xl lg:text-[42px]'>
            Customer reviews
          </h3>
          {/* Customer Reviews Slider */}
          <div className='my-8'>
            <CustomerReviews />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default MainPage;
