"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import useScriptReinit from "@/hooks/useScriptReinit";

const STORE_ADDRESS =
  "7, Haji Ebrahim Patel Trust Building Junction of Gokhale Road, and, Ranade Rd, Dadar West, Dadar, Mumbai, Maharashtra 400028";

const AboutPage = () => {
  useScriptReinit();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

  const generalMessage = `Hi, I'd like to know more about M Rajkamal furniture store.\nStore: ${siteUrl}/about`;
  const waUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generalMessage)}`
    : "#";

  return (
    <>
      <div className='tf-page-title'>
        <h2 className='text-center text-uppercase title'>About Us</h2>
        <ul className='breadcrumb-list'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>About</li>
        </ul>
      </div>

      <div className='main-content'>
        <section className='s-about-v01 tf-spacing-11'>
          <div className='tf-container w-1246'>
            <div className='row align-items-center'>
              <div className='col-md-6 mb-md-0 mb_40'>
                <div className='heading-section mb_40 wow fadeInUp'>
                  <h2 className='title text-capitalize'>
                    M Rajkamal – Authorised Godrej Interio Dealer
                  </h2>
                  <p className='desc'>
                    Located in Dadar West, Mumbai, M Rajkamal is your trusted
                    destination for premium furniture and home solutions. As an
                    authorised Godrej Interio dealer, we offer a curated
                    selection of sofas, wardrobes, lockers, beds, and more —
                    combining quality craftsmanship with designs that elevate
                    everyday living.
                  </p>
                  <p className='desc mt-3'>
                    Whether you are furnishing a new home or upgrading a single
                    room, our team helps you find the right pieces with expert
                    guidance and reliable after-sales support.
                  </p>
                </div>
                <Link
                  href='/products'
                  className='text-body-default fw-5 hover-underline-link btn_link'
                >
                  Browse Our Collection
                </Link>
              </div>
              <div className='col-md-6'>
                <div className='thumbs-about'>
                  <Image
                    height={616}
                    width={460}
                    style={{ height: "auto" }}
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='wow fadeInRight'
                    loading='lazy'
                    decoding='async'
                    src='/my-assets/banners/locker-ad.png'
                    alt='M Rajkamal furniture showroom'
                  />
                  <div className='shape-1'></div>
                  <div className='shape-2'></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='tf-container w-1246 w-1548 tf-spacing-10'>
          <div className='row g-4'>
            <div className='col-md-6'>
              <div className='card border-0 shadow-sm h-100'>
                <div className='card-body p-4'>
                  <h5 className='fw-semibold mb-3'>Visit Our Store</h5>
                  <p className='text-muted mb-0'>{STORE_ADDRESS}</p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card border-0 shadow-sm h-100'>
                <div className='card-body p-4'>
                  <h5 className='fw-semibold mb-3'>Get in Touch</h5>
                  <p className='text-muted mb-3'>
                    Have questions about a product or want to visit the
                    showroom? Reach out on WhatsApp and our team will assist
                    you.
                  </p>
                  {whatsappNumber ? (
                    <a
                      href={waUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-dark btn-sm'
                    >
                      Chat on WhatsApp
                    </a>
                  ) : (
                    <Link href='/products' className='btn btn-dark btn-sm'>
                      View Products
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='tf-container w-1246 w-1548 tf-spacing-10'>
          <div className='heading-section mb_48 text-center'>
            <h2 className='text-uppercase'>Find Us on the Map</h2>
          </div>
          <div className='wg-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9269159149285!2d72.83575527691664!3d19.022941853632894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec542443581%3A0x2bf3f57a345df79a!2sGodrej%20Interio%20-%20M%20Rajkamal%20Furniture!5e0!3m2!1sen!2sin!4v1778680164102!5m2!1sen!2sin'
              width='1440'
              height='589'
              style={{ border: "0", width: "100%" }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='M Rajkamal store location'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
