import { NextResponse } from "next/server";
import { fetchGitHubContributions, generateDynamicWeeks } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await fetchGitHubContributions("NXRts");
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("Failed to fetch live GitHub contributions:", error);
    const fallback = generateDynamicWeeks(undefined, 40);
    return NextResponse.json(
      {
        totalContributions: "3,616",
        weeks: fallback.weeks,
        monthSpans: fallback.monthSpans,
        lastUpdated: new Date().toISOString(),
        isLive: false,
      },
      { status: 200 }
    );
  }
}
