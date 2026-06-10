"use server";

import { auth } from "@/auth";
import { connectDB } from "@/lib/db";
import HomeContent from "@/lib/models/HomeContent";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export async function updateHomeContent(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  await connectDB();

  const heroTitle = formData.get("heroTitle") as string;
  const heroSubtitle = formData.get("heroSubtitle") as string;
  const heroBannerUrl = formData.get("heroBannerUrl") as string;
  const lockerAdUrl = formData.get("lockerAdUrl") as string;
  const lockerAdText = formData.get("lockerAdText") as string;
  const featuredCategoryImages = JSON.parse(
    (formData.get("featuredCategoryImages") as string) ?? "[]",
  );

  await HomeContent.findOneAndUpdate(
    {},
    {
      heroTitle,
      heroSubtitle,
      heroBannerUrl,
      lockerAdUrl,
      lockerAdText,
      featuredCategoryImages,
    },
    { upsert: true, runValidators: true },
  );

  revalidatePath("/");
}

export async function adminSignIn(formData: FormData) {
  const { signIn } = await import("@/auth");
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/admin/products",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/admin/login?error=CredentialsSignin");
    }
    throw error;
  }
}
