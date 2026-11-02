import React from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
}

/**
 * BrandLogo — Architectural Monogram
 * Editorial Minimalism × Refined Developer Aesthetic
 * Exactly matches the user's custom monogram identity across favicon and UI.
 */
export default function BrandLogo({
  size = 28,
  className = "",
}: BrandLogoProps) {
  return (
    <div
      className={`relative rounded-md overflow-hidden shrink-0 border border-[#262a36] bg-[#0c0d10] select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="NX Monogram Logo"
      role="img"
    >
      <img
        src="/favicon-96x96.png"
        alt="NX Monogram"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
}
