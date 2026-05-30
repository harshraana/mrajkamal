"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface NewInTab {
  id: string;
  label: string;
}

export const defaultTabs: NewInTab[] = [
  { id: "table", label: "table" },
  { id: "lighting", label: "Lighting" },
  { id: "seating", label: "seating" },
  { id: "decor", label: "decor" },
];

interface NewInSectionProps {
  title?: string;
  tabs?: NewInTab[];
}

const NewInSection = ({
  title = "new in",
  tabs = defaultTabs,
}: NewInSectionProps) => {
  return (
    <section className='s-product-main  tf-container tf-spacing-1 pt-0 flat-animate-tab wow fadeInUp'>
      <div className='heading-seciton text-center mb_50 d-flex justify-content-center justify-content-md-between flex-md-row flex-column align-items-sm-center gap_10 '>
        <h2 className='text-capitalize'>{title}</h2>
        <ul className='tab-product_list menu-tab-2' role='tablist'>
          {tabs.map((tab, idx) => (
            <li key={tab.id} className='nav-tab-item' role='presentation'>
              <a
                href={`#${tab.id}`}
                data-bs-toggle='tab'
                className={`tf-btn-line h4 text-capitalize tf-btn-tab${idx === 0 ? " active" : ""}`}
              >
                {tab.label}
              </a>
            </li>
          ))}
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Black</span>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Black</span>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Black</span>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Brown</span>
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
                      <Link href='/products/style-01' className='product-img'>
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
                          <span className='tooltip color-filter'>Black</span>
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
                          <span className='tooltip color-filter'>Brown</span>
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
  );
};

export default NewInSection;
