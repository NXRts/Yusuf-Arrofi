"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  ArrowLeft, 
  ExternalLink, 
  X,
  ShieldCheck
} from "lucide-react";
import { certificatesData, Certificate } from "@/data/certificates";

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="w-full pt-28 sm:pt-36 pb-20 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-10 sm:gap-14 bg-[#0c0d10] text-[#f4f4f6]">
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Overview</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3 pb-8 border-b border-[#232732]/60">
        <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
          <span>CREDENTIALS</span>
          <span className="w-8 h-px bg-[#3b82f6]" />
          <span>AWARDS & CERTIFICATIONS</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6]">
          Certifications & Credentials
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed">
          Verified academic and professional coursework across cloud computing, frontend engineering, database architectures, and containerization.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <article
            key={cert.id}
            className="p-5 rounded border border-[#232732] bg-[#111317] flex flex-col justify-between gap-5 group hover:border-[#3b82f6]/40 transition-colors"
          >
            <div className="flex flex-col gap-4">
              <div className="w-full h-40 rounded overflow-hidden bg-[#08090b] border border-[#232732] relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0c0d10]/90 border border-[#232732] flex items-center gap-1.5 font-mono text-[10px] text-[#3b82f6]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#9ca3af]">
                  <span className="text-[#3b82f6] font-medium">{cert.issuer}</span>
                  <span className="text-[#6b7280]">{cert.date}</span>
                </div>

                <h3 className="font-sans text-base font-bold text-[#f4f4f6] group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
              </div>

              <p className="font-sans text-xs text-[#9ca3af] line-clamp-3 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#232732]/60">
              <div className="flex flex-wrap gap-1">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-1.5 py-0.5 bg-[#14171d] border border-[#232732] text-[#9ca3af] font-mono text-[10px] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 font-mono text-xs">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-[#9ca3af] hover:text-[#f4f4f6] cursor-pointer"
                >
                  View Details
                </button>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#3b82f6] hover:underline"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Dialog */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-[#111317] border border-[#232732] rounded max-w-lg w-full p-6 flex flex-col gap-5 relative shadow-2xl animate-in zoom-in-95 text-[#f4f4f6]">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 rounded bg-[#14171d] hover:bg-[#1a1e26] text-[#9ca3af] hover:text-[#f4f4f6] border border-[#232732] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 pr-8">
              <div className="p-2 rounded bg-[#14171d] border border-[#232732] text-[#3b82f6] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[#3b82f6] uppercase tracking-wider">
                  Credential Verification
                </span>
                <h3 className="font-sans text-lg font-bold text-[#f4f4f6]">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
              {selectedCert.description}
            </p>

            <div className="grid grid-cols-2 gap-3 p-3.5 rounded bg-[#0c0d10] border border-[#232732] font-mono text-xs">
              <div>
                <span className="text-[#6b7280] block text-[10px] uppercase">Issuer</span>
                <p className="text-[#f4f4f6] font-medium mt-0.5">{selectedCert.issuer}</p>
              </div>
              <div>
                <span className="text-[#6b7280] block text-[10px] uppercase">Date Issued</span>
                <p className="text-[#f4f4f6] font-medium mt-0.5">{selectedCert.date}</p>
              </div>
              <div className="col-span-2 pt-2 border-t border-[#232732]/60">
                <span className="text-[#6b7280] block text-[10px] uppercase">Credential ID</span>
                <p className="text-[#3b82f6] font-medium mt-0.5 truncate">{selectedCert.credentialId}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#6b7280]">
                Validated Competencies:
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedCert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 bg-[#14171d] border border-[#232732] rounded text-xs font-mono text-[#9ca3af]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#232732]">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-3 py-1.5 rounded bg-[#14171d] hover:bg-[#1a1e26] text-xs font-mono text-[#9ca3af] hover:text-[#f4f4f6] transition-colors cursor-pointer border border-[#232732]"
              >
                Close
              </button>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#f4f4f6] hover:bg-white text-[#0c0d10] font-sans font-medium text-xs transition-colors"
              >
                <span>Verify on Issuer Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
