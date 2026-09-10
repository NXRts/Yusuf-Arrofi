"use client";

import React, { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import { profileData } from "@/data/profile";

export default function TelemetryCard() {
  const [latency, setLatency] = useState(14.2);

  // Subtle realistic micro-fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 1.2;
      setLatency((prev) => Math.max(11.5, Math.min(18.0, +(prev + delta).toFixed(1))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-variant shadow-2xl backdrop-blur-xl flex flex-col gap-4 relative overflow-hidden">
      {/* Background Kanji Watermark: 創 (Creation / Innovate) */}
      <div 
        className="absolute -right-6 -bottom-8 opacity-5 select-none font-bold text-[140px] leading-none text-text-primary pointer-events-none"
        aria-hidden="true"
      >
        創
      </div>

      {/* Header telemetry status */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-mono text-xs font-semibold text-text-secondary tracking-wider uppercase">
            Active Node Status
          </span>
        </div>
        <span className="font-mono text-xs font-bold text-secondary px-2 py-0.5 bg-secondary/10 border border-secondary/20 rounded">
          {profileData.nodeStatus.state}
        </span>
      </div>

      {/* Latency & Wave Box */}
      <div className="w-full bg-surface-container-lowest border border-surface-container rounded-xl p-4 flex flex-col justify-between gap-2 z-10">
        <div className="flex justify-between items-center text-xs font-mono text-text-secondary">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-secondary" />
            Kernel Latency
          </span>
          <span className="text-secondary font-bold text-sm">
            {latency}ms
          </span>
        </div>

        {/* Mini SVG Sparkline Chart */}
        <div className="w-full h-12 relative overflow-hidden py-1">
          <svg
            className="w-full h-full text-secondary"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 200 40"
          >
            <defs>
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 28 Q 20 32, 40 18 T 80 24 T 120 10 T 160 16 T 200 8 L 200 40 L 0 40 Z"
              fill="url(#cyanGlow)"
            />
            <path
              d="M0 28 Q 20 32, 40 18 T 80 24 T 120 10 T 160 16 T 200 8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <div className="flex justify-between items-center font-mono text-[11px] text-outline">
          <span>Region: {profileData.nodeStatus.region}</span>
          <span>Req: {profileData.nodeStatus.reqSpeed}</span>
        </div>
      </div>

      {/* 2-Column Stats */}
      <div className="grid grid-cols-2 gap-3 z-10">
        <div className="p-3 bg-surface-container-low border border-surface-variant/50 rounded-xl flex flex-col">
          <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider">
            Core Stack
          </span>
          <span className="font-sans text-base font-bold text-primary mt-1">
            {profileData.nodeStatus.coreStack}
          </span>
        </div>
        <div className="p-3 bg-surface-container-low border border-surface-variant/50 rounded-xl flex flex-col">
          <span className="font-mono text-[11px] text-text-secondary uppercase tracking-wider">
            Environment
          </span>
          <span className="font-sans text-base font-bold text-tertiary mt-1">
            {profileData.nodeStatus.environment}
          </span>
        </div>
      </div>
    </div>
  );
}
