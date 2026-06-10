import mongoose, { Schema, Document, Model, models } from "mongoose";

export interface IProduct extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  description: string;
  price: number;
  priceLabel?: string;
  category:
    | "sofa"
    | "wardrobe"
    | "locker"
    | "bed"
    | "chair"
    | "table"
    | "other";
  images: string[];
  thumbnailImage: string;
  features: string[];
  isFeatured: boolean;
  isActive: boolean;
  whatsappMessage?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    priceLabel: { type: String, default: "" },
    category: {
      type: String,
      enum: ["sofa", "wardrobe", "locker", "bed", "chair", "table", "other"],
      required: true,
    },
    images: {
      type: [String],
      validate: {
        validator: (arr: string[]) => arr.length >= 1,
        message: "At least one image is required",
      },
    },
    thumbnailImage: { type: String, required: true },
    features: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    whatsappMessage: { type: String, default: "" },
  },
  { timestamps: true },
);

ProductSchema.index({ slug: 1 });
ProductSchema.index({ isActive: 1, isFeatured: 1 });
ProductSchema.index({ category: 1, isActive: 1 });

const Product: Model<IProduct> =
  models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
