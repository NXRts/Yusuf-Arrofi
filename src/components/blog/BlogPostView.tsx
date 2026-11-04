"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Tag, 
  CheckCircle2 
} from "lucide-react";
import { BlogPost } from "@/data/blogPosts";
import { profileData } from "@/data/profile";

interface Props {
  post: BlogPost;
}

export default function BlogPostView({ post }: Props) {
  const [language, setLanguage] = useState<"en" | "id">("en");
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="w-full pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 max-w-3xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-8 sm:gap-10 bg-[#0c0d10] text-[#f4f4f6]">
      {/* Top Breadcrumb & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Link
          href="/blog"
          className="py-1.5 inline-flex items-center gap-2 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{language === "en" ? "Back to All Articles" : "Kembali ke Indeks Blog"}</span>
        </Link>

        {/* Language Switch */}
        <div className="flex items-center gap-1 p-1 bg-surface-container-low border border-[#232732] rounded font-mono text-xs">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              language === "en"
                ? "bg-[#f4f4f6] text-[#0c0d10] font-medium"
                : "text-[#9ca3af] hover:text-[#f4f4f6]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              language === "id"
                ? "bg-[#f4f4f6] text-[#0c0d10] font-medium"
                : "text-[#9ca3af] hover:text-[#f4f4f6]"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-[#6b7280]">
          <span className="px-2 py-0.5 rounded bg-surface-container border border-[#232732] text-[#3b82f6] uppercase tracking-wider text-[11px]">
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#9ca3af]">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#9ca3af]">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-sans editorial-h1 font-bold text-[#f4f4f6] tracking-tight">
          {post.title[language]}
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-[#d1d5db] leading-relaxed border-l-2 border-[#3b82f6] pl-4">
          {post.excerpt[language]}
        </p>

        {/* Author metadata strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[#232732]/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-surface-container border border-[#232732] flex items-center justify-center font-mono text-xs font-bold text-[#3b82f6] shrink-0">
              NX
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-semibold text-[#f4f4f6]">
                {profileData.name}
              </span>
              <span className="font-mono text-xs text-[#6b7280]">
                @{profileData.handle} · {profileData.title}
              </span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high border border-[#232732] text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span className="text-[#3b82f6]">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Article</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full aspect-video rounded overflow-hidden bg-[#08090b] border border-[#232732] shadow-xl">
        <img
          src={post.image}
          alt={post.title[language]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="flex flex-col gap-6 text-[#9ca3af] font-sans text-base sm:text-lg leading-relaxed pt-2">
        {post.content[language].split(/\n\s*\n/).map((block, idx) => {
          const lines = block.trim().split("\n");
          if (lines[0].startsWith("### ")) {
            const heading = lines[0].replace("### ", "").trim();
            const rest = lines.slice(1).join("\n").trim();
            return (
              <div key={idx} className="flex flex-col gap-4">
                <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#f4f4f6] tracking-tight mt-6 pt-4 border-t border-[#232732]/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0" />
                  <span>{heading}</span>
                </h2>
                {rest && (
                  <p className="text-[#d1d5db] leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {rest}
                  </p>
                )}
              </div>
            );
          }
          if (block.startsWith("- ") || block.startsWith("1. ")) {
            const items = lines.map((l) => l.replace(/^[-*]\s*|^\d+\.\s*/, "").trim());
            return (
              <ul key={idx} className="flex flex-col gap-2.5 pl-2 text-sm sm:text-base">
                {items.map((it, itIdx) => (
                  <li key={itIdx} className="flex items-start gap-2 text-[#d1d5db]">
                    <span className="text-[#3b82f6] font-mono text-xs pt-1 shrink-0">•</span>
                    <span className="leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-[#d1d5db] leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {block}
            </p>
          );
        })}
      </div>

      {/* Tags Footer */}
      <div className="flex flex-wrap items-center gap-1.5 pt-8 border-t border-[#232732]/60">
        <Tag className="w-3.5 h-3.5 text-[#6b7280] mr-1" />
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded bg-surface-container border border-[#232732] text-xs font-mono text-[#9ca3af]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
