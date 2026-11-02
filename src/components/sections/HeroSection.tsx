import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="w-full pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#232732] bg-[#0c0d10] text-[#f4f4f6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Monospace Metadata Ledger */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 sm:pb-12 border-b border-[#232732]/60 font-mono text-xs text-[#9ca3af]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <span className="text-[#f4f4f6] font-medium">{profileData.role}</span>
            <span className="text-[#6b7280]">/</span>
            <span className="text-[#6b7280]">Surakarta, Central Java</span>
          </div>

          <div className="flex items-center gap-4 text-[#6b7280]">
            <span>UTC+7 · Indonesia</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-[#9ca3af]">Open Source & Full-Stack</span>
          </div>
        </div>

        {/* Main Typographic Editorial Composition */}
        <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left / Center Column: Large Editorial Heading & Bio */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3b82f6]">
                Portfolio · 2026 Edition
              </span>
              <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4f4f6] leading-[1.08]">
                Muhammad <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-white">Yusuf Arrofi</span>
              </h1>
            </div>

            <p className="font-sans text-lg sm:text-xl text-[#9ca3af] max-w-2xl leading-relaxed">
              Software engineer focused on concurrent backend services in{" "}
              <span className="text-[#f4f4f6] font-medium">Go</span>, deliberate web applications
              with <span className="text-[#f4f4f6] font-medium">Next.js & React</span>, and
              privacy-first local utilities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#f4f4f6] hover:bg-white text-[#0c0d10] font-sans font-medium text-sm transition-all"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#14171d] hover:bg-[#1a1e26] text-[#f4f4f6] border border-[#232732] hover:border-[#3b82f6]/50 font-sans font-medium text-sm transition-all"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#9ca3af]" />
              </Link>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-[#9ca3af] hover:text-[#f4f4f6] hover:bg-[#14171d] font-mono text-xs transition-colors"
                aria-label="GitHub Profile @NXRts"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>github/NXRts</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Technical Profile & Field Notes */}
          <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 lg:border-l border-[#232732] pt-8 lg:pt-0 lg:pl-10 gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                Current Focus
              </span>
              <p className="font-sans text-sm text-[#f4f4f6] leading-relaxed">
                Undergraduate in Informatics at Universitas Muhammadiyah Karanganyar (UMUKA SOLO), building independent software and exploring Clean Architecture.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-[#232732]/60">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#9ca3af]">
                {["Go (Golang)", "TypeScript", "React", "Next.js", "Python", "PostgreSQL", "PyQt6", "Arch Linux"].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-[#14171d] border border-[#232732] text-[#9ca3af]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-[#232732]/60 font-mono text-xs">
              <div className="flex items-center justify-between text-[#6b7280]">
                <span>Status</span>
                <span className="text-[#3b82f6]">Open to Opportunities</span>
              </div>
              <div className="flex items-center justify-between text-[#6b7280]">
                <span>Work Preference</span>
                <span className="text-[#f4f4f6]">Full-Stack & Backend</span>
              </div>
              <div className="flex items-center justify-between text-[#6b7280]">
                <span>Base</span>
                <span className="text-[#f4f4f6]">Surakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
