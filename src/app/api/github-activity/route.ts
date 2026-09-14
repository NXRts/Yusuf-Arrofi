import { NextResponse } from "next/server";
import { fetchGitHubContributions, generateDynamicWeeks } from "@/lib/github";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const data = await fetchGitHubContributions("NXRts");
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    console.error("Failed to fetch live GitHub contributions:", error);
    const fallback = generateDynamicWeeks(undefined, 40);
    return NextResponse.json(
      {
        totalContributions: "3,625",
        weeks: fallback.weeks,
        monthSpans: fallback.monthSpans,
        lastUpdated: new Date().toISOString(),
        isLive: false,
      },
      { status: 200 }
    );
  }
}
