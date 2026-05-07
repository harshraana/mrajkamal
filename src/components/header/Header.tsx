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
            <div className='d-flex align-items-center gap_24 header-left'>
              <Link href='/' className='site-logo'>
                <Image
                  height={55}
                  width={240}
                  className='logo_header'
                  alt='logo'
                  src='/my-assets/images/M-Rajkamal-logo-2.svg'
                />
              </Link>
              |
              <Link href='/' className='site-logo'>
                <Image
                  height={36}
                  width={140}
                  className='logo_header'
                  alt='logo'
                  src='/my-assets/images/godrej-interio.jpg'
                />
              </Link>
            </div>
            <div className='header-right d-flex align-items-center'>
              <nav className='main-menu'>
                <ul className='navigation box-nav-menu'>
                  <li className='text-menu menu-item'>
                    <Link
                      href='/'
                      className='link-no-action toggle splitting item-link'
                    >
                      Home
                    </Link>
                  </li>

                  <li className='text-menu menu-item '>
                    <Link
                      href='/products'
                      className='link-no-action toggle splitting item-link'
                    >
                      Products
                    </Link>
                  </li>
                  <li className='text-menu menu-item'>
                    <Link
                      href='/about'
                      className='link-no-action toggle splitting item-link'
                    >
                      About Us
                    </Link>
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
                  <Link href='/wishlist' className='nav-icon-item link'>
                    <i className='icon icon-heart'></i>
                  </Link>
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
