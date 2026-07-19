/**
 * Instagram reels for @mrajkamalfurniture, sourced from a Behold.so JSON feed.
 * Behold connects the Instagram account and refreshes the feed for us, so we
 * only fetch a public JSON endpoint (no Instagram tokens to manage here).
 *
 * Set BEHOLD_FEED_URL to override the feed; the public default is baked in.
 */

const FEED_URL =
  process.env.BEHOLD_FEED_URL ??
  "https://feeds.behold.so/eimRGkuydD7AmFnvCBi1";

/** How long (seconds) a fetched feed is cached before Next.js revalidates it. */
const REVALIDATE_SECONDS = 3600;

export type Reel = {
  id: string;
  /** Link to the reel on Instagram. */
  permalink: string;
  /** Durable, Behold-hosted cover image (portrait). */
  thumbnailUrl: string;
  caption: string;
  width: number;
  height: number;
  /** Dominant color of the cover, used as a placeholder while the image loads. */
  bgColor: string;
  /** Direct MP4 for hover playback (Instagram CDN — signed URL that can expire). */
  videoUrl: string | null;
};

type BeholdSize = { width: number; height: number; mediaUrl: string };

type BeholdPost = {
  id: string;
  permalink: string;
  caption?: string;
  prunedCaption?: string;
  thumbnailUrl?: string;
  mediaUrl?: string;
  isReel?: boolean;
  colorPalette?: { dominant?: string };
  sizes?: {
    small?: BeholdSize;
    medium?: BeholdSize;
    large?: BeholdSize;
    full?: BeholdSize;
  };
};

/**
 * Fetch the latest reels. Returns an empty array on any failure so callers can
 * render a graceful fallback instead of throwing.
 */
export async function getInstagramReels(limit = 8): Promise<Reel[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];

    const data: { posts?: BeholdPost[] } = await res.json();
    const posts = Array.isArray(data.posts) ? data.posts : [];

    return posts
      .filter((p) => p.isReel)
      .slice(0, limit)
      .map((p): Reel => {
        const size = p.sizes?.medium ?? p.sizes?.large ?? p.sizes?.small;
        return {
          id: p.id,
          permalink: p.permalink,
          thumbnailUrl: size?.mediaUrl ?? p.thumbnailUrl ?? "",
          caption: (p.prunedCaption ?? p.caption ?? "").trim(),
          width: size?.width ?? 394,
          height: size?.height ?? 700,
          bgColor: p.colorPalette?.dominant
            ? `rgb(${p.colorPalette.dominant})`
            : "#e5e5e5",
          videoUrl: p.mediaUrl ?? null,
        };
      })
      .filter((r) => r.thumbnailUrl);
  } catch {
    return [];
  }
}
