import Image from "next/image";
import React from "react";

const MobileMenu = () => {
  return (
    <>
      {" "}
      {/* Mobile Menu */}
      <div className='offcanvas offcanvas-start canvas-mb' id='mobileMenu'>
        <span className='icon-close-popup' data-bs-dismiss='offcanvas'>
          <i className='icon-close'></i>
        </span>
        <div className='canvas-header'>
          <a href='index.html' className='site-logo'>
            <Image
              className='logo_header'
              alt='logo'
              width={165}
              height={32}
              src='/assets/images/logo/logo.svg'
            />
          </a>
          <a
            href='#login'
            data-bs-toggle='offcanvas'
            className='tf-btn btn-bg-secondary'
          >
            Login
            <i className='icon icon-user'></i>
          </a>
          <span className='br-line'></span>
        </div>
        <div className='canvas-body'>
          <div className='mb-content-top'>
            <ul className='nav-ul-mb' id='wrapper-menu-navigation'></ul>
          </div>
          <div className='group-btn'>
            <a href='wishlist.html' className='tf-btn btn-bg-primary style-2'>
              Wishlist
              <i className='icon icon-heart'></i>
            </a>
            <div data-bs-dismiss='offcanvas'>
              <a
                href='#search'
                data-bs-toggle='modal'
                className='tf-btn btn-bg-primary style-2'
              >
                Search
                <i className='icon icon-magnifying-glass'></i>
              </a>
            </div>
          </div>
          <div className='flow-us-wrap'>
            <div className='h5 title'>Follow us on</div>
            <ul className='tf-social-icon d-flex gap_8'>
              <li>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  className='social-facebook'
                >
                  <span className='icon-facebook'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.pinterest.com/'
                  target='_blank'
                  className='social-pinterest'
                >
                  <span className='icon-pinterest'></span>
                </a>
              </li>
              <li>
                <a href='https://x.com/' target='_blank' className=' social-x'>
                  <span className='icon-xlogo'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.tiktok.com/'
                  target='_blank'
                  className='social-linkin '
                >
                  <span className='icon-tiktok'></span>
                </a>
              </li>
            </ul>
          </div>
          <div className='payment-wrap'>
            <div className='title'>Payment:</div>
            <ul className='payment-method-list d-flex gap_8'>
              <li>
                <a href='#'>
                  <Image
                    width='40'
                    height='25'
                    src='/assets/images/payment/amex.png'
                    alt='American Express'
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    width='40'
                    height='25'
                    src='/assets/images/payment/payment-1.png'
                    alt='Payment Method 1'
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    width='40'
                    height='25'
                    src='/assets/images/payment/payment-2.png'
                    alt='Payment Method 2'
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    width='40'
                    height='25'
                    src='/assets/images/payment/payment-3.png'
                    alt='Payment Method 3'
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    width='40'
                    height='25'
                    src='/assets/images/payment/payment-4.png'
                    alt='Payment Method 4'
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <Image
                    width='40'
                    height='25'
                    src='/assets/images/payment/payment-5.png'
                    alt='Payment Method 5'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='canvas-footer'>
          <div className='tf-currencies'>
            <select
              className='tf-dropdown-select style-default type-currencies'
              defaultValue='USD'
            >
              <option data-thumbnail='images/country/us.png'>USD</option>
              <option data-thumbnail='images/country/vie.png'>VND</option>
            </select>
          </div>
          <span className='br-line'></span>
          <div className='tf-languages'>
            <select className='tf-dropdown-select style-default type-languages'>
              <option>English</option>
              <option>العربية</option>
              <option>简体中文</option>
              <option>اردو</option>
            </select>
          </div>
        </div>
      </div>
      {/* /Mobile Menu */}
    </>
  );
};

export default MobileMenu;
