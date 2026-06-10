import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/pages/products/ProductDetail";
import { getProductBySlug } from "@/lib/products";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = await getProductBySlug(slug);
    if (product) {
      const plainDesc = product.description
        .replace(/<[^>]*>/g, "")
        .slice(0, 160);
      return {
        title: product.name,
        description:
          plainDesc ||
          `View details for ${product.name} at M Rajkamal, Dadar West Mumbai.`,
      };
    }
  } catch {
    // Fallback below
  }
  return {
    title: "Product",
    description:
      "View details, specifications, and pricing for premium Godrej Interio furniture at M Rajkamal, Dadar West Mumbai.",
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
