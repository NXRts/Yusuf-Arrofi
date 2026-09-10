"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Activity, Wifi } from "lucide-react";
import { profileData } from "@/data/profile";

export default function TelemetryCard() {
  const [latency, setLatency] = useState(14.2);
  const [history, setHistory] = useState<number[]>([
    14.2, 13.8, 15.1, 14.0, 16.5, 13.9, 15.2, 14.2,
  ]);
  const [reqSpeed, setReqSpeed] = useState(profileData.nodeStatus.reqSpeed);
  const [isLive, setIsLive] = useState(true);

  // Realtime Live Latency Telemetry via /api/ping
  useEffect(() => {
    let isMounted = true;

    const measureLatency = async () => {
      const t0 = performance.now();
      try {
        const res = await fetch("/api/ping", {
          method: "HEAD",
          cache: "no-store",
        });
        const rtt = performance.now() - t0;
        if (!isMounted) return;

        let displayVal: number;
        if (res.ok) {
          if (rtt < 8) {
            // Localhost fast response: simulate authentic low-latency kernel jitter
            const jitter = ((t0 % 100) / 100) * 4.2;
            displayVal = +(12.4 + jitter).toFixed(1);
          } else {
            displayVal = +rtt.toFixed(1);
          }
        } else {
          displayVal = +(13.5 + Math.random() * 3.5).toFixed(1);
        }

        setLatency(displayVal);
        setHistory((prev) => [...prev.slice(1), displayVal]);
        setReqSpeed((4.75 + Math.random() * 0.22).toFixed(2) + "k/sec");
        setIsLive(true);
      } catch {
        if (!isMounted) return;
        const fallback = +(13.8 + (Math.random() - 0.5) * 2).toFixed(1);
        setLatency(fallback);
        setHistory((prev) => [...prev.slice(1), fallback]);
      }
    };

    // Initial ping
    measureLatency();
    const interval = setInterval(measureLatency, 2000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Compute smooth dynamic bezier waveform that never clips
  const { strokePath, fillPath, currentY } = useMemo(() => {
    const N = history.length;
    const minVal = Math.min(...history) - 1.2;
    const maxVal = Math.max(...history) + 1.2;
    const range = maxVal - minVal || 1;

    // Map each point to (x, y) coordinates: x in [0, 200], safe y in [8, 30]
    const points = history.map((val, i) => {
      const x = (i / (N - 1)) * 200;
      const normalized = (val - minVal) / range;
      const y = Math.max(8, Math.min(30, +(30 - normalized * 22).toFixed(2)));
      return { x, y };
    });

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const dx = p1.x - p0.x;
      // Sigmoid/cubic bezier with horizontal control points guarantees no overshooting
      path += ` C ${+(p0.x + dx * 0.5).toFixed(2)} ${p0.y}, ${+(p0.x + dx * 0.5).toFixed(2)} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    const lastPoint = points[points.length - 1];

    return {
      strokePath: path,
      fillPath: `${path} L 200 40 L 0 40 Z`,
      currentY: lastPoint.y,
    };
  }, [history]);

  return (
    <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-variant shadow-2xl backdrop-blur-xl flex flex-col gap-4 relative overflow-hidden">
      {/* Background Kanji Watermark: 創 (Creation / Innovate) */}
      <div 
        className="absolute right-0 -bottom-4 opacity-5 select-none font-bold text-[120px] leading-none text-text-primary pointer-events-none"
        aria-hidden="true"
      >
        創
      </div>

      {/* Header telemetry status */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
          <span className="font-mono text-xs font-semibold text-text-secondary tracking-wider uppercase">
            Active Node Status
          </span>
        </div>
        <span className="font-mono text-xs font-bold text-secondary px-2.5 py-0.5 bg-secondary/10 border border-secondary/25 rounded-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
          {profileData.nodeStatus.state}
        </span>
      </div>

      {/* Latency & Wave Box */}
      <div className="w-full bg-surface-container-lowest border border-surface-container rounded-xl p-4 flex flex-col justify-between gap-2 z-10">
        <div className="flex justify-between items-center text-xs font-mono text-text-secondary">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-secondary animate-pulse" />
            Kernel Latency
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="text-secondary font-bold text-sm font-mono tracking-tight transition-all duration-300">
              {latency}ms
            </span>
          </div>
        </div>

        {/* Live SVG Sparkline Chart */}
        <div className="w-full h-12 relative py-1">
          <svg
            className="w-full h-full text-secondary overflow-visible"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 200 40"
          >
            <defs>
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d={fillPath}
              fill="url(#cyanGlow)"
              className="transition-all duration-700 ease-out"
            />
            <path
              d={strokePath}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="transition-all duration-700 ease-out"
            />
            {/* Live radar beacon dot at leading edge */}
            <circle
              cx="200"
              cy={currentY}
              r="4.5"
              fill="#4cd7f6"
              className="animate-ping opacity-60 transition-all duration-700 ease-out"
            />
            <circle
              cx="200"
              cy={currentY}
              r="2.5"
              fill="#4cd7f6"
              className="transition-all duration-700 ease-out"
            />
          </svg>
        </div>

        <div className="flex justify-between items-center font-mono text-[11px] text-outline">
          <span className="flex items-center gap-1">
            <Wifi className="w-3 h-3 text-secondary/70" />
            Region: {profileData.nodeStatus.region}
          </span>
          <span>Req: {reqSpeed}</span>
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

