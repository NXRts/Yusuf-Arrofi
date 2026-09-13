"use client";

import React, { useState, useEffect } from "react";
import { GitCommit, Brain } from "lucide-react";
import { profileData } from "@/data/profile";
import { 
  GitHubActivityData, 
  generateDynamicWeeks, 
  formatReadableDate 
} from "@/lib/github";

export default function GitActivity() {
  const [colorTheme, setColorTheme] = useState<"github" | "cyber">("github");
  const [hoveredCell, setHoveredCell] = useState<{
    date: string;
    contributions: string;
  } | null>(null);

  // GitHub Standard Day Layout (7 rows, only Mon/Wed/Fri labeled)
  const dayRows = [
    { label: "", full: "Sunday" },
    { label: "Mon", full: "Monday" },
    { label: "", full: "Tuesday" },
    { label: "Wed", full: "Wednesday" },
    { label: "", full: "Thursday" },
    { label: "Fri", full: "Friday" },
    { label: "", full: "Saturday" },
  ];

  // Dynamic state initialized with rolling 40 weeks ending on current date (September 12, etc.)
  const [activityData, setActivityData] = useState<GitHubActivityData>(() => {
    const initial = generateDynamicWeeks(undefined, 40);
    return {
      totalContributions: "3,625",
      weeks: initial.weeks,
      monthSpans: initial.monthSpans,
      lastUpdated: new Date().toISOString(),
      isLive: false,
    };
  });

  // Fetch real-time GitHub activity on mount
  useEffect(() => {
    let isMounted = true;
    fetch("/api/github-activity", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub activity");
        return res.json();
      })
      .then((data: GitHubActivityData) => {
        if (isMounted && data && data.weeks && data.weeks.length > 0) {
          setActivityData(data);
        }
      })
      .catch((err) => {
        console.error("Live GitHub activity sync notice:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const getCellColor = (level: number) => {
    if (level === -1) {
      return "opacity-0 pointer-events-none";
    }

    if (colorTheme === "github") {
      switch (level) {
        case 4:
          return "bg-[#39d353] shadow-[0_0_6px_rgba(57,211,83,0.5)]";
        case 3:
          return "bg-[#26a641]";
        case 2:
          return "bg-[#006d32]";
        case 1:
          return "bg-[#0e4429]";
        case 0:
        default:
          return "bg-[#161b22] border border-white/5";
      }
    }

    // Cyber Theme
    switch (level) {
      case 4:
        return "bg-secondary-fixed shadow-[0_0_6px_rgba(76,215,246,0.6)]";
      case 3:
        return "bg-secondary";
      case 2:
        return "bg-glow-purple";
      case 1:
        return "bg-primary-container";
      case 0:
      default:
        return "bg-surface-container";
    }
  };

  return (
    <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Engineering Git Activity Preview */}
        <div className="lg:col-span-7 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between gap-5 sm:gap-6 hover:border-secondary/40 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <GitCommit className="w-5 h-5 text-secondary" />
              <span className="font-sans text-base sm:text-lg md:text-xl font-bold text-text-primary">
                Engineering Activity
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Switcher Pill */}
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-surface-container-low border border-surface-variant text-[11px] font-mono">
                <button
                  onClick={() => setColorTheme("github")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    colorTheme === "github"
                      ? "bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  GitHub
                </button>
                <button
                  onClick={() => setColorTheme("cyber")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    colorTheme === "cyber"
                      ? "bg-secondary/20 text-secondary font-bold border border-secondary/30"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  Cyber
                </button>
              </div>

              {/* Total Contributions Badge with Realtime Pulse Indicator */}
              <span className="font-mono text-xs font-semibold text-secondary px-2.5 py-1 bg-secondary/10 border border-secondary/20 rounded-md whitespace-nowrap flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Real-time daily sync" />
                {activityData.totalContributions} Contributions
              </span>
            </div>
          </div>

          {/* Git Contribution Heatmap (Rolling Dynamic Range - Updates Daily) */}
          <div className="p-3 sm:p-4 md:p-5 bg-surface-container-lowest border border-surface-container rounded-xl flex flex-col gap-2.5 sm:gap-3">
            {/* Mobile swipe and tap hint */}
            <div className="flex md:hidden items-center justify-between text-[10px] font-mono text-outline px-1">
              <span className="text-secondary flex items-center gap-1 font-semibold">
                <span>Swipe history</span>
                <span>&rarr;</span>
              </span>
              <span>Tap cell to view details</span>
            </div>

            {/* Scroll wrapper: overflow-visible on desktop to eliminate all clipping */}
            <div className="overflow-x-auto md:overflow-visible scrollbar-thin px-1 py-1.5">
              <div className="min-w-140 md:min-w-0 w-full flex flex-col gap-2">
                {/* Months Header - Dynamically aligned to rolling columns */}
                <div className="flex font-mono text-[10px] text-text-secondary pl-7 pr-3">
                  {activityData.monthSpans.map((m, idx) => (
                    <span
                      key={`${m.name}-${idx}`}
                      style={{ flex: `${m.span} 1 0%` }}
                      className="truncate"
                    >
                      {m.name}
                    </span>
                  ))}
                </div>

                {/* Heatmap Grid Area */}
                <div className="flex items-center gap-2 pr-3 py-1">
                  {/* Day Labels Column: Mon, Wed, Fri only */}
                  <div className="grid grid-rows-7 gap-1 font-mono text-[9px] text-text-secondary select-none text-right shrink-0 w-5">
                    {dayRows.map((day, idx) => (
                      <span
                        key={idx}
                        className="h-2.5 leading-2.5 font-medium"
                      >
                        {day.label}
                      </span>
                    ))}
                  </div>

                  {/* 40 Weeks x 7 Days Grid */}
                  <div className="grid grid-flow-col grid-rows-7 gap-1 justify-between flex-1 py-0.5">
                    {activityData.weeks.flatMap((col, colIdx) =>
                      col.map((cell, rowIdx) => {
                        if (cell.level === -1) {
                          return (
                            <span
                              key={`${colIdx}-${rowIdx}`}
                              className="w-2.5 h-2.5 opacity-0 pointer-events-none"
                            />
                          );
                        }

                        const dateStr = formatReadableDate(cell.date);
                        const countStr = cell.count === 0 ? "No contributions" : `${cell.count} contribution${cell.count === 1 ? "" : "s"}`;

                        return (
                          <span
                            key={`${colIdx}-${rowIdx}`}
                            onClick={() => setHoveredCell({ date: dateStr, contributions: countStr })}
                            onMouseEnter={() => setHoveredCell({ date: dateStr, contributions: countStr })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`relative w-2.5 h-2.5 rounded-xs ${getCellColor(cell.level)} transition-all duration-100 cursor-pointer hover:scale-120 hover:z-30 hover:ring-2 active:scale-125 ${
                              colorTheme === "github"
                                ? "hover:ring-white hover:shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                : "hover:ring-cyan-300 hover:shadow-[0_0_8px_rgba(76,215,246,0.9)]"
                            }`}
                            title={cell.tooltipText || `${dateStr}: ${countStr}`}
                          />
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Legend & Link - Dynamic live hover info or GitHub link */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] font-mono text-text-secondary pt-2 border-t border-surface-container/60 min-h-8.5">
              <div className="flex items-center gap-2">
                {hoveredCell ? (
                  <div className="flex items-center gap-2 text-xs text-text-primary transition-all">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span className="font-semibold text-text-primary">{hoveredCell.date}</span>
                    <span className="text-text-secondary">:</span>
                    <span className="font-mono font-bold text-emerald-400">{hoveredCell.contributions}</span>
                  </div>
                ) : (
                  <a
                    href="https://github.com/NXRts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-secondary hover:text-secondary transition-colors underline decoration-surface-variant hover:decoration-secondary"
                  >
                    Learn how we count contributions ({activityData.totalContributions} in the last year)
                  </a>
                )}
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span>Less</span>
                <div className="flex gap-1">
                  {colorTheme === "github" ? (
                    <>
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#161b22] border border-white/5" title="0 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#0e4429]" title="1-3 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#006d32]" title="4-6 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#26a641]" title="7-9 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#39d353]" title="10+ commits" />
                    </>
                  ) : (
                    <>
                      <span className="w-2.5 h-2.5 rounded-xs bg-surface-container" title="0 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-primary-container" title="1-3 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-glow-purple" title="4-6 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-secondary" title="7-9 commits" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-secondary-fixed shadow-[0_0_6px_rgba(76,215,246,0.6)]" title="10+ commits" />
                    </>
                  )}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
            Active open-source contributor with <strong>{activityData.totalContributions} contributions</strong> in the last year across JapanApp, Aria2App, lightweight web tools, and reactive Next.js state utilities.
          </p>
        </div>

        {/* Right: Core Engineering Tenets */}
        <div className="lg:col-span-5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between gap-5 sm:gap-6 hover:border-tertiary/40 transition-all">
          <div className="flex items-center gap-2.5">
            <Brain className="w-5 h-5 text-tertiary" />
            <h3 className="font-sans text-lg md:text-xl font-bold text-text-primary">
              Engineering Tenets
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {profileData.tenets.map((tenet) => (
              <div
                key={tenet.number}
                className="p-3.5 rounded-xl bg-surface-container-low border border-surface-variant/50 flex flex-col hover:border-secondary/30 transition-colors"
              >
                <span className="font-sans text-sm font-bold text-text-primary">
                  {tenet.title}
                </span>
                <span className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">
                  {tenet.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
