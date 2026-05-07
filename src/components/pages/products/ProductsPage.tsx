import React from "react";
import Image from "next/image";

const ProductsPage = () => {
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
              <div className='row align-items-center mb_32'>
                <div className='col-md-5 col-6'>
                  <div className='tf-control-filter justify-content-between pe-xxl-30'>
                    <a
                      href='#filterShop'
                      data-bs-toggle='offcanvas'
                      className='tf-btn-filter '
                    >
                      <span className='icon icon-filter'></span>
                      <span className='text'>FILTER</span>
                    </a>
                  </div>
                </div>
                <div className='col-md-2 md-hide'>
                  <ul className='tf-control-layout justify-content-center'>
                    <li
                      className='tf-view-layout-switch sw-layout-2 d-none d-md-flex'
                      data-value-layout='tf-col-2'
                    >
                      <div className='item icon-grid-2'>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                    <li
                      className='tf-view-layout-switch sw-layout-3 active d-none d-md-flex'
                      data-value-layout='tf-col-3'
                    >
                      <div className='item icon-grid-3'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                    <li
                      className='tf-view-layout-switch sw-layout-4 d-none  d-xl-flex '
                      data-value-layout='tf-col-4'
                    >
                      <div className='item icon-grid-4'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-md-5 col-6'>
                  <div className='tf-group-layout justify-content-end'>
                    <div className='tf-dropdown-sort' data-bs-toggle='dropdown'>
                      <div className='btn-select'>
                        <span className='text-sort-value'>Best selling</span>
                        <span className='icon icon-arrow-down'></span>
                      </div>
                      <div className='dropdown-menu'>
                        <div
                          className='select-item active'
                          data-sort-value='best-selling'
                        >
                          <span className='text-value-item'>Best selling</span>
                        </div>
                        <div className='select-item' data-sort-value='a-z'>
                          <span className='text-value-item'>
                            Alphabetically, A-Z
                          </span>
                        </div>
                        <div className='select-item' data-sort-value='z-a'>
                          <span className='text-value-item'>
                            Alphabetically, Z-A
                          </span>
                        </div>
                        <div
                          className='select-item'
                          data-sort-value='price-low-high'
                        >
                          <span className='text-value-item'>
                            Price, low to high
                          </span>
                        </div>
                        <div
                          className='select-item'
                          data-sort-value='price-high-low'
                        >
                          <span className='text-value-item'>
                            Price, high to low
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='wrapper-control-shop gridLayout-wrapper'>
                <div className='meta-filter-shop'>
                  <div id='product-count-grid' className='count-text'></div>
                  <div id='product-count-list' className='count-text'></div>
                  <div id='applied-filters'></div>
                  <button
                    id='remove-all'
                    className='remove-all-filters'
                    style={{ display: "none" }}
                  >
                    Remove all
                    <i className='icon icon-close'></i>
                  </button>
                </div>
                <div className='row'>
                  <div
                    className='wrapper-shop tf-grid-layout tf-col-3'
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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
                        <a href='product-style-01.html' className='product-img'>
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
                        <a
                          href='product-style-01.html'
                          className='name-product h6 link'
                        >
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

        <div className='tf-container w-1548 tf-spacing-1 pt-0'>
          <div className='heading-section mb_48 text-center'>
            <h2 className='text-uppercase '>visit our store</h2>
          </div>
          <div className='wg-map d-flex'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.148272329334!2d151.20657421407668!3d-33.858885268389294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae682c546039%3A0x16da940d587922a1!2sCircular%20Quay!5e0!3m2!1sen!2s!4v1745205798630!5m2!1sen!2s'
              width='1440'
              height='589'
              style={{ border: "0" }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
            <div className='content'>
              <div className='h5 mb_24 text-uppercase'>Vinfur Store</div>
              <ul className='mb_24'>
                <li className='text-body-default text_secondary-color mb_4'>
                  15 Yarran st, Punchbowl, NSW 2196
                </li>
                <li className='text-body-default text_secondary-color mb_4'>
                  <a href='#' className='link'>
                    support@vinfur.com
                  </a>
                </li>
                <li className='text-body-default text_secondary-color'>
                  (01) 245 2451
                </li>
              </ul>
              <ul className='mb_24'>
                <li className='text-body-default text_secondary-color mb_4'>
                  Mon - Fri: 8am - 5pm
                </li>
                <li className='text-body-default text_secondary-color'>
                  Weekend: 9am - 3pm
                </li>
              </ul>
              <a
                href=''
                className=' hover-underline-link text-caption-1 d-flex align-items-center gap_4'
              >
                See location
                <i className='icon-arrow-right-up2'></i>
              </a>
            </div>
          </div>
        </div>

        {/* s-customer-services  */}
        <div className='s-customer-services tf-spacing-2 sw-layout'>
          <div className='tf-container w-1462 '>
            <div
              className='swiper'
              data-screen-xl='4'
              data-preview='3'
              data-tablet='2'
              data-mobile-sm='2'
              data-mobile='1'
              data-space-lg='48'
              data-space-md='20'
              data-space='15'
            >
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='box-icon_v01'>
                    <div className='icon'>
                      <i className='icon-shipping'></i>
                    </div>
                    <div className='content'>
                      <div className='h5 mb_10 text-uppercase'>
                        Free Shipping
                      </div>
                      <p className='text-body-default lh-26  '>
                        Enjoy free shipping on all orders
                      </p>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='box-icon_v01'>
                    <div className='icon'>
                      <i className='icon-payment'></i>
                    </div>
                    <div className='content'>
                      <div className='h5 mb_10 text-uppercase'>
                        flexible payment
                      </div>
                      <p className='text-body-default lh-26  '>
                        Multi creadit cards applied
                      </p>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='box-icon_v01'>
                    <div className='icon'>
                      <i className='icon-box-return'></i>
                    </div>
                    <div className='content'>
                      <div className='h5 mb_10 text-uppercase'>
                        30 days return
                      </div>
                      <p className='text-body-default lh-26  '>
                        Within 14 days for an return
                      </p>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='box-icon_v01'>
                    <div className='icon'>
                      <i className='icon-support'></i>
                    </div>
                    <div className='content'>
                      <div className='h5 mb_10 text-uppercase'>
                        Support Online
                      </div>
                      <p className='text-body-default lh-26  '>
                        Outstanding premium support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sw-dots sw-pagination-layout text-center mt_24'></div>
            </div>
          </div>
        </div>
        {/* /s-customer-services  */}
      </div>
      {/* /main-content */}
    </>
  );
};

export default ProductsPage;
