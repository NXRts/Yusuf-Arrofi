import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center bg-[#0c0d10] text-[#f4f4f6]">
      <div className="p-8 sm:p-12 rounded border border-[#232732] bg-[#111317] max-w-md w-full flex flex-col items-center gap-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#3b82f6]">
          404 · Page Not Found
        </span>

        <div className="flex flex-col gap-2">
          <h1 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f4f6]">
            Resource Unavailable
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
            The page or document you are trying to reach does not exist or may have been relocated within the portfolio.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#f4f4f6] hover:bg-white text-[#0c0d10] font-sans font-medium text-xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Overview</span>
        </Link>
      </div>
    </div>
  );
}
