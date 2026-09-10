"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Code2, 
  ExternalLink, 
  Send, 
  Menu, 
  X,
  FileCode,
  Award,
  BookOpen,
  Sparkles
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Experience", href: "/#experience" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && typeof window !== "undefined" && window.location.hash === href.replace("/", "");
    }
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d1323]/85 backdrop-blur-xl border-b border-[#2f3446]/40 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Handle */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="px-2.5 py-2 bg-[#172133] border border-[#2f3446] rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] flex items-center justify-center group-hover:border-[#4cd7f6]/50 transition-colors">
              <span className="font-mono text-sm font-bold text-[#4cd7f6]">NX</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-extrabold text-[#F8FAFC] tracking-tight group-hover:text-[#c3c0ff] transition-colors">
                YUSUF<span className="text-[#4cd7f6]">.DEV</span>
              </span>
              <span className="font-mono text-[11px] font-semibold text-[#4cd7f6] uppercase tracking-wider">
                NXRts // フルスタック
              </span>
            </div>
          </Link>

          {/* Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-[#172133]/90 border border-[#4cd7f6]/20 rounded-full shadow-[0_0_10px_rgba(76,215,246,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <span className="font-mono text-xs font-semibold text-[#4cd7f6]">
              AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-[#172133]/60 border border-[#2f3446]/60 rounded-xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-sm transition-all font-medium ${
                  active
                    ? "bg-[#4f46e5] text-white font-bold shadow-md shadow-[#4f46e5]/25"
                    : "text-[#c7c4d8] hover:bg-[#24293b] hover:text-[#F8FAFC]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            aria-label="GitHub Repository"
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#172133] border border-[#2f3446] flex items-center justify-center text-[#c7c4d8] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/40 hover:bg-[#24293b] transition-all"
            title="GitHub Profile"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            aria-label="Professional Links Hub"
            href={profileData.socials.linksPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#172133] border border-[#2f3446] flex items-center justify-center text-[#c7c4d8] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/40 hover:bg-[#24293b] transition-all"
            title="Links Portal"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/#contact"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#4f46e5] hover:bg-[#4338ca] text-white font-medium text-xs shadow-md shadow-[#4f46e5]/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-[#172133] border border-[#2f3446] flex items-center justify-center text-[#c7c4d8] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2f3446] bg-[#0d1323]/98 px-6 py-5 flex flex-col gap-3 backdrop-blur-2xl">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#2f3446]/60">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <span className="font-mono text-xs text-[#4cd7f6]">
              STATUS: {profileData.status.label}
            </span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(link.href)
                  ? "bg-[#4f46e5] text-white font-bold"
                  : "text-[#c7c4d8] hover:bg-[#172133] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#2f3446]/60 flex items-center justify-between">
            <span className="font-mono text-xs text-[#918fa1]">Muhammad Yusuf Arrofi</span>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#4cd7f6] hover:underline flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
