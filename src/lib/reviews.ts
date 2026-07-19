/**
 * Real Google reviews for "Godrej Interio - M Rajkamal Furniture", sourced from
 * a Featurable widget JSON API. Featurable connects the Google Business Profile
 * and refreshes/caches the reviews legally, so we only fetch a public endpoint.
 *
 * Set FEATURABLE_WIDGET_URL to override; the public default is baked in.
 */

const WIDGET_URL =
  process.env.FEATURABLE_WIDGET_URL ??
  "https://featurable.com/api/v2/widgets/40ac0cc8-8e17-415d-936d-bdd303fd3b53";

/** Reviews change slowly, so refresh every 6 hours. */
const REVALIDATE_SECONDS = 21600;

export type Review = {
  id: string;
  authorName: string;
  authorAvatar: string | null;
  rating: number;
  text: string;
  /** Pre-formatted on the server (e.g. "May 2026") to avoid locale hydration drift. */
  date: string;
  publishedAt: string;
};

export type ReviewsData = {
  reviews: Review[];
  /** Overall Google rating for the location (e.g. 4.6). */
  rating: number;
  /** Total number of Google reviews (e.g. 88). */
  totalCount: number;
  /** Link to write/see reviews on Google. */
  writeReviewUrl: string;
  /** Featurable's free tier asks us to show attribution. */
  showBranding: boolean;
};

const EMPTY: ReviewsData = {
  reviews: [],
  rating: 0,
  totalCount: 0,
  writeReviewUrl: "",
  showBranding: false,
};

type FeaturableReview = {
  id: string;
  author?: { name?: string; avatarUrl?: string | null };
  text?: string;
  rating?: { value?: number; max?: number };
  publishedAt?: string;
};

/**
 * Fetch reviews (4★ and up, with text), newest first. Returns empty data on any
 * failure so the caller can render a graceful fallback instead of throwing.
 */
export async function getGoogleReviews(limit = 12): Promise<ReviewsData> {
  try {
    const res = await fetch(WIDGET_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return EMPTY;

    const json: { widget?: Record<string, unknown> } = await res.json();
    const w = json.widget;
    if (!w || !Array.isArray(w.reviews)) return EMPTY;

    const reviews: Review[] = (w.reviews as FeaturableReview[])
      .filter((r) => (r.rating?.value ?? 0) >= 4 && (r.text ?? "").trim().length > 0)
      .sort(
        (a, b) =>
          new Date(b.publishedAt ?? 0).getTime() -
          new Date(a.publishedAt ?? 0).getTime(),
      )
      .slice(0, limit)
      .map((r) => ({
        id: r.id,
        authorName: r.author?.name?.trim() || "Google user",
        authorAvatar: r.author?.avatarUrl ?? null,
        rating: r.rating?.value ?? 5,
        text: (r.text ?? "").trim(),
        publishedAt: r.publishedAt ?? "",
        date: formatDate(r.publishedAt),
      }));

    const summary = (w.gbpLocationSummary ?? {}) as {
      rating?: number;
      reviewsCount?: number;
      writeAReviewUri?: string;
    };

    return {
      reviews,
      rating: typeof summary.rating === "number" ? summary.rating : 0,
      totalCount:
        typeof summary.reviewsCount === "number"
          ? summary.reviewsCount
          : reviews.length,
      writeReviewUrl: summary.writeAReviewUri ?? "",
      showBranding: w.showBranding !== false,
    };
  } catch {
    return EMPTY;
  }
}

function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
