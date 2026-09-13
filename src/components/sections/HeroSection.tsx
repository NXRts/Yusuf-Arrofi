import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, MapPin, Sparkles, Code2 } from "lucide-react";
import { profileData } from "@/data/profile";
import TelemetryCard from "./TelemetryCard";

export default function HeroSection() {
  return (
    <section id="about" className="relative w-full pt-22 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Top Ambient Glows */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-162.5 h-80 bg-primary-container/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-44 right-4 md:right-16 w-[320px] h-70 bg-tertiary-container/12 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-6 sm:gap-8">
        {/* Status Badge & Micro-Ticker Row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-surface-elevated/90 border border-surface-variant shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="font-mono text-xs text-text-primary">
              {profileData.status.label}
            </span>
            <span className="hidden sm:inline-block text-outline-variant">•</span>
            <span className="hidden sm:inline-block font-mono text-[11px] font-bold text-secondary uppercase tracking-wider">
              {profileData.status.period}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-text-secondary bg-surface-container-low/80 border border-surface-variant/60 px-3 sm:px-3.5 py-1.5 rounded-lg shadow-sm max-w-full truncate">
            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span className="sm:hidden">Surakarta, ID [{profileData.timezone}]</span>
            <span className="hidden sm:inline">{profileData.location} [{profileData.timezone}]</span>
          </div>
        </div>

        {/* Main Asymmetrical Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-1 sm:mt-2">
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[11px] sm:text-xs font-semibold text-secondary tracking-wider">
                  NXRts // FULL-STACK & GO DEVELOPER
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-mono text-xs border border-surface-variant">
                  {profileData.version}
                </span>
              </div>

              <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.15]">
                {profileData.name}
              </h1>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs sm:text-sm text-secondary">
                <span className="text-tertiary font-semibold">
                  {profileData.age} y/o Software Engineer
                </span>
                <span className="text-outline-variant">—</span>
                <span className="text-on-surface-variant">
                  Next.js, React, Go, and Arch Linux enthusiast
                </span>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              Specialized in building performant web applications, responsive frontend architectures, and Go/Node services. Creator of{" "}
              <strong className="text-text-primary">JapanApp</strong> and{" "}
              <strong className="text-text-primary">Aria2App</strong>.{" "}
              <em className="text-primary">"{profileData.quote}"</em>
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <Link
                href="/projects"
                className="w-full sm:w-auto justify-center min-h-11 px-5 py-2.5 bg-linear-to-r from-primary-container to-glow-purple text-white font-sans text-sm font-bold rounded-xl sm:rounded-lg shadow-xl shadow-glow-purple/25 hover:opacity-95 transition-all flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto justify-center min-h-11 px-5 py-2.5 bg-surface-elevated hover:bg-surface-container-high text-text-primary border border-surface-variant hover:border-secondary/40 font-sans text-sm font-semibold rounded-xl sm:rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-secondary" />
                <span>Get in Touch</span>
              </Link>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center min-h-11 px-4 py-2.5 bg-surface-container-low hover:bg-surface-container text-text-secondary border border-surface-variant/60 font-mono text-xs rounded-xl sm:rounded-lg transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-secondary" />
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
