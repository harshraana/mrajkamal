"use client";

import React from "react";
import Image from "next/image";
import useScriptReinit from "@/hooks/useScriptReinit";

const ProductsPage = () => {
  useScriptReinit();
  return (
    <>
      {/* page-title */}
      <div className='tf-page-title'>
        <h2 className='text-center text-uppercase title'>furniture</h2>
        <ul className='breadcrumb-list'>
          <li>
            <a href='index.html'>Home</a>
          </li>
          <li>Shop</li>
          <li>furniture</li>
        </ul>
      </div>
      {/* /page-title */}

      {/* main-content */}
      <div className='main-content'>
        <div className='tf-spacing-10'>
          <div className='tf-container w-1548'>
            <div className='tf-shop-control mb_10 border-0'>
              <div className='wrapper-control-shop gridLayout-wrapper'>
                <div className='row'>
                  <div
                    className='wrapper-shop tf-grid-layout lg-col-3 tf-col-2 '
                    id='gridLayout'
                  >
                    {/* Product 1 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='chair'
                      data-room='living'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
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
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Core Chair
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$899.00</span>
                        </div>
                      </div>
                    </div>
                    {/* Product 2 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='chair'
                      data-room='living'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-2.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-2-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          111 Lounge Chair
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$1,299.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Beige</span>
                            <span className='swatch-value bg-beigegray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-2.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'>Light</span>
                            <span className='swatch-value bg-lightgray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-2-1.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 3 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='Out of stock'
                      data-category='chair'
                      data-room='living'
                      data-material='metal'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-3.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-3-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Crystal Lounge Chair
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$1,399.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Red</span>
                            <span className='swatch-value bg-winered'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-3.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'>Beige</span>
                            <span className='swatch-value bg-beigegray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-3-1.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'>Green</span>
                            <span className='swatch-value bg-olivegreen'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-3-2.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 4 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='Out of stock'
                      data-category='sofas'
                      data-room='living'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-4.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-4-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          SYD Curved Sofa
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$2,199.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Beige</span>
                            <span className='swatch-value bg-beigegray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-4.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'>Light</span>
                            <span className='swatch-value bg-lighttaupe'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-4-2.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 5 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='Out of stock'
                      data-category='table'
                      data-room='living'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-5.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-5-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          EKO Modular Sofa
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$1,988.00</span>
                        </div>
                      </div>
                    </div>
                    {/* Product 6 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='Out of stock'
                      data-category='chair'
                      data-room='living'
                      data-material='metal'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-6.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-6-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Sag Side Table
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$499.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Light</span>
                            <span className='swatch-value bg-beigegray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-6.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'> Beige</span>
                            <span className='swatch-value bg-lighttaupe'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-6-1.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 7 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='outdoor-furniture'
                      data-room='dining-room'
                      data-material='glass'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-7.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-7-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Solace Table Lamp
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$229.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Light</span>
                            <span className='swatch-value bg-lightgray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-7.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'> Dark</span>
                            <span className='swatch-value bg-darkgray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-7-2.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 8 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='outdoor-furniture'
                      data-room='outdoor'
                      data-material='glass'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
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
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Oak Pendant
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$349.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Black</span>
                            <span className='swatch-value bg-black'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot'>
                            <span className='tooltip color-filter'>Brown</span>
                            <span className='swatch-value bg-caramelbrown'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/prd-related-3-1.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 9 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='outdoor-furniture'
                      data-room='dining-room'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-8.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-8.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Altair Lounge Chair
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$1,249.00</span>
                        </div>
                      </div>
                    </div>
                    {/* Product 10 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='bed'
                      data-room='bedroom'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-9.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-9-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Tender Bed
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$1,499.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Light</span>
                            <span className='swatch-value bg-beigegray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-9.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'>Borwn</span>
                            <span className='swatch-value bg-rustybrown'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-9-2.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'>Beige</span>
                            <span className='swatch-value bg-lighttaupe'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-9-3.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 11 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='outdoor-furniture'
                      data-room='office'
                      data-material='glass'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-10.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-10-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Phase Table Lamp
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$329.00</span>
                        </div>
                      </div>
                    </div>
                    {/* Product 12 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='outdoor-furniture'
                      data-room='office'
                      data-material='glass'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
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
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Phase Pendant Lamp
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$429.00</span>
                        </div>
                      </div>
                    </div>
                    {/* Product 13 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='outdoor-furniture'
                      data-room='living-room'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width={338}
                            height={338}
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-7.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width={338}
                            height={338}
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-7-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          Solace Table Lamp
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$229.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Light</span>
                            <span className='swatch-value bg-lightgray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-7.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'> Dark</span>
                            <span className='swatch-value bg-darkgray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-7-2.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Product 14 */}
                    <div
                      className='card-product has-price-default loadItem grid'
                      data-availability='In Stock'
                      data-category='sofas'
                      data-room='living-room'
                      data-material='wood'
                      data-style='modern'
                    >
                      <div className='card-product_wrapper'>
                        <a href='/products/1' className='product-img'>
                          <Image
                            className='img-product'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-4.jpg'
                            alt='Product'
                          />
                          <Image
                            className='img-hover'
                            width='338'
                            height='338'
                            loading='lazy'
                            decoding='async'
                            src='/assets/images/products/product-4-1.jpg'
                            alt='Product'
                          />
                        </a>
                        <ul className='product-action_list'>
                          <li className=''>
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
                              className='hover-tooltip tooltip-left box-icon '
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
                        <a href='/products/1' className='name-product h6 link'>
                          SYD Curved Sofa
                        </a>
                        <div className='price-wrap text-body-default fw-5'>
                          from <span className='price-new'>$2,199.00</span>
                        </div>
                        <ul className='product-color_list justify-content-center'>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
                            <span className='tooltip color-filter'>Beige</span>
                            <span className='swatch-value bg-beigegray'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-4.jpg'
                              alt='Product'
                            />
                          </li>
                          <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
                            <span className='tooltip color-filter'>Light</span>
                            <span className='swatch-value bg-lighttaupe'></span>
                            <Image
                              width={338}
                              height={338}
                              loading='lazy'
                              decoding='async'
                              src='/assets/images/products/product-4-2.jpg'
                              alt='Product'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='wd-full wd-load justify-content-center flex-column align-items-center'>
                      <p className='mb_40'>
                        Showing{" "}
                        <span className='text_secondary-color fw-5'>13</span> of{" "}
                        <span className='text_secondary-color fw-5'>260</span>{" "}
                        products
                      </p>
                      <div
                        className='btn-loadmore tf-btn btn-border-secondary tf-loading loadmore'
                        id='loadMoreBtn'
                      >
                        <span className='text'>Load More</span>
                        <div className='spinner-circle'>
                          <span className='spinner-circle1 spinner-child'></span>
                          <span className='spinner-circle2 spinner-child'></span>
                          <span className='spinner-circle3 spinner-child'></span>
                          <span className='spinner-circle4 spinner-child'></span>
                          <span className='spinner-circle5 spinner-child'></span>
                          <span className='spinner-circle6 spinner-child'></span>
                          <span className='spinner-circle7 spinner-child'></span>
                          <span className='spinner-circle8 spinner-child'></span>
                          <span className='spinner-circle9 spinner-child'></span>
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
      {/* /main-content */}
    </>
  );
};

export default ProductsPage;
