/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* .header */}
      <header className='header  has-currencies header-sticky'>
        <div className='tf-container'>
          <div className='header-inner'>
            <div className='header-left'>
              <Link href='/' className='site-logo'>
                <Image
                  height={64}
                  width={240}
                  style={{ height: "auto" }}
                  className='logo_header'
                  alt='M Rajkamal logo'
                  src='/my-assets/images/M-Rajkamal-logo-2.svg'
                />
              </Link>
              |
              <Link href='/' className='site-logo pb-0 pt-2'>
                <Image
                  height={47}
                  width={90}
                  style={{ height: "auto" }}
                  className='logo_header'
                  alt='Godrej Interio authorised dealer'
                  src='/my-assets/images/godrej-interio.jpg'
                />
              </Link>
            </div>
            <div className='header-right d-flex align-items-center'>
              <nav className='main-menu'>
                <ul className='navigation box-nav-menu'>
                  <li className='text-menu menu-item'>
                    <a href='/' className='item-link'>
                      Home
                    </a>
                  </li>

                  {/*   <li className='text-menu menu-item'>
                    <a href='/products' className='item-link'>
                      Products
                    </a>
                  </li> */}
                  <li className='text-menu menu-item'>
                    <a href='/about' className='item-link'>
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
                {/*  <li className='d-none d-sm-flex position-relative'>
                  <Link href='/wishlist' className='nav-icon-item link'>
                    <i className='icon icon-heart'></i>
                  </Link>
                  <span className='count'>7</span>
                </li> */}
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
              {/* <a
                href='#mobileMenu'
                data-bs-toggle='offcanvas'
                className='mobile-button d-xl-none'
              >
                <div className='burger'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </header>
      {/* End header */}
    </>
  );
};

export default Header;
