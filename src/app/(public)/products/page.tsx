import type { Metadata } from "next";
import ProductsPage from "@/components/pages/products/ProductsPage";
import { getProducts } from "@/lib/products";
import { PRODUCT_CATEGORIES } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Furniture Catalogue",
  description:
    "Browse our complete furniture catalogue at M Rajkamal – premium sofas, wardrobes, Godrej Interio lockers, bedroom sets, and more. Visit us in Dadar West, Mumbai.",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function Products({ searchParams }: Props) {
  const { category } = await searchParams;
  const validCategory =
    category && category in PRODUCT_CATEGORIES ? category : undefined;

  const products = await getProducts({ category: validCategory });

  return (
    <ProductsPage
      initialProducts={products}
      activeCategory={validCategory ?? ""}
    />
  );
}
