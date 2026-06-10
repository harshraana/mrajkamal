"use client";

import { useEffect } from "react";

const useScriptReinit = () => {
  useEffect(() => {
    // Delay to ensure DOM and all async chunks are fully rendered before
    // re-triggering legacy jQuery/Swiper initialization via synthetic load event
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("load"));
    }, 350);

    return () => clearTimeout(timer);
  }, []);
};

export default useScriptReinit;
