/**
 * Google Reviews Integration Utility
 * Fetches reviews from Google Business Profile
 */

import reviewsData from "@/data/reviews.json";

interface GooglePlacesReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

interface GooglePlacesResponse {
  result?: {
    reviews?: GooglePlacesReview[];
    rating?: number;
    user_ratings_total?: number;
    name?: string;
  };
  status: string;
  error_message?: string;
}

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  publishedAtMs: number;
  reviewId?: string;
  profilePhotoUrl?: string;
}

export interface GoogleBusinessData {
  name: string;
  rating: number;
  userRatingsTotal: number;
  reviews: GoogleReview[];
}

function transformReviews(
  reviews: GooglePlacesReview[],
  placeId: string,
): GoogleReview[] {
  return reviews.map((review) => ({
    author: review.author_name,
    rating: review.rating,
    text: review.text,
    publishedAtMs: review.time * 1000,
    profilePhotoUrl: review.profile_photo_url,
    reviewId: `${placeId}-${review.time}`,
  }));
}

/**
 * Load fallback reviews from JSON data
 * These are excellent real reviews from Google Business Profile
 */
const FALLBACK_REVIEWS: GoogleReview[] = reviewsData.reviews.map(
  (review: any) => ({
    author: review.author,
    rating: review.rating,
    text: review.text,
    publishedAtMs: review.publishedAtMs,
    reviewId: review.reviewId,
    profilePhotoUrl: review.profilePhotoUrl,
  }),
);

/**
 * Fetch Google reviews for a business location.
 * Filters to 4-5 star positive reviews only, sorted by newest.
 * Uses local cache with 24-hour expiration.
 * Falls back to curated JSON reviews if API returns fewer than 5 reviews.
 */
export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const cacheKey = "godrej_positive_reviews_cache";
  const cacheExpiryKey = "godrej_positive_reviews_cache_expiry";
  const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

  if (!apiKey || !placeId) {
    console.warn(
      "[Google Reviews] Credentials not configured. Using fallback reviews.",
    );
    return FALLBACK_REVIEWS;
  }

  // Check if we have cached reviews and they're still valid
  if (typeof globalThis !== "undefined") {
    const cached = (globalThis as any)[cacheKey];
    const cacheExpiry = (globalThis as any)[cacheExpiryKey];

    if (cached && cacheExpiry && Date.now() < cacheExpiry) {
      console.log(
        `[Google Reviews] Using cached reviews (${cached.length} reviews)`,
      );
      return cached;
    }
  }

  try {
    // Fetch newest reviews only, filter to 4-5 star (positive reviews)
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=reviews,rating,user_ratings_total,name&reviews_sort=newest&reviews_no_translations=true`;

    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      console.error(`[Google Reviews] HTTP Error: ${response.status}`);
      return [];
    }

    const data: GooglePlacesResponse = await response.json();
    if (data.status !== "OK" || !data.result?.reviews) {
      console.warn(
        `[Google Reviews] API Error: ${data.status}. Using fallback reviews.`,
      );
      return FALLBACK_REVIEWS;
    }

    // Filter to only positive reviews (4-5 stars)
    const positiveReviews = data.result.reviews.filter(
      (review) => review.rating >= 4,
    );

    if (positiveReviews.length === 0) {
      console.warn(
        "[Google Reviews] No positive reviews found. Using fallback reviews.",
      );
      return FALLBACK_REVIEWS;
    }

    const reviews = transformReviews(positiveReviews, placeId);

    // Combine Google reviews with all curated reviews
    // If Google reviews are sufficient, use only Google reviews
    // Otherwise, supplement with curated reviews
    let allReviews = [...reviews];
    if (allReviews.length < FALLBACK_REVIEWS.length) {
      // Add remaining curated reviews to supplement
      const remainingSlots = FALLBACK_REVIEWS.length - allReviews.length;
      const fallbackToAdd = FALLBACK_REVIEWS.slice(
        reviews.length,
        reviews.length + remainingSlots,
      );
      allReviews = [...allReviews, ...fallbackToAdd];
    }

    // Cache the reviews in memory
    if (typeof globalThis !== "undefined") {
      (globalThis as any)[cacheKey] = allReviews;
      (globalThis as any)[cacheExpiryKey] = Date.now() + CACHE_DURATION_MS;
    }

    console.log(
      `[Google Reviews] Fetched ${reviews.length} from Google + ${allReviews.length - reviews.length} curated reviews = ${allReviews.length} total`,
    );
    return allReviews;
  } catch (error) {
    console.error("[Google Reviews] Fetch error:", error);
    console.log(
      "[Google Reviews] Using curated reviews from JSON due to fetch error.",
    );
    return FALLBACK_REVIEWS;
  }
}

/**
 * Format date from milliseconds
 */
export function formatReviewDate(publishedAtMs: number): string {
  const date = new Date(publishedAtMs);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}
