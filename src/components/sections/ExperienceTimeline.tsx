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
            <span className="font-mono text-xs font-bold text-[#4cd7f6] tracking-wider">
              03 // TRACK RECORD
            </span>
            <span className="w-12 h-0.5 bg-[#4f46e5]" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
            Engineering Experience & Leadership
          </h2>
        </div>
        <span className="font-mono text-xs text-[#CBD5E1] tracking-wider uppercase">
          CONTINUOUS EVOLUTION
        </span>
      </div>

      {/* Timeline Column */}
      <div className="flex flex-col gap-6">
        {experiencesData.map((item) => (
          <div
            key={item.id}
            className="p-6 md:p-8 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-md flex flex-col lg:flex-row gap-6 md:gap-8 justify-between hover:border-[#4cd7f6]/40 transition-all"
          >
            {/* Left Col: Role Meta */}
            <div className="flex flex-col gap-2.5 lg:w-1/3">
              <div className="inline-flex items-center gap-2">
                {item.isCurrent ? (
                  <span className="px-2.5 py-0.5 rounded bg-[#4f46e5] text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                    Current Focus
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded bg-[#24293b] text-[#CBD5E1] font-mono text-[11px] font-semibold">
                    Completed
                  </span>
                )}
                <span className="font-mono text-xs text-[#4cd7f6] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              <h3 className="font-sans text-xl font-bold text-[#F8FAFC]">
                {item.role}
              </h3>

              <div className="flex flex-col text-sm text-[#CBD5E1]">
                <span className="font-semibold text-[#c3c0ff]">{item.company}</span>
                <span className="text-xs text-[#918fa1]">{item.location}</span>
              </div>
            </div>

            {/* Right Col: Accomplishments & Tags */}
            <div className="flex flex-col gap-4 lg:w-2/3">
              <ul className="flex flex-col gap-2.5 font-sans text-sm text-[#c7c4d8]">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2f3446]/40">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-[#151b2c] border border-[#2f3446] rounded text-[#CBD5E1] font-mono text-xs"
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
