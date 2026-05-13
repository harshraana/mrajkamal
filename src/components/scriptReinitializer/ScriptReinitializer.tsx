"use client";

import { useEffect } from "react";

const ScriptReinitializer = () => {
  useEffect(() => {
    // Initialize Swiper instances
    const initializeSwiper = async () => {
      // Wait for Swiper to be available globally
      if (typeof window !== "undefined" && (window as any).Swiper) {
        const Swiper = (window as any).Swiper;

        // Initialize gallery swiper
        const gallerySwiper = document.querySelector(".tf-product-media-main");
        if (
          gallerySwiper &&
          !gallerySwiper.classList.contains("swiper-initialized")
        ) {
          new Swiper(".tf-product-media-main", {
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: false,
            loop: false,
            navigation: false,
            pagination: false,
          });
          gallerySwiper.classList.add("swiper-initialized");
        }

        // Initialize thumbnail swiper
        const thumbsSwiper = document.querySelector(".tf-product-media-thumbs");
        if (
          thumbsSwiper &&
          !thumbsSwiper.classList.contains("swiper-initialized")
        ) {
          new Swiper(".tf-product-media-thumbs", {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
            loop: false,
            breakpoints: {
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
            },
          });
          thumbsSwiper.classList.add("swiper-initialized");
        }

        // Initialize related products swiper
        const relatedSwiper = document.querySelector(
          ".s-related-products .swiper",
        );
        if (
          relatedSwiper &&
          !relatedSwiper.classList.contains("swiper-initialized")
        ) {
          new Swiper(".s-related-products .swiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: false,
            pagination: {
              el: ".s-related-products .sw-pagination-layout",
              clickable: true,
            },
            navigation: {
              nextEl: ".s-related-products .nav-next-layout",
              prevEl: ".s-related-products .nav-prev-layout",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            },
          });
          relatedSwiper.classList.add("swiper-initialized");
        }

        // Initialize customer services swiper
        const servicesSwiper = document.querySelector(
          ".s-customer-services .swiper",
        );
        if (
          servicesSwiper &&
          !servicesSwiper.classList.contains("swiper-initialized")
        ) {
          new Swiper(".s-customer-services .swiper", {
            slidesPerView: 4,
            spaceBetween: 48,
            loop: false,
            pagination: {
              el: ".s-customer-services .sw-pagination-layout",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 48,
              },
            },
          });
          servicesSwiper.classList.add("swiper-initialized");
        }
      }
    };

    // Call initialization after a small delay to ensure DOM is ready
    const timer = setTimeout(initializeSwiper, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ScriptReinitializer;
