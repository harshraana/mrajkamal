import "server-only";
import { cache } from "react";
import { cacheLife, cacheTag } from "next/cache";
import { connectDB, isDbConfigured } from "@/lib/db";
import SiteContent from "@/lib/models/SiteContent";
import { tags } from "@/lib/cache-tags";
import { sanitizeRichText } from "@/lib/sanitize";
import { DEFAULT_SITE_CONTENT } from "@/lib/site-content.defaults";
import type { SiteContentDTO } from "@/types";

/**
 * Fill in only what is genuinely ABSENT.
 *
 * `main` merged with `raw.heroTitle || DEFAULT.heroTitle`, which meant an admin
 * who deliberately cleared a field watched it snap straight back to the default
 * — an empty string is falsy, so `||` could not tell "cleared" from "missing".
 *
 * `undefined` means the field isn't in the document (a field added by a later
 * schema change, say). `""`, `0`, `false` and `[]` are all things an admin can
 * legitimately mean, and they are preserved exactly.
 *
 * Arrays are replaced wholesale, never element-merged: an admin who deletes
 * every service wants zero services, not the six defaults back.
 */
function fillMissing<T>(value: unknown, fallback: T): T {
  if (value === undefined || value === null) return fallback;

  if (Array.isArray(fallback)) {
    return (Array.isArray(value) ? value : fallback) as T;
  }

  if (
    typeof fallback === "object" &&
    fallback !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(fallback as Record<string, unknown>)) {
      out[key] = fillMissing(
        (value as Record<string, unknown>)[key],
        (fallback as Record<string, unknown>)[key],
      );
    }
    return out as T;
  }

  return value as T;
}

async function read(): Promise<SiteContentDTO> {
  "use cache";
  cacheLife("days");
  cacheTag(tags.siteContent);

  if (!isDbConfigured()) return DEFAULT_SITE_CONTENT;

  try {
    await connectDB();
    const doc = await SiteContent.findOne({ key: "singleton" }).lean();
    if (!doc) return DEFAULT_SITE_CONTENT;

    const merged = fillMissing<SiteContentDTO>(doc, DEFAULT_SITE_CONTENT);

    // Defence-in-depth: the only rich-text field on the site content is the
    // About body, and it is already sanitized on write. Sanitizing again on read
    // costs nothing (this runs once per cache entry) and covers anything written
    // by the seed, a migration, or someone editing the collection by hand.
    merged.about.bodyHtml = sanitizeRichText(merged.about.bodyHtml);

    return merged;
  } catch (error) {
    // A dead database degrades to the built-in copy rather than a blank site.
    console.error("[getSiteContent]", error);
    return DEFAULT_SITE_CONTENT;
  }
}

export const getSiteContent = cache(read);
