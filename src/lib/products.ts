import { connectDB, isDbConfigured } from "@/lib/db";
import Product, { IProduct } from "@/lib/models/Product";
import type { ProductDetailDTO, ProductListItemDTO } from "@/types";

type ProductCategory = IProduct["category"];

export interface GetProductsOptions {
  category?: string;
  featured?: boolean;
  limit?: number;
}

type LeanProduct = {
  _id: { toString(): string };
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  priceLabel?: string;
  thumbnailImage: string;
  description?: string;
  images?: string[];
  features?: string[];
  whatsappMessage?: string;
};

export function serializeProductListItem(
  product: LeanProduct,
): ProductListItemDTO {
  return {
    _id: product._id.toString(),
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: product.price,
    priceLabel: product.priceLabel ?? "",
    thumbnailImage: product.thumbnailImage,
  };
}

export function serializeProductDetail(product: LeanProduct): ProductDetailDTO {
  return {
    _id: product._id.toString(),
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: product.price,
    priceLabel: product.priceLabel ?? "",
    description: product.description ?? "",
    images: product.images ?? [],
    thumbnailImage: product.thumbnailImage,
    features: product.features ?? [],
    whatsappMessage: product.whatsappMessage ?? "",
  };
}

export async function getProducts(
  options: GetProductsOptions = {},
): Promise<ProductListItemDTO[]> {
  if (!isDbConfigured()) {
    return [];
  }

  try {
    await connectDB();

    const filter: {
      isActive: true;
      category?: ProductCategory;
      isFeatured?: true;
    } = { isActive: true };

    if (options.category) {
      filter.category = options.category as ProductCategory;
    }
    if (options.featured) {
      filter.isFeatured = true;
    }

    const products = await Product.find(filter)
      .select("name slug price priceLabel thumbnailImage category isFeatured")
      .sort({ createdAt: -1 })
      .limit(options.limit ?? 100)
      .lean();

    return (products as LeanProduct[]).map(serializeProductListItem);
  } catch (error) {
    console.error("[getProducts] Failed to load from database:", error);
    return [];
  }
}

export async function getProductBySlug(
  slug: string,
): Promise<ProductDetailDTO | null> {
  if (!isDbConfigured()) {
    return null;
  }

  try {
    await connectDB();

    const product = await Product.findOne({ slug, isActive: true }).lean();
    if (!product) return null;

    return serializeProductDetail(product as LeanProduct);
  } catch (error) {
    console.error("[getProductBySlug] Failed to load from database:", error);
    return null;
  }
}
