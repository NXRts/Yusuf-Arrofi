"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-12 sm:py-16 flex flex-col gap-6 sm:gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-secondary tracking-wider">
              WHAT PEOPLE SAY
            </span>
            <span className="w-12 h-0.5 bg-primary-container" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary">
            Recommendations & Client Voices
          </h2>
        </div>
        <p className="font-sans text-sm text-on-surface-variant max-w-md">
          Feedback from project leads, founders, and engineering colleagues who have collaborated with Yusuf.
        </p>
      </div>

      {/* Featured Testimonial Card */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl bg-surface-elevated border border-surface-variant shadow-xl relative overflow-hidden flex flex-col justify-between gap-6 sm:gap-8 select-none touch-pan-y"
      >
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 opacity-10 text-secondary pointer-events-none">
          <Quote className="w-14 h-14 sm:w-24 sm:h-24" />
        </div>

        <p className="font-sans text-base sm:text-lg md:text-xl text-text-primary leading-relaxed italic relative z-10">
          "{current.quote}"
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 relative z-10 pt-5 sm:pt-6 border-t border-surface-variant/60">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={current.image}
              alt={current.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-secondary shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-sans text-sm sm:text-base font-bold text-text-primary truncate">
                {current.name}
              </span>
              <span className="font-mono text-xs text-secondary truncate">
                {current.role} • {current.company}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 border-t border-surface-variant/40 sm:border-0">
            <span className="font-mono text-xs text-text-secondary">
              {currentIndex + 1} / {testimonialsData.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 sm:p-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-text-primary border border-surface-variant transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 sm:p-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-text-primary border border-surface-variant transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
