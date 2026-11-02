"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    const frameId = requestAnimationFrame(handleHashChange);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Activity", href: "/#activity" },
    { name: "All Projects", href: "/projects" },
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
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#0c0d10]/92 backdrop-blur-md border-b border-[#232732] transition-colors"
    >
      <div className="max-w-[1240px] mx-auto h-16 md:h-18 px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand / Name & Monospace Handle */}
        <Link href="/" className="flex items-baseline gap-2.5 group">
          <span className="font-sans font-semibold text-sm sm:text-base tracking-tight text-[#f4f4f6] group-hover:text-white transition-colors">
            {profileData.name}
          </span>
          <span className="font-mono text-xs text-[#9ca3af] hidden sm:inline-block">
            / {profileData.handle}
          </span>
        </Link>

        {/* Center/Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider"
          aria-label="Main Navigation"
        >
          {navLinks.slice(0, 5).map((link) => {
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
                className={`transition-colors py-1 relative ${
                  active
                    ? "text-[#f4f4f6] font-semibold"
                    : "text-[#9ca3af] hover:text-[#f4f4f6]"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#3b82f6]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wide text-[#f4f4f6] bg-[#14171d] hover:bg-[#1a1e26] border border-[#232732] hover:border-[#3b82f6]/60 rounded transition-all"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#9ca3af]" />
          </Link>

          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-[#9ca3af] hover:text-[#f4f4f6] hover:bg-[#14171d] rounded transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#9ca3af] hover:text-[#f4f4f6] hover:bg-[#14171d] rounded transition-colors"
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d10] border-b border-[#232732] px-4 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 border-b border-[#232732] pb-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
              Location & Availability
            </span>
            <span className="text-xs text-[#9ca3af] font-mono">
              {profileData.location}
            </span>
            <span className="text-xs text-[#3b82f6] font-mono mt-1">
              • {profileData.status.label}
            </span>
          </div>

          <nav className="flex flex-col gap-2 font-mono text-sm tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 text-[#f4f4f6] hover:bg-[#14171d] rounded transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#6b7280]">→</span>
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between border-t border-[#232732]">
            <a
              href={`mailto:${profileData.email}`}
              className="text-xs font-mono text-[#9ca3af] hover:text-white flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profileData.email}</span>
            </a>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#9ca3af] hover:text-white flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
