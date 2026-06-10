import { connectDB, isDbConfigured } from "@/lib/db";
import HomeContent from "@/lib/models/HomeContent";
import type { FeaturedCategoryImageDTO, HomeContentDTO } from "@/types";

export const DEFAULT_FEATURED_CATEGORIES: FeaturedCategoryImageDTO[] = [
  {
    label: "Premium Cupboards",
    imageUrl: "/my-assets/ProductCat/cupboards.png",
    href: "/products",
  },
  {
    label: "Safe Lockers by Godrej",
    imageUrl: "/my-assets/ProductCat/locker.jpg",
    href: "/products",
  },
  {
    label: "Sofa cum Bed",
    imageUrl: "/my-assets/ProductCat/Sofa-bed.jpg",
    href: "/products",
  },
];

export const DEFAULT_HOME_CONTENT: HomeContentDTO = {
  heroTitle: "Modern Living, Redefined",
  heroSubtitle:
    "Discover sleek designs and timeless comfort — furniture made to elevate your everyday space.",
  heroBannerUrl: "/my-assets/banners/main-banner.png",
  lockerAdUrl: "/my-assets/banners/locker-ad.png",
  lockerAdText: "",
  featuredCategoryImages: DEFAULT_FEATURED_CATEGORIES,
};

type RawHomeContent = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroBannerUrl?: string;
  lockerAdUrl?: string;
  lockerAdText?: string;
  featuredCategoryImages?: FeaturedCategoryImageDTO[];
};

export function resolveHomeContent(raw: RawHomeContent | null): HomeContentDTO {
  if (!raw) return DEFAULT_HOME_CONTENT;

  const categories =
    raw.featuredCategoryImages && raw.featuredCategoryImages.length > 0
      ? raw.featuredCategoryImages.map((item) => ({
          label: item.label,
          imageUrl: item.imageUrl,
          href: item.href || "/products",
          imageFileId: item.imageFileId,
        }))
      : DEFAULT_HOME_CONTENT.featuredCategoryImages;

  return {
    heroTitle: raw.heroTitle || DEFAULT_HOME_CONTENT.heroTitle,
    heroSubtitle: raw.heroSubtitle || DEFAULT_HOME_CONTENT.heroSubtitle,
    heroBannerUrl: raw.heroBannerUrl || DEFAULT_HOME_CONTENT.heroBannerUrl,
    lockerAdUrl: raw.lockerAdUrl || DEFAULT_HOME_CONTENT.lockerAdUrl,
    lockerAdText: raw.lockerAdText ?? DEFAULT_HOME_CONTENT.lockerAdText,
    featuredCategoryImages: categories,
  };
}

export async function getHomeContent(): Promise<HomeContentDTO> {
  if (!isDbConfigured()) {
    return DEFAULT_HOME_CONTENT;
  }

  try {
    await connectDB();
    const content = await HomeContent.findOne().lean();
    return resolveHomeContent(content);
  } catch (error) {
    console.error("[getHomeContent] Failed to load from database:", error);
    return DEFAULT_HOME_CONTENT;
  }
}
