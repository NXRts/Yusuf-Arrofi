"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Prevent background scrolling and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  // Handle tap / click outside the navbar to close mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
    <header ref={navRef} className="fixed top-0 w-full z-50 bg-[#0d1323]/90 backdrop-blur-xl border-b border-[#2f3446]/40 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-16 md:h-20 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo & Handle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="px-2 py-1.5 sm:px-2.5 sm:py-2 bg-surface-elevated border border-surface-variant rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.25)] flex items-center justify-center group-hover:border-secondary/50 transition-colors">
              <span className="font-mono text-xs sm:text-sm font-bold text-secondary">NX</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-base sm:text-lg font-extrabold text-text-primary tracking-tight group-hover:text-primary transition-colors leading-tight">
                YUSUF<span className="text-secondary">.DEV</span>
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-secondary uppercase tracking-wider">
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
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            aria-label="GitHub Repository"
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-elevated border border-surface-variant items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary/40 hover:bg-surface-container-high transition-all"
            title="GitHub Profile"
          >
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            aria-label="Professional Links Hub"
            href={profileData.socials.linksPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-elevated border border-surface-variant items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary/40 hover:bg-surface-container-high transition-all"
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
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-surface-elevated border border-surface-variant flex items-center justify-center text-on-surface-variant hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-secondary" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop Portal - Rendered to document.body to cover full viewport */}
      {mounted && mobileMenuOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden cursor-pointer touch-none animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />,
        document.body
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="relative z-10 lg:hidden border-t border-surface-variant bg-surface/98 px-5 py-4 flex flex-col gap-2 backdrop-blur-2xl max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Status bar */}
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-surface-variant/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-mono text-xs text-secondary">
                STATUS: {profileData.status.label}
              </span>
            </div>
            <span className="font-mono text-[11px] text-outline">
              Surakarta [GMT+7]
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-1 py-1">
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
                className={`min-h-11 flex items-center px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-primary-container text-white font-bold shadow-md shadow-primary-container/20"
                    : "text-on-surface-variant hover:bg-surface-elevated hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Quick social links & contact within mobile drawer */}
          <div className="pt-3 mt-1 border-t border-surface-variant/60 flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-10.5 px-3 py-2 rounded-xl bg-surface-container-low border border-surface-variant/70 text-xs font-mono text-text-secondary hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <Code2 className="w-4 h-4 text-secondary" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.linksPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-10.5 px-3 py-2 rounded-xl bg-surface-container-low border border-surface-variant/70 text-xs font-mono text-text-secondary hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
                <span>Links Hub</span>
              </a>
            </div>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-11 px-4 py-2.5 rounded-xl bg-primary-container hover:opacity-95 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-container/20 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Transmit Message</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
