"use client";

import Image from "next/image";
import React from "react";
import useScriptReinit from "@/hooks/useScriptReinit";

const ProductDetail = () => {
  useScriptReinit();
  return (
    <>
      {/* page-title */}
      <div className='tf-page-title-v2'>
        <div className='tf-container'>
          <ul className='breadcrumb-list v2'>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
      {/* /page-title */}

      {/* main-content */}
      <div className='main-content'>
        {/* Product Main */}
        <section className='flat-single-product flat-spacing-3'>
          <div className='tf-main-product section-image-zoom'>
            <div className='tf-container'>
              <div className='row'>
                {/* Product Images */}
                <div className='col-md-6'>
                  <div className='tf-product-media-wrap sticky-top'>
                    <div className='product-thumbs-slider thumbs-bottom'>
                      <div className='flat-wrap-media-product'>
                        <div
                          dir='ltr'
                          className='swiper tf-product-media-main'
                          id='gallery-swiper-started'
                        >
                          <div className='swiper-wrapper'>
                            <div
                              className='swiper-slide'
                              data-size='XS'
                              data-color='Natural Oak'
                            >
                              <a
                                href='/assets/images/products/prd-thumb-1.jpg'
                                target='_blank'
                                className='item'
                                data-pswp-width='860px'
                                data-pswp-height='1146px'
                              >
                                <Image
                                  className='tf-image-zoom'
                                  width='684'
                                  height='684'
                                  loading='lazy'
                                  decoding='async'
                                  data-zoom='/assets/images/products/prd-thumb-1.jpg'
                                  src='/assets/images/products/prd-thumb-1.jpg'
                                  alt=''
                                />
                              </a>
                            </div>
                            <div
                              className='swiper-slide'
                              data-size='S'
                              data-color='Natural Oak'
                            >
                              <a
                                href='/assets/images/products/prd-thumb-2.jpg'
                                target='_blank'
                                className='item'
                                data-pswp-width='860px'
                                data-pswp-height='1146px'
                              >
                                <Image
                                  className='tf-image-zoom'
                                  width='684'
                                  height='684'
                                  loading='lazy'
                                  decoding='async'
                                  data-zoom='/assets/images/products/prd-thumb-2.jpg'
                                  src='/assets/images/products/prd-thumb-2.jpg'
                                  alt=''
                                />
                              </a>
                            </div>
                            <div
                              className='swiper-slide'
                              data-size='M'
                              data-color='Natural Oak'
                            >
                              <a
                                href='/assets/images/products/prd-thumb-3.jpg'
                                target='_blank'
                                className='item'
                                data-pswp-width='860px'
                                data-pswp-height='1146px'
                              >
                                <Image
                                  className='tf-image-zoom '
                                  width='684'
                                  height='684'
                                  loading='lazy'
                                  decoding='async'
                                  data-zoom='/assets/images/products/prd-thumb-3.jpg'
                                  src='/assets/images/products/prd-thumb-3.jpg'
                                  alt='img-product'
                                />
                              </a>
                            </div>
                            <div
                              className='swiper-slide'
                              data-size='L'
                              data-color='Olive Gold'
                            >
                              <a
                                href='/assets/images/products/prd-thumb-4.jpg'
                                target='_blank'
                                className='item'
                                data-pswp-width='860px'
                                data-pswp-height='1146px'
                              >
                                <Image
                                  className='tf-image-zoom'
                                  width='684'
                                  height='684'
                                  loading='lazy'
                                  decoding='async'
                                  data-zoom='/assets/images/products/prd-thumb-4.jpg'
                                  src='/assets/images/products/prd-thumb-4.jpg'
                                  alt='img-product'
                                />
                              </a>
                            </div>
                            <div
                              className='swiper-slide'
                              data-size='L'
                              data-color='Olive Gold'
                            >
                              <a
                                href='/assets/images/products/prd-thumb-5.jpg'
                                target='_blank'
                                className='item'
                                data-pswp-width='860px'
                                data-pswp-height='1146px'
                              >
                                <Image
                                  className='tf-image-zoom '
                                  width='684'
                                  height='684'
                                  loading='lazy'
                                  decoding='async'
                                  data-zoom='/assets/images/products/prd-thumb-5.jpg'
                                  src='/assets/images/products/prd-thumb-5.jpg'
                                  alt='img-product'
                                />
                              </a>
                            </div>
                          </div>
                          {/* <div className="swiper-button-next button-style-arrow thumbs-next"></div> */}
                          {/* <div className="swiper-button-prev button-style-arrow thumbs-prev"></div> */}
                        </div>
                      </div>
                      <div
                        dir='ltr'
                        className='swiper tf-product-media-thumbs other-image-zoom'
                        data-direction='horizontal'
                        data-preview='5'
                      >
                        <div className='swiper-wrapper stagger-wrap'>
                          <div
                            className='swiper-slide stagger-item'
                            data-size='XS'
                            data-color=''
                          >
                            <div className='item'>
                              <Image
                                height='127'
                                width='127'
                                loading='lazy'
                                src='/assets/images/products/prd-pagi-1.jpg'
                                alt='img-product'
                              />
                            </div>
                          </div>
                          <div
                            className='swiper-slide stagger-item'
                            data-size='S'
                            data-color=''
                          >
                            <div className='item'>
                              <Image
                                height='127'
                                width='127'
                                loading='lazy'
                                src='/assets/images/products/prd-pagi-2.jpg'
                                alt='img-product'
                              />
                            </div>
                          </div>
                          <div
                            className='swiper-slide stagger-item'
                            data-size='M'
                            data-color=''
                          >
                            <div className='item'>
                              <Image
                                height='127'
                                width='127'
                                loading='lazy'
                                src='/assets/images/products/prd-pagi-3.jpg'
                                alt='img-product'
                              />
                            </div>
                          </div>
                          <div
                            className='swiper-slide stagger-item'
                            data-size='L'
                            data-color=''
                          >
                            <div className='item'>
                              <Image
                                height='127'
                                width='127'
                                loading='lazy'
                                src='/assets/images/products/prd-pagi-4.jpg'
                                alt='img-product'
                              />
                            </div>
                          </div>
                          <div
                            className='swiper-slide stagger-item'
                            data-size='L'
                            data-color=''
                          >
                            <div className='item'>
                              <Image
                                height='127'
                                width='127'
                                loading='lazy'
                                src='/assets/images/products/prd-pagi-5.jpg'
                                alt='img-product'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Product Images */}
                {/* Product Info */}
                <div className='col-md-6'>
                  <div className='tf-product-info-wrap position-relative'>
                    <div className='tf-zoom-main sticky-top'></div>
                    <div className='tf-product-info-list other-image-zoom '>
                      <div className='rating d-flex gap_5 mb_20'>
                        <i className='icon-star'></i>
                        <i className='icon-star'></i>
                        <i className='icon-star'></i>
                        <i className='icon-star'></i>
                        <i className='icon-star'></i>
                      </div>
                      <h4 className='product-info-name text-uppercase fw-5'>
                        Nutritive 8H Magic Night Serum
                      </h4>
                      <div className='product-info-price mb_24'>
                        <div className='price-wrap d-flex align-items-center gap_11'>
                          <span className='price-new price-on-sale h4 text_heading-color'>
                            $2,499.00
                          </span>
                          <span className='price-old h6'>$2,899.00</span>
                          <div className='tag-discount d-flex align-items-center gap_6 tag-bg-2   fw-4'>
                            <span>20% OFF</span>
                          </div>
                        </div>
                      </div>
                      <div className='product-instock'>
                        <div className='text-caption-1 tag'>In Stock</div>
                        <div className='d-flex gap_6'>
                          <svg
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M15.2766 10.9242C15.2564 10.6149 14.9243 10.4281 14.6495 10.5714C14.4105 10.6961 13.661 11.0196 13.0706 11.0196C12.6164 11.0196 12.3139 10.8694 12.3139 10.1362C12.3139 8.12636 15.0131 6.52078 12.6063 3.51218C12.3302 3.16719 11.7737 3.41746 11.8476 3.85238C11.8491 3.86145 11.9894 4.77182 11.5639 5.27582C11.3643 5.51218 11.0618 5.62711 10.6391 5.62711C9.17527 5.62711 9.27719 1.94027 11.1231 0.795793C11.5335 0.541367 11.2709 -0.0948905 10.802 0.0119845C10.6837 0.0387033 7.88757 0.701328 6.39178 3.62798C5.28109 5.80099 5.88265 7.29977 6.32189 8.39418C6.71444 9.3722 6.89356 9.81857 6.01438 10.4273C5.68324 10.6566 5.42691 10.6328 5.42691 10.6328C4.60457 10.6328 3.82562 9.42402 3.5951 8.95879C3.40786 8.57837 2.83794 8.67311 2.78387 9.09372C2.76066 9.27457 2.2413 13.5513 4.51099 16.1312C5.7615 17.5525 7.50127 18.0581 9.40815 17.9948C11.1709 17.9357 12.5776 17.3395 13.589 16.2228C15.4646 14.152 15.2851 11.0549 15.2766 10.9242Z'
                              fill='#F2721C'
                            />
                            <path
                              d='M4.44943 10.1357C4.04619 9.74672 3.72859 9.2282 3.5951 8.9588C3.40786 8.57837 2.83794 8.67312 2.78387 9.09373C2.76066 9.27457 2.2413 13.5513 4.51099 16.1312C5.28218 17.0077 6.27893 17.5784 7.48556 17.838C4.96085 16.3506 4.24278 13.0163 4.44943 10.1357Z'
                              fill='#FD5900'
                            />
                            <path
                              d='M3.73497 4.51578C3.70555 4.49736 3.66821 4.49736 3.63879 4.51578C2.64794 5.13714 2.64495 6.58635 3.63879 7.20956C3.66772 7.2277 3.7052 7.22827 3.73497 7.20956C4.72582 6.58818 4.7287 5.139 3.73497 4.51578Z'
                              fill='#F2721C'
                            />
                            <path
                              d='M4.12074 4.8581C4.01253 4.72503 3.88287 4.60856 3.73497 4.51578C3.70555 4.49736 3.66821 4.49736 3.63879 4.51578C2.64794 5.13714 2.64495 6.58635 3.63879 7.20956C3.66772 7.2277 3.7052 7.22827 3.73497 7.20956C3.88291 7.11678 4.01257 7.00028 4.12078 6.86721C3.64205 6.28239 3.64121 5.44387 4.12074 4.8581Z'
                              fill='#FD5900'
                            />
                            <path
                              d='M10.8024 0.0120303C10.6841 0.0387491 7.88798 0.701374 6.39218 3.62803C4.90845 6.53088 6.48285 8.24745 6.63508 9.34644L6.63525 9.34633C6.69122 9.74979 6.54691 10.0589 6.01478 10.4273C5.69514 10.6487 5.40616 10.6816 5.10156 10.5723V10.5727C5.10156 10.5727 6.17629 11.6059 7.26209 10.8973C8.33808 10.1951 8.02723 9.11813 7.86108 8.63136L7.86147 8.63108C7.46487 7.57955 7.11795 6.19032 8.09441 4.27993C8.67414 3.14561 9.44919 2.35157 10.188 1.80268C10.4272 1.3884 10.7407 1.03314 11.1235 0.795804C11.5339 0.541413 11.2713 -0.0948447 10.8024 0.0120303Z'
                              fill='#FD5900'
                            />
                          </svg>
                          <p className='text-caption-1   '>
                            30 sold in last 24 hours
                          </p>
                        </div>
                      </div>
                      <div className='product-info-countdown'>
                        <div className='countdown-title'>
                          <svg
                            className='tf-ani-tada'
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M15.3347 6.45288L15.6005 6.15088C15.8545 5.86248 15.8105 5.40368 15.4927 5.11508C15.1751 4.82568 14.7087 4.81948 14.4549 5.10788L14.1895 5.41008L15.3347 6.45288Z'
                              fill='#808080'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.748 3.48071H11.8622V4.47671H10.748V3.48071Z'
                              fill='#CCCCCC'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.3315 2.46069H12.2767C12.5033 2.46069 12.6863 2.64369 12.6863 2.87169V3.34169C12.6863 3.56969 12.5033 3.75269 12.2767 3.75269H10.3315C10.1047 3.75269 9.92188 3.56969 9.92188 3.34169V2.87169C9.92188 2.64369 10.1047 2.46069 10.3315 2.46069Z'
                              fill='#808080'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M11.304 4.407C14.3684 4.407 16.8526 6.8954 16.8526 9.9648C16.8526 13.0346 14.3684 15.5232 11.304 15.5232C9.79084 15.5232 8.78864 15.0216 6.73484 14.3232L7.30664 13.7474C7.56344 13.4882 7.31164 13.016 6.93244 13.1624C5.20784 13.8258 4.20264 13.1174 3.71244 11.5172C4.45424 11.9886 5.47864 11.6636 5.79964 11.3418C6.29704 10.844 6.10284 10.2682 4.98324 10.6382C3.54744 11.1116 2.03384 10.283 1.30664 8.2336C3.50344 9.3372 3.66524 7.066 5.98564 7.6712C5.78824 6.875 5.25304 6.6124 4.02724 6.6438C5.24284 5.1118 7.01084 5.905 8.87544 4.9676C9.60884 4.6086 10.4324 4.407 11.304 4.407Z'
                              fill='#FD6B65'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M15.2838 9.96456C15.2838 12.1658 13.503 13.95 11.305 13.95C10.2496 13.95 9.23757 13.5306 8.49137 12.7826C7.74537 12.0354 7.32617 11.0216 7.32617 9.96456C7.32617 8.90696 7.74517 7.89436 8.49137 7.14596C9.23757 6.39876 10.2496 5.97876 11.305 5.97876C13.503 5.97876 15.2838 7.76376 15.2838 9.96456Z'
                              fill='#F2F2F2'
                            />
                            <path
                              d='M11.2429 6.54007C11.1281 6.54187 11.0359 6.63727 11.0371 6.75227V7.05327C11.0371 7.33127 11.4551 7.33127 11.4551 7.05327V6.75227C11.4571 6.63407 11.3611 6.53807 11.2429 6.54007Z'
                              fill='#808080'
                            />
                            <path
                              d='M11.2429 12.6656C11.1281 12.6666 11.0359 12.7616 11.0371 12.8778V13.1778C11.0371 13.4568 11.4551 13.4568 11.4551 13.1778V12.8778C11.4571 12.7598 11.3611 12.6634 11.2429 12.6656Z'
                              fill='#808080'
                            />
                            <path
                              d='M14.1538 9.75586C13.8758 9.75586 13.8758 10.1741 14.1538 10.1741H14.4538C14.7316 10.1741 14.7316 9.75586 14.4538 9.75586H14.1538Z'
                              fill='#808080'
                            />
                            <path
                              d='M8.03843 9.75587C7.76063 9.75587 7.76063 10.1741 8.03843 10.1741H8.33943C8.61743 10.1741 8.61743 9.75587 8.33943 9.75587H8.03843Z'
                              fill='#808080'
                            />
                            <path
                              d='M13.3011 11.8135C13.1131 11.8135 13.0211 12.0415 13.1557 12.1719L13.3669 12.3843C13.4475 12.4713 13.5841 12.4729 13.6679 12.3897C13.7513 12.3059 13.7485 12.1701 13.6615 12.0897L13.4503 11.8775C13.4109 11.8367 13.3577 11.8135 13.3011 11.8135Z'
                              fill='#808080'
                            />
                            <path
                              d='M8.97626 7.48267C8.78886 7.48267 8.69726 7.71067 8.83106 7.84127L9.04326 8.05247C9.12346 8.13907 9.26046 8.14247 9.34426 8.05847C9.42766 7.97507 9.42446 7.83807 9.33786 7.75747L9.12666 7.54647C9.08706 7.50567 9.03286 7.48267 8.97626 7.48267Z'
                              fill='#808080'
                            />
                            <path
                              d='M13.5103 7.48279C13.4561 7.48399 13.4035 7.50699 13.3661 7.54659L13.1549 7.75759C13.0683 7.83819 13.0651 7.97519 13.1485 8.05859C13.2321 8.14239 13.3693 8.13919 13.4495 8.05259L13.6607 7.84139C13.7977 7.70859 13.7005 7.47659 13.5103 7.48279Z'
                              fill='#808080'
                            />
                            <path
                              d='M9.18663 11.8136C9.13243 11.8158 9.07983 11.8376 9.04243 11.8776L8.83023 12.0898C8.74343 12.1702 8.74143 12.306 8.82483 12.3898C8.90843 12.4732 9.04523 12.4714 9.12583 12.3844L9.33703 12.172C9.47403 12.0396 9.37703 11.8086 9.18663 11.8136Z'
                              fill='#808080'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M11.3026 9.65238C11.4772 9.65238 11.6152 9.78958 11.6152 9.96498C11.6152 10.1408 11.4774 10.2776 11.3026 10.2776C11.1282 10.2776 10.99 10.1408 10.99 9.96498C10.99 9.78938 11.1282 9.65238 11.3026 9.65238ZM12.7124 8.27838C12.6592 8.27938 12.607 8.30138 12.5692 8.33998L11.6068 9.30478C11.5136 9.26098 11.4112 9.23478 11.3026 9.23478C10.9024 9.23478 10.5742 9.56498 10.5742 9.96498C10.5742 10.3652 10.9024 10.6958 11.3026 10.6958C11.7028 10.6958 12.0312 10.3652 12.0312 9.96498C12.0312 9.82398 11.9892 9.69358 11.9194 9.58158L12.864 8.63478C12.9978 8.50198 12.9016 8.27398 12.7124 8.27838Z'
                              fill='#808080'
                            />
                          </svg>
                          <p className='text-caption-1 fw-5  '>
                            HURRY UP! Sale ends in:
                          </p>
                        </div>
                        <div
                          className='js-countdown countdown-box'
                          data-timer='1007500'
                          data-labels='Days,Hours,Mins,Secs'
                        ></div>
                      </div>
                      <div className='tf-product-variant'>
                        <div className='variant-picker-item variant-color'>
                          <div className='variant-picker-label'>
                            <div className='text-body-default  '>
                              Color:
                              <span className='variant-picker-label-value value-currentColor'>
                                Natural Oak
                              </span>
                            </div>
                          </div>
                          <div className='variant-picker-values'>
                            <div
                              className='hover-tooltip tooltip-bot color-btn active'
                              data-color='Natural Oak'
                            >
                              <span className='check-color bg-sandybeige'></span>
                              <span className='tooltip'>Natural Oak</span>
                            </div>
                            <div
                              className='hover-tooltip tooltip-bot color-btn'
                              data-color='Olive Gold'
                            >
                              <span className='check-color bg-olivegold '></span>
                              <span className='tooltip'>Olive Gold</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='tf-product-total-quantity'>
                        <div className='group-btn wrap-quantity'>
                          <div>
                            <div className='text-body-default   mb_15'>
                              Quantity:
                              <span className='variant-picker-label-value value-currentQuantity fw-7'>
                                1
                              </span>
                            </div>
                            <div className='wg-quantity'>
                              <button className='btn-quantity btn-decrease'>
                                <i className='icon icon-minus'></i>
                              </button>
                              <input
                                className='quantity-product'
                                type='text'
                                name='number'
                                defaultValue='1'
                              />
                              <button className='btn-quantity btn-increase'>
                                <i className='icon icon-plus'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='group-btn flex-md-nowrap mb_10'>
                          <a
                            href='#shoppingCart'
                            data-bs-toggle='modal'
                            className='tf-btn btn-bg-primary w-full btn-add-to-cart btn-h-52 animate-btn'
                          >
                            ADD TO BAG
                            <span className='price-add d-none d-sm-flex'>
                              $2,499.00
                            </span>
                          </a>
                          <button
                            type='button'
                            className=' d-flex hover-tooltip box-icon btn-add-wishlist flex-sm-shrink-0'
                          >
                            <span className='icon icon-heart'></span>
                            <span className='tooltip'>Add to Wishlist</span>
                          </button>
                          <a
                            href='#compare'
                            data-bs-toggle='modal'
                            aria-controls='compare'
                            className=' d-flex hover-tooltip tooltip-top box-icon flex-sm-shrink-0'
                          >
                            <span className='icon icon-compare'></span>
                            <span className='tooltip'>Compare</span>
                          </a>
                        </div>
                        <a
                          href='checkout.html'
                          className='tf-btn btn-bg-secondary  w-full animate-btn btn-h-52'
                        >
                          BUY IT NOW
                        </a>
                      </div>

                      <div className='tf-product-pickup-available d-flex gap_10'>
                        <div className='icon'>
                          <svg
                            width='21'
                            height='21'
                            viewBox='0 0 21 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.504 1.31775C15.5773 1.31775 19.6916 5.43207 19.6916 10.5053C19.6916 15.5786 15.5773 19.6929 10.504 19.6929C5.43073 19.6929 1.31641 15.5786 1.31641 10.5053C1.31641 5.43207 5.43073 1.31775 10.504 1.31775ZM8.59609 13.4895L6.34674 11.2383C5.96353 10.8549 5.96345 10.2296 6.34674 9.84626C6.73011 9.46297 7.35817 9.46537 7.73875 9.84626L9.32453 11.4333L13.2694 7.4884C13.6528 7.10503 14.2781 7.10503 14.6614 7.4884C15.0448 7.87169 15.0442 8.49758 14.6614 8.88041L10.0194 13.5224C9.63659 13.9052 9.01069 13.9058 8.6274 13.5224C8.61663 13.5116 8.60624 13.5007 8.59609 13.4895Z'
                              fill='#00BA00'
                            />
                          </svg>
                        </div>
                        <div className='content'>
                          <p className='text-caption-1'>
                            Pickup available at{" "}
                            <span className='fw-7'>Sydney Store</span>. Usually
                            ready in 24 hours.
                          </p>
                          <a
                            href='#'
                            className='hover-underline-link text_body-color-1 text-caption-1'
                          >
                            Check availability other stores
                          </a>
                        </div>
                      </div>
                      <div className='tf-product-extra-link'>
                        <a
                          href='#askQuestion'
                          data-bs-toggle='modal'
                          className='product-extra-icon   link'
                        >
                          <i className='icon icon-ques'></i>
                          Ask a question
                        </a>
                        <a
                          href='#shareWith'
                          data-bs-toggle='modal'
                          className='product-extra-icon   link'
                        >
                          <i className='icon icon-share'></i>
                          Share
                        </a>
                      </div>
                      <ul className='tf-product-cate-sku'>
                        <li className='item-cate-sku text-body-default  '>
                          <span className='label  text_body-color-1'>
                            Vendor:
                          </span>
                          <a
                            href='#'
                            className='value link text_heading-color fw-5'
                          >
                            MRajkamal
                          </a>
                        </li>
                        <li className='item-cate-sku text-body-default'>
                          <span className='label  text_body-color-1'>
                            Categories:
                          </span>
                          <span className='value  fw-5'>
                            Tables, Armchairs, Bedroom{" "}
                          </span>
                        </li>
                      </ul>
                      <div className='tf-product-trust-seal'>
                        <p className='text-body-default   mb_12'>
                          Guarantee Safe Checkout:
                        </p>
                        <ul className=' d-flex gap_8 flex-wrap'>
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
                                src='/assets/images/payment/payment-4.png'
                                alt=''
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Product Info */}
              </div>
            </div>
          </div>
          <div className='tf-sticky-btn-atc'>
            <div className='tf-container'>
              <div className='tf-height-observer w-full d-flex align-items-center'>
                <div className='tf-sticky-atc-product d-flex align-items-center'>
                  <div className='tf-mini-cart-item '>
                    <div className='tf-mini-cart-image'>
                      <Image
                        width='122'
                        height='122'
                        loading='lazy'
                        decoding='async'
                        src='/assets/images/products/prd-pagi-1.jpg'
                        alt='img-product'
                      />
                    </div>
                    <div className='tf-mini-cart-info'>
                      <div className='title text-body-default'>
                        <a
                          href='product-style-01.html'
                          className='link text-line-clamp-1'
                        >
                          Nutritive 8H Magic Night Serum
                        </a>
                      </div>
                      <div className='product-info-price mb_24'>
                        <div className='price-wrap d-flex align-items-center gap_10'>
                          <span className='price-new price-on-sale text-body-default text_heading-color'>
                            $2,499.00
                          </span>
                          <span className='price-old compare-at-price text-caption-1'>
                            $2,899.00
                          </span>
                          <div className='tag-discount d-flex align-items-center gap_6 tag-bg-2   fw-4'>
                            <span>20% OFF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tf-sticky-atc-infos'>
                  <form className=''>
                    <div className='tf-sticky-atc-variant-price'>
                      <div className='h6 title'>Color:</div>
                      <div className='tf-select style-1'>
                        <select
                          className='font-sora'
                          defaultValue='Natural Oak'
                        >
                          <option>Natural Oak</option>
                          <option>Natural Oak</option>
                          <option>Olive Gold</option>
                        </select>
                      </div>
                    </div>
                    <div className='tf-product-info-quantity'>
                      <div className='h6 title'>Quantity:</div>
                      <div className='wg-quantity'>
                        <button className='btn-quantity minus-btn'>
                          <i className='icon icon-minus'></i>
                        </button>
                        <input
                          className='quantity-product'
                          type='text'
                          name='number'
                          defaultValue='1'
                        />
                        <button className='btn-quantity plus-btn'>
                          <i className='icon icon-plus'></i>
                        </button>
                      </div>
                    </div>
                    <div className='tf-sticky-atc-btns'>
                      <a
                        href='#shoppingCart'
                        data-bs-toggle='modal'
                        className='tf-btn btn-bg-primary animate-btn btn-add-to-cart'
                      >
                        Add to cart
                        <i className='icon icon-shopping-cart-simple'></i>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Product Main */}

        {/* s-review */}
        <div className='tf-container tf-spacing-5'>
          <div className='flat-animate-tab tab-style-1'>
            <ul className='menu-tab menu-tab-1' role='tablist'>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#descriptions'
                  className='tab-link text-uppercase active'
                  data-bs-toggle='tab'
                >
                  Description
                </a>
              </li>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#policy'
                  className='tab-link text-uppercase'
                  data-bs-toggle='tab'
                >
                  Delivery policy
                </a>
              </li>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#faqs'
                  className='tab-link text-uppercase'
                  data-bs-toggle='tab'
                >
                  shipping & return
                </a>
              </li>
              <li className='nav-tab-item' role='presentation'>
                <a
                  href='#reviews'
                  className='tab-link text-uppercase'
                  data-bs-toggle='tab'
                >
                  review
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div
                className='tab-pane wd-product-descriptions active show'
                id='descriptions'
                role='tabpanel'
              >
                <div className='tab-descriptions'>
                  <div className='mb_24'>
                    <p className='text-body-default fw-7'>
                      Highlighted Ingredients: 
                    </p>
                    <ul>
                      <li className='text_body-color-1 text-body-default'>
                        - Fermented Arnica: Visibly reduces redness and
                        irritation.{" "}
                      </li>
                      <li className='text_body-color-1 text-body-default'>
                        - Goji Berry Complex: Boosts radiance and makes skin
                        look plumper.
                      </li>
                      <li className='text_body-color-1 text-body-default'>
                        - Fermented Shiunko: Promotes collagen synthesis and
                        antioxidant protection.
                      </li>
                    </ul>
                  </div>
                  <div className='mb_24'>
                    <p className='text-body-default text_body-color-1'>
                      <span className='text_secondary-color fw-7'>
                        Ingredient Callouts:
                      </span>{" "}
                      This product is vegan, gluten-free, and cruelty-free.
                    </p>
                  </div>
                  <div>
                    <p className='text-body-default text_body-color-1'>
                      <span className='text_secondary-color fw-7'>
                        What Else You Need to Know:
                      </span>{" "}
                      Born as a skincare serum stick, this blush delivers
                      high-performance color while goji berry complex makes skin
                      look more plump and fermented arnica visibly reduces
                      redness and irritation. This cream blush stick immediately
                      boosts skin hydration by +62%
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane wd-product-descriptions'
                id='policy'
                role='tabpanel'
              >
                <div className='tab-policy'>
                  <p className='text-body-default text_body-color-1'>
                    We ship all furniture orders within 3–5 business days. Large
                    items may require scheduled delivery. You will receive
                    tracking details once your order is dispatched.
                  </p>
                </div>
              </div>
              <div
                className='tab-pane wd-product-descriptions'
                id='faqs'
                role='tabpanel'
              >
                <div className='tab-policy'>
                  <p className='text-body-default text_body-color-1'>
                    Estimated delivery times: 12 - 26 days (International), 3 -
                    6 days (United States).
                  </p>
                </div>
              </div>
              <div
                className='tab-pane wd-product-descriptions'
                id='reviews'
                role='tabpanel'
              >
                <div className='row wd-customer-review'>
                  <div className='col-lg-6'>
                    <div className='review-heading'>
                      <h5 className='title  '>CUSTOMER’S REVIEWS</h5>
                      <div className='box-rate-review  '>
                        <div className='rating-summary'>
                          <ul className='list-star'>
                            <li>
                              <i className='icon icon-star'></i>
                            </li>
                            <li>
                              <i className='icon icon-star'></i>
                            </li>
                            <li>
                              <i className='icon icon-star'></i>
                            </li>
                            <li>
                              <i className='icon icon-star'></i>
                            </li>
                            <li>
                              <i className='icon icon-star'></i>
                            </li>
                            <li>
                              <span className='count-star text-md'>(3)</span>
                            </li>
                          </ul>
                          <span className='text-md rating-average'>
                            4.5/5.0
                          </span>
                        </div>
                        <div className='rating-breakdown'>
                          <div className='rating-breakdown-item'>
                            <div className='rating-score'>
                              5 <i className='icon icon-star'></i>
                            </div>
                            <div className='rating-bar'>
                              <div
                                className='value'
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <span className='rating-count'>3</span>
                          </div>
                          <div className='rating-breakdown-item'>
                            <div className='rating-score'>
                              4 <i className='icon icon-star'></i>
                            </div>
                            <div className='rating-bar'>
                              <div
                                className='value'
                                style={{ width: "0%" }}
                              ></div>
                            </div>
                            <span className='rating-count'>0</span>
                          </div>
                          <div className='rating-breakdown-item'>
                            <div className='rating-score'>
                              0 <i className='icon icon-star'></i>
                            </div>
                            <div className='rating-bar'>
                              <div
                                className='value'
                                style={{ width: "0%" }}
                              ></div>
                            </div>
                            <span className='rating-count'>0</span>
                          </div>
                          <div className='rating-breakdown-item'>
                            <div className='rating-score'>
                              0 <i className='icon icon-star'></i>
                            </div>
                            <div className='rating-bar'>
                              <div
                                className='value'
                                style={{ width: "0%" }}
                              ></div>
                            </div>
                            <span className='rating-count'>0</span>
                          </div>
                          <div className='rating-breakdown-item'>
                            <div className='rating-score'>
                              1 <i className='icon icon-star'></i>
                            </div>
                            <div className='rating-bar'>
                              <div
                                className='value'
                                style={{ width: "0%" }}
                              ></div>
                            </div>
                            <span className='rating-count'>0</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href='#form-review'
                        className='tf-btn btn-border animate-btn'
                      >
                        WRITE A REVIEW
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='review-section'>
                      <ul className='review-list'>
                        <li className='review-item'>
                          <div className='review-avt'>
                            <Image
                              width={40}
                              height={40}
                              src='/assets/images/avatar/avatar-rv-1.png'
                              alt='avt'
                            />
                          </div>
                          <div className='review-content'>
                            <div className='review-info'>
                              <div className='review-meta'>
                                <span className='review-author text_secondary-color text-body-default fw-5'>
                                  Emily R.
                                </span>
                                <span className='review-date text_secondary-color text-body-default fw-5'>
                                  Mar 3rd, 2025
                                </span>
                              </div>
                              <div className='list-star star-4'>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                              </div>
                            </div>
                            <p className='text text-body-default text_body-color-1'>
                              Absolutely stunning! I bought a gold necklace from
                              here, and the quality exceeded my expectations.
                              The craftsmanship is top-notch, and the packaging
                              was beautiful. Will definitely return for more!
                            </p>
                          </div>
                        </li>
                        <li className='review-item'>
                          <div className='review-avt'>
                            <Image
                              width={40}
                              height={40}
                              src='/assets/images/avatar/avatar-rv-2.png'
                              alt='avt'
                            />
                          </div>
                          <div className='review-content'>
                            <div className='review-info'>
                              <div className='review-meta'>
                                <span className='review-author text_secondary-color text-body-default fw-5'>
                                  James L.
                                </span>
                                <span className='review-date text_secondary-color text-body-default fw-5'>
                                  Mar 3rd, 2025
                                </span>
                              </div>
                              <div className='list-star'>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                              </div>
                            </div>
                            <p className='text text-body-default text_body-color-1'>
                              I purchased an engagement ring, and my fiancée
                              loves it! The diamonds sparkle beautifully, and
                              the staff was incredibly helpful in guiding me
                              through the selection process. Highly recommend!
                            </p>
                          </div>
                        </li>
                        <li className='review-item'>
                          <div className='review-avt'>
                            <Image
                              width={40}
                              height={40}
                              src='/assets/images/avatar/avatar-rv-3.png'
                              alt='avt'
                            />
                          </div>
                          <div className='review-content'>
                            <div className='review-info'>
                              <div className='review-meta'>
                                <span className='review-author text_secondary-color text-body-default fw-5'>
                                  Sophia M.
                                </span>
                                <span className='review-date text_secondary-color text-body-default fw-5'>
                                  Mar 3rd, 2025
                                </span>
                              </div>
                              <div className='list-star'>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                                <i className='icon icon-star'></i>
                              </div>
                            </div>
                            <p className='text text-body-default text_body-color-1'>
                              This jewelry shop is my go-to! The designs are
                              elegant, and the prices are reasonable for the
                              quality you get. I recently got a pair of silver
                              earrings, and they are just perfect. Amazing
                              service too!
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <form id='form-review' action='#' className='form-review'>
                      <h6 className='title'>Write a review</h6>
                      <p className='note text-md text-main-4'>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <div className='box-rating'>
                        <span className='text-md'>Your rating *</span>
                        <div className='list-rating-check'>
                          <input
                            type='radio'
                            id='star5'
                            name='rate'
                            defaultValue='5'
                          />
                          <label htmlFor='star5' title='text'></label>
                          <input
                            type='radio'
                            id='star4'
                            name='rate'
                            defaultValue='4'
                          />
                          <label htmlFor='star4' title='text'></label>
                          <input
                            type='radio'
                            id='star3'
                            name='rate'
                            defaultValue='3'
                          />
                          <label htmlFor='star3' title='text'></label>
                          <input
                            type='radio'
                            id='star2'
                            name='rate'
                            defaultValue='2'
                          />
                          <label htmlFor='star2' title='text'></label>
                          <input
                            type='radio'
                            id='star1'
                            name='rate'
                            defaultValue='1'
                          />
                          <label htmlFor='star1' title='text'></label>
                        </div>
                      </div>
                      <div className='group-2-ip'>
                        <input type='text' className='' placeholder='Name *' />
                        <input
                          type='email'
                          className=''
                          placeholder='Email *'
                        />
                      </div>
                      <textarea
                        name='note'
                        id='note'
                        placeholder='Your review *'
                      ></textarea>
                      <div className='check-save'>
                        <input
                          type='checkbox'
                          className='tf-check'
                          id='checksave'
                        />
                        <label
                          htmlFor='checksave'
                          className='label text-body-default'
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <button
                        type='submit'
                        className='tf-btn btn-bg-third animate-btn'
                      >
                        SUBMIT
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /s-review */}

        {/* Product Main */}
        <div className='s-related-products tf-container tf-spacing-7 pt-0 sw-layout '>
          <div className='heading-seciton text-center  mb_52'>
            <h3 className='text-uppercase'>you may also like</h3>
          </div>
          <div className='position-relative'>
            <div
              className='swiper'
              data-preview='4'
              data-tablet='3'
              data-mobile-sm='2'
              data-mobile='1'
              data-space-lg='30'
              data-space-md='20'
              data-space='15'
              data-pagination='2'
            >
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='card-product has-discount'>
                    <div className='card-product_wrapper'>
                      <a href='product-style-01.html' className='product-img'>
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
                      </a>
                      <ul className='product-action_list'>
                        <li>
                          <a
                            href='#quickAdd'
                            data-bs-toggle='modal'
                            className='hover-tooltip tooltip-left box-icon'
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
                        Altair Lounge Chair
                      </a>
                      <div className='wrap-price'>
                        <div className='price-wrap'>
                          <span className='price-old text-body-default fw-5'>
                            $1,799.00
                          </span>
                          <span className='price-new text-body-default fw-5'>
                            $1,299.00
                          </span>
                        </div>
                        <div className='discount'>
                          <span>-28%</span>
                        </div>
                      </div>
                      <ul className='product-color_list justify-content-center'>
                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
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
                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
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

                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot'>
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
                <div className='swiper-slide'>
                  <div className='card-product has-price-default'>
                    <div className='card-product_wrapper'>
                      <a href='product-style-01.html' className='product-img'>
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
                      </a>
                      <ul className='product-action_list'>
                        <li>
                          <a
                            href='#shoppingCart'
                            data-bs-toggle='modal'
                            className='hover-tooltip tooltip-left box-icon'
                          >
                            <span className='icon icon-shopping-cart-simple'></span>
                            <span className='tooltip'>Add to cart</span>
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
                        PIA Curved Sofa
                      </a>
                      <div className='price-wrap text-body-default fw-5'>
                        <span className='price-new text-body-default'>
                          $1,399.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='card-product has-price-default'>
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
                        <li>
                          <a
                            href='#quickAdd'
                            data-bs-toggle='modal'
                            className='hover-tooltip tooltip-left box-icon'
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
                        from{" "}
                        <span className='price-new text-body-default'>
                          $999.00
                        </span>
                      </div>
                      <ul className='product-color_list justify-content-center'>
                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
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
                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot'>
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
                <div className='swiper-slide'>
                  <div className='card-product has-price-default'>
                    <div className='card-product_wrapper'>
                      <a href='product-style-01.html' className='product-img'>
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
                      </a>
                      <ul className='product-action_list'>
                        <li>
                          <a
                            href='#quickAdd'
                            data-bs-toggle='modal'
                            className='hover-tooltip tooltip-left box-icon'
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
                        Nuvola Floor Lamp
                      </a>
                      <div className='price-wrap'>
                        from{" "}
                        <span className='price-new text-body-default'>
                          $1,249.00
                        </span>
                      </div>
                      <ul className='product-color_list justify-content-center'>
                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot active'>
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
                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
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
                        <li className='product-color-item color-swatch hover-tooltip tooltip-bot '>
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
                <div className='swiper-slide'>
                  <div className='card-product has-price-default'>
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
                        <li>
                          <a
                            href='#shoppingCart'
                            data-bs-toggle='modal'
                            className='hover-tooltip tooltip-left box-icon'
                          >
                            <span className='icon icon-shopping-cart-simple'></span>
                            <span className='tooltip'>Add to cart</span>
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
                        from{" "}
                        <span className='price-new text-body-default'>
                          $999.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='card-product has-price-default'>
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
                        <li>
                          <a
                            href='#shoppingCart'
                            data-bs-toggle='modal'
                            className='hover-tooltip tooltip-left box-icon'
                          >
                            <span className='icon icon-shopping-cart-simple'></span>
                            <span className='tooltip'>Add to cart</span>
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
                        from{" "}
                        <span className='price-new text-body-default'>
                          $1,499.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sw-dots sw-pagination-layout text-center mt_24 d-lg-none'></div>
            </div>
            <div className='wrap-sw-button '>
              <div className='sw-button style-default nav-prev-layout'>
                <i className='icon-caret-left'></i>
              </div>
              <div className='sw-button style-default nav-next-layout'>
                <i className='icon-caret-right'></i>
              </div>
            </div>
          </div>
        </div>
        {/* /Product Main */}

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

export default ProductDetail;
