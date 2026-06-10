"use client";

import { useEffect, useState, useCallback } from "react";
import { GoogleReview, formatReviewDate } from "@/lib/google-reviews";
import NextImage from "next/image";

// ─── Stars ───────────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className='rating d-flex gap_5'>
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className='icon-star'
          style={{ opacity: i < Math.round(rating) ? 1 : 0.3 }}
        />
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [sliderReviews, setSliderReviews] = useState<GoogleReview[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const result = await response.json();
        if (result.success && result.data.length > 0) {
          setSliderReviews(result.data);
        }
      } catch {
        // keep fallback reviews silently
      }
    };
    fetchReviews();
  }, []);

  const goTo = useCallback((nextIndex: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsVisible(true);
    }, 220);
  }, []);

  const handlePrev = () =>
    goTo(currentIndex === 0 ? sliderReviews.length - 1 : currentIndex - 1);

  const handleNext = () =>
    goTo(currentIndex === sliderReviews.length - 1 ? 0 : currentIndex + 1);

  const review = sliderReviews[currentIndex];

  return (
    <>
      <section className='s-testimonials tf-spacing-1 sw-layout'>
        <div className='tf-container w-1246'>
          <div className='row align-items-center'>
            {/* ── Left: Slider ── */}
            <div className='col-lg-7 col-md-6'>
              <div className='content-inner'>
                {/* Heading */}
                <div className='heading'>
                  <div className='icon'>
                    <i className='icon-quote'></i>
                  </div>
                  <h2 className='text-capitalize'>testimonials</h2>
                </div>

                {/* Fade slider */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      transition: "opacity 0.22s ease",
                      opacity: isVisible ? 1 : 0,
                      minHeight: 190,
                    }}
                  >
                    {review && (
                      <div className='testimonial-item'>
                        <p className='fw-4 desc'>{review.text}</p>
                        <Stars rating={review.rating} />
                        <div className='author d-flex align-items-center gap_12'>
                          {review.profilePhotoUrl && (
                            <NextImage
                              src={review.profilePhotoUrl}
                              alt={review.author}
                              width={40}
                              height={40}
                            />
                          )}
                          <p className='sub text-caption-1 d-flex flex-column'>
                            <span className='name text-body-default fw-5'>
                              {review.author}
                            </span>
                            {/* <GoogleLogo /> */}
                            <span style={{ color: "#888" }}>
                              {formatReviewDate(review.publishedAtMs)} · Google
                              Review
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Controls row */}
                  <div
                    className='wrap-sw-button d-flex gap_15'
                    style={{ marginTop: 20 }}
                  >
                    <div
                      className='sw-button style-border nav-prev-layout'
                      onClick={handlePrev}
                      style={{ cursor: "pointer" }}
                    >
                      <i className='icon-caret-left'></i>
                    </div>
                    <div
                      className='sw-button style-border nav-next-layout'
                      onClick={handleNext}
                      style={{ cursor: "pointer" }}
                    >
                      <i className='icon-caret-right'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Gallery ── */}
            <div className='col-lg-5 col-md-6'>
              <div className='wrap-gallery tf-grid-layout sm-col-2'>
                <div className='infiniteslide' data-clone='2' data-style='up'>
                  {[1, 2, 3, 4].map((num) => (
                    <div key={`up-${num}`} className='gallery'>
                      <img
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src={`/assets/images/sections/s-testimonials-${num}.jpg`}
                        alt='testimonials'
                      />
                    </div>
                  ))}
                  {[1, 2, 3, 4].map((num) => (
                    <div key={`up-repeat-${num}`} className='gallery'>
                      <img
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src={`/assets/images/sections/s-testimonials-${num}.jpg`}
                        alt='testimonials'
                      />
                    </div>
                  ))}
                  {[1, 2, 3].map((num) => (
                    <div key={`up-repeat2-${num}`} className='gallery'>
                      <img
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src={`/assets/images/sections/s-testimonials-${num}.jpg`}
                        alt='testimonials'
                      />
                    </div>
                  ))}
                </div>

                <div className='infiniteslide' data-clone='2' data-style='down'>
                  {[3, 4, 1, 2].map((num) => (
                    <div key={`down-${num}`} className='gallery'>
                      <img
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src={`/assets/images/sections/s-testimonials-${num}.jpg`}
                        alt='testimonials'
                      />
                    </div>
                  ))}
                  {[3, 4, 1, 2].map((num) => (
                    <div key={`down-repeat-${num}`} className='gallery'>
                      <img
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src={`/assets/images/sections/s-testimonials-${num}.jpg`}
                        alt='testimonials'
                      />
                    </div>
                  ))}
                  {[3, 4, 1].map((num) => (
                    <div key={`down-repeat2-${num}`} className='gallery'>
                      <img
                        className='img-cover'
                        width='284'
                        height='425'
                        loading='lazy'
                        decoding='async'
                        src={`/assets/images/sections/s-testimonials-${num}.jpg`}
                        alt='testimonials'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
