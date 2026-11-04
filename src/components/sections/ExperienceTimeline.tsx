import React from "react";
import { experiencesData } from "@/data/experiences";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-16 sm:py-22 lg:py-28 border-b border-[#232732] bg-[#0c0d10] text-[#f4f4f6]">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-10 sm:gap-14 lg:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8 sm:pb-10 border-b border-[#232732]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
              <span>04</span>
              <span className="w-8 h-px bg-[#3b82f6]" />
              <span>Career & Education</span>
            </div>
            <h2 className="font-sans editorial-h1 font-bold tracking-tight text-[#f4f4f6]">
              Development Journey
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            A chronological timeline of academic study, independent software development, and internship engineering.
          </p>
        </div>

        {/* Editorial Timeline Ledger */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {experiencesData.map((item) => (
            <article
              key={item.id}
              className="p-5 sm:p-7 lg:p-8 rounded border border-[#232732] bg-surface-container-low grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start"
            >
              {/* Left Column: Period & Organization */}
              <div className="lg:col-span-4 flex flex-col gap-2 min-w-0">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-container border border-[#232732] text-[#3b82f6] font-medium">
                    {item.period}
                  </span>
                  {item.isCurrent && (
                    <span className="text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider">
                      (Current)
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-lg sm:text-xl font-bold text-[#f4f4f6] mt-1">
                  {item.role}
                </h3>

                <div className="flex flex-col text-xs font-mono text-[#9ca3af] gap-1">
                  <span className="text-[#f4f4f6] font-sans font-medium text-sm">
                    {item.company}
                  </span>
                  <span className="text-[#6b7280]">{item.location}</span>
                </div>
              </div>

              {/* Right Column: Narrative Summary & Key Points */}
              <div className="lg:col-span-8 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-[#232732] pt-4 lg:pt-0 lg:pl-8 min-w-0">
                <p className="font-sans text-sm text-[#d1d5db] leading-relaxed">
                  {item.summary}
                </p>

                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#9ca3af]">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#3b82f6] mt-1 shrink-0">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#232732]/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#0c0d10] border border-[#232732] text-[#9ca3af] font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
