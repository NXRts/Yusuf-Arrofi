import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, MapPin, Sparkles, Code2 } from "lucide-react";
import { profileData } from "@/data/profile";
import TelemetryCard from "./TelemetryCard";

export default function HeroSection() {
  return (
    <section id="about" className="relative w-full pt-28 pb-16 overflow-hidden">
      {/* Top Ambient Glows */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#4f46e5]/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-44 right-4 md:right-16 w-[320px] h-[280px] bg-[#a500bd]/12 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8">
        {/* Status Badge & Micro-Ticker Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#172133]/90 border border-[#2f3446] shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6]"></span>
            </span>
            <span className="font-mono text-xs text-[#F8FAFC]">
              {profileData.status.label}
            </span>
            <span className="hidden sm:inline-block text-[#464555]">•</span>
            <span className="hidden sm:inline-block font-mono text-[11px] font-bold text-[#4cd7f6] uppercase tracking-wider">
              {profileData.status.period}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#CBD5E1] bg-[#151b2c]/80 border border-[#2f3446]/60 px-3.5 py-1.5 rounded-lg shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>{profileData.location} [{profileData.timezone}]</span>
          </div>
        </div>

        {/* Main Asymmetrical Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-2">
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#4cd7f6] tracking-wider">
                  NXRts // FULL-STACK & GO DEVELOPER
                </span>
                <span className="px-2 py-0.5 rounded bg-[#24293b] text-[#c3c0ff] font-mono text-xs border border-[#2f3446]">
                  {profileData.version}
                </span>
              </div>

              <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1]">
                {profileData.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-[#4cd7f6]">
                <span className="text-[#fbabff] font-semibold">
                  {profileData.age} y/o Software Engineer
                </span>
                <span className="text-[#464555]">—</span>
                <span className="text-[#c7c4d8]">
                  Next.js, React, Go, and Arch Linux enthusiast
                </span>
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#c7c4d8] leading-relaxed max-w-2xl">
              Specialized in building performant web applications, responsive frontend architectures, and Go/Node services. Creator of{" "}
              <strong className="text-[#F8FAFC]">JapanApp</strong> and{" "}
              <strong className="text-[#F8FAFC]">Aria2App</strong>.{" "}
              <em className="text-[#c3c0ff]">"{profileData.quote}"</em>
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className="px-5 py-2.5 bg-gradient-to-r from-[#4f46e5] to-[#A855F7] text-white font-sans text-sm font-bold rounded-lg shadow-xl shadow-[#A855F7]/25 hover:opacity-95 transition-all flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="px-5 py-2.5 bg-[#172133] hover:bg-[#24293b] text-[#F8FAFC] border border-[#2f3446] hover:border-[#4cd7f6]/40 font-sans text-sm font-semibold rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-[#4cd7f6]" />
                <span>Get in Touch</span>
              </Link>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#151b2c] hover:bg-[#191f30] text-[#CBD5E1] border border-[#2f3446]/60 font-mono text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-[#4cd7f6]" />
                <span>GitHub @{profileData.handle}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Telemetry Card */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <TelemetryCard />
          </div>
        </div>
      </div>
    </section>
  );
}
