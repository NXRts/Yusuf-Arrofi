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
    <article className="w-full pt-28 pb-20 max-w-[900px] mx-auto px-4 md:px-8 flex flex-col gap-10">
      {/* Top Breadcrumb & Controls */}
      <div className="flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#c7c4d8] hover:text-[#4cd7f6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === "en" ? "Back to All Articles" : "Kembali ke Indeks Blog"}</span>
        </Link>

        {/* Language Switch */}
        <div className="flex items-center gap-1 p-1 bg-[#172133] border border-[#2f3446] rounded-xl">
          <Globe className="w-3.5 h-3.5 text-[#4cd7f6] ml-2 mr-1" />
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "en"
                ? "bg-[#4f46e5] text-white font-bold"
                : "text-[#c7c4d8] hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("id")}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              language === "id"
                ? "bg-[#4f46e5] text-white font-bold"
                : "text-[#c7c4d8] hover:text-white"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-[#4f46e5] text-white font-mono text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="font-mono text-xs text-[#918fa1]">•</span>
          <span className="font-mono text-xs text-[#c3c0ff] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="font-mono text-xs text-[#918fa1]">•</span>
          <span className="font-mono text-xs text-[#4cd7f6] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.2]">
          {post.title[language]}
        </h1>

        <p className="font-sans text-lg text-[#c7c4d8] italic leading-relaxed border-l-2 border-[#4cd7f6] pl-4">
          {post.excerpt[language]}
        </p>

        {/* Author metadata strip */}
        <div className="flex items-center justify-between pt-4 border-t border-[#2f3446]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#172133] border border-[#4cd7f6] flex items-center justify-center font-mono text-xs font-bold text-[#4cd7f6]">
              NX
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold text-[#F8FAFC]">
                {profileData.name}
              </span>
              <span className="font-mono text-xs text-[#4cd7f6]">
                @{profileData.handle} // Software Engineer
              </span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#172133] hover:bg-[#24293b] border border-[#2f3446] text-xs font-mono text-[#c7c4d8] hover:text-white transition-all"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4cd7f6]" />
                <span className="text-[#4cd7f6]">Copied!</span>
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
      <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#080e1d] border border-[#2f3446] shadow-2xl relative">
        <img
          src={post.image}
          alt={post.title[language]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Markdown / Content Body */}
      <div className="flex flex-col gap-6 text-[#c7c4d8] font-sans text-base sm:text-lg leading-relaxed pt-4">
        {post.content[language].split("\n\n").map((block, idx) => {
          if (block.startsWith("### ")) {
            return (
              <h2
                key={idx}
                className="font-sans text-2xl font-bold text-[#F8FAFC] tracking-tight mt-6 pt-4 border-t border-[#2f3446]/40 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6]" />
                {block.replace("### ", "")}
              </h2>
            );
          }
          if (block.startsWith("- ")) {
            const items = block.split("\n- ");
            return (
              <ul key={idx} className="flex flex-col gap-2 pl-4">
                {items.map((it, itIdx) => (
                  <li key={itIdx} className="flex items-start gap-2">
                    <span className="text-[#4cd7f6] font-bold">•</span>
                    <span>{it.replace("- ", "")}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-[#c7c4d8] leading-relaxed">
              {block}
            </p>
          );
        })}
      </div>

      {/* Tags footer */}
      <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-[#2f3446]/60">
        <Tag className="w-4 h-4 text-[#4cd7f6] mr-1" />
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg bg-[#172133] border border-[#2f3446] font-mono text-xs text-[#CBD5E1]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Next Article Navigation */}
      <div className="p-6 rounded-2xl bg-[#172133] border border-[#2f3446] flex items-center justify-between gap-4 mt-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs text-[#4cd7f6]">Explore More Knowledge</span>
          <p className="font-sans text-sm font-semibold text-[#F8FAFC]">
            Continue reading our technology essays and architecture case studies.
          </p>
        </div>
        <Link
          href="/blog"
          className="px-4 py-2 rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-mono text-xs font-bold shrink-0 transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </article>
  );
}
