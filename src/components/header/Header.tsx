import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      {/* .header */}
      <header className='header  has-currencies header-sticky'>
        <div className='tf-container'>
          <div className='header-inner'>
            <a href='index.html' className='site-logo'>
              <Image
                height={42}
                width={230}
                className='logo_header'
                alt='logo'
                src='/my-assets/images/M-Rajkamal-logo-2.svg'
              />
            </a>
            <div className='header-right d-flex align-items-center'>
              <nav className='main-menu'>
                <ul className='navigation box-nav-menu'>
                  <li className='text-menu menu-item'>
                    <a
                      href='#'
                      className='link-no-action toggle splitting item-link'
                    >
                      Home
                    </a>
                  </li>

                  <li className='has-child text-menu menu-item '>
                    <a
                      href='#'
                      className='link-no-action toggle splitting item-link'
                    >
                      Products
                    </a>
                    <div className='submenu sub-menu mega-menu mega-product '>
                      <div className='tf-container '>
                        <div className='wrap-nav-link'>
                          <div className='col-nav-link mega-menu-item'>
                            <div className='h6 fw-5 mb_23 text_black menu-heading'>
                              Product Style
                            </div>
                            <ul className='sub-menu_list d-grid gap_10'>
                              <li>
                                <a
                                  href='product-style-01.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Style 1
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-style-02.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Style 2
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-style-03.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Style 3
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-style-04.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Style 4
                                  <span className='tag hot demo-label text-small-2 '>
                                    Hot
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-style-05.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Style 5
                                  <span className='tag trending demo-label text-small-2 '>
                                    Trending
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-style-06.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Style 6
                                  <span className='tag trending demo-label text-small-2 '>
                                    Trending
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className='col-nav-link mega-menu-item'>
                            <div className='h6 fw-5 mb_23 text_black menu-heading'>
                              Product Description
                            </div>
                            <ul className='sub-menu_list d-grid gap_10'>
                              <li>
                                <a
                                  href='product-description-side-dropdown.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Description Side Dropdown
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-description-side-full-accordion.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Description Full Accordions
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-description-side-drawer.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Description Side Drawer
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className='col-nav-link mega-menu-item'>
                            <div className='h6 fw-5 mb_23 text_black menu-heading'>
                              Product Details
                            </div>
                            <ul className='sub-menu_list d-grid gap_10'>
                              <li>
                                <a
                                  href='product-inner-zoom.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Inner Zoom
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-inner-circle-zoom.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product Inner Circle Zoom
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-no-zoom.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Product No Zoom
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className='col-nav-link mega-menu-item'>
                            <div className='h6 fw-5 mb_23 text_black menu-heading'>
                              Product Features
                            </div>
                            <ul className='sub-menu_list d-grid gap_10'>
                              <li>
                                <a
                                  href='product-pickup-available.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Pickup Available
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-swatch-image.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Swatch Image
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-together.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Buy Together
                                  <span className='tag new demo-label text-small-2 '>
                                    New
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href='product-volume-discount.html'
                                  className='link text-body-default text_heading-color sub-menu_link'
                                >
                                  Volume Discount
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='wrap-prd d-flex gap_24 mn-none'>
                          <div className='list-ver'>
                            <div className='prd-nav-item hover-image'>
                              <div className='img-style'>
                                <Image
                                  height={240}
                                  width={240}
                                  sizes={"100vh"}
                                  loading='lazy'
                                  decoding='async'
                                  src='/assets/images/header/prd-nav-1.jpg'
                                  alt='product'
                                />
                                <a
                                  href='#quickView'
                                  data-bs-toggle='modal'
                                  className='hover-tooltip tooltip-top box-icon'
                                >
                                  <span className='icon icon-view'></span>
                                  <span className='tooltip'>Quick view</span>
                                </a>
                              </div>
                              <div className=''>
                                <a
                                  href='shop-style-01.html'
                                  className='h6 link text_heading-color mb_5'
                                >
                                  Cub Chair
                                </a>
                                <div className='price'>
                                  <span className='text-body-2'>$2,499.00</span>
                                  <span className='old-price'>$2,899.00</span>
                                </div>
                              </div>
                            </div>
                            <div className='prd-nav-item hover-image'>
                              <div className='img-style'>
                                <Image
                                  height={240}
                                  width={240}
                                  sizes={"100vh"}
                                  loading='lazy'
                                  decoding='async'
                                  src='/assets/images/header/prd-nav-2.jpg'
                                  alt='product'
                                />
                                <a
                                  href='#quickView'
                                  data-bs-toggle='modal'
                                  className='hover-tooltip tooltip-top box-icon'
                                >
                                  <span className='icon icon-view'></span>
                                  <span className='tooltip'>Quick view</span>
                                </a>
                              </div>
                              <div className=''>
                                <a
                                  href='shop-style-01.html'
                                  className='h6 link  text_heading-color mb_5'
                                >
                                  Virgule Armchair
                                </a>
                                <div className='price'>
                                  <span className='text-body-2'>$2,499.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='text-menu menu-item'>
                    <a
                      href='#'
                      className='link-no-action toggle splitting item-link'
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </nav>
              <ul className='nav-icon-list'>
                {/* <li className='d-none d-md-flex'>
                  <a
                    className='nav-icon-item link'
                    href='#search'
                    data-bs-toggle='modal'
                  >
                    <i className='icon icon-magnifying-glass'></i>
                  </a>
                </li> */}
                {/* <li className='d-none d-lg-flex'>
                  <a
                    href='#login'
                    data-bs-toggle='offcanvas'
                    className='nav-icon-item link'
                  >
                    {" "}
                    <i className='icon icon-user'></i>
                  </a>
                </li> */}
                <li className='d-none d-sm-flex position-relative'>
                  <a className='nav-icon-item link' href='wishlist.html'>
                    <i className='icon icon-heart'></i>
                  </a>
                  <span className='count'>7</span>
                </li>
                {/* <li
                  className='shop-cart'
                  data-bs-toggle='modal'
                  data-bs-target='#shoppingCart'
                >
                  <a
                    className='nav-icon-item link'
                    href='#shoppingCart'
                    data-bs-toggle='modal'
                  >
                    <i className='icon icon-bag'></i>
                  </a>
                  <span className='count'>4</span>
                </li> */}
              </ul>
              <a
                href='#mobileMenu'
                data-bs-toggle='offcanvas'
                className='mobile-button d-xl-none'
              >
                <div className='burger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* End header */}
    </>
  );
};

export default Header;
