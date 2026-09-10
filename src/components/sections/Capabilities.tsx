import React from "react";
import { Terminal, Code2, Database, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Capabilities() {
  const getIcon = (name: string, color: string) => {
    switch (name) {
      case "Terminal":
        return <Terminal className="w-6 h-6" style={{ color }} />;
      case "Code2":
        return <Code2 className="w-6 h-6" style={{ color }} />;
      case "Database":
        return <Database className="w-6 h-6" style={{ color }} />;
      case "Cpu":
      default:
        return <Cpu className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section id="capabilities" className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4cd7f6] tracking-wider">
              01 // CAPABILITIES
            </span>
            <span className="w-12 h-0.5 bg-[#4f46e5]" />
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
            Engineered for Precision & Resilience
          </h2>
        </div>
        <p className="font-sans text-sm text-[#c7c4d8] max-w-md">
          A balanced toolchain designed to build lightning-fast web client layers backed by highly concurrent distributed services.
        </p>
      </div>

      {/* 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profileData.capabilities.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-[#172133] border border-[#2f3446] shadow-md flex flex-col justify-between group hover:border-[#4cd7f6]/40 hover:shadow-xl hover:shadow-[#4cd7f6]/5 transition-all"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#24293b] border border-[#2f3446] flex items-center justify-center shadow-inner">
                {getIcon(item.iconName, item.accentColor)}
              </div>
              <div className="flex flex-col">
                <h3 className="font-sans text-xl font-bold text-[#F8FAFC]">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-[#CBD5E1]">
                  {item.subtitle}
                </span>
              </div>
              <p className="font-sans text-sm text-[#c7c4d8] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-[#2f3446]/40 mt-6">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-[#151b2c] border border-[#2f3446]/60 rounded-md font-mono text-xs text-[#c3c0ff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
