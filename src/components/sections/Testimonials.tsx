"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4cd7f6] tracking-wider">
              WHAT PEOPLE SAY
            </span>
            <span className="w-12 h-0.5 bg-[#4f46e5]" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
            Recommendations & Client Voices
          </h2>
        </div>
        <p className="font-sans text-sm text-[#c7c4d8] max-w-md">
          Feedback from project leads, founders, and engineering colleagues who have collaborated with Yusuf.
        </p>
      </div>

      {/* Featured Testimonial Card */}
      <div className="p-8 md:p-12 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-xl relative overflow-hidden flex flex-col justify-between gap-8">
        <div className="absolute top-6 right-8 opacity-10 text-[#4cd7f6] pointer-events-none">
          <Quote className="w-24 h-24" />
        </div>

        <p className="font-sans text-lg sm:text-xl text-[#F8FAFC] leading-relaxed italic relative z-10">
          "{current.quote}"
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10 pt-6 border-t border-[#2f3446]/60">
          <div className="flex items-center gap-4">
            <img
              src={current.image}
              alt={current.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#4cd7f6]"
            />
            <div className="flex flex-col">
              <span className="font-sans text-base font-bold text-[#F8FAFC]">
                {current.name}
              </span>
              <span className="font-mono text-xs text-[#4cd7f6]">
                {current.role} • {current.company}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#CBD5E1]">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg bg-[#24293b] hover:bg-[#33394a] text-[#F8FAFC] border border-[#2f3446] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-lg bg-[#24293b] hover:bg-[#33394a] text-[#F8FAFC] border border-[#2f3446] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
