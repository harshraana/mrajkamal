import type { Metadata } from "next";
import HomePage from "@/components/pages/home/HomePage";
import { getHomeContent } from "@/lib/home-content";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "M Rajkamal – Premium Furniture Store in Mumbai",
  description:
    "Visit M Rajkamal, Dadar West Mumbai's trusted premium furniture store and authorised Godrej Interio dealer. Explore our collections of sofas, wardrobes, lockers, and more.",
};

export default async function Home() {
  const [homeContent, featuredProducts] = await Promise.all([
    getHomeContent(),
    getProducts({ featured: true, limit: 3 }),
  ]);

  return (
    <HomePage homeContent={homeContent} featuredProducts={featuredProducts} />
  );
}
