"use server";

import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import Product, { IProduct } from "@/lib/models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function generateUniqueSlug(
  base: string,
  excludeId?: string,
): Promise<string> {
  const slug = slugify(base);
  const query = excludeId ? { slug, _id: { $ne: excludeId } } : { slug };
  const existing = await Product.findOne(query).select("_id").lean();
  if (!existing) return slug;

  let counter = 2;
  while (true) {
    const candidate = `${slug}-${counter}`;
    const candidateQuery = excludeId
      ? { slug: candidate, _id: { $ne: excludeId } }
      : { slug: candidate };
    const found = await Product.findOne(candidateQuery)
      .select("_id")
      .lean();
    if (!found) return candidate;
    counter++;
  }
}

export async function createProduct(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  await connectDB();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const priceLabel = formData.get("priceLabel") as string;
  const category = formData.get("category") as IProduct["category"];
  const images = JSON.parse(
    (formData.get("images") as string) ?? "[]",
  ) as string[];
  const features = JSON.parse(
    (formData.get("features") as string) ?? "[]",
  ) as string[];
  const isFeatured = formData.get("isFeatured") === "on";
  const isActive = formData.get("isActive") === "on";
  const whatsappMessage = formData.get("whatsappMessage") as string;

  if (!name || !description || isNaN(price) || !category || !images.length) {
    throw new Error("Missing required fields");
  }

  const slug = await generateUniqueSlug(name);

  await Product.create({
    name,
    slug,
    description,
    price,
    priceLabel: priceLabel ?? "",
    category,
    images,
    thumbnailImage: images[0],
    features: features.filter(Boolean),
    isFeatured,
    isActive,
    whatsappMessage: whatsappMessage ?? "",
  });

  revalidatePath("/products");
  revalidatePath("/");
  redirect("/admin/products");
}

export async function updateProduct(id: string, formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  await connectDB();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const priceLabel = formData.get("priceLabel") as string;
  const category = formData.get("category") as IProduct["category"];
  const images = JSON.parse(
    (formData.get("images") as string) ?? "[]",
  ) as string[];
  const features = JSON.parse(
    (formData.get("features") as string) ?? "[]",
  ) as string[];
  const isFeatured = formData.get("isFeatured") === "on";
  const isActive = formData.get("isActive") === "on";
  const whatsappMessage = formData.get("whatsappMessage") as string;
  const existing = await Product.findById(id).select("name slug").lean();
  let slug = existing?.slug ?? slugify(name);
  if (existing && existing.name !== name) {
    slug = await generateUniqueSlug(name, id);
  }

  await Product.findByIdAndUpdate(id, {
    name,
    slug,
    description,
    price,
    priceLabel: priceLabel ?? "",
    category,
    images,
    thumbnailImage: images[0] ?? "",
    features: features.filter(Boolean),
    isFeatured,
    isActive,
    whatsappMessage: whatsappMessage ?? "",
  });

  revalidatePath("/products");
  revalidatePath(`/products/${slug}`);
  revalidatePath("/");
  redirect("/admin/products");
}

export async function deactivateProduct(id: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  await connectDB();
  await Product.findByIdAndUpdate(id, { isActive: false });

  revalidatePath("/products");
  revalidatePath("/");
  redirect("/admin/products");
}
