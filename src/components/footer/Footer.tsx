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
                    height={100}
                    width={200}
                    className='logo_header'
                    alt='logo'
                    src='/my-assets/images/M-Rajkamal-logo-light.svg'
                  />
                </Link>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='footer-about'>
                  <h5 className=' text-capitalize mb_24 footer-title text_white'>
                    Store Address
                  </h5>
                  <p className='text-body-default text_white mb_24'>
                    7, Haji Ebrahim Patel Trust Building Junction of Gokhale
                    Road, and, Ranade Rd, Dadar West, Dadar, Mumbai, Maharashtra
                    400028
                  </p>
                </div>
              </div>
              <div className='col-lg-5 col-md-6'>
                <div className='wrap-footer-col-block'>
                  <div className='footer-col-block'>
                    <h5 className=' text_white mb_24'>Quick Link</h5>
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
                    <h5 className=' text_white mb_24'>Connect Us</h5>
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
              <p className='text_white'>All Rights Reserved 2026 MRajkamal.</p>

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
