import React from "react";
import { GitCommit, Brain, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export default function GitActivity() {
  // Patterned activity levels (0: low/empty, 1: purple, 2: cyan, 3: bright indigo)
  const activityPattern = [
    [0, 1, 2, 0, 3],
    [3, 0, 1, 2, 1],
    [0, 2, 3, 1, 0],
    [1, 1, 2, 3, 0],
    [0, 1, 3, 2, 1],
    [2, 0, 1, 3, 2],
    [1, 3, 0, 1, 2],
    [3, 1, 2, 0, 1],
    [0, 2, 1, 3, 2],
    [1, 3, 2, 1, 0],
    [2, 1, 3, 0, 2],
    [3, 2, 1, 2, 3],
  ];

  const getCellColor = (level: number) => {
    switch (level) {
      case 3:
        return "bg-secondary shadow-[0_0_6px_rgba(76,215,246,0.4)]";
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
        <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between gap-6 hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <GitCommit className="w-5 h-5 text-secondary" />
              <span className="font-sans text-lg md:text-xl font-bold text-text-primary">
                Engineering Activity
              </span>
            </div>
            <span className="font-mono text-xs font-semibold text-secondary px-2.5 py-1 bg-secondary/10 border border-secondary/20 rounded-md">
              840+ Commits (2024)
            </span>
          </div>

          {/* Git Contribution Heatmap */}
          <div className="p-4 bg-surface-container-lowest border border-surface-container rounded-xl flex flex-col gap-3 overflow-x-auto">
            <div className="flex items-center justify-between font-mono text-[11px] text-text-secondary px-1">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

            <div className="grid grid-flow-col grid-rows-5 gap-1.5 min-w-110 py-1">
              {activityPattern.flatMap((col, colIdx) =>
                col.map((val, rowIdx) => (
                  <span
                    key={`${colIdx}-${rowIdx}`}
                    className={`w-3.5 h-3.5 rounded-sm ${getCellColor(val)} transition-all hover:scale-110`}
                    title={`Activity Node: Col ${colIdx + 1}, Tier ${val}`}
                  />
                ))
              )}
            </div>

            <div className="flex items-center justify-end gap-2 text-[11px] font-mono text-text-secondary pt-1">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-surface-container" />
                <span className="w-2.5 h-2.5 rounded-sm bg-primary-container" />
                <span className="w-2.5 h-2.5 rounded-sm bg-glow-purple" />
                <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              </div>
              <span>More</span>
            </div>
          </div>

          <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
            Active contributor to open-source kanji stroke recognition libraries, lightweight web tools, and reactive Next.js state utilities.
          </p>
        </div>

        {/* Right: Core Engineering Tenets */}
        <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between gap-6 hover:border-tertiary/40 transition-all">
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
