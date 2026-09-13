"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Globe, 
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
    <article className="w-full pt-22 sm:pt-28 pb-16 sm:pb-20 max-w-225 mx-auto px-4 md:px-8 flex flex-col gap-6 sm:gap-10">
      {/* Top Breadcrumb & Controls */}
      <div className="flex items-center justify-between gap-2">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span className="truncate">{language === "en" ? "Back to All Articles" : "Kembali ke Indeks Blog"}</span>
        </Link>

        {/* Language Switch */}
        <div className="flex items-center gap-1 p-1 bg-surface-elevated border border-surface-variant rounded-xl shrink-0">
          <Globe className="w-3.5 h-3.5 text-secondary ml-2 mr-1" />
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "en"
                ? "bg-primary-container text-white font-bold"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "id"
                ? "bg-primary-container text-white font-bold"
                : "text-on-surface-variant hover:text-white"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="flex flex-col gap-3.5 sm:gap-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <span className="px-3 py-1 rounded-full bg-primary-container text-white font-mono text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="font-mono text-xs text-outline">•</span>
          <span className="font-mono text-xs text-primary flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="font-mono text-xs text-outline">•</span>
          <span className="font-mono text-xs text-secondary flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.2]">
          {post.title[language]}
        </h1>

        <p className="font-sans text-base sm:text-lg text-on-surface-variant italic leading-relaxed border-l-2 border-secondary pl-3.5 sm:pl-4">
          {post.excerpt[language]}
        </p>

        {/* Author metadata strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-surface-variant/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-elevated border border-secondary flex items-center justify-center font-mono text-xs font-bold text-secondary shrink-0">
              NX
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold text-text-primary">
                {profileData.name}
              </span>
              <span className="font-mono text-xs text-secondary">
                @{profileData.handle} // Software Engineer
              </span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated hover:bg-surface-container-high border border-surface-variant text-xs font-mono text-on-surface-variant hover:text-white transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                <span className="text-secondary">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Link</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-56 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-lowest border border-surface-variant shadow-2xl relative">
        <img
          src={post.image}
          alt={post.title[language]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Markdown / Content Body */}
      <div className="flex flex-col gap-5 sm:gap-6 text-on-surface-variant font-sans text-base sm:text-lg leading-relaxed pt-2 sm:pt-4">
        {post.content[language].split("\n\n").map((block, idx) => {
          if (block.startsWith("### ")) {
            return (
              <h2
                key={idx}
                className="font-sans text-xl sm:text-2xl font-bold text-text-primary tracking-tight mt-4 sm:mt-6 pt-4 border-t border-surface-variant/40 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span>{block.replace("### ", "")}</span>
              </h2>
            );
          }
          if (block.startsWith("- ")) {
            const items = block.split("\n- ");
            return (
              <ul key={idx} className="flex flex-col gap-2 pl-3 sm:pl-4">
                {items.map((it, itIdx) => (
                  <li key={itIdx} className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-secondary font-bold">•</span>
                    <span>{it.replace("- ", "")}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-on-surface-variant leading-relaxed text-sm sm:text-base md:text-lg">
              {block}
            </p>
          );
        })}
      </div>

      {/* Tags footer */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-6 sm:pt-8 border-t border-surface-variant/60">
        <Tag className="w-4 h-4 text-secondary mr-1" />
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 sm:px-3 py-1 rounded-lg bg-surface-elevated border border-surface-variant font-mono text-xs text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Next Article Navigation */}
      <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface-elevated border border-surface-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 sm:mt-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs text-secondary">Explore More Knowledge</span>
          <p className="font-sans text-sm font-semibold text-text-primary">
            Continue reading our technology essays and architecture case studies.
          </p>
        </div>
        <Link
          href="/blog"
          className="w-full sm:w-auto text-center justify-center px-4 py-2 rounded-xl bg-primary-container hover:opacity-90 text-white font-mono text-xs font-bold shrink-0 transition-opacity"
        >
          View All Articles
        </Link>
      </div>
    </article>
  );
}
