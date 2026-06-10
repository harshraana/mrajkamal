export type { IProduct } from "@/lib/models/Product";
export type {
  IHomeContent,
  IFeaturedCategoryImage,
} from "@/lib/models/HomeContent";

export interface ProductListItemDTO {
  _id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  priceLabel: string;
  thumbnailImage: string;
}

export interface ProductDetailDTO extends ProductListItemDTO {
  description: string;
  images: string[];
  features: string[];
  whatsappMessage: string;
}

export interface FeaturedCategoryImageDTO {
  label: string;
  imageUrl: string;
  href: string;
  imageFileId?: string;
}

export interface HomeContentDTO {
  heroTitle: string;
  heroSubtitle: string;
  heroBannerUrl: string;
  lockerAdUrl: string;
  lockerAdText: string;
  featuredCategoryImages: FeaturedCategoryImageDTO[];
}

export const PRODUCT_CATEGORIES: Record<string, string> = {
  sofa: "Sofa",
  wardrobe: "Wardrobe",
  locker: "Locker",
  bed: "Bed",
  chair: "Chair",
  table: "Table",
  other: "Other",
};
