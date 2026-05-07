import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className='footer'>
        <div className='footer-body'>
          <div className='tf-container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <Link href='/' className='site-logo'>
                  <Image
                    height={42}
                    width={230}
                    className='logo_header'
                    alt='logo'
                    src='/my-assets/images/M-Rajkamal-logo-light.svg'
                  />
                </Link>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='footer-about'>
                  <div className='h5 text-capitalize mb_24 footer-title text_white'>
                    about
                  </div>
                  <p className='text-body-default text_white mb_24'>
                    We only carry designs we believe in ethically and
                    aesthetically – original, authentic pieces that are made to
                    last.
                  </p>
                  <Link
                    href='/about'
                    className='hover-underline-link text_white text-body-default text-capitalize'
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className='col-lg-5 col-md-6'>
                <div className='wrap-footer-col-block'>
                  <div className='footer-col-block'>
                    <div className='h5 footer-heading footer-heading-mobile footer-title text_white mb_24'>
                      Quick Link
                    </div>
                    <div className='tf-collapse-content'>
                      <ul className='footer-menu-list d-grid gap_12'>
                        <li>
                          <Link
                            href='/about'
                            className='link-2 text-body-default text_white'
                          >
                            Our Story
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/shop'
                            className='link-2 text-body-default text_white'
                          >
                            Visit Our Store
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/contact'
                            className='link-2 text-body-default text_white'
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/account'
                            className='link-2 text-body-default text_white'
                          >
                            Account
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='footer-col-block'>
                    <div className='h5 footer-heading footer-heading-mobile footer-title text_white mb_24'>
                      Connect Us
                    </div>
                    <div className='tf-collapse-content'>
                      <ul className='footer-menu-list d-grid gap_12'>
                        <li>
                          <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link-2 text-body-default text_white'
                          >
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.instagram.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link-2 text-body-default text_white'
                          >
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.tiktok.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link-2 text-body-default text_white'
                          >
                            TikTok
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.pinterest.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link-2 text-body-default text_white'
                          >
                            Pinterest
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='tf-container'>
            <div className='wrap-footer-bottom'>
              <p className='text_white'>All Rights Reserved 2026 Vinfur.</p>
              <ul className='payment-method-list d-flex gap_8 justify-content-center flex-wrap'>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/amex.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-1.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-2.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-3.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-4.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-5.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-6.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-7.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-8.png'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <Image
                      width='40'
                      height='25'
                      src='/assets/images/payment/payment-9.png'
                      alt=''
                    />
                  </a>
                </li>
              </ul>
              <div className='right d-flex '>
                <Link
                  href='/terms'
                  className='text-body-default link-2 text_white '
                >
                  Terms
                </Link>
                <Link
                  href='/privacy'
                  className='text-body-default link-2 text_white'
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* /Footer */}
    </>
  );
};

export default Footer;
