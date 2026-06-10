"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import useScriptReinit from "@/hooks/useScriptReinit";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import type { HomeContentDTO, ProductListItemDTO } from "@/types";

interface HomePageProps {
  homeContent: HomeContentDTO;
  featuredProducts: ProductListItemDTO[];
}

const HomePage = ({ homeContent, featuredProducts }: HomePageProps) => {
  useScriptReinit();

  const heroTitleParts = homeContent.heroTitle.split(",").map((s) => s.trim());
  const aboutDescription = homeContent.lockerAdText || homeContent.heroSubtitle;

  return (
    <>
      {/* page-title */}
      <div className='hero-banner-v01'>
        <div className='hero-content'>
          <div className='tf-container w-1246'>
            <div className='row align-items-end'>
              <div className='col-lg-7'>
                <h1 className='hero-banner_title text-capitalize mb_16 mb-lg-0'>
                  {heroTitleParts.length > 1 ? (
                    <>
                      {heroTitleParts[0]}, <br className='lg-hide' />{" "}
                      {heroTitleParts.slice(1).join(", ")}
                    </>
                  ) : (
                    homeContent.heroTitle
                  )}
                </h1>
              </div>
              <div className='col-lg-5 '>
                <div className='content'>
                  <p className=' mb_40'>{homeContent.heroSubtitle}</p>
                  {/*  <Link
                    href='/products'
                    className='btn_link hover-underline-link text-body-default fw-5'
                  >
                    Browse The Collection
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='thumb'>
          <Image
            height={673}
            width={1920}
            sizes={"100vw"}
            priority
            decoding='async'
            src={homeContent.heroBannerUrl}
            alt='hero-banner'
          />
        </div>
      </div>
      {/* /page-title */}
      {/* main-content */}
      <div className='main-content'>
        {/* s-about */}
        <section className='s-about-v01 tf-spacing-11'>
          <div className='tf-container w-1246'>
            <div className='row align-items-center'>
              <div className='col-md-6 mb-md-0 mb_40'>
                <div className='heading-section mb_40 wow fadeInUp '>
                  <h2 className='title text-capitalize  '>
                    featured collections
                  </h2>
                  <p className='desc'>{aboutDescription}</p>
                </div>
                {/* <Link
                  href='/products'
                  className='text-body-default fw-5 hover-underline-link btn_link'
                >
                  Browse The Collection
                </Link> */}
              </div>
              <div className='col-md-6'>
                <div className='thumbs-about'>
                  <Image
                    height={616}
                    width={460}
                    style={{ height: "auto" }}
                    sizes={"(max-width: 768px) 100vw, 50vw"}
                    className='wow fadeInRight'
                    loading='lazy'
                    decoding='async'
                    src={homeContent.lockerAdUrl}
                    alt='Godrej Interio locker display'
                  />
                  <div className='shape-1'></div>
                  <div className='shape-2'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /s-about */}

        {/* Product Main */}
        {featuredProducts.length > 0 && (
          <section className='flat-spacing-10'>
            <div className='tf-container w-1246'>
              <div className='heading-section mb_48 text-center'>
                <h2 className='text-uppercase'>Featured Products</h2>
              </div>
              <div className='tf-grid-layout lg-col-3 tf-col-2'>
                {featuredProducts.map((product) => (
                  <div
                    key={product._id}
                    className='card-product has-price-default loadItem grid'
                  >
                    <div className='card-product_wrapper'>
                      <Link
                        href={`/products/${product.slug}`}
                        className='product-img'
                      >
                        <Image
                          className='img-product'
                          width={338}
                          height={338}
                          loading='lazy'
                          decoding='async'
                          src={product.thumbnailImage}
                          alt={product.name}
                          sizes='(max-width: 768px) 100vw, 338px'
                        />
                      </Link>
                    </div>
                    <div className='card-product_info'>
                      <Link
                        href={`/products/${product.slug}`}
                        className='name-product h6 link d-block'
                      >
                        {product.name}
                      </Link>
                      <div className='price-wrap text-body-default fw-5'>
                        {product.priceLabel ||
                          `₹${product.price.toLocaleString("en-IN")}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='text-center mt_40'>
                <Link
                  href='/products'
                  className='btn-style-1 tf-btn btn-xl radius-3 fw-6 fs-16'
                >
                  View All Products
                </Link>
              </div>
            </div>
          </section>
        )}
        {/* /Product Main */}

        {/* s-colection */}
        <section className='s-colection-v01 '>
          <div className='tf-container w-1246 w-1462  sw-layout'>
            <div className='heading-section mb_48 wow fadeInUp'>
              <h2 className='text-capitalize'>Featured collections</h2>
            </div>
            <div
              className='swiper'
              data-preview='3'
              data-tablet='2'
              data-mobile-sm='2'
              data-mobile='1'
              data-space-lg='30'
              data-space-md='20'
              data-space='15'
            >
              <div className='swiper-wrapper'>
                {homeContent.featuredCategoryImages.map((category, index) => (
                  <div
                    key={`${category.label}-${index}`}
                    className='swiper-slide wow fadeInLeft'
                  >
                    <div className='collection-item hover-image'>
                      <Link href={category.href} className='img-style mb_24'>
                        <Image
                          className='img-cover'
                          width='460'
                          height='608'
                          loading='lazy'
                          decoding='async'
                          src={category.imageUrl}
                          alt={category.label}
                        />
                      </Link>
                      <div className='content '>
                        <Link
                          href={category.href}
                          className='h4 link text-capitalize d-block mb_0'
                        >
                          <h5>{category.label}</h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='sw-dots sw-pagination-layout  text-center mt_24 d-lg-none'></div>
            </div>
          </div>
        </section>
        {/* /s-colection */}

        {/* s-banner */}
        <section className='tf-spacing-1'>
          <div className='s-banner-v02'>
            <div className='banner'>
              <Image
                className='img-cover'
                width='1920'
                height='420'
                loading='eager'
                decoding='async'
                src='/my-assets/banners/sofa-banner.png'
                alt='banner'
              />
            </div>
            <div className='content'>
              <div className='tf-container w-1246 w-1462'>
                <div className='wow fadeInUp'>
                  <div className='title mb_40'>
                    <h2 className='text-capitalize mb_24'>elevate your home</h2>
                    <p className='text-body-default'>
                      Clever products for every corner
                    </p>
                  </div>
                  <Link
                    href='/products'
                    className='tf-btn btn-bg-white animate-fill  btn-rounded btn-px-40 '
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /s-banner */}

        {/* s-testimonials */}
        <TestimonialsSection />
        {/* /s-testimonials */}

        {/* s-banner-lookbook */}
        <section className='tf-spacing-3 s-banner-lookbook sw-layout'>
          <div className='heading-seciton mb_57 text-center'>
            <h2 className='title'>Lockers specifications</h2>
          </div>
          <div className=' tf-container w-1246 position-relative'>
            <div
              className='swiper'
              data-preview='1'
              data-tablet='1'
              data-mobile-sm='1'
              data-mobile='1'
              data-space-lg='15'
              data-space-md='15'
              data-space='15'
            >
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='position-relative'>
                    <Image
                      height={1}
                      width={1}
                      sizes={"100vw"}
                      className='img-banner'
                      src='/my-assets/banners/10X-stronger.png'
                      data-src='/assets/images/banner/furniture.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='position-relative'>
                    <Image
                      height={1}
                      width={1}
                      sizes={"100vw"}
                      className='img-banner'
                      src='/my-assets/banners/100X-stronger.png'
                      data-src='/assets/images/banner/furniture.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='position-relative'>
                    <Image
                      height={1}
                      width={1}
                      sizes={"100vw"}
                      className='img-banner'
                      src='/my-assets/banners/250X-stronger.png'
                      data-src='/assets/images/banner/furniture.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='position-relative'>
                    <Image
                      height={1}
                      width={1}
                      sizes={"100vw"}
                      className='img-banner'
                      src='/my-assets/banners/Fire-resistant.png'
                      data-src='/assets/images/banner/furniture.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='wrap-sw-button d-flex gap_15'>
              <div className='sw-button style-default nav-prev-layout'>
                <i className='icon-caret-left'></i>
              </div>
              <div className='sw-button style-default nav-next-layout'>
                <i className='icon-caret-right'></i>
              </div>
            </div>
          </div>
        </section>
        {/* /s-banner-lookbook */}

        <div className='tf-container w-1246 w-1548 tf-spacing-10'>
          <div className='heading-section mb_48 text-center'>
            <h2 className='text-uppercase '>visit our store</h2>
          </div>
          <div className='wg-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9269159149285!2d72.83575527691664!3d19.022941853632894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec542443581%3A0x2bf3f57a345df79a!2sGodrej%20Interio%20-%20M%20Rajkamal%20Furniture!5e0!3m2!1sen!2sin!4v1778680164102!5m2!1sen!2sin'
              width='1440'
              height='589'
              style={{ border: "0", width: "100%" }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>

        {/* s-customer-services */}
        <div className='s-customer-services-v01 tf-spacing-10 sw-layout'>
          <div className='tf-container w-1246  w-1462 '>
            <div
              className='swiper'
              data-preview='4'
              data-tablet='3'
              data-mobile-sm='2'
              data-mobile='1'
              data-space-lg='59'
              data-space-md='20'
              data-space='15'
            >
              <div className='swiper-wrapper justify-content-center'>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='box-icon_v01  style-col'>
                    <div className='icon'>
                      <i className='icon-shipping'></i>
                    </div>
                    <div className='content'>
                      <p className=' mb_10 fw-7 text-capitalize'>
                        Fast & Free Delivery
                      </p>
                      <p className='text-body-default fw-3'>
                        We offer free shipping with ground delivery worldwide
                      </p>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='box-icon_v01  style-col'>
                    <div className='icon'>
                      <i className='icon-support'></i>
                    </div>
                    <div className='content'>
                      <p className='mb_12 text-capitalize fw-7'>
                        online support
                      </p>
                      <p className='text-body-default fw-3'>
                        Online Support24 hours a day,{" "}
                        <br className='d-none d-xxl-block' /> 7 days a week.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sw-dots sw-pagination-layout text-center mt_24'></div>
            </div>
          </div>
        </div>
        {/* /s-customer-services */}

        {/* s-instagram */}
        <section className='flat-spacing pt-0 pb-xl-0 sw-layout tf-spacing-3'>
          <div className='container'>
            <div className='sect-title text-center wow fadeInUp mb_48'>
              <h2 className='text-capitalize'>follow our instagram</h2>
            </div>
          </div>
          <div
            dir='ltr'
            className='swiper tf-swiper wow fadeInUp'
            data-screen-xl='6'
            data-preview='5'
            data-tablet='4'
            data-mobile-sm='3'
            data-mobile='2'
            data-space-lg='0'
            data-space-md='0'
            data-space='0'
            data-pagination='2'
          >
            <div className='swiper-wrapper'>
              {/* item 1 */}
              <div className='swiper-slide'>
                <div className='gallery-item hover-img hover-overlay'>
                  <div className='image img-style'>
                    <Image
                      loading='lazy'
                      decoding='async'
                      width='320'
                      height='320'
                      src='/assets/images/sections/ins-1.jpg'
                      alt='Image'
                    />
                  </div>
                  <Link href='/products' className='box-icon hover-tooltip'>
                    <span className='icon icon-instagram'></span>
                    <span className='tooltip'>View product</span>
                  </Link>
                </div>
              </div>
              {/* item 2 */}
              <div className='swiper-slide'>
                <div className='gallery-item hover-img hover-overlay'>
                  <div className='image img-style'>
                    <Image
                      loading='lazy'
                      decoding='async'
                      width='320'
                      height='320'
                      src='/assets/images/sections/ins-2.jpg'
                      alt='Image'
                    />
                  </div>
                  <Link href='/products' className='box-icon hover-tooltip'>
                    <span className='icon icon-instagram'></span>
                    <span className='tooltip'>View product</span>
                  </Link>
                </div>
              </div>
              {/* item 3 */}
              <div className='swiper-slide'>
                <div className='gallery-item hover-img hover-overlay'>
                  <div className='image img-style'>
                    <Image
                      loading='lazy'
                      decoding='async'
                      width='320'
                      height='320'
                      src='/assets/images/sections/ins-3.jpg'
                      alt='Image'
                    />
                  </div>
                  <Link href='/products' className='box-icon hover-tooltip'>
                    <span className='icon icon-instagram'></span>
                    <span className='tooltip'>View product</span>
                  </Link>
                </div>
              </div>
              {/* item 4 */}
              <div className='swiper-slide'>
                <div className='gallery-item hover-img hover-overlay'>
                  <div className='image img-style'>
                    <Image
                      loading='lazy'
                      decoding='async'
                      width='320'
                      height='320'
                      src='/assets/images/sections/ins-4.jpg'
                      alt='Image'
                    />
                  </div>
                  <Link href='/products' className='box-icon hover-tooltip'>
                    <span className='icon icon-instagram'></span>
                    <span className='tooltip'>View product</span>
                  </Link>
                </div>
              </div>
              {/* item 5 */}
              <div className='swiper-slide'>
                <div className='gallery-item hover-img hover-overlay'>
                  <div className='image img-style'>
                    <Image
                      loading='lazy'
                      decoding='async'
                      width='320'
                      height='320'
                      src='/assets/images/sections/ins-5.jpg'
                      alt='Image'
                    />
                  </div>
                  <Link href='/products' className='box-icon hover-tooltip'>
                    <span className='icon icon-instagram'></span>
                    <span className='tooltip'>View product</span>
                  </Link>
                </div>
              </div>
              {/* item 6 */}
              <div className='swiper-slide'>
                <div className='gallery-item hover-img hover-overlay'>
                  <div className='image img-style'>
                    <Image
                      loading='lazy'
                      decoding='async'
                      width='320'
                      height='320'
                      src='/assets/images/sections/ins-6.jpg'
                      alt='Image'
                    />
                  </div>
                  <Link href='/products' className='box-icon hover-tooltip'>
                    <span className='icon icon-instagram'></span>
                    <span className='tooltip'>View product</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='sw-dots sw-pagination-layout text-center mt_24'></div>
          </div>
        </section>
        {/* /s-instagram */}
      </div>
      {/* /main-content */}
    </>
  );
};

export default HomePage;
