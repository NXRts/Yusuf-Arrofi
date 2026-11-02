import React from "react";
import { profileData } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 border-b border-[#232732] bg-[#0c0d10] text-[#f4f4f6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 pb-10 sm:pb-14 border-b border-[#232732]/60">
          <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
            <span>01</span>
            <span className="w-8 h-px bg-[#3b82f6]" />
            <span>Background & Philosophy</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f4f6]">
            Engineering software with intent, craft, and durability.
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Authentic Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#9ca3af] font-sans text-base sm:text-lg leading-relaxed">
            <p className="text-[#f4f4f6] font-serif text-xl sm:text-2xl leading-relaxed italic border-l-2 border-[#3b82f6] pl-5">
              &ldquo;{profileData.aboutStory.lead}&rdquo;
            </p>

            {profileData.aboutStory.paragraphs.map((p, idx) => (
              <p key={idx} className="text-[#9ca3af] text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4 flex flex-col gap-3 border-t border-[#232732]/60">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6b7280]">
                Areas of Active Investigation
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#f4f4f6]">
                {profileData.aboutStory.technicalFocus.map((focus, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#3b82f6]">→</span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Workflow Specs */}
          <div className="lg:col-span-5 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-[#232732] pt-8 lg:pt-0 lg:pl-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
              Engineering Tenets
            </span>

            <div className="flex flex-col gap-6">
              {profileData.tenets.map((tenet) => (
                <div key={tenet.number} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-[#3b82f6] font-semibold">
                      {tenet.number}
                    </span>
                    <h3 className="font-sans text-sm font-semibold text-[#f4f4f6]">
                      {tenet.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-[#9ca3af] leading-relaxed pl-5">
                    {tenet.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Environment Colophon Box */}
            <div className="mt-4 p-4 rounded bg-[#111317] border border-[#232732] flex flex-col gap-2 font-mono text-xs">
              <span className="text-[#6b7280] uppercase tracking-wider text-[10px]">
                Developer Environment
              </span>
              <div className="grid grid-cols-2 gap-2 text-[#9ca3af]">
                <div>
                  <span className="text-[#6b7280]">OS:</span> Arch Linux / CachyOS
                </div>
                <div>
                  <span className="text-[#6b7280]">Terminal:</span> Alacritty + Zsh
                </div>
                <div>
                  <span className="text-[#6b7280]">Editor:</span> Neovim / VS Code
                </div>
                <div>
                  <span className="text-[#6b7280]">Hardware:</span> ThinkPad / Custom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
