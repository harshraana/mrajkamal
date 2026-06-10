import React from "react";
import Script from "next/script";

const Scripts = () => {
  return (
    <>
      {/* Javascript */}
      <Script src='/assets/js/jquery.min.js' strategy='afterInteractive' />
      <Script src='/assets/js/bootstrap.min.js' strategy='afterInteractive' />
      <Script
        src='/assets/js/bootstrap-select.min.js'
        strategy='afterInteractive'
      />
      <Script src='/assets/js/wow.min.js' strategy='afterInteractive' />
      <Script
        src='/assets/js/swiper-bundle.min.js'
        strategy='afterInteractive'
      />
      <Script src='/assets/js/count-down.js' strategy='afterInteractive' />
      <Script src='/assets/js/infinityslide.js' strategy='afterInteractive' />
      <Script src='/assets/js/sibforms.js' strategy='afterInteractive' />
      {/* carousel.js and main.js are lazyOnload so they run after React hydration,
          preventing WOW.js / Swiper DOM mutations from causing hydration mismatches. */}
      <Script src='/assets/js/carousel.js' strategy='lazyOnload' />
      <Script src='/assets/js/main.js' strategy='lazyOnload' />
      {/* /Javascript */}
    </>
  );
};

export default Scripts;
