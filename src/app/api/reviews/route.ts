import { fetchGoogleReviews } from "@/lib/google-reviews";

export async function GET() {
  try {
    const data = await fetchGoogleReviews();
    return Response.json({ success: true, data });
  } catch {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
