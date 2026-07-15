import type { ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { getSiteContent } from "@/lib/site-content";
import { storeJsonLd } from "@/lib/json-ld";
import { telHref } from "@/lib/contact";

/**
 * The public site's shell.
 *
 * The CMS document is fetched ONCE here and passed down. `getSiteContent` is
 * wrapped in React `cache()`, so pages below can call it again without a second
 * database round-trip.
 *
 * The FurnitureStore JSON-LD lives here rather than in the root layout, because
 * the root layout also wraps /admin — and the admin panel has no business
 * advertising itself to Google as a shopfront.
 */
export default async function MainLayout({ children }: { children: ReactNode }) {
  const content = await getSiteContent();
  const callHref = telHref(content.footer.contact.phone);

  return (
    <div className='flex min-h-dvh flex-col'>
      <JsonLd data={storeJsonLd(content)} />

      <Header nav={content.nav} callHref={callHref} />

      {/* The <main> landmark. There was none on any page, so screen-reader users
          had no way to skip the navigation and jump straight to the content. */}
      <main id='content' className='flex-1'>
        {children}
      </main>

      <Footer content={content} />
    </div>
  );
}
