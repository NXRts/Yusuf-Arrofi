"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  X, 
  CheckCircle2 
} from "lucide-react";
import { certificatesData, Certificate } from "@/data/certificates";

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="w-full pt-22 sm:pt-28 pb-16 sm:pb-20 max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-6 sm:gap-10">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-secondary tracking-wider">
            CREDENTIALS & HONORS
          </span>
          <span className="w-12 h-0.5 bg-primary-container" />
        </div>
        <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
          Professional Certifications & Awards
        </h1>
        <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
          Industry credentials verified across Cloud Architecture (AWS/GCP), Frontend Engineering (Meta/Dicoding), Containerization (Kubernetes/Docker), and Modern UI Systems.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface-elevated border border-surface-variant shadow-md flex flex-col justify-between group hover:border-secondary/50 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col gap-3.5 sm:gap-4">
              <div className="h-40 sm:h-44 w-full rounded-xl overflow-hidden bg-surface-container-lowest border border-surface-variant/60 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-surface-elevated/90 border border-surface-variant flex items-center gap-1.5 font-mono text-xs text-secondary shadow-md backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between font-mono text-xs text-text-secondary">
                  <span className="text-primary font-semibold">{cert.issuer}</span>
                  <span className="flex items-center gap-1 text-outline">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-sans text-base sm:text-lg font-bold text-text-primary mt-1 group-hover:text-secondary transition-colors">
                  {cert.title}
                </h3>
              </div>

              <p className="font-sans text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="flex flex-col gap-3.5 sm:gap-4 pt-5 sm:pt-6 border-t border-surface-variant/50 mt-5 sm:mt-6">
              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-surface-container-low border border-surface-variant/60 text-text-secondary font-mono text-[11px] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-mono text-on-surface-variant hover:text-white transition-colors cursor-pointer py-1"
                >
                  View Details
                </button>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 text-xs font-mono font-bold text-secondary transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog for Certificate Details */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-surface-elevated border border-surface-variant rounded-2xl sm:rounded-3xl max-w-xl w-full p-4 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 relative shadow-2xl animate-in zoom-in-95 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface-variant hover:text-white border border-surface-variant transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 pr-8">
              <div className="p-2.5 sm:p-3 rounded-xl bg-primary-container/20 border border-primary-container/40 text-secondary shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-secondary uppercase tracking-wider">
                  Credential Verification
                </span>
                <h3 className="font-sans text-lg sm:text-xl font-bold text-text-primary">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {selectedCert.description}
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-variant/60 font-mono text-xs">
              <div>
                <span className="text-outline">Issuer:</span>
                <p className="text-text-primary font-semibold mt-0.5">{selectedCert.issuer}</p>
              </div>
              <div>
                <span className="text-outline">Date Issued:</span>
                <p className="text-text-primary font-semibold mt-0.5">{selectedCert.date}</p>
              </div>
              <div className="col-span-2 pt-2 border-t border-surface-variant/40">
                <span className="text-outline">Credential ID:</span>
                <p className="text-secondary font-bold mt-0.5 truncate">{selectedCert.credentialId}</p>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-text-secondary block mb-2">
                Validated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedCert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 bg-surface-container-high border border-surface-variant rounded-md text-xs font-mono text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-2 border-t border-surface-variant/40">
              <button
                onClick={() => setSelectedCert(null)}
                className="w-full sm:w-auto min-h-10 text-center justify-center px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-bright text-xs font-mono text-on-surface-variant transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-10 justify-center px-5 py-2 rounded-xl bg-secondary text-on-secondary font-mono text-xs font-bold flex items-center gap-2 hover:bg-secondary-fixed transition-colors shadow-md shadow-secondary/20"
              >
                <span>Verify on Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
