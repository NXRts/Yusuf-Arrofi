"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";
import { 
  GitHubActivityData, 
  generateDynamicWeeks, 
  formatReadableDate 
} from "@/lib/github";

export default function GitActivity() {
  const [hoveredCell, setHoveredCell] = useState<{
    date: string;
    contributions: string;
  } | null>(null);

  const dayRows = [
    { label: "", full: "Sunday" },
    { label: "Mon", full: "Monday" },
    { label: "", full: "Tuesday" },
    { label: "Wed", full: "Wednesday" },
    { label: "", full: "Thursday" },
    { label: "Fri", full: "Friday" },
    { label: "", full: "Saturday" },
  ];

  const [activityData, setActivityData] = useState<GitHubActivityData>(() => {
    const initial = generateDynamicWeeks(undefined, 36);
    return {
      totalContributions: "Active",
      weeks: initial.weeks,
      monthSpans: initial.monthSpans,
      lastUpdated: new Date().toISOString(),
      isLive: false,
    };
  });

  useEffect(() => {
    let isMounted = true;
    fetch(`/api/github-activity?t=${Date.now()}`, {
      cache: "no-store",
      headers: {
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub activity");
        return res.json();
      })
      .then((data: GitHubActivityData) => {
        if (isMounted && data && data.weeks && data.weeks.length > 0) {
          setActivityData(data);
        }
      })
      .catch(() => {
        // Silently preserve truthful baseline without artificial stats
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const getCellColor = (level: number) => {
    if (level === -1) return "opacity-0 pointer-events-none";
    switch (level) {
      case 4:
        return "bg-[#39d353]";
      case 3:
        return "bg-[#26a641]";
      case 2:
        return "bg-[#006d32]";
      case 1:
        return "bg-[#0e4429]";
      case 0:
      default:
        return "bg-[#181b22] border border-white/[0.04]";
    }
  };

  return (
    <section id="activity" className="w-full py-20 sm:py-28 border-b border-[#232732] bg-[#0c0d10] text-[#f4f4f6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#232732]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
              <span>05</span>
              <span className="w-8 h-px bg-[#3b82f6]" />
              <span>Open Source Activity</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6]">
              Developer Log & Commits
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            Public repositories and continuous contributions recorded on GitHub as{" "}
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f4f4f6] font-mono underline hover:text-[#3b82f6]"
            >
              @NXRts
            </a>.
          </p>
        </div>

        {/* Matrix + Profile Ledger Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calendar Heatmap Container (Span 8) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded border border-[#232732] bg-[#111317] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#232732]/60">
              <div className="flex items-center gap-2">
                <GitHubIcon className="w-4 h-4 text-[#9ca3af]" />
                <span className="font-sans font-semibold text-sm text-[#f4f4f6]">
                  GitHub Contribution Activity
                </span>
              </div>
              <span className="font-mono text-xs text-[#6b7280]">
                Last 36 Weeks
              </span>
            </div>

            {/* Scrollable Heatmap Viewport */}
            <div className="w-full overflow-x-auto pb-2">
              <div className="min-w-[620px] flex flex-col gap-1.5">
                {/* Month labels */}
                <div className="flex pl-8 text-[11px] font-mono text-[#6b7280] select-none h-4">
                  {activityData.monthSpans.map((m, idx) => (
                    <div
                      key={idx}
                      style={{ flex: `${m.span} 0 0` }}
                      className="truncate"
                    >
                      {m.name}
                    </div>
                  ))}
                </div>

                {/* Day rows (Mon-Sun) */}
                <div className="flex gap-1.5">
                  {/* Row day labels */}
                  <div className="flex flex-col gap-1 w-6 text-[10px] font-mono text-[#6b7280] select-none pt-0.5">
                    {dayRows.map((d, idx) => (
                      <span key={idx} className="h-3 leading-3">
                        {d.label}
                      </span>
                    ))}
                  </div>

                  {/* Matrix columns */}
                  <div className="flex gap-1 flex-1">
                    {activityData.weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.map((day, dIdx) => (
                          <div
                            key={dIdx}
                            onMouseEnter={() =>
                              setHoveredCell({
                                date: formatReadableDate(day.date),
                                contributions: day.tooltipText || `${day.count} contributions`,
                              })
                            }
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-3 h-3 rounded-[2px] transition-colors cursor-pointer ${getCellColor(
                              day.level
                            )}`}
                            title={day.tooltipText}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Legend and Hover Status Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#232732]/60 font-mono text-xs text-[#6b7280]">
              <div>
                {hoveredCell ? (
                  <span className="text-[#f4f4f6]">
                    {hoveredCell.contributions}
                  </span>
                ) : (
                  <span>Hover a date for commit verification</span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#181b22] border border-white/[0.04]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Right: GitHub Metadata & Direct Profile Link (Span 4) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded border border-[#232732] bg-[#111317] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                Repository Index
              </span>

              <div className="flex flex-col gap-1">
                <span className="font-sans text-xl font-bold text-[#f4f4f6]">
                  Muhammad Yusuf Arrofi
                </span>
                <span className="font-mono text-xs text-[#3b82f6]">
                  @NXRts
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Open source repositories encompassing full-stack web platforms, Go microservices, and desktop utilities.
              </p>

              <div className="flex flex-col gap-2 pt-3 border-t border-[#232732]/60 font-mono text-xs">
                <div className="flex items-center justify-between text-[#9ca3af]">
                  <span>Primary Language</span>
                  <span className="text-[#f4f4f6]">Go & TypeScript</span>
                </div>
                <div className="flex items-center justify-between text-[#9ca3af]">
                  <span>Operating System</span>
                  <span className="text-[#f4f4f6]">Arch Linux / CachyOS</span>
                </div>
                <div className="flex items-center justify-between text-[#9ca3af]">
                  <span>Public Repositories</span>
                  <span className="text-[#f4f4f6] font-semibold">{profileData.stats.repos}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#232732]">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded bg-[#14171d] hover:bg-[#1a1e26] text-[#f4f4f6] border border-[#232732] hover:border-[#3b82f6]/50 font-mono text-xs transition-colors"
              >
                <span>View Profile @NXRts</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9ca3af]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
