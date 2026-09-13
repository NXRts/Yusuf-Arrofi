"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowUp, 
  Code2, 
  ExternalLink, 
  Mail, 
  Terminal, 
  Heart,
  Globe,
  Sparkles
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Projects Repository", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Engineering Blog", href: "/blog" },
    { name: "Contact Transmission", href: "/#contact" },
  ];

  const featuredProjects = [
    { name: "JapanApp (Language LMS)", href: "https://japan-mee.vercel.app/", isExternal: true },
    { name: "FocEase (Zen Dashboard)", href: "https://github.com/NXRts/FocEase", isExternal: true },
    { name: "Aria2App (Downloader GUI)", href: "https://github.com/NXRts/Aria2App", isExternal: true },
    { name: "Prameswari EO (Tour & Outbound)", href: "https://prameswari-eo.vercel.app/", isExternal: true },
    { name: "Periodik (Chemistry SPA)", href: "https://periodik-two.vercel.app/", isExternal: true },
    { name: "Smart Compressor", href: "https://kompres.vercel.app/", isExternal: true },
    { name: "RemoveBG (HD Isolation)", href: "https://remove-bg-ebon.vercel.app/", isExternal: true },
  ];

  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-variant/40 pt-12 sm:pt-16 pb-8 sm:pb-12 text-[#dde2f9]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 flex flex-col gap-10 sm:gap-14">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 xl:gap-14">
          
          {/* Column 1 & 2: Brand Identity, Bio & Status (span 2 on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-5 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="px-2.5 py-2 bg-surface-elevated border border-surface-variant rounded-lg shadow-[0_0_14px_rgba(168,85,247,0.25)] flex items-center justify-center group-hover:border-secondary/50 transition-colors">
                <span className="font-mono text-sm font-bold text-secondary">NX</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl font-extrabold text-text-primary tracking-tight group-hover:text-primary transition-colors">
                  YUSUF<span className="text-secondary">.DEV</span>
                </span>
                <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-wider">
                  NXRts // フルスタック
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-md">
              Full-Stack & Go Developer based in Surakarta, Central Java, Indonesia. Passionate about building fast, resilient web applications, high-concurrency microservices, and minimalist productivity tools.
            </p>

            {/* Live Availability & System Status */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-secondary/30 text-xs font-mono text-secondary w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>Available for Full-Stack & Engineering Roles</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-outline pt-1">
                <span>Surakarta, ID (GMT+7)</span>
                <span>•</span>
                <span>Arch Linux Workflow</span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Sitemap */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Sitemap</span>
            </span>
            <ul className="flex flex-col gap-2.5 font-sans text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-on-surface-variant hover:text-text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Featured Artifacts */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Featured Works</span>
            </span>
            <ul className="flex flex-col gap-2.5 font-sans text-sm">
              {featuredProjects.map((project) => (
                <li key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-text-primary hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group/link"
                  >
                    <span>{project.name}</span>
                    <ExternalLink className="w-3 h-3 text-outline group-hover/link:text-secondary transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Connect & Channels */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Connect</span>
            </span>
            <div className="flex flex-col gap-3 font-sans text-sm">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-text-primary hover:translate-x-1 transition-all"
              >
                <Terminal className="w-4 h-4 text-secondary" />
                <span>GitHub (NXRts)</span>
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-text-primary hover:translate-x-1 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-primary" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socials.linksPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-text-primary hover:translate-x-1 transition-all"
              >
                <Globe className="w-4 h-4 text-tertiary" />
                <span>Links Hub</span>
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-text-primary hover:translate-x-1 transition-all"
              >
                <Mail className="w-4 h-4 text-secondary" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separator Divider */}
        <div className="h-px w-full bg-surface-container/70" />

        {/* Bottom Bar: Copyright, Tech Credit & Back-to-Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-outline">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-center sm:text-left">
            <span>© {currentYear} Muhammad Yusuf Arrofi (NXRts). Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#fbabff] fill-current shrink-0" />
            <span>in Surakarta, Indonesia.</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden md:inline text-outline/80">
              Next.js 16 • React • Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 min-h-9 px-3.5 py-1.5 rounded-lg bg-surface-elevated hover:bg-surface-container-high border border-surface-variant hover:border-secondary/50 text-text-secondary hover:text-secondary transition-all shadow-xs cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
