import React from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Share2, ShieldCheck, Heart, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container py-12 md:py-16 text-[#dde2f9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Upper Column */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-2 bg-surface-elevated border border-surface-variant rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.2)] flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-secondary">NX</span>
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-text-primary">
                MUHAMMAD YUSUF ARROFI
              </span>
            </div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              NXRts — 19 y/o Full-Stack & Go Developer. Creator of JapanApp, Aria2App, and active open-source contributor from Surakarta, Central Java, Indonesia.
            </p>
          </div>

          {/* Quick Skill Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {["Next.js / React", "Go (Golang)", "Python / PyQt6", "Arch Linux", "PostgreSQL", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 bg-surface-elevated border border-surface-variant rounded-full font-mono text-xs text-secondary shadow-[0_0_8px_rgba(76,215,246,0.1)] hover:border-secondary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-surface-container" />

        {/* Lower Column */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-outline">
            <span>© {currentYear} Muhammad Yusuf Arrofi (NXRts). Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#fbabff] fill-current" />
            <span>in Surakarta, Indonesia.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                aria-label="GitHub Profile"
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-elevated border border-surface-variant text-on-surface-variant hover:text-secondary hover:border-secondary/50 transition-all"
                title="GitHub"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                aria-label="LinkedIn Profile"
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-elevated border border-surface-variant text-on-surface-variant hover:text-secondary hover:border-secondary/50 transition-all"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z"/>
                </svg>
              </a>
              <a
                aria-label="Social Links Portal"
                href={profileData.socials.linksPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-elevated border border-surface-variant text-on-surface-variant hover:text-secondary hover:border-secondary/50 transition-all"
                title="Links Portal"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                aria-label="Legacy Portfolio"
                href={profileData.socials.portfolioLive}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-elevated border border-surface-variant text-on-surface-variant hover:text-secondary hover:border-secondary/50 transition-all"
                title="Live Mirror"
              >
                <ShieldCheck className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#"
              aria-label="Back to top"
              className="flex items-center gap-2 px-3 py-2 bg-surface-elevated hover:bg-surface-container-high border border-surface-variant hover:border-secondary/50 text-on-surface-variant hover:text-text-primary rounded-lg transition-all text-xs font-mono uppercase tracking-wider"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
