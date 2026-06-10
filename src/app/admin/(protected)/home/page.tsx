import { connectDB } from "@/lib/db";
import HomeContent from "@/lib/models/HomeContent";
import HomeContentForm from "@/components/admin/HomeContentForm";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  await connectDB();
  const content = await HomeContent.findOne().lean();

  const initial = {
    heroTitle: content?.heroTitle ?? "Modern Living, Redefined",
    heroSubtitle:
      content?.heroSubtitle ??
      "Discover sleek designs and timeless comfort — furniture made to elevate your everyday space.",
    heroBannerUrl: content?.heroBannerUrl ?? "",
    lockerAdUrl: content?.lockerAdUrl ?? "",
    lockerAdText: content?.lockerAdText ?? "",
    featuredCategoryImages: (content?.featuredCategoryImages ?? []).map(
      (c) => ({
        label: c.label,
        imageUrl: c.imageUrl,
        imageFileId: c.imageFileId || c.imageUrl,
        href: c.href,
      }),
    ),
  };

  return (
    <div>
      <h3 className='fw-bold mb-4'>Home Page Content</h3>
      <HomeContentForm initial={initial} />
    </div>
  );
}
