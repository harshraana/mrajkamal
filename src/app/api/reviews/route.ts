import { NextResponse } from "next/server";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export async function GET() {
  try {
    const reviews = await fetchGoogleReviews();

    console.log(`[/api/reviews] Returning ${reviews.length} real reviews`);

    return NextResponse.json({
      success: true,
      data: reviews,
      allReviews: reviews,
      timestamp: new Date().toISOString(),
      count: reviews.length,
    });
  } catch (error) {
    console.error("Reviews API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch reviews",
        error: error instanceof Error ? error.message : "Unknown error",
        data: [],
        allReviews: [],
      },
      { status: 500 },
    );
  }
}

export const revalidate = 3600;
