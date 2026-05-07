import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      {" "}
      {/* page-title */}
      <div className='hero-banner-v01'>
        <div className='hero-content'>
          <div className='tf-container'>
            <div className='row align-items-end'>
              <div className='col-lg-7'>
                <h1 className='hero-banner_title text-capitalize mb_16 mb-lg-0'>
                  Modern Living, <br className='lg-hide' /> Redefined
                </h1>
              </div>
              <div className='col-lg-5 '>
                <div className='content'>
                  <p className=' mb_40'>
                    Discover sleek designs and timeless comfort — furniture made
                    to elevate your everyday space.
                  </p>
                  <Link
                    href='/shop'
                    className='btn_link hover-underline-link text-body-default fw-5'
                  >
                    Browse The Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='thumb'>
          <Image
            height={673}
            width={1920}
            sizes={"100vh"}
            loading='eager'
            decoding='async'
            src='/assets/images/sections/hero-banner-1.jpg'
            alt='hero-banner'
          />
        </div>
      </div>
      {/* /page-title */}
      {/* main-content */}
      <div className='main-content'>
        {/* s-about */}
        <section className='s-about-v01 tf-spacing-11'>
          <div className='tf-container'>
            <div className='row align-items-center'>
              <div className='col-md-6 mb-md-0 mb_40'>
                <div className='heading-section mb_40 wow fadeInUp '>
                  <h2 className='title text-capitalize  '>
                    featured collections
                  </h2>
                  <p className='desc'>
                    Discover sleek designs and timeless comfort — furniture made
                    to elevate your <br className='xl-hide' /> everyday space.
                  </p>
                </div>
                <Link
                  href='/shop'
                  className='text-body-default fw-5 hover-underline-link btn_link'
                >
                  Browse The Collection
                </Link>
              </div>
              <div className='col-md-6'>
                <div className='thumbs-about'>
                  <Image
                    height={598}
                    width={460}
                    sizes={"(max-width: 768px) 100vw, 50vw"}
                    className='wow fadeInRight'
                    loading='lazy'
                    decoding='async'
                    src='/assets/images/sections/s-about-1.png'
                    alt='about'
                    style={{ width: "100%", height: "auto" }}
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
        <section className='s-product-main  tf-container tf-spacing-1 pt-0 flat-animate-tab wow fadeInUp'>
          <div className='heading-seciton text-center mb_50 d-flex justify-content-center justify-content-md-between flex-md-row flex-column align-items-sm-center gap_10 '>
            <h2 className='text-capitalize'>new in</h2>
            <ul className='tab-product_list menu-tab-2' role='tablist'>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#table'
                  data-bs-toggle='tab'
                  className='tf-btn-line h4 text-capitalize tf-btn-tab active'
                >
                  table
                </a>
              </li>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#lighting'
                  data-bs-toggle='tab'
                  className='tf-btn-line h4 text-capitalize tf-btn-tab'
                >
                  Lighting
                </a>
              </li>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#seating'
                  data-bs-toggle='tab'
                  className='tf-btn-line h4 text-capitalize tf-btn-tab'
                >
                  seating
                </a>
              </li>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#decor'
                  data-bs-toggle='tab'
                  className='tf-btn-line h4 text-capitalize tf-btn-tab'
                >
                  decor
                </a>
              </li>
            </ul>
          </div>

          <div className='tab-content'>
            <div className='tab-pane active show' id='table' role='tabpanel'>
              <div className='position-relative sw-layout'>
                <div
                  className='swiper'
                  data-preview='4'
                  data-tablet='3'
                  data-mobile-sm='2'
                  data-mobile='2'
                  data-space-lg='30'
                  data-space-md='20'
                  data-space='15'
                  data-pagination='2'
                  data-pagination-md='2'
                  data-pagination-lg='2'
                >
                  <div className='swiper-wrapper'>
                    {/* ① Altair Lounge Chair */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Altair Lounge Chair
                          </Link>
                          <div className='wrap-price'>
                            <div className='price-wrap text-body-default fw-5'>
                              from <span className='price-new'>$849.00</span>
                            </div>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-warmgray'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Rose</span>
                              <span className='swatch-value bg-palerose'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-rustybrown'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-4.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ② PIA Curved Sofa */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            PIA Curved Sofa
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,249.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ③ Oak Pendant */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Oak Pendant
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$620.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Black
                              </span>
                              <span className='swatch-value bg-black'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-caramelbrown'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3-1.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ④ Nuvola Floor Lamp */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Nuvola Floor Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,799.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-chestnutbrown'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Blue</span>
                              <span className='swatch-value bg-midnightblue'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-2.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-mochagray'></span>
                              <Image
                                height={338}
                                width={338}
                                sizes={"100vh"}
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-3.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ⑤ Core Chair */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Core Chair
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$990.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ⑥ Phase Pendant Lamp */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Phase Pendant Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,299.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sw-dots sw-pagination-layout text-center mt_24 d-lg-none'></div>
                </div>
                <div className='wrap-sw-button'>
                  <div className='sw-button style-default nav-prev-layout'>
                    <i className='icon-caret-left'></i>
                  </div>
                  <div className='sw-button style-default nav-next-layout'>
                    <i className='icon-caret-right'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='tab-pane' id='lighting' role='tabpanel'>
              <div className='position-relative sw-layout'>
                <div
                  className='swiper'
                  data-preview='4'
                  data-tablet='3'
                  data-mobile-sm='2'
                  data-mobile='2'
                  data-space-lg='30'
                  data-space-md='20'
                  data-space='15'
                  data-pagination='2'
                  data-pagination-md='2'
                  data-pagination-lg='2'
                >
                  <div className='swiper-wrapper'>
                    {/* ③ Oak Pendant (1st) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Oak Pendant
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Black
                              </span>
                              <span className='swatch-value bg-black'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-caramelbrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3-1.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ④ Nuvola Floor Lamp (2nd) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Nuvola Floor Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-chestnutbrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Blue</span>
                              <span className='swatch-value bg-midnightblue'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-2.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-mochagray'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-3.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ⑥ Phase Pendant Lamp (3rd) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Phase Pendant Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ① Altair Lounge Chair (4th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-product'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1.jpg'
                              alt='Product'
                            />
                            <Image
                              height={338}
                              width={338}
                              sizes={"100vh"}
                              className='img-hover'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Altair Lounge Chair
                          </Link>
                          <div className='wrap-price'>
                            <div className='price-wrap text-body-default fw-5'>
                              from <span className='price-new'>$1,099.00</span>
                            </div>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-warmgray'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Rose</span>
                              <span className='swatch-value bg-palerose'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-rustybrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-4.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ⑤ Core Chair (5th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Core Chair
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ② PIA Curved Sofa (6th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            PIA Curved Sofa
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sw-dots sw-pagination-layout text-center mt_24 d-lg-none'></div>
                </div>
                <div className='wrap-sw-button'>
                  <div className='sw-button style-default nav-prev-layout'>
                    <i className='icon-caret-left'></i>
                  </div>
                  <div className='sw-button style-default nav-next-layout'>
                    <i className='icon-caret-right'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='tab-pane' id='seating' role='tabpanel'>
              <div className='position-relative sw-layout'>
                <div
                  className='swiper'
                  data-preview='4'
                  data-tablet='3'
                  data-mobile-sm='2'
                  data-mobile='2'
                  data-space-lg='30'
                  data-space-md='20'
                  data-space='15'
                  data-pagination='2'
                  data-pagination-md='2'
                  data-pagination-lg='2'
                >
                  <div className='swiper-wrapper'>
                    {/* ① Altair Lounge Chair (1st) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Altair Lounge Chair
                          </Link>
                          <div className='wrap-price'>
                            <div className='price-wrap text-body-default fw-5'>
                              from <span className='price-new'>$1,099.00</span>
                            </div>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-warmgray'></span>
                              <Image
                                className='img-hover'
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Rose</span>
                              <span className='swatch-value bg-palerose'></span>
                              <Image
                                className='img-hover'
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-rustybrown'></span>
                              <Image
                                className='img-hover'
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-4.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ② PIA Curved Sofa (2nd) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            PIA Curved Sofa
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ⑤ Core Chair (3rd) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Core Chair
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ⑥ Phase Pendant Lamp (4th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Phase Pendant Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ③ Oak Pendant (5th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Oak Pendant
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Black
                              </span>
                              <span className='swatch-value bg-black'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-caramelbrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3-1.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ④ Nuvola Floor Lamp (6th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Nuvola Floor Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-chestnutbrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Blue</span>
                              <span className='swatch-value bg-midnightblue'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-2.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-mochagray'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-3.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sw-dots sw-pagination-layout text-center mt_24 d-lg-none'></div>
                </div>
                <div className='wrap-sw-button'>
                  <div className='sw-button style-default nav-prev-layout'>
                    <i className='icon-caret-left'></i>
                  </div>
                  <div className='sw-button style-default nav-next-layout'>
                    <i className='icon-caret-right'></i>
                  </div>
                </div>
              </div>
            </div>

            <div className='tab-pane' id='decor' role='tabpanel'>
              <div className='position-relative sw-layout'>
                <div
                  className='swiper'
                  data-preview='4'
                  data-tablet='3'
                  data-mobile-sm='2'
                  data-mobile='2'
                  data-space-lg='30'
                  data-space-md='20'
                  data-space='15'
                  data-pagination='2'
                  data-pagination-md='2'
                  data-pagination-lg='2'
                >
                  <div className='swiper-wrapper'>
                    {/* ⑥ Phase Pendant Lamp (1st) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-11-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Phase Pendant Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ⑤ Core Chair (2nd) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Core Chair
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ④ Nuvola Floor Lamp (3rd) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-4-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Nuvola Floor Lamp
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-chestnutbrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Blue</span>
                              <span className='swatch-value bg-midnightblue'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-2.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-mochagray'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-4-3.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ② PIA Curved Sofa (4th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-2-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#shoppingCart'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Add To Cart</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            PIA Curved Sofa
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ① Altair Lounge Chair (5th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-1-1.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Altair Lounge Chair
                          </Link>
                          <div className='wrap-price'>
                            <div className='price-wrap text-body-default fw-5'>
                              from <span className='price-new'>$1,099.00</span>
                            </div>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>Gray</span>
                              <span className='swatch-value bg-warmgray'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>Rose</span>
                              <span className='swatch-value bg-palerose'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-rustybrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-1-4.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* ③ Oak Pendant (6th) */}
                    <div className='swiper-slide'>
                      <div className='card-product has-price-default'>
                        <div className='card-product_wrapper'>
                          <Link
                            href='/products/style-01'
                            className='product-img'
                          >
                            <Image
                              className='img-product'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                            <Image
                              className='img-hover'
                              width='338'
                              height='338'
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                          </Link>
                          <ul className='product-action_list'>
                            <li>
                              <a
                                href='#quickAdd'
                                className='hover-tooltip tooltip-left box-icon'
                                data-bs-toggle='modal'
                              >
                                <span className='icon icon-shopping-cart-simple'></span>
                                <span className='tooltip'>Quick Add</span>
                              </a>
                            </li>
                            <li className='wishlist'>
                              <a
                                href='javascript:void(0);'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-heart'></span>
                                <span className='tooltip'>Add to Wishlist</span>
                              </a>
                            </li>
                            <li className='compare'>
                              <a
                                href='#compare'
                                data-bs-toggle='modal'
                                aria-controls='compare'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-compare'></span>
                                <span className='tooltip'>Compare</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href='#quickView'
                                data-bs-toggle='modal'
                                className='hover-tooltip tooltip-left box-icon'
                              >
                                <span className='icon icon-view'></span>
                                <span className='tooltip'>Quick view</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='card-product_info'>
                          <Link
                            href='/products/style-01'
                            className='name-product h6 link'
                          >
                            Oak Pendant
                          </Link>
                          <div className='price-wrap text-body-default fw-5'>
                            from <span className='price-new'>$1,099.00</span>
                          </div>
                          <ul className='product-color_list justify-content-center'>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large active'>
                              <span className='tooltip color-filter'>
                                Black
                              </span>
                              <span className='swatch-value bg-black'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3.jpg'
                                alt='Product'
                              />
                            </li>
                            <li className='product-color-item color-swatch hover-tooltip tooltip-bot sz-large'>
                              <span className='tooltip color-filter'>
                                Brown
                              </span>
                              <span className='swatch-value bg-caramelbrown'></span>
                              <Image
                                width='338'
                                height='338'
                                loading='lazy'
                                decoding='async'
                                src='/assets/images/products/prd-related-3-1.jpg'
                                alt='Product'
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sw-dots sw-pagination-layout text-center mt_24 d-lg-none'></div>
                </div>
                <div className='wrap-sw-button'>
                  <div className='sw-button style-default nav-prev-layout'>
                    <i className='icon-caret-left'></i>
                  </div>
                  <div className='sw-button style-default nav-next-layout'>
                    <i className='icon-caret-right'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Product Main */}

        {/* s-colection */}
        <section className='s-colection-v01 '>
          <div className='tf-container w-1462  sw-layout'>
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
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='collection-item hover-image'>
                    <Link href='/shop' className='img-style mb_24'>
                      <Image
                        className='img-cover'
                        width='460'
                        height='608'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/collection/collection-item-1.jpg'
                        alt='collection'
                      />
                    </Link>
                    <div className='content '>
                      <Link
                        href='/shop'
                        className='h4 link text-capitalize d-block mb_10'
                      >
                        Modern Living
                      </Link>
                      <Link
                        href='/shop'
                        className='text-body-default fw-5 hover-underline-link btn_link'
                      >
                        Explore the Collection
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='collection-item hover-image'>
                    <Link href='/shop' className='img-style mb_24'>
                      <Image
                        className='img-cover'
                        width='460'
                        height='608'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/collection/collection-item-2.jpg'
                        alt='collection'
                      />
                    </Link>
                    <div className='content '>
                      <Link
                        href='/shop'
                        className='h4 link text-capitalize d-block mb_10'
                      >
                        Cozy Corners
                      </Link>
                      <Link
                        href='/shop'
                        className='text-body-default fw-5 hover-underline-link btn_link'
                      >
                        Explore the Collection
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='collection-item hover-image'>
                    <Link href='/shop' className='img-style mb_24'>
                      <Image
                        className='img-cover'
                        width='460'
                        height='608'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/collection/collection-item-3.jpg'
                        alt='collection'
                      />
                    </Link>
                    <div className='content '>
                      <Link
                        href='/shop'
                        className='h4 link text-capitalize d-block mb_10'
                      >
                        Timeless Classics
                      </Link>
                      <Link
                        href='/shop'
                        className='text-body-default fw-5 hover-underline-link btn_link'
                      >
                        Explore the Collection
                      </Link>
                    </div>
                  </div>
                </div>
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
                height='792'
                loading='eager'
                decoding='async'
                src='/assets/images/sections/banner-2.jpg'
                alt='banner'
              />
            </div>
            <div className='content'>
              <div className='tf-container w-1462'>
                <div className='wow fadeInUp'>
                  <div className='title mb_40'>
                    <h2 className='text-white text-capitalize mb_24'>
                      elevate your home
                    </h2>
                    <p className='text-body-default text-white'>
                      Clever products for every corner
                    </p>
                  </div>
                  <Link
                    href='/shop'
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

        {/* s-categories */}
        <section className='tf-container w-1462'>
          <div className='s-categories-v01 pt-0 tf-spacing-1'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <div className='wrap-category-text'>
                  <Link href='/shop' className='category-text'>
                    <h2>all products</h2>
                    <span className='h4 sub'>58</span>
                  </Link>
                  <Link href='/shop' className='category-text'>
                    <h2>new in</h2>
                    <span className='h4 sub'>32</span>
                  </Link>
                  <Link href='/shop' className='category-text'>
                    <h2>rug</h2>
                    <span className='h4 sub'>43</span>
                  </Link>
                  <Link href='/shop' className='category-text'>
                    <h2>furniture</h2>
                    <span className='h4 sub'>26</span>
                  </Link>
                  <Link href='/shop' className='category-text'>
                    <h2>lighting</h2>
                    <span className='h4 sub'>18</span>
                  </Link>
                  <Link href='/shop' className='category-text'>
                    <h2>home decor</h2>
                    <span className='h4 sub'>10</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /s-categories */}

        {/* s-testimonials */}
        <section className='s-testimonials tf-spacing-1 sw-layout'>
          <div className='tf-container'>
            <div className='row align-items-center'>
              <div className='col-lg-7 col-md-6'>
                <div className='content-inner'>
                  <div className='heading'>
                    <div className='icon'>
                      <i className='icon-quote'></i>
                    </div>
                    <h2 className='text-capitalize'>testimonials</h2>
                  </div>
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
                        <div className='testimonial-item'>
                          <div className='rating d-flex gap_5 '>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                          </div>
                          <h5 className=' fw-4 desc'>
                            Beautiful craftsmanship and fast delivery! The sofa
                            looks even better in person — super comfortable and
                            exactly what I was hoping for.
                          </h5>
                          <div className='author'>
                            <span className='name mb_4 text-body-default fw-5'>
                              Emily R.
                            </span>
                            <p className='sub text-caption-1 d-flex align-items-center gap_6'>
                              Purchased item:
                              <Link
                                href='/products/style-01'
                                className='link text-body-default fw-5 text_secondary-color'
                              >
                                Altair Lounge Chair
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='testimonial-item'>
                          <div className='rating d-flex gap_5 '>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                          </div>
                          <h5 className=' fw-4 desc'>
                            Beautiful craftsmanship and fast delivery! The sofa
                            looks even better in person — super comfortable and
                            exactly what I was hoping for.
                          </h5>
                          <div className='author'>
                            <span className='name mb_4 text-body-default fw-5'>
                              Emily R.
                            </span>
                            <p className='sub text-caption-1 d-flex align-items-center gap_6'>
                              Purchased item:
                              <Link
                                href='/products/style-01'
                                className='link text-body-default fw-5 text_secondary-color'
                              >
                                Altair Lounge Chair
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='testimonial-item'>
                          <div className='rating d-flex gap_5 '>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                            <i className='icon-star'></i>
                          </div>
                          <h5 className=' fw-4 desc'>
                            Beautiful craftsmanship and fast delivery! The sofa
                            looks even better in person — super comfortable and
                            exactly what I was hoping for.
                          </h5>
                          <div className='author'>
                            <span className='name mb_4 text-body-default fw-5'>
                              Emily R.
                            </span>
                            <p className='sub text-caption-1 d-flex align-items-center gap_6'>
                              Purchased item:
                              <Link
                                href='/products/style-01'
                                className='link text-body-default fw-5 text_secondary-color'
                              >
                                Altair Lounge Chair
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='wrap-sw-button d-flex gap_15'>
                      <div className='sw-button style-border nav-prev-layout'>
                        <i className='icon-caret-left'></i>
                      </div>
                      <div className='sw-button style-border nav-next-layout'>
                        <i className='icon-caret-right'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-md-6'>
                <div className='wrap-gallery tf-grid-layout sm-col-2 '>
                  <div className='infiniteslide' data-clone='2' data-style='up'>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-1.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-2.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-3.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-4.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-1.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-2.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-3.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-4.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-1.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-2.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-3.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-4.jpg'
                        alt='testimonials'
                      />
                    </div>
                  </div>
                  <div
                    className='infiniteslide'
                    data-clone='2'
                    data-style='down'
                  >
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-3.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-4.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-1.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-2.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-3.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-4.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-1.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-2.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-1.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-2.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-3.jpg'
                        alt='testimonials'
                      />
                    </div>
                    <div className='gallery'>
                      <Image
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/sections/s-testimonials-4.jpg'
                        alt='testimonials'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /s-testimonials */}

        {/* s-banner-lookbook */}
        <section className='tf-spacing-3 s-banner-lookbook sw-layout '>
          <div className=' tf-container position-relative'>
            <div className='heading-seciton mb_57 text-center'>
              <h2 className='title'>Shop the look</h2>
            </div>
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
                      sizes={"100vh"}
                      className='img-banner'
                      src='/assets/images/sections/s-lookbook-1.jpg'
                      data-src='/assets/images/banner/furniture.jpg'
                      alt=''
                    />
                    <div className='lookbook-item position1'>
                      <div className='dropdown dropup-center dropdown-custom'>
                        <div
                          role='button'
                          className='tf-pin-btn'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <span></span>
                        </div>
                        <div className='dropdown-menu'>
                          <div className='loobook-product style-row'>
                            <div className='img-style'>
                              <Image
                                height='71'
                                width='71'
                                src='/assets/images/sections/lookbook-item-1.jpg'
                                alt='img'
                              />
                            </div>
                            <div className='content'>
                              <div className='info'>
                                <Link
                                  href='/products/style-01'
                                  className='text-body-default link mb_3'
                                >
                                  Altair Lounge Chair
                                </Link>
                                <p className='price-wrap text-md fw-medium'>
                                  <span className='text-body-default'>
                                    $29.00
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='lookbook-item position2'>
                      <div className='dropdown dropup-center dropdown-custom'>
                        <div
                          role='dialog'
                          className='tf-pin-btn'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <span></span>
                        </div>
                        <div className='dropdown-menu'>
                          <div className='loobook-product style-row'>
                            <div className='img-style'>
                              <Image
                                height='71'
                                width='71'
                                src='/assets/images/sections/lookbook-item-2.jpg'
                                alt='img'
                              />
                            </div>
                            <div className='content'>
                              <div className='info'>
                                <Link
                                  href='/products/style-01'
                                  className='text-body-default link mb_3'
                                >
                                  Mini Elixir Ultime <br />
                                  Hydrating Hair Oil
                                </Link>
                                <p className='price-wrap text-md fw-medium'>
                                  <span className='text-body-default'>
                                    $299.00
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='position-relative'>
                    <Image
                      height={1}
                      width={1}
                      sizes={"100vh"}
                      className='img-banner'
                      src='/assets/images/sections/s-lookbook-1.jpg'
                      data-src='/assets/images/banner/furniture.jpg'
                      alt=''
                    />
                    <div className='lookbook-item position1'>
                      <div className='dropdown dropup-center dropdown-custom'>
                        <div
                          role='dialog'
                          className='tf-pin-btn'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <span></span>
                        </div>
                        <div className='dropdown-menu'>
                          <div className='loobook-product style-row'>
                            <div className='img-style'>
                              <Image
                                height='71'
                                width='71'
                                src='/assets/images/sections/lookbook-item-1.jpg'
                                alt='img'
                              />
                            </div>
                            <div className='content'>
                              <div className='info'>
                                <Link
                                  href='/products/style-01'
                                  className='text-body-default link mb_3'
                                >
                                  Mini Elixir Ultime <br />
                                  Hydrating Hair Oil
                                </Link>
                                <p className='price-wrap text-md fw-medium'>
                                  <span className='text-body-default'>
                                    $299.00
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='lookbook-item position2'>
                      <div className='dropdown dropup-center dropdown-custom'>
                        <div
                          role='dialog'
                          className='tf-pin-btn'
                          data-bs-toggle='dropdown'
                          aria-expanded='false'
                        >
                          <span></span>
                        </div>
                        <div className='dropdown-menu'>
                          <div className='loobook-product style-row'>
                            <div className='img-style'>
                              <Image
                                height='71'
                                width='71'
                                src='/assets/images/sections/lookbook-item-2.jpg'
                                alt='img'
                              />
                            </div>
                            <div className='content'>
                              <div className='info'>
                                <Link
                                  href='/products/style-01'
                                  className='text-body-default link mb_3'
                                >
                                  Mini Elixir Ultime <br />
                                  Hydrating Hair Oil
                                </Link>
                                <p className='price-wrap text-md fw-medium'>
                                  <span className='text-body-default'>
                                    $299.00
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

        {/* s-customer-services */}
        <div className='s-customer-services-v01 tf-spacing-3 sw-layout'>
          <div className='tf-container w-1462 '>
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
              <div className='swiper-wrapper'>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='box-icon_v01 style-col'>
                    <div className='icon'>
                      <i className='icon-shipping'></i>
                    </div>
                    <div className='content'>
                      <h5 className=' mb_10 text-capitalize'>
                        Fast & Free Delivery
                      </h5>
                      <p className='text-body-default fw-3'>
                        We offer free shipping with ground delivery worldwide
                      </p>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='box-icon_v01 style-col'>
                    <div className='icon'>
                      <i className='icon-box-return'></i>
                    </div>
                    <div className='content'>
                      <h5 className=' mb_10 text-capitalize'>30 days return</h5>
                      <p className='text-body-default fw-3'>
                        Exchange or return items free of charge within 30 days.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='box-icon_v01 style-col'>
                    <div className='icon'>
                      <i className='icon-payment'></i>
                    </div>
                    <div className='content'>
                      <h5 className=' mb_10 text-capitalize'>
                        flexible payment
                      </h5>
                      <p className='text-body-default fw-3'>
                        Pay conveniently using multiple credit cards for added
                        flexibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide wow fadeInLeft'>
                  <div className='box-icon_v01 style-col'>
                    <div className='icon'>
                      <i className='icon-support'></i>
                    </div>
                    <div className='content'>
                      <h5 className='mb_12 text-capitalize'>online support</h5>
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
                  <Link
                    href='/products/style-01'
                    className='box-icon hover-tooltip'
                  >
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
                  <Link
                    href='/products/style-01'
                    className='box-icon hover-tooltip'
                  >
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
                  <Link
                    href='/products/style-01'
                    className='box-icon hover-tooltip'
                  >
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
                  <Link
                    href='/products/style-01'
                    className='box-icon hover-tooltip'
                  >
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
                  <Link
                    href='/products/style-01'
                    className='box-icon hover-tooltip'
                  >
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
                  <Link
                    href='/products/style-01'
                    className='box-icon hover-tooltip'
                  >
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
