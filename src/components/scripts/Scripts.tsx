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
      <Script src='/assets/js/carousel.js' strategy='afterInteractive' />
      <Script src='/assets/js/count-down.js' strategy='afterInteractive' />
      <Script
        id='set-window-loaded'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{ __html: "window.loaded = true;" }}
      />
      <Script src='/assets/js/infinityslide.js' strategy='afterInteractive' />
      <Script src='/assets/js/main.js' strategy='afterInteractive' />
      <Script src='/assets/js/sibforms.js' strategy='afterInteractive' />
      {/* /Javascript */}
    </>
  );
};

export default Scripts;
