import { connectDB } from "@/lib/db";
import HomeContent from "@/lib/models/HomeContent";

export async function GET() {
  try {
    await connectDB();
    const content = await HomeContent.findOne().lean();
    return Response.json({ success: true, data: content ?? {} });
  } catch {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
