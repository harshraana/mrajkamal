import Image from "next/image";
import React from "react";

const MiscControls = () => {
  return (
    <>
      {/* Toolbar */}
      <div className='tf-toolbar-bottom'>
        <div className='toolbar-item'>
          <a href='shop-default.html'>
            <span className='toolbar-icon'>
              <i className='icon icon-storefront'></i>
            </span>
            <span className='toolbar-label'>Shop</span>
          </a>
        </div>
        <div className='toolbar-item'>
          <a href='#search' data-bs-toggle='modal'>
            <span className='toolbar-icon'>
              <i className='icon icon-magnifying-glass'></i>
            </span>
            <span className='toolbar-label'>Search</span>
          </a>
        </div>
        <div className='toolbar-item'>
          <a href='my-account.html'>
            <span className='toolbar-icon'>
              <i className='icon icon-user'></i>
            </span>
            <span className='toolbar-label'>Account</span>
          </a>
        </div>
        <div className='toolbar-item'>
          <a href='wishlist.html'>
            <span className='toolbar-icon'>
              <i className='icon icon-heart'></i>
              <span className='toolbar-count'>7</span>
            </span>
            <span className='toolbar-label'>Wishlist</span>
          </a>
        </div>
        <div className='toolbar-item'>
          <a href='shop-cart.html'>
            <span className='toolbar-icon'>
              <i className='icon icon-bag'></i>
              <span className='toolbar-count'>4</span>
            </span>
            <span className='toolbar-label'>Cart</span>
          </a>
        </div>
      </div>
      {/* /Toolbar */}

      {/* Filter */}
      <div className='offcanvas offcanvas-start canvas-filter' id='filterShop'>
        <div className='canvas-wrapper'>
          <div className='canvas-header'>
            <div className='h5 title'>Filters</div>
            <span className='icon-close-popup' data-bs-dismiss='offcanvas'>
              <i className='icon-close'></i>
            </span>
          </div>
          <div className='canvas-body'>
            <div className='widget-facet mb-0'>
              <div
                className='facet-title'
                data-bs-target='#category'
                role='button'
                data-bs-toggle='collapse'
                aria-expanded='true'
                aria-controls='category'
              >
                <span className='h6 text-uppercase'>Categories</span>
                <span className='icon ic-accordion-custom'></span>
              </div>
              <div id='category' className='collapse show'>
                <ul className='collapse-body filter-group-check current-scrollbar'>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='category'
                      className='tf-check v2'
                      id='sofas'
                    />
                    <label htmlFor='sofas' className='label'>
                      <span className='cate-text'>Sofas & Sectionals</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='category'
                      className='tf-check v2'
                      id='bed'
                    />
                    <label htmlFor='bed' className='label cate-text'>
                      <span className='cate-text'>Beds</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='category'
                      className='tf-check v2'
                      id='table'
                    />
                    <label htmlFor='table' className='label'>
                      <span className='cate-text'>Tables</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='category'
                      className='tf-check v2'
                      id='chair'
                    />
                    <label htmlFor='chair' className='label '>
                      <span className='cate-text'>Chairs</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='category'
                      className='tf-check v2'
                      id='storage'
                    />
                    <label htmlFor='storage' className='label'>
                      <span className='cate-text'>Storage</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='category'
                      className='tf-check v2'
                      id='outdoor-furniture'
                    />
                    <label htmlFor='outdoor-furniture' className='label '>
                      <span className='cate-text'>Outdoor Furniture</span>{" "}
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='widget-facet'>
              <div
                className='facet-title'
                data-bs-target='#availability'
                role='button'
                data-bs-toggle='collapse'
                aria-expanded='true'
                aria-controls='availability'
              >
                <span className='h6 text-uppercase'>Availability</span>
                <span className='icon ic-accordion-custom'></span>
              </div>
              <div id='availability' className='collapse show'>
                <ul className='collapse-body filter-group-check current-scrollbar'>
                  <li className='list-item'>
                    <input
                      type='radio'
                      name='availability'
                      className='tf-check rounded-0'
                      id='inStock'
                    />
                    <label htmlFor='inStock' className='label'>
                      In Stock
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item disabled'>
                    <input
                      type='radio'
                      name='availability'
                      className='tf-check rounded-0'
                      id='outStock'
                    />
                    <label htmlFor='outStock' className='label'>
                      Out of Stock <span>[ 20 ]</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='widget-facet'>
              <div
                className='facet-title'
                data-bs-target='#room'
                role='button'
                data-bs-toggle='collapse'
                aria-expanded='true'
                aria-controls='room'
              >
                <span className='h6 text-uppercase'>ROOM</span>
                <span className='icon ic-accordion-custom'></span>
              </div>
              <div id='room' className='collapse show'>
                <ul className='collapse-body filter-group-check current-scrollbar'>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='room'
                      className='tf-check v2'
                      id='living'
                    />
                    <label htmlFor='living' className='label'>
                      <span className='room-text'>Living Room</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='room'
                      className='tf-check v2'
                      id='bedroom'
                    />
                    <label htmlFor='bedroom' className='label'>
                      <span className='room-text'>Bedroom</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='room'
                      className='tf-check v2'
                      id='dining-room'
                    />
                    <label htmlFor='dining-room' className='label'>
                      <span className='room-text'>Dining Room</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='room'
                      className='tf-check v2'
                      id='office'
                    />
                    <label htmlFor='office' className='label'>
                      <span className='room-text'>Office</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='room'
                      className='tf-check v2'
                      id='outdoor'
                    />
                    <label htmlFor='outdoor' className='label'>
                      <span className='room-text'>Outdoor</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='widget-facet'>
              <div
                className='facet-title'
                data-bs-target='#material'
                role='button'
                data-bs-toggle='collapse'
                aria-expanded='true'
                aria-controls='material'
              >
                <span className='h6 text-uppercase'>Material</span>
                <span className='icon ic-accordion-custom'></span>
              </div>
              <div id='material' className='collapse show'>
                <ul className='collapse-body filter-group-check current-scrollbar'>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='material'
                      className='tf-check v2'
                      id='wood'
                    />
                    <label htmlFor='wood' className='label'>
                      <span className='material-text'>Wood</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='material'
                      className='tf-check v2'
                      id='metal'
                    />
                    <label htmlFor='metal' className='label'>
                      <span className='material-text'>Metal</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='material'
                      className='tf-check v2'
                      id='glass'
                    />
                    <label htmlFor='glass' className='label'>
                      <span className='material-text'>Glass</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='material'
                      className='tf-check v2'
                      id='marble'
                    />
                    <label htmlFor='marble' className='label'>
                      <span className='material-text'>Marble</span>
                      <span>[ 0 ]</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='widget-facet'>
              <div
                className='facet-title'
                data-bs-target='#price'
                role='button'
                data-bs-toggle='collapse'
                aria-expanded='true'
                aria-controls='price'
              >
                <span className='h6 text-uppercase'>Price</span>
                <span className='icon ic-accordion-custom'></span>
              </div>
              <div id='price' className='collapse show'>
                <div className='collapse-body widget-price filter-price'>
                  <div
                    className='price-val-range'
                    id='price-value-range'
                    data-min='0'
                    data-max='500'
                  ></div>
                  <div className='box-value-price'>
                    <span className='text-body-default text_heading-color'>
                      Price:
                    </span>
                    <div className='price-box'>
                      <div
                        className='price-val'
                        id='price-min-value'
                        data-currency='$'
                      ></div>
                      <span className='line-price'></span>
                      <div
                        className='price-val'
                        id='price-max-value'
                        data-currency='$'
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='widget-facet'>
              <div
                className='facet-title'
                data-bs-target='#style'
                role='button'
                data-bs-toggle='collapse'
                aria-expanded='true'
                aria-controls='style'
              >
                <span className='h6 text-uppercase'>style</span>
                <span className='icon ic-accordion-custom'></span>
              </div>
              <div id='style' className='collapse show'>
                <ul className='collapse-body filter-group-check current-scrollbar'>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='style'
                      className='tf-check v2'
                      id='modern'
                    />
                    <label htmlFor='modern' className='label'>
                      <span className='style-text'>Modern</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='style'
                      className='tf-check v2'
                      id='minimalist'
                    />
                    <label htmlFor='minimalist' className='label'>
                      <span className='style-text'>Minimalist</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='style'
                      className='tf-check v2'
                      id='mid-century'
                    />
                    <label htmlFor='mid-century' className='label'>
                      <span className='style-text'>Mid-century</span>
                      <span>[ 20 ]</span>
                    </label>
                  </li>
                  <li className='list-item'>
                    <input
                      type='checkbox'
                      name='style'
                      className='tf-check v2'
                      id='rustic'
                    />
                    <label htmlFor='rustic' className='label'>
                      <span className='style-text'>Rustic</span>
                      <span>[ 0 ]</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='canvas-bottom '>
            <button
              id='reset-filter'
              className='tf-btn btn-reset btn-bg-secondary animate-btn'
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      {/* /Filter */}

      {/* Compare */}
      <div className='modal modalCentered fade modal-compare' id='compare'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <span className='icon-close-popup' data-bs-dismiss='modal'>
              <i className='icon-close'></i>
            </span>
            <div className='modal-heading'>
              <div className='h4 title text-uppercase'>compare products</div>
            </div>
            <div className='modal-body main-list-clear'>
              <div className='tf-compare-inner'>
                <div className='tf-compare-list list-empty'>
                  <p className='text-empty'>Your compare is curently empty</p>
                  <div className='tf-compare-item card-product file-delete'>
                    <div className='card-product_wrapper aspect-ratio-1'>
                      <span className='remove icon-close'></span>
                      <a href='product-style-01.html' className='product-img'>
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-1.jpg'
                          alt='Image Product'
                          className='img-product'
                        />
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-1_1.jpg'
                          alt='Image Product'
                          className='lazyload img-hover'
                        />
                      </a>
                    </div>
                    <div className='card_product-info text-center'>
                      <a
                        href='product-style-01.html'
                        className='name-product h6 link text-line-clamp-2'
                      >
                        Torii Love Console
                      </a>
                      <div className='price-wrap justify-content-center'>
                        <span className='price-new fw-medium'>$1,999.00</span>
                        <span className='price-old fw-normal text-caption-1'>
                          $3,199.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='tf-compare-item card-product file-delete'>
                    <div className='card-product_wrapper aspect-ratio-1'>
                      <span className='remove icon-close'></span>
                      <a href='product-style-01.html' className='product-img'>
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-2.jpg'
                          alt='Image Product'
                          className='img-product'
                        />
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-2_1.jpg'
                          alt='Image Product'
                          className='lazyload img-hover'
                        />
                      </a>
                    </div>
                    <div className='card_product-info text-center'>
                      <a
                        href='product-style-01.html'
                        className='name-product h6 link text-line-clamp-2'
                      >
                        Dune Dining Chair
                      </a>
                      <div className='price-wrap justify-content-center'>
                        <span className='price-new fw-medium'>$499.00</span>
                        <span className='price-old fw-normal text-caption-1'>
                          $799.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='tf-compare-item card-product file-delete'>
                    <div className='card-product_wrapper aspect-ratio-1'>
                      <span className='remove icon-close'></span>
                      <a href='product-style-01.html' className='product-img'>
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-3.jpg'
                          alt='Image Product'
                          className='img-product'
                        />
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-3_1.jpg'
                          alt='Image Product'
                          className='lazyload img-hover'
                        />
                      </a>
                    </div>
                    <div className='card_product-info text-center'>
                      <a
                        href='product-style-01.html'
                        className='name-product h6 link text-line-clamp-2'
                      >
                        Planet Chair
                      </a>
                      <div className='price-wrap justify-content-center'>
                        <span className='price-new fw-medium'>$750.00</span>
                        <span className='price-old fw-normal text-caption-1'>
                          $1,249.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='tf-compare-item card-product file-delete'>
                    <div className='card-product_wrapper aspect-ratio-1'>
                      <span className='remove icon-close'></span>
                      <a href='product-style-01.html' className='product-img'>
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-4.jpg'
                          alt='Image Product'
                          className='img-product'
                        />
                        <Image
                          width='250'
                          height='250'
                          loading='lazy'
                          decoding='async'
                          src='/assets/images/products/prd-compare-4_1.jpg'
                          alt='Image Product'
                          className='lazyload img-hover'
                        />
                      </a>
                    </div>
                    <div className='card_product-info text-center'>
                      <a
                        href='product-style-01.html'
                        className='name-product h6 link text-line-clamp-2'
                      >
                        Planet Bar Chair
                      </a>
                      <div className='price-wrap justify-content-center'>
                        <span className='price-new fw-medium'>$899.00</span>
                        <span className='price-old fw-normal text-caption-1'>
                          $1,299.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group-btn'>
                <a
                  href='compare.html'
                  className='tf-btn btn-bg-secondary animate-btn fw-medium'
                >
                  COMPARE <span className='count-item-compare'>(4)</span>
                </a>
                <button
                  type='button'
                  className='tf-btn btn-border animate-btn animate-dark clear-list-empty'
                >
                  <span>CLEAR ALL</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Compare */}

      {/* quick-view */}
      <div className='modal modalCentered fade modal-quick-view' id='quickView'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <i
              className='icon icon-x icon-close-popup'
              data-bs-dismiss='modal'
            ></i>
            <div className='tf-product-media-wrap tf-btn-swiper-item'>
              <div dir='ltr' className='swiper tf-single-slide'>
                <div className='swiper-wrapper'>
                  <div
                    className='swiper-slide'
                    data-size='XS'
                    data-color='orange'
                  >
                    <div className='item'>
                      <Image
                        loading='lazy'
                        decoding='async'
                        width='611'
                        height='780'
                        src='/assets/images/products/prd-quickview-1.jpg'
                        alt='Image'
                      />
                    </div>
                  </div>
                  <div
                    className='swiper-slide'
                    data-size='L'
                    data-color='beige'
                  >
                    <div className='item'>
                      <Image
                        loading='lazy'
                        decoding='async'
                        width='611'
                        height='780'
                        src='/assets/images/products/prd-quickview-2.jpg'
                        alt='Image'
                      />
                    </div>
                  </div>
                  <div
                    className='swiper-slide'
                    data-size='M'
                    data-color='mochagray'
                  >
                    <div className='item'>
                      <Image
                        loading='lazy'
                        decoding='async'
                        width='611'
                        height='780'
                        src='/assets/images/products/prd-quickview-3.jpg'
                        alt='Image'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='tf-product-info-wrap'>
              <div className='tf-product-info-inner tf-product-info-list'>
                <div className='tf-product-info-heading'>
                  <a
                    href='product-style-01.html'
                    className='link product-info-name text-uppercase h5 text_heading-color'
                  >
                    Dune Dining Chair
                  </a>
                  <div className='product-info-price'>
                    <div className='price-wrap d-flex align-items-center gap_10'>
                      <span className='price-new price-on-sale h4 text_heading-color'>
                        $2,499.00
                      </span>
                      <span className='price-old compare-at-price h6'>
                        $2,899.00
                      </span>
                      <div className='tag-discount d-flex align-items-center gap_6'>
                        <i className='icon-tag'></i>
                        <span>30% OFF</span>
                      </div>
                    </div>
                  </div>
                  <p className='product-infor-sub text-body-default text_body-color-2 '>
                    Lorem ipsum dolor sit amet nec etiamconsectetur. Egestas
                    cursus a maecenas massa facilisi adipiscing dolor iaculis.
                    In mattis nec morbi.
                  </p>
                </div>
                <div className='tf-product-variant w-full mb_42'>
                  <div className='variant-picker-item variant-color'>
                    <div className='variant-picker-label'>
                      <div className='h6 fw-semibold fw-4 text_heading-color'>
                        Colors
                        <span className='variant-picker-label-value value-currentColor text-body-default fw-5 '>
                          orange
                        </span>
                      </div>
                    </div>
                    <div className='variant-picker-values'>
                      <div
                        className='hover-tooltip tooltip-bot color-btn active'
                        data-color='orange'
                      >
                        <span className='check-color bg-rustybrown'></span>
                        <span className='tooltip'>Orange</span>
                      </div>
                      <div
                        className='hover-tooltip tooltip-bot color-btn'
                        data-color='beige'
                      >
                        <span className='check-color bg-lightbeige'></span>
                        <span className='tooltip'>Beige</span>
                      </div>
                      <div
                        className='hover-tooltip tooltip-bot color-btn'
                        data-color='mochagray'
                      >
                        <span className='check-color bg-mochagray'></span>
                        <span className='tooltip'>Mochagray</span>
                      </div>
                    </div>
                  </div>
                  <div className='group-btn variant-quantity d-flex align-items-center justify-content-between'>
                    <div className='text-body-default'>Quantity</div>
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
                <div className='tf-product-total-quantity w-full '>
                  <div className='group-btn flex-md-nowrap mb_15'>
                    <a
                      href='#shoppingCart'
                      data-bs-toggle='modal'
                      className='tf-btn btn-bg-primary animate-btn btn-h-52 btn-add-to-cart'
                    >
                      ADD TO BAG
                      <span className='price-add d-none d-sm-flex'>
                        $2,499.00
                      </span>
                    </a>
                    <button
                      type='button'
                      className='d-none d-sm-flex hover-tooltip box-icon btn-add-wishlist flex-sm-shrink-0'
                    >
                      <span className='icon icon-heart'></span>
                      <span className='tooltip'>Add to Wishlist</span>
                    </button>
                    <a
                      href='#compare'
                      data-bs-toggle='modal'
                      aria-controls='compare'
                      className='d-none d-sm-flex hover-tooltip tooltip-top box-icon flex-sm-shrink-0'
                    >
                      <span className='icon icon-compare'></span>
                      <span className='tooltip'>Compare</span>
                    </a>
                  </div>
                  <div className='group-btn'>
                    <a
                      href='checkout.html'
                      className='tf-btn btn-bg-secondary animate-btn btn-h-52  w-full animate-btn'
                    >
                      BUY IT NOW
                    </a>
                  </div>
                </div>
                <a
                  href='product-style-01.html'
                  className='tf-btn-line hover-underline-link'
                >
                  <span className='text-body-default'>View full details</span>
                  <i className='icon icon-arrow-right-up fs-10'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end quick-view */}

      {/* quick-add */}
      <div className='modal modalCentered fade modal-quick-add' id='quickAdd'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <i
              className='icon icon-x icon-close-popup'
              data-bs-dismiss='modal'
            ></i>
            <div className='tf-product-info-wrap'>
              <div className='tf-product-info-inner tf-product-info-list'>
                <div className='tf-product-info-heading d-flex gap_15'>
                  <div className='img-prd'>
                    <Image
                      loading='lazy'
                      decoding='async'
                      width='107'
                      height='107'
                      src='/assets/images/products/prd-quick-add.jpg'
                      alt='product'
                    />
                  </div>
                  <div>
                    <a
                      href='product-style-01.html'
                      className='link product-info-name text-uppercase text-body-default fw-5 text_heading-color'
                    >
                      Dune Dining Chair
                    </a>
                    <div className='product-info-price'>
                      <div className='price-wrap d-flex align-items-center gap_10'>
                        <span className='price-new price-on-sale text-body-default text_heading-color fw-5'>
                          $2,499.00
                        </span>
                        <span className='price-old compare-at-price text-caption-1 fw'>
                          $2,899.00
                        </span>
                        <div className='tag-discount d-flex align-items-center gap_6'>
                          <i className='icon-tag'></i>
                          <span className='text-caption-1'>30% OFF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tf-product-variant w-full'>
                  <div className='variant-picker-item variant-color'>
                    <div className='variant-picker-label'>
                      <div className='h6 fw-semibold fw-4 text_heading-color'>
                        Colors
                        <span className='variant-picker-label-value value-currentColor text-body-default fw-5 '>
                          orange
                        </span>
                      </div>
                    </div>
                    <div className='variant-picker-values'>
                      <div
                        className='hover-tooltip tooltip-bot color-btn active'
                        data-color='orange'
                      >
                        <span className='check-color bg-rustybrown'></span>
                        <span className='tooltip'>Orange</span>
                      </div>
                      <div
                        className='hover-tooltip tooltip-bot color-btn'
                        data-color='beige'
                      >
                        <span className='check-color bg-lightbeige'></span>
                        <span className='tooltip'>Beige</span>
                      </div>
                      <div
                        className='hover-tooltip tooltip-bot color-btn'
                        data-color='mochagray'
                      >
                        <span className='check-color bg-mochagray'></span>
                        <span className='tooltip'>Mochagray</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='group-btn variant-quantity d-flex align-items-center justify-content-between'>
                  <div className='text-body-default'>Quantity</div>
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
              <div className='tf-product-total-quantity w-full'>
                <div className='group-btn flex-md-nowrap mb_15'>
                  <a
                    href='#shoppingCart'
                    data-bs-toggle='modal'
                    className='tf-btn btn-bg-primary btn-h-52 btn-add-to-cart animate-btn'
                  >
                    ADD TO BAG
                    <span className='price-add d-none d-sm-flex'>
                      $2,499.00
                    </span>
                  </a>
                  <button
                    type='button'
                    className='d-none d-sm-flex hover-tooltip box-icon btn-add-wishlist flex-sm-shrink-0'
                  >
                    <span className='icon icon-heart'></span>
                    <span className='tooltip'>Add to Wishlist</span>
                  </button>
                  <a
                    href='#compare'
                    data-bs-toggle='modal'
                    aria-controls='compare'
                    className='d-none d-sm-flex hover-tooltip tooltip-top box-icon flex-sm-shrink-0'
                  >
                    <span className='icon icon-compare'></span>
                    <span className='tooltip'>Compare</span>
                  </a>
                </div>
                <div className='group-btn'>
                  <a
                    href='checkout.html'
                    className='tf-btn btn-bg-secondary btn-h-52 w-full animate-btn'
                  >
                    BUY IT NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end quick-add */}

      {/* shoppingCart */}
      <div
        className='modal fullRight fade modal-shopping-cart '
        id='shoppingCart'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='d-flex flex-column flex-grow-1 h-100'>
              <div className='header-modal'>
                <div className='title'>Shopping Cart</div>
                <span
                  className='icon-close icon-close-popup'
                  data-bs-dismiss='modal'
                ></span>
              </div>
              <div className='wrap list-file-delete'>
                <div className='tf-mini-cart-threshold'>
                  <p className='h6 mb_21  fw-4'>
                    Spend <span className='fw-5'>$100</span> more to get{" "}
                    <span className='fw-5'>Free Shipping</span>
                  </p>
                  <div className='tf-progress-bar tf-progress-ship'>
                    <div
                      className='value'
                      style={{ width: "0%" }}
                      data-progress='75'
                    >
                      <i className='icon icon-ship-car'></i>
                    </div>
                  </div>
                </div>
                <div className='tf-mini-cart-wrap'>
                  <div className='tf-mini-cart-main'>
                    <div className='tf-mini-cart-sroll'>
                      <div className='d-flex justify-content-between heading'>
                        <div className='text-body-default text-uppercase'>
                          <span className='prd-count'>4</span> products
                        </div>
                        <a
                          href='#'
                          className='hover-underline-link text-body-default clear-file-delete'
                        >
                          Empty cart
                        </a>
                      </div>
                      <div className='tf-mini-cart-items d-grid gap_20'>
                        <div className='tf-mini-cart-item file-delete'>
                          <div className='tf-mini-cart-image'>
                            <Image
                              loading='lazy'
                              decoding='async'
                              width='100'
                              height='120'
                              src='/assets/images/products/prd-view-cart-1.jpg'
                              alt='product'
                            />
                          </div>
                          <div className='tf-mini-cart-info flex-grow-1'>
                            <div className='content'>
                              <div className='left'>
                                <div className='d-grid'>
                                  <div className='text-body-default text-uppercase link mb_8 fw-5'>
                                    <a
                                      href='product-style-01.html'
                                      className='link line-clamp-2'
                                    >
                                      Bio-Radiant Glassy Balm Highlighter Stick
                                    </a>
                                  </div>
                                  <div className='text-caption-1 text_body-color-2 mb_8'>
                                    Glassy Citrine / 3ML
                                  </div>
                                  <div className='d-flex align-items-sm-center gap_8 flex-column flex-sm-row'>
                                    <div className='d-flex gap_16 align-items-center text_heading-color'>
                                      <div className='wg-quantity'>
                                        <span className='btn-quantity minus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <path
                                              d='M0 4.28516H10V5.71374H0V4.28516Z'
                                              fill='#252525'
                                            />
                                          </svg>
                                        </span>
                                        <input
                                          type='text'
                                          className='quantity-product'
                                          name='number'
                                          defaultValue='1'
                                        />
                                        <span className='btn-quantity plus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <g clipPath='url(#clip0_545_4389_cartitem1)'>
                                              <path
                                                d='M5.6239 4.3761V0H4.3761V4.3761H0V5.6239H4.3761V10H5.6239V5.6239H10V4.3761H5.6239Z'
                                                fill='#252525'
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id='clip0_545_4389_cartitem1'>
                                                <rect
                                                  width='10'
                                                  height='10'
                                                  fill='white'
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                    <div className='text-button tf-btn-remove remove'>
                                      Remove
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='right'>
                                <div className='h6 tf-mini-card-price'>
                                  $130.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='tf-mini-cart-item file-delete'>
                          <div className='tf-mini-cart-image'>
                            <Image
                              loading='lazy'
                              decoding='async'
                              width='100'
                              height='120'
                              src='/assets/images/products/prd-view-cart-2.jpg'
                              alt='product'
                            />
                          </div>
                          <div className='tf-mini-cart-info flex-grow-1'>
                            <div className='content'>
                              <div className='left'>
                                <div className='d-grid'>
                                  <div className='text-body-default text-uppercase link mb_8 fw-5'>
                                    <a
                                      href='product-style-01.html'
                                      className='link line-clamp-2'
                                    >
                                      Glowy Super Gel Lightweight Dewy
                                      Illuminator
                                    </a>
                                  </div>
                                  <div className='text-caption-1 text_body-color-2 mb_8'>
                                    Warmglow / 3ML
                                  </div>
                                  <div className='d-flex align-items-sm-center gap_8 flex-column flex-sm-row'>
                                    <div className='d-flex gap_16 align-items-center text_heading-color'>
                                      <div className='wg-quantity'>
                                        <span className='btn-quantity minus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <path
                                              d='M0 4.28516H10V5.71374H0V4.28516Z'
                                              fill='#252525'
                                            />
                                          </svg>
                                        </span>
                                        <input
                                          type='text'
                                          className='quantity-product'
                                          name='number'
                                          defaultValue='1'
                                        />
                                        <span className='btn-quantity plus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <g clipPath='url(#clip0_545_4389_cartitem2)'>
                                              <path
                                                d='M5.6239 4.3761V0H4.3761V4.3761H0V5.6239H4.3761V10H5.6239V5.6239H10V4.3761H5.6239Z'
                                                fill='#252525'
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id='clip0_545_4389_cartitem2'>
                                                <rect
                                                  width='10'
                                                  height='10'
                                                  fill='white'
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                    <div className='text-button tf-btn-remove remove'>
                                      Remove
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='right'>
                                <div className='h6 tf-mini-card-price'>
                                  $130.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='tf-mini-cart-item file-delete'>
                          <div className='tf-mini-cart-image'>
                            <Image
                              loading='lazy'
                              decoding='async'
                              width='100'
                              height='120'
                              src='/assets/images/products/prd-view-cart-3.jpg'
                              alt='product'
                            />
                          </div>
                          <div className='tf-mini-cart-info flex-grow-1'>
                            <div className='content'>
                              <div className='left'>
                                <div className='d-grid'>
                                  <div className='text-body-default text-uppercase link mb_8 fw-5'>
                                    <a
                                      href='product-style-01.html'
                                      className='link line-clamp-2'
                                    >
                                      Lip Butter Balm Treatment for Hydration +
                                      Nourishing Shine
                                    </a>
                                  </div>
                                  <div className='text-caption-1 text_body-color-2 mb_8'>
                                    Birthday Cake / 10ML
                                  </div>
                                  <div className='d-flex align-items-sm-center gap_8 flex-column flex-sm-row'>
                                    <div className='d-flex gap_16 align-items-center text_heading-color'>
                                      <div className='wg-quantity'>
                                        <span className='btn-quantity minus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <path
                                              d='M0 4.28516H10V5.71374H0V4.28516Z'
                                              fill='#252525'
                                            />
                                          </svg>
                                        </span>
                                        <input
                                          type='text'
                                          className='quantity-product'
                                          name='number'
                                          defaultValue='1'
                                        />
                                        <span className='btn-quantity plus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <g clipPath='url(#clip0_545_4389_cartitem3)'>
                                              <path
                                                d='M5.6239 4.3761V0H4.3761V4.3761H0V5.6239H4.3761V10H5.6239V5.6239H10V4.3761H5.6239Z'
                                                fill='#252525'
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id='clip0_545_4389_cartitem3'>
                                                <rect
                                                  width='10'
                                                  height='10'
                                                  fill='white'
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                    <div className='text-button tf-btn-remove remove'>
                                      Remove
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='right'>
                                <div className='h6 tf-mini-card-price'>
                                  $130.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='tf-mini-cart-item file-delete'>
                          <div className='tf-mini-cart-image'>
                            <Image
                              loading='lazy'
                              decoding='async'
                              width='100'
                              height='120'
                              src='/assets/images/products/prd-view-cart-1.jpg'
                              alt='product'
                            />
                          </div>
                          <div className='tf-mini-cart-info flex-grow-1'>
                            <div className='content'>
                              <div className='left'>
                                <div className='d-grid'>
                                  <div className='text-body-default text-uppercase link mb_8 fw-5'>
                                    <a
                                      href='product-style-01.html'
                                      className='link line-clamp-2'
                                    >
                                      Bio-Radiant Glassy Balm Highlighter Stick
                                    </a>
                                  </div>
                                  <div className='text-caption-1 text_body-color-2 mb_8'>
                                    Glassy Citrine / 3ML
                                  </div>
                                  <div className='d-flex align-items-sm-center gap_8 flex-column flex-sm-row'>
                                    <div className='d-flex gap_16 align-items-center text_heading-color'>
                                      <div className='wg-quantity'>
                                        <span className='btn-quantity minus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <path
                                              d='M0 4.28516H10V5.71374H0V4.28516Z'
                                              fill='#252525'
                                            />
                                          </svg>
                                        </span>
                                        <input
                                          type='text'
                                          className='quantity-product'
                                          name='number'
                                          defaultValue='1'
                                        />
                                        <span className='btn-quantity plus-quantity'>
                                          <svg
                                            width='10'
                                            height='10'
                                            viewBox='0 0 10 10'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <g clipPath='url(#clip0_545_4389_cartitem4)'>
                                              <path
                                                d='M5.6239 4.3761V0H4.3761V4.3761H0V5.6239H4.3761V10H5.6239V5.6239H10V4.3761H5.6239Z'
                                                fill='#252525'
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id='clip0_545_4389_cartitem4'>
                                                <rect
                                                  width='10'
                                                  height='10'
                                                  fill='white'
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                    <div className='text-button tf-btn-remove remove'>
                                      Remove
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='right'>
                                <div className='h6 tf-mini-card-price'>
                                  $130.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tf-mini-cart-bottom'>
                    <div className='tf-mini-cart-tool'>
                      <div className='tf-mini-cart-tool-btn btn-add-gift'>
                        <div className='icon'>
                          <i className='icon-gift'></i>
                        </div>
                        <div className='title text-caption-1 fw-5 text_secondary-color'>
                          Add gift wrap
                        </div>
                      </div>
                      <div className='tf-mini-cart-tool-btn btn-add-note'>
                        <div className='icon'>
                          <i className='icon-note'></i>
                        </div>
                        <div className='title text-caption-1 fw-5 text_secondary-color'>
                          Order note
                        </div>
                      </div>
                      <div className='tf-mini-cart-tool-btn btn-estimate-shipping'>
                        <div className='icon'>
                          <i className='icon-car'></i>
                        </div>
                        <div className='title text-caption-1 fw-5 text_secondary-color'>
                          Shipping
                        </div>
                      </div>
                    </div>
                    <div className='tf-mini-cart-bottom-wrap'>
                      <div className='tf-cart-totals-discounts mb_32'>
                        <div className=' h6 text-uppercase'>total:</div>
                        <div className='h6 tf-totals-total-value'>$390.00</div>
                      </div>
                      <div className='tf-mini-cart-view-checkout'>
                        <a
                          href='shop-cart.html'
                          className='tf-btn btn-bg-primary w-full mb_10'
                        >
                          View cart
                        </a>
                        <a
                          href='checkout.html'
                          className='tf-btn btn-bg-secondary w-full'
                        >
                          Check Out
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='tf-mini-cart-tool-openable add-gift'>
                    <div className='tf-mini-cart-tool-content'>
                      <div className='h5 mb_16'>Add gift wrap</div>
                      <div className='content'>
                        <p className='text_body-color-1 text-body-default'>
                          The product will be wrapped carefully. Free is only{" "}
                          <span className='text_secondary-color'>$10.00</span>.
                        </p>
                        <p className='text_body-color-1 text-body-default'>
                          {" "}
                          Do you want a gift wrap?
                        </p>
                      </div>
                      <div className='tf-mini-cart-view-checkout d-flex gap_10'>
                        <a
                          href='#'
                          className='tf-btn btn-bg-primary w-full  text-uppercase'
                        >
                          Add a Gift Wrap
                        </a>
                        <div className='tf-btn btn-border w-full text-uppercase tf-mini-cart-tool-close'>
                          Cancel
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tf-mini-cart-tool-openable add-note'>
                    <div className='tf-mini-cart-tool-content'>
                      <label
                        htmlFor='Cart-note'
                        className='tf-mini-cart-tool-text mb_16'
                      >
                        <span className='h5 '>Order note</span>
                      </label>
                      <form className='form-add-note tf-mini-cart-tool-wrap'>
                        <fieldset className='d-flex'>
                          <textarea
                            name='note'
                            id='Cart-note'
                            placeholder='Instruction for seller...'
                          ></textarea>
                        </fieldset>
                        <div className='tf-cart-tool-btns d-flex gap_10'>
                          <button
                            type='submit'
                            className='tf-btn btn-bg-primary w-full  text-uppercase'
                          >
                            Save
                          </button>
                          <div className='tf-btn btn-border w-full text-uppercase tf-mini-cart-tool-close'>
                            Cancel
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='tf-mini-cart-tool-openable estimate-shipping'>
                    <div className='tf-mini-cart-tool-content'>
                      <label className='tf-mini-cart-tool-text mb_16'>
                        <span className='h5 '>shipping estimates</span>
                      </label>
                      <form
                        className='form-estimate-shipping tf-mini-cart-tool-wrap'
                        id='form-estimate-shipping'
                      >
                        <div className='mb_14'>
                          <div className='text-body-default text_secondary-color mb_10'>
                            Country
                          </div>
                          <div className='tf-select'>
                            <select
                              className='text-title'
                              id='shipping-country-form'
                              name='address[country]'
                              data-default=''
                              defaultValue='United States'
                            >
                              <option
                                value='Australia'
                                data-provinces='[["Australian Capital Territory","Australian Capital Territory"],["New South Wales","New South Wales"],["Northern Territory","Northern Territory"],["Queensland","Queensland"],["South Australia","South Australia"],["Tasmania","Tasmania"],["Victoria","Victoria"],["Western Australia","Western Australia"]]'
                              >
                                Australia
                              </option>
                              <option value='Austria' data-provinces='[]'>
                                Austria
                              </option>
                              <option value='Belgium' data-provinces='[]'>
                                Belgium
                              </option>
                              <option
                                value='Canada'
                                data-provinces='[["Ontario","Ontario"],["Quebec","Quebec"]]'
                              >
                                Canada
                              </option>
                              <option
                                value='Czech Republic'
                                data-provinces='[]'
                              >
                                Czechia
                              </option>
                              <option value='Denmark' data-provinces='[]'>
                                Denmark
                              </option>
                              <option value='Finland' data-provinces='[]'>
                                Finland
                              </option>
                              <option value='France' data-provinces='[]'>
                                France
                              </option>
                              <option value='Germany' data-provinces='[]'>
                                Germany
                              </option>
                              <option
                                value='United States'
                                data-provinces='[["Alabama","Alabama"],["California","California"],["Florida","Florida"]]'
                              >
                                United States
                              </option>
                              <option
                                value='United Kingdom'
                                data-provinces='[["England","England"],["Scotland","Scotland"],["Wales","Wales"],["Northern Ireland","Northern Ireland"]]'
                              >
                                United Kingdom
                              </option>
                              <option value='India' data-provinces='[]'>
                                India
                              </option>
                              <option value='Japan' data-provinces='[]'>
                                Japan
                              </option>
                              <option value='Mexico' data-provinces='[]'>
                                Mexico
                              </option>
                              <option value='South Korea' data-provinces='[]'>
                                South Korea
                              </option>
                              <option value='Spain' data-provinces='[]'>
                                Spain
                              </option>
                              <option value='Italy' data-provinces='[]'>
                                Italy
                              </option>
                              <option
                                value='Vietnam'
                                data-provinces='[["Ha Noi","Ha Noi"],["Da Nang","Da Nang"],["Ho Chi Minh","Ho Chi Minh"]]'
                              >
                                Vietnam
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className='mb_14'>
                          <div className='text-body-default text_secondary-color mb_10'>
                            State/Province
                          </div>
                          <div className='tf-select'>
                            <select
                              className='text-title'
                              name='address[province]'
                              id='shipping-province-form'
                              data-default=''
                            ></select>
                          </div>
                        </div>
                        <fieldset className='mb_12'>
                          <div className='text-body-default text_secondary-color mb_10'>
                            Postal/Zip Code
                          </div>
                          <input
                            type='text'
                            placeholder='100000'
                            data-opend-focus
                            id='zipcode'
                            name='address[zip]'
                            defaultValue=''
                          />
                        </fieldset>
                        <div
                          id='zipcode-message'
                          className='error mb_12'
                          style={{ display: "none" }}
                        >
                          We found one shipping rate available for undefined.
                        </div>
                        <div
                          id='zipcode-success'
                          className='success mb_12'
                          style={{ display: "none" }}
                        >
                          <p>
                            We found one shipping rate available for your
                            address:
                          </p>
                          <p className='standard'>
                            Standard at{" "}
                            <span className='standard-price'>$8.00</span> USD
                          </p>
                        </div>
                        <div className='tf-cart-tool-btns gap_10'>
                          <button
                            type='submit'
                            className='tf-btn btn-bg-primary w-full text-uppercase'
                          >
                            Save
                          </button>
                          <div className='tf-btn btn-border w-full text-uppercase tf-mini-cart-tool-close'>
                            Cancel
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /shoppingCart */}

      {/* login */}
      <div
        className='offcanvas offcanvas-end popup-style-1 popup-login'
        id='login'
      >
        <div className='canvas-wrapper'>
          <div className='canvas-header popup-header'>
            <span className='title h4'>LOGIN</span>
            <button
              className='icon-close icon-close-popup'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='canvas-body popup-inner'>
            <form className='form-log' action='my-account.html'>
              <div className='form-content'>
                <fieldset className='tf-field'>
                  <input
                    className='tf-input'
                    type='text'
                    placeholder='Username'
                    required
                  />
                  <label className='tf-lable'>Username *</label>
                </fieldset>
                <fieldset className='tf-field password-wrapper'>
                  <input
                    className='tf-input password-field'
                    type='password'
                    placeholder='Password'
                    required
                  />
                  <label className='tf-lable'>Password *</label>
                  <span className=' toggle-pass icon-show-password'></span>
                </fieldset>
              </div>
              <div className='bottom'>
                <div className='checkbox-wrap'>
                  <input type='checkbox' className='tf-check' id='checksave2' />
                  <span>Remember me</span>
                </div>
                <a
                  href='#resetPass'
                  data-bs-toggle='offcanvas'
                  className='link'
                >
                  Forgot password?
                </a>
              </div>
              <button
                type='submit'
                className='btn-submit tf-btn btn-bg-secondary animate-btn w-full btn-h-52 '
              >
                LOG IN
              </button>
            </form>
            <div className='other-login mb_40'>
              <a
                href='#'
                className='tf-btn btn-fb ic-abs w-full mb_15 animate-btn btn-h-52 '
              >
                <span className='icon'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='12' r='12' fill='#3B5998' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M15.1163 7.992L13.9867 7.99275C13.101 7.99275 12.9293 8.4135 12.9293 9.03075V10.3927H15.042L14.7667 12.5265H12.9293V18H10.7265V12.5265H8.8845V10.3927H10.7265V8.82C10.7265 6.99375 11.8417 6 13.47 6C14.25 6 14.9205 6.05775 15.1163 6.084V7.992ZM12 0C5.373 0 0 5.37225 0 12C0 18.627 5.373 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z'
                      fill='white'
                    />
                  </svg>
                </span>
                LOG IN WITH FACEBOOK
              </a>
              <a
                href='#'
                className='tf-btn btn-gg ic-abs w-full animate-btn animate-dark btn-h-52 '
              >
                <span className='icon'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g>
                      <path
                        d='M23.0938 9.91258L13.3045 9.91211C12.8722 9.91211 12.5218 10.2625 12.5218 10.6947V13.822C12.5218 14.2542 12.8722 14.6046 13.3044 14.6046H18.8172C18.2135 16.1712 17.0869 17.4832 15.6494 18.3168L18 22.386C21.7707 20.2052 24 16.3789 24 12.0955C24 11.4857 23.9551 11.0497 23.8652 10.5587C23.7968 10.1858 23.473 9.91258 23.0938 9.91258Z'
                        fill='#167EE6'
                      />
                      <path
                        d='M12 19.3037C9.30218 19.3037 6.94699 17.8297 5.68207 15.6484L1.61304 17.9938C3.68374 21.5826 7.56283 23.9994 12 23.9994C14.1768 23.9994 16.2307 23.4133 18 22.3919V22.3863L15.6494 18.3171C14.5742 18.9408 13.3299 19.3037 12 19.3037Z'
                        fill='#12B347'
                      />
                      <path
                        d='M18 22.3932V22.3876L15.6494 18.3184C14.5741 18.9419 13.33 19.3049 12 19.3049V24.0006C14.1767 24.0006 16.2308 23.4145 18 22.3932Z'
                        fill='#0F993E'
                      />
                      <path
                        d='M4.69566 12.0003C4.69566 10.6705 5.05856 9.42637 5.68205 8.3512L1.61302 6.00586C0.586031 7.76962 0 9.81797 0 12.0003C0 14.1826 0.586031 16.2309 1.61302 17.9947L5.68205 15.6494C5.05856 14.5742 4.69566 13.3301 4.69566 12.0003Z'
                        fill='#FFD500'
                      />
                      <path
                        d='M12 4.69566C13.7593 4.69566 15.3753 5.32078 16.6375 6.36061C16.9489 6.61711 17.4014 6.59859 17.6867 6.31336L19.9024 4.09758C20.2261 3.77395 20.203 3.24422 19.8573 2.94431C17.7425 1.10967 14.991 0 12 0C7.56283 0 3.68374 2.41673 1.61304 6.00558L5.68207 8.35092C6.94699 6.16969 9.30218 4.69566 12 4.69566Z'
                        fill='#FF4B26'
                      />
                      <path
                        d='M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6866 6.31336L19.9024 4.09758C20.226 3.77395 20.2029 3.24422 19.8573 2.94431C17.7425 1.10962 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z'
                        fill='#D93F21'
                      />
                    </g>
                  </svg>
                </span>
                LOG IN WITH GOOGLE
              </a>
            </div>
            <div className=''>
              <a
                href='#register'
                data-bs-toggle='offcanvas'
                className='tf-btn-line hover-underline-link text-body-default gap_10 d-flex align-items-center fw-4'
              >
                New customer? Create your account
                <i className='icon-arrow-right-up2'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /login */}

      {/* register */}
      <div
        className='offcanvas offcanvas-end popup-style-1 popup-register'
        id='register'
      >
        <div className='canvas-wrapper'>
          <div className='canvas-header popup-header'>
            <span className='title h4'>Create account</span>
            <button
              className='icon-close icon-close-popup'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='canvas-body popup-inner'>
            <form className='form-log'>
              <div className='form-content'>
                <fieldset className='tf-field'>
                  <input
                    className='tf-input'
                    type='text'
                    placeholder='First name'
                    required={true}
                  />
                  <label className='tf-lable'>First name *</label>
                </fieldset>
                <fieldset className='tf-field'>
                  <input
                    className='tf-input'
                    type='text'
                    placeholder=''
                    required={true}
                  />
                  <label className='tf-lable'>Last name *</label>
                </fieldset>
                <fieldset className='tf-field'>
                  <input
                    className='tf-input'
                    type='email'
                    placeholder=''
                    required={true}
                  />
                  <label className='tf-lable'>Email *</label>
                </fieldset>
                <fieldset className='tf-field password-wrapper'>
                  <input
                    className='tf-input password-field'
                    type='password'
                    placeholder=''
                    required={true}
                  />
                  <label className='tf-lable'>Password *</label>
                  <span className=' toggle-pass icon-show-password'></span>
                </fieldset>
              </div>
              <div className='bottom '>
                <div className='checkbox-wrap align-items-start'>
                  <input type='checkbox' className='tf-check' id='checksave1' />
                  <p className='text-caption-1'>
                    Yes, sign me up for the Vinfur Newsletter. I confirm I am
                    over 16 years old. I would like to receive digital
                    communications (email and SMS) from Vinfur about products
                    and exclusive offers.
                  </p>
                </div>
              </div>
              <button
                type='submit'
                className='btn-submit tf-btn btn-bg-secondary animate-btn w-full btn-h-52 '
              >
                LOG IN
              </button>
            </form>
            <div className='other-login mb_40'>
              <a
                href='#'
                className='tf-btn btn-fb ic-abs w-full mb_15 animate-btn btn-h-52 '
              >
                <span className='icon'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='12' r='12' fill='#3B5998' />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M15.1163 7.992L13.9867 7.99275C13.101 7.99275 12.9293 8.4135 12.9293 9.03075V10.3927H15.042L14.7667 12.5265H12.9293V18H10.7265V12.5265H8.8845V10.3927H10.7265V8.82C10.7265 6.99375 11.8417 6 13.47 6C14.25 6 14.9205 6.05775 15.1163 6.084V7.992ZM12 0C5.373 0 0 5.37225 0 12C0 18.627 5.373 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z'
                      fill='white'
                    />
                  </svg>
                </span>
                LOG IN WITH FACEBOOK
              </a>
              <a
                href='#'
                className='tf-btn btn-gg ic-abs w-full animate-btn animate-dark btn-h-52 '
              >
                <span className='icon'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g>
                      <path
                        d='M23.0938 9.91258L13.3045 9.91211C12.8722 9.91211 12.5218 10.2625 12.5218 10.6947V13.822C12.5218 14.2542 12.8722 14.6046 13.3044 14.6046H18.8172C18.2135 16.1712 17.0869 17.4832 15.6494 18.3168L18 22.386C21.7707 20.2052 24 16.3789 24 12.0955C24 11.4857 23.9551 11.0497 23.8652 10.5587C23.7968 10.1858 23.473 9.91258 23.0938 9.91258Z'
                        fill='#167EE6'
                      />
                      <path
                        d='M12 19.3037C9.30218 19.3037 6.94699 17.8297 5.68207 15.6484L1.61304 17.9938C3.68374 21.5826 7.56283 23.9994 12 23.9994C14.1768 23.9994 16.2307 23.4133 18 22.3919V22.3863L15.6494 18.3171C14.5742 18.9408 13.3299 19.3037 12 19.3037Z'
                        fill='#12B347'
                      />
                      <path
                        d='M18 22.3932V22.3876L15.6494 18.3184C14.5741 18.9419 13.33 19.3049 12 19.3049V24.0006C14.1767 24.0006 16.2308 23.4145 18 22.3932Z'
                        fill='#0F993E'
                      />
                      <path
                        d='M4.69566 12.0003C4.69566 10.6705 5.05856 9.42637 5.68205 8.3512L1.61302 6.00586C0.586031 7.76962 0 9.81797 0 12.0003C0 14.1826 0.586031 16.2309 1.61302 17.9947L5.68205 15.6494C5.05856 14.5742 4.69566 13.3301 4.69566 12.0003Z'
                        fill='#FFD500'
                      />
                      <path
                        d='M12 4.69566C13.7593 4.69566 15.3753 5.32078 16.6375 6.36061C16.9489 6.61711 17.4014 6.59859 17.6867 6.31336L19.9024 4.09758C20.2261 3.77395 20.203 3.24422 19.8573 2.94431C17.7425 1.10967 14.991 0 12 0C7.56283 0 3.68374 2.41673 1.61304 6.00558L5.68207 8.35092C6.94699 6.16969 9.30218 4.69566 12 4.69566Z'
                        fill='#FF4B26'
                      />
                      <path
                        d='M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6866 6.31336L19.9024 4.09758C20.226 3.77395 20.2029 3.24422 19.8573 2.94431C17.7425 1.10962 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z'
                        fill='#D93F21'
                      />
                    </g>
                  </svg>
                </span>
                LOG IN WITH GOOGLE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /register */}

      {/* Reset pass */}
      <div
        className='offcanvas offcanvas-end popup-style-1 popup-reset-pass'
        id='resetPass'
      >
        <div className='canvas-wrapper'>
          <div className='canvas-header popup-header'>
            <span className='title h4'>Reset Your Password</span>
            <button
              className='icon-close icon-close-popup'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='canvas-body popup-inner'>
            <form action='#' className='form-login'>
              <div className='mb_40'>
                <p className='text text_body-color-1 mb_32'>
                  Please enter your registered email address to receive an email
                  to reset your password
                </p>
                <fieldset className='tf-field'>
                  <input
                    className='tf-input'
                    type='email'
                    placeholder='Email'
                    required={true}
                  />
                  <label className='tf-lable'>Email *</label>
                </fieldset>
              </div>
              <div className='bot'>
                <div className='button-wrap'>
                  <button
                    className='subscribe-button tf-btn btn-bg-secondary animate-btn bg-dark-2 w-full btn-h-52'
                    type='submit'
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Reset pass */}

      {/* search */}
      <div className='modal fade popup-search' id='search'>
        <div className='modal-dialog w-full'>
          <div className='modal-content'>
            <div className=''></div>
            <div className='content-wrap'>
              <div className='looking-for-wrap'>
                <form className='form-search'>
                  <fieldset className='text'>
                    <input
                      type='text'
                      placeholder='Enter Your Search'
                      className=''
                      name='text'
                      tabIndex={0}
                      defaultValue=''
                      required
                    />
                  </fieldset>
                  <button type='submit' className='button-submit'>
                    <i className='icon icon-magnifying-glass'></i>
                  </button>
                  <div
                    className='icon-x icon-close-popup'
                    data-bs-dismiss='modal'
                  ></div>
                </form>
              </div>
              <div className='bot'>
                <div className='quick-link'>
                  <div className='text-body-default fw-5 mb_26'>Quick Link</div>
                  <ul className='d-grid gap_10'>
                    <li>
                      <a
                        href='shop-style-01.html'
                        className='link text-body-default text_body-color-2'
                      >
                        Best Sellers
                      </a>
                    </li>
                    <li>
                      <a
                        href='shop-style-01.html'
                        className='link text-body-default text_body-color-2'
                      >
                        Chairs
                      </a>
                    </li>
                    <li>
                      <a
                        href='shop-style-01.html'
                        className='link text-body-default text_body-color-2'
                      >
                        Tables
                      </a>
                    </li>
                    <li>
                      <a
                        href='shop-style-01.html'
                        className='link text-body-default text_body-color-2'
                      >
                        Lighting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='suggestion'>
                  <div className='text-body-default fw-5 mb_26'>
                    Suggestion for you
                  </div>
                  <div className='prd-wrap'>
                    <div className='suggestion-product-item mb_16'>
                      <div className='img-style'>
                        <Image
                          src='/assets/images/products/suggestion-1.jpg'
                          width='94'
                          height='94'
                          alt='product'
                        />
                      </div>
                      <div className='content'>
                        <a
                          href='shop-style-01.html'
                          className='text-body-default lh-24 link line-clamp-2 fw-5  mb_8'
                        >
                          Azores Lounge Chair
                        </a>
                        <div className='price d-flex align-items-center gap_10 '>
                          <span className=''>$2,499.00</span>
                          <span className='old-price text-caption-1'>
                            $2,899.00
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='suggestion-product-item'>
                      <div className='img-style'>
                        <Image
                          src='/assets/images/products/suggestion-2.jpg'
                          width='94'
                          height='94'
                          alt='product'
                        />
                      </div>
                      <div className='content'>
                        <a
                          href='shop-style-01.html'
                          className='text-body-default lh-24 link line-clamp-2 fw-5  mb_8'
                        >
                          DAM Stool - Ceramic / Leather
                        </a>
                        <div className='price d-flex align-items-center gap_10 '>
                          <span className=''>$2,499.00</span>
                          <span className='old-price text-caption-1'>
                            $2,899.00
                          </span>
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
      {/* /search */}

      {/* Demo */}
      <div className='modal fade modalDemo' id='modalDemo'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='header'>
              <h3 className='demo-title'>Ultimate HTML Theme</h3>
              <span
                className='icon-close icon-close-popup'
                data-bs-dismiss='modal'
              ></span>
            </div>
            <div className='mega-menu'>
              <div className='row-demo'>
                <div className='demo-item'>
                  <a href='index.html' className='demo-img'>
                    <Image
                      width='278'
                      height='370'
                      src='/assets/images/header/homepage-1.jpg'
                      alt='Demo'
                    />
                  </a>
                  <a href='index.html' className='demo-name'>
                    Homepage 1
                  </a>
                </div>
                <div className='demo-item'>
                  <a href='index.html' className='demo-img'>
                    <Image
                      width='278'
                      height='370'
                      src='/assets/images/header/homepage-2.jpg'
                      alt='Demo'
                    />
                  </a>
                  <a href='home02.html' className='demo-name'>
                    Homepage 2
                  </a>
                </div>
                <div className='demo-item'>
                  <a href='index.html' className='demo-img'>
                    <Image
                      width='278'
                      height='370'
                      src='/assets/images/header/homepage-3.jpg'
                      alt='Demo'
                    />
                  </a>
                  <a href='home03.html' className='demo-name'>
                    Homepage 3
                  </a>
                </div>
                <div className='demo-item'>
                  <a href='index.html' className='demo-img'>
                    <Image
                      width='278'
                      height='370'
                      src='/assets/images/header/homepage-4.jpg'
                      alt='Demo'
                    />
                  </a>
                  <a href='home04.html' className='demo-name'>
                    Homepage 4
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Demo */}
    </>
  );
};

export default MiscControls;
