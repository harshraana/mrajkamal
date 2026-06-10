import { NextRequest } from "next/server";
import { getProducts } from "@/lib/products";
import { PRODUCT_CATEGORIES } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const category = searchParams.get("category");
    const featured = searchParams.get("featured") === "true";
    const limit = parseInt(searchParams.get("limit") ?? "100", 10);

    const validCategory =
      category && category in PRODUCT_CATEGORIES ? category : undefined;

    const products = await getProducts({
      category: validCategory,
      featured,
      limit,
    });

    return Response.json({ success: true, data: products });
  } catch {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
