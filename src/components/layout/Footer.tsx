"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import BrandLogo from "@/components/icons/BrandLogo";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Selected Projects", href: "/#projects" },
    { name: "About & Philosophy", href: "/#about" },
    { name: "Technical Skills", href: "/#skills" },
    { name: "Career Timeline", href: "/#experience" },
    { name: "GitHub Activity", href: "/#activity" },
    { name: "All Projects Catalog", href: "/projects" },
    { name: "Technical Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
    { name: "Support & Patronage", href: "/#support" },
  ];

  const featuredProjects = [
    { name: "JapanApp (Language Platform)", href: "https://japan-mee.vercel.app/" },
    { name: "DataScry (Offline Document Suite)", href: "https://datascry.vercel.app/" },
    { name: "NxSora (Living Desktop Notch)", href: "https://github.com/NXRts/NxSora" },
    { name: "Aria2App (Desktop Downloader GUI)", href: "https://github.com/NXRts/Aria2App" },
    { name: "Prameswari EO (Tourism Platform)", href: "https://prameswari-eo.vercel.app/" },
    { name: "Yusuf Expedition (DPSA)", href: "https://yuexp.vercel.app/" },
    { name: "Periodik (Chemistry SPA)", href: "https://periodik-two.vercel.app/" },
    { name: "Smart Compressor (Image Optimizer)", href: "https://kompres.vercel.app/" },
  ];

  return (
    <footer className="w-full bg-[#08090b] border-t border-[#232732] text-[#f4f4f6] pt-14 sm:pt-16 pb-10 sm:pb-12 font-sans">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-10 sm:gap-16">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Identity & Colophon (Span 5 on desktop, full width on tablet) */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-4 min-w-0">
            <div className="flex flex-col gap-1">
              <span className="font-sans font-bold text-base text-[#f4f4f6]">
                {profileData.name}
              </span>
              <span className="font-mono text-xs text-[#3b82f6]">
                {profileData.title}
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#9ca3af] leading-relaxed max-w-md">
              Software engineer focused on concurrent Go microservices, deliberate frontend architectures in Next.js & React, and privacy-first local tools.
            </p>

            <div className="flex flex-col gap-1.5 pt-3 border-t border-[#232732]/60 font-mono text-xs text-[#6b7280]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="text-[11px] text-[#9ca3af]">
                Colophon: Typeset in Inter, Newsreader, and JetBrains Mono.
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Sitemap (Span 3) */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-3 min-w-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
              Directory
            </span>
            <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1 font-mono text-xs">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex py-1 text-[#9ca3af] hover:text-[#f4f4f6] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Artifacts (Span 4) */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-3 min-w-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
              Selected Artifacts
            </span>
            <ul className="flex flex-col gap-1 font-mono text-xs">
              {featuredProjects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 text-[#9ca3af] hover:text-[#3b82f6] transition-colors flex items-center justify-between gap-2 group"
                  >
                    <span className="truncate">{p.name}</span>
                    <span className="text-[#6b7280] group-hover:translate-x-0.5 transition-transform shrink-0">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 mt-2 border-t border-[#232732]/60 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#9ca3af]">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GitHubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="py-1 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>Email</span>
                </a>
              </div>

              {/* Sponsorship & Patronage Row */}
              <div className="pt-2 border-t border-[#232732]/40 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono">
                <span className="text-[#3b82f6] text-[11px] uppercase tracking-wider font-semibold">
                  Patronage:
                </span>
                {profileData.sponsorship.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 hover:text-[#f4f4f6] transition-colors flex items-center gap-1.5 text-[11px] text-[#9ca3af]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: sponsor.color }}
                    />
                    <span>{sponsor.name}</span>
                    <span className="text-[#6b7280]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top Row */}
        <div className="pt-8 border-t border-[#232732]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#6b7280]">
          <div className="flex items-center gap-3">
            <BrandLogo size={22} className="shrink-0" />
            <span>© {currentYear} {profileData.name}. All verified projects preserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="py-1.5 px-2.5 rounded bg-surface-container-low sm:bg-transparent border border-[#232732] sm:border-0 flex items-center gap-1.5 text-[#9ca3af] hover:text-[#f4f4f6] transition-colors cursor-pointer shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
