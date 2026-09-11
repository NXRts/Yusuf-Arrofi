"use client";

import React, { useState, useEffect } from "react";
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
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

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
      return pathname === "/" && currentHash === href.replace("/", "");
    }
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d1323]/85 backdrop-blur-xl border-b border-[#2f3446]/40 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Handle */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="px-2.5 py-2 bg-surface-elevated border border-surface-variant rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] flex items-center justify-center group-hover:border-secondary/50 transition-colors">
              <span className="font-mono text-sm font-bold text-secondary">NX</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-extrabold text-text-primary tracking-tight group-hover:text-primary transition-colors">
                YUSUF<span className="text-secondary">.DEV</span>
              </span>
              <span className="font-mono text-[11px] font-semibold text-secondary uppercase tracking-wider">
                NXRts // フルスタック
              </span>
            </div>
          </Link>

          {/* Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-surface-elevated/90 border border-secondary/20 rounded-full shadow-[0_0_10px_rgba(76,215,246,0.15)]">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-mono text-xs font-semibold text-secondary">
              AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-surface-elevated/60 border border-surface-variant/60 rounded-xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (link.href.startsWith("/#")) {
                    setCurrentHash(link.href.replace("/", ""));
                  }
                }}
                className={`px-3.5 py-1.5 rounded-lg text-sm transition-all font-medium ${
                  active
                    ? "bg-primary-container text-white font-bold shadow-md shadow-primary-container/25"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-text-primary"
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
            className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary/40 hover:bg-surface-container-high transition-all"
            title="GitHub Profile"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            aria-label="Professional Links Hub"
            href={profileData.socials.linksPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary/40 hover:bg-surface-container-high transition-all"
            title="Links Portal"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/#contact"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-container hover:opacity-90 text-white font-medium text-xs shadow-md shadow-primary-container/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-surface-elevated border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-variant bg-surface/98 px-6 py-5 flex flex-col gap-3 backdrop-blur-2xl">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-surface-variant/60">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-mono text-xs text-secondary">
              STATUS: {profileData.status.label}
            </span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                if (link.href.startsWith("/#")) {
                  setCurrentHash(link.href.replace("/", ""));
                }
              }}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive(link.href)
                  ? "bg-primary-container text-white font-bold"
                  : "text-on-surface-variant hover:bg-surface-elevated hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-surface-variant/60 flex items-center justify-between">
            <span className="font-mono text-xs text-outline">Muhammad Yusuf Arrofi</span>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-secondary hover:underline flex items-center gap-1"
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
