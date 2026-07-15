import { Suspense } from "react";
import { connectDB } from "@/lib/db";
import SiteContent from "@/lib/models/SiteContent";
import { requireAdmin } from "@/lib/auth/dal";
import { DEFAULT_SITE_CONTENT } from "@/lib/site-content.defaults";
import SiteContentEditor from "@/components/admin/SiteContentEditor";
import { Skeleton } from "@/components/ui/skeleton";
import type { SiteContentDTO } from "@/types";

/**
 * Reads the CMS document DIRECTLY, not through `getSiteContent()`.
 *
 * `getSiteContent()` is a `'use cache'` reader — correct for the public site,
 * wrong here: the admin must see their own writes on the very next render, not a
 * cached copy. Admin reads are deliberately uncached throughout.
 */
async function Editor() {
  await requireAdmin();
  await connectDB();

  const doc = await SiteContent.findOne({ key: "singleton" }).lean();

  // Fall back to the defaults if the seed hasn't run — the editor still works
  // and its first save creates the document.
  const content = (
    doc ? JSON.parse(JSON.stringify(doc)) : DEFAULT_SITE_CONTENT
  ) as SiteContentDTO;

  // Merge over the defaults so a field added by a later schema change renders as
  // an empty input rather than crashing on `undefined`.
  const merged: SiteContentDTO = {
    ...DEFAULT_SITE_CONTENT,
    ...content,
    home: { ...DEFAULT_SITE_CONTENT.home, ...content.home },
    about: { ...DEFAULT_SITE_CONTENT.about, ...content.about },
    footer: { ...DEFAULT_SITE_CONTENT.footer, ...content.footer },
    business: { ...DEFAULT_SITE_CONTENT.business, ...content.business },
    seo: { ...DEFAULT_SITE_CONTENT.seo, ...content.seo },
  };

  return <SiteContentEditor content={merged} />;
}

export default function SiteContentPage() {
  return (
    <div className='mx-auto max-w-[900px]'>
      <header className='mb-8'>
        <h1 className='font-heading text-3xl italic'>Site content</h1>
        <p className='mt-1 text-sm text-muted-foreground'>
          Every heading, paragraph, image and link on the public site. Each tab saves
          on its own.
        </p>
      </header>

      <Suspense fallback={<Skeleton className='h-[600px] rounded-xl' />}>
        <Editor />
      </Suspense>
    </div>
  );
}
