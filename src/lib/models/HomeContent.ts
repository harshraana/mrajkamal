import mongoose, { Schema, Document, Model, models } from "mongoose";

export interface IFeaturedCategoryImage {
  label: string;
  imageUrl: string;
  href: string;
  imageFileId?: string;
}

export interface IHomeContent extends Document {
  heroTitle: string;
  heroSubtitle: string;
  heroBannerUrl: string;
  lockerAdUrl: string;
  lockerAdText: string;
  featuredCategoryImages: IFeaturedCategoryImage[];
}

const FeaturedCategoryImageSchema = new Schema<IFeaturedCategoryImage>(
  {
    label: { type: String, required: true },
    imageUrl: { type: String, required: true },
    href: { type: String, default: "/products" },
    imageFileId: { type: String, default: "" },
  },
  { _id: false },
);

const HomeContentSchema = new Schema<IHomeContent>({
  heroTitle: { type: String, default: "Modern Living, Redefined" },
  heroSubtitle: {
    type: String,
    default:
      "Discover sleek designs and timeless comfort — furniture made to elevate your everyday space.",
  },
  heroBannerUrl: { type: String, default: "" },
  lockerAdUrl: { type: String, default: "" },
  lockerAdText: { type: String, default: "" },
  featuredCategoryImages: {
    type: [FeaturedCategoryImageSchema],
    default: [],
    validate: {
      validator: (arr: IFeaturedCategoryImage[]) => arr.length <= 3,
      message: "Maximum 3 featured category images allowed",
    },
  },
});

const HomeContent: Model<IHomeContent> =
  models.HomeContent ||
  mongoose.model<IHomeContent>("HomeContent", HomeContentSchema);

export default HomeContent;
