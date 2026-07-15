import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageRefDTO } from "@/types";

/**
 * The one image component.
 *
 * Two problems it solves:
 *
 * 1. **Dual URLs.** A CMS image is EITHER a `/public` path ("/images/hero.png",
 *    from the seed) OR an absolute ImageKit URL, once an admin replaces it.
 *    `next/image` handles both, but only because `ik.imagekit.io` is allowlisted
 *    in `next.config.ts` — a missing remotePattern is a hard runtime error, not
 *    a silent fallback.
 *
 * 2. **`priority` is deprecated in Next 16.** The docs are explicit: it is
 *    "deprecated in favor of the `preload` property". Writing `priority` from
 *    memory would produce a deprecation warning and, eventually, dead code. The
 *    LCP image sets `eager` instead, which is what the docs recommend for this
 *    case ("in most cases, you should use `loading="eager"` or
 *    `fetchPriority="high"`").
 *
 * The whole site's raw <img> tags — 9 of them, ~4.3MB of unoptimised PNG, ~2MB
 * of it above the fold — go through here now.
 */
export default function SmartImage({
  image,
  alt,
  sizes,
  className,
  fill = false,
  width,
  height,
  eager = false,
}: {
  image: ImageRefDTO | null | undefined;
  /** Overrides the alt stored on the image. */
  alt?: string;
  sizes?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  /** Set on the LCP image only — it opts out of lazy loading. */
  eager?: boolean;
}) {
  if (!image?.url) return null;

  const altText = alt ?? image.alt ?? "";

  const loading = eager
    ? ({ loading: "eager", fetchPriority: "high" } as const)
    : ({ loading: "lazy" } as const);

  if (fill) {
    return (
      <Image
        src={image.url}
        alt={altText}
        fill
        sizes={sizes ?? "100vw"}
        className={cn("object-cover", className)}
        {...loading}
      />
    );
  }

  // Fall back to the stored intrinsic size when the caller doesn't give one.
  // ImageKit returns real dimensions on upload; seeded /public assets don't, so
  // they need an explicit width/height from the call site.
  return (
    <Image
      src={image.url}
      alt={altText}
      width={width ?? image.width ?? 1200}
      height={height ?? image.height ?? 900}
      sizes={sizes}
      className={className}
      {...loading}
    />
  );
}
