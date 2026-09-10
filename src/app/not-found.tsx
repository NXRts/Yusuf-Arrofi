import React from "react";
import Link from "next/link";
import { Terminal, ArrowLeft, Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="p-8 md:p-12 rounded-3xl bg-surface-elevated border border-surface-variant shadow-2xl max-w-lg w-full flex flex-col items-center gap-6 relative overflow-hidden backdrop-blur-xl">
        <div className="w-16 h-16 rounded-2xl bg-[#ffb4ab]/10 border border-[#ffb4ab]/30 flex items-center justify-center text-[#ffb4ab]">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-[#ffb4ab] uppercase tracking-widest">
            ERROR 404 // NODE NOT FOUND
          </span>
          <h1 className="font-sans text-3xl font-extrabold text-text-primary">
            Sub-Routing Exception
          </h1>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            The requested cybernetic node or document does not exist in this sector or has been relocated to another cluster.
          </p>
        </div>

        <div className="w-full p-3 rounded-xl bg-surface-container-lowest border border-surface-container font-mono text-xs text-[#4cd7f6] text-left">
          <p>$ curl -I https://yusuf.dev/sector</p>
          <p className="text-[#ffb4ab]">HTTP/2 404 Not Found</p>
          <p className="text-outline">status: cluster_unreachable</p>
        </div>

        <Link
          href="/"
          className="px-6 py-2.5 rounded-xl bg-linear-to-r from-primary-container to-glow-purple text-white font-sans text-sm font-bold flex items-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-glow-purple/25"
        >
          <Home className="w-4 h-4" />
          <span>Return to Central Hub</span>
        </Link>
      </div>
    </div>
  );
}
