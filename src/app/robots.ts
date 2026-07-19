import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { ADMIN_BASE } from "@/lib/admin-paths";

/**
 * Keeps the admin panel and its API out of the index, and points crawlers at the
 * sitemap.
 *
 * The admin lives at `/m/admin/*` — already noindex via metadata and behind auth,
 * so this is belt and braces. But a Disallow also stops crawlers wasting budget
 * on URLs that will only ever bounce them to a login page. We disallow the whole
 * `/m/` prefix (the admin is all that lives there) plus `/api/`.
 */
export default function robots(): MetadataRoute.Robots {
  // ADMIN_BASE is "/m/admin"; disallow its parent segment so nothing under /m is crawled.
  const adminPrefix = `/${ADMIN_BASE.split("/")[1]}`; // "/m"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [adminPrefix, `${adminPrefix}/`, "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
