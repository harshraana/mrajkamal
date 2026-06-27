/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className='about-m-rajkamal mt-[60px]'>
        <div className='max-w-[1200px] px-2 mx-auto'>
          <section className='py-[80px]'>
            <div className='flex gap-4 items-center'>
              <div className='flex-2'>
                <div className='content-wrapper max-w-[600px]'>
                  <h1 className='font-heading italic text-4xl mb-6  leading-14'>
                    M Rajkamal – Authorised Godrej Interio Dealer
                  </h1>
                  <h4 className='font-heading text-2xl mb-6'>
                    Three Generations of Trust, Crafted in Steel.
                  </h4>
                  <div className='text-md  leading-6.5'>
                    <p className=' mb-6'>
                      We are a third-generation furniture company rooted in
                      craftsmanship, trust, and a deep passion for thoughtful
                      living spaces. Located in Dadar West, Mumbai, M.
                      Rajkamal has been a trusted name for premium mild steel
                      and wrought iron furniture — built with modern designs,
                      attractive finishes, and uncompromising quality.
                    </p>
                    <p className=' mb-6'>
                      Every piece we create starts with high-grade, thick steel
                      that goes through multiple stages of cleaning, de-rusting,
                      and anti-corrosive treatment, ensuring furniture that is
                      built to last. Our powder-coated and wooden-finished
                      products bring together durability and aesthetic elegance
                      — whether it&apos;s office furniture, wall units, wardrobe
                      sets, sofa-cum-beds, or custom storage solutions.
                    </p>
                    <p className=' mb-6'>
                      What truly sets us apart is our commitment
                      to made-to-measure craftsmanship. We visit your space,
                      take precise measurements, understand your requirements,
                      and suggest designs that make the most of every inch — so
                      no space ever goes to waste. Your room, your size, your
                      style.
                    </p>
                    <p className=' mb-6'>
                      As an authorised Godrej Interio dealer, we also offer a
                      curated selection of sofas, wardrobes, lockers, beds, and
                      more — combining trusted quality with designs that elevate
                      everyday living.
                    </p>
                    <p className=' mb-6'>
                      With a loyal customer base spread across Mumbai and
                      Maharashtra, we take pride in delivering furniture that
                      doesn&apos;t just fill a room — it completes it.
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex-1'>
                <div className='image-wrapper border-3 border-primary rounded-full p-2 shadow-2xl'>
                  <img
                    src='/images/about-mrajkamal.png'
                    alt='about-mrajkamal.png'
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </section>
          <section className='py-[80px]'>
            <div className='flex gap-4 items-center'>
              <div className='flex-2 pr-6'>
                <div className='map-wrapper'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9269159149285!2d72.83575527691664!3d19.022941853632894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec542443581%3A0x2bf3f57a345df79a!2sGodrej%20Interio%20-%20M%20Rajkamal%20Furniture!5e0!3m2!1sen!2sin!4v1778680164102!5m2!1sen!2sin'
                    allowFullScreen={true}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='rounded-2xl shadow-2xl h-[500px] w-full'
                  ></iframe>
                </div>
              </div>
              <div className='flex-1'>
                <div className='content-wrapper pl-4'>
                  <h4 className='text-3xl font-heading italic mb-6'>
                    Visit Our Store
                  </h4>
                  <p className='text-md leading-6.5 mb-6'>
                    7, Haji Ebrahim Patel Trust Building Junction of Gokhale
                    Road, and, Ranade Rd, Dadar West, Dadar, Mumbai, Maharashtra
                    400028
                  </p>
                  <p className='text-md leading-4 font-semibold mb-3'>
                    Opens:
                    <span className='ml-2 italic font-normal'>
                      10am - 8pm (Tuesday to Sunday)
                    </span>
                  </p>
                  <p className='text-md leading-4 font-semibold mb-6'>
                    Closed:
                    <span className='ml-2 italic font-normal'>On Mondays</span>
                  </p>

                  <hr className='my-6' />
                  <h4 className='text-2xl font-heading mb-6'>Contact</h4>
                  <p className='text-md leading-4 font-semibold mb-3'>
                    Phone:
                    <a
                      className='ml-2 italic font-normal'
                      href='tel:983 353 3076'
                    >
                      +91 983 353 3076
                    </a>
                  </p>
                  <p className='text-md leading-4 font-semibold mb-6'>
                    Email:
                    <a
                      className='ml-2 italic font-normal'
                      href='mailto:mrajkamalfurniture@gmail.com'
                    >
                      mrajkamalfurniture@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
