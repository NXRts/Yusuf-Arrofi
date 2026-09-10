import React from "react";
import { CheckCircle, Briefcase, Calendar } from "lucide-react";
import { experiencesData } from "@/data/experiences";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-secondary tracking-wider">
              03 // TRACK RECORD
            </span>
            <span className="w-12 h-0.5 bg-primary-container" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary">
            Engineering Experience & Leadership
          </h2>
        </div>
        <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">
          CONTINUOUS EVOLUTION
        </span>
      </div>

      {/* Timeline Column */}
      <div className="flex flex-col gap-6">
        {experiencesData.map((item) => (
          <div
            key={item.id}
            className="p-6 md:p-8 rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col lg:flex-row gap-6 md:gap-8 justify-between hover:border-secondary/40 transition-all"
          >
            {/* Left Col: Role Meta */}
            <div className="flex flex-col gap-2.5 lg:w-1/3">
              <div className="inline-flex items-center gap-2">
                {item.isCurrent ? (
                  <span className="px-2.5 py-0.5 rounded bg-primary-container text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    Current Focus
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-text-secondary font-mono text-[11px] font-semibold">
                    Completed
                  </span>
                )}
                <span className="font-mono text-xs text-secondary flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              <h3 className="font-sans text-xl font-bold text-text-primary">
                {item.role}
              </h3>

              <div className="flex flex-col text-sm text-text-secondary">
                <span className="font-semibold text-primary">{item.company}</span>
                <span className="text-xs text-outline">{item.location}</span>
              </div>
            </div>

            {/* Right Col: Accomplishments & Tags */}
            <div className="flex flex-col gap-4 lg:w-2/3">
              <ul className="flex flex-col gap-2.5 font-sans text-sm text-on-surface-variant">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-variant/40">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-surface-container-low border border-surface-variant rounded text-text-secondary font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
