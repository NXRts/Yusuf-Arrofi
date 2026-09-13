"use client";

import React, { useState } from "react";
import { Send, Terminal, CheckCircle2, Globe, Link2, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";

export default function ContactTerminal() {
  const [projectType, setProjectType] = useState("Full-Stack Role");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate terminal dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 900);
  };

  const projectTypes = ["Full-Stack Role", "Consultancy", "MVP Build", "Advisory"];

  return (
    <section id="contact" className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-12 sm:py-16 flex flex-col gap-6 sm:gap-8">
      <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-surface-elevated border border-surface-variant shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-secondary tracking-wider">
                  04 // COLLABORATE
                </span>
                <span className="w-10 h-0.5 bg-secondary" />
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-text-primary">
                Let's Build Great Web & Software Products Together
              </h2>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Open to full-stack engineering roles, contract development, and high-impact open source collaboration. Reach out directly or connect through my networks.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-variant/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] text-text-secondary uppercase">
                    Location & Status
                  </span>
                  <span className="font-sans text-sm font-semibold text-text-primary truncate">
                    {profileData.location}
                  </span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-variant/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] text-text-secondary uppercase">
                      Links Portal
                    </span>
                    <a
                      href={profileData.socials.linksPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-secondary hover:underline truncate"
                    >
                      links-mee.vercel.app
                    </a>
                  </div>
                </div>
                <a
                  href={profileData.socials.linksPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-surface-container-high hover:bg-surface-bright rounded-lg text-text-primary font-mono text-xs transition-colors shrink-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Contact Right Column: Interactive Terminal Form */}
          <div className="lg:col-span-7 bg-surface-container-low/90 border border-surface-variant p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-inner flex flex-col gap-4">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-surface-variant/60">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80" />
                  <span className="w-3 h-3 rounded-full bg-secondary-fixed/80" />
                  <span className="w-3 h-3 rounded-full bg-secondary/80" />
                </div>
                <span className="font-mono text-xs text-text-secondary flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-secondary" />
                  dispatch-message.sh
                </span>
              </div>
              <span className="font-mono text-[11px] text-outline">
                UTF-8 / TLS Encrypted
              </span>
            </div>

            {submitted ? (
              <div className="py-10 sm:py-12 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-secondary/10 border border-secondary/40 flex items-center justify-center text-secondary">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-text-primary">
                    Message Transmitted Successfully!
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant max-w-sm">
                    Thank you. Yusuf has received your transmission and typically responds within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-surface-container-high hover:bg-surface-bright rounded-lg text-xs font-mono text-secondary border border-surface-variant transition-colors"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kenjiro Sato"
                      className="cyber-input-elevated w-full px-4 py-2.5 rounded-lg font-sans text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="cyber-input-elevated w-full px-4 py-2.5 rounded-lg font-sans text-sm"
                    />
                  </div>
                </div>

                {/* Project / Role Type Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                    Project / Role Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`px-2 sm:px-3 py-2.5 sm:py-2 rounded-lg text-center font-mono text-[11px] sm:text-xs transition-all ${
                          projectType === type
                            ? "bg-primary-container text-white font-bold border border-primary-container shadow-md shadow-primary-container/25"
                            : "bg-surface-elevated text-on-surface-variant border border-surface-variant hover:bg-surface-container-high"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                    Project Details & Objectives
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your architecture goals, timelines, or role scope..."
                    className="cyber-input-elevated w-full p-3.5 sm:p-4 rounded-lg font-sans text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <span className="font-mono text-[11px] text-text-secondary text-center sm:text-left">
                    Typical response time: &lt; 24h
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto justify-center min-h-11 px-6 py-2.5 bg-linear-to-r from-primary-container to-glow-purple text-white font-sans text-sm font-bold rounded-xl sm:rounded-lg shadow-lg shadow-glow-purple/25 hover:opacity-95 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Transmitting..." : "Transmit Message"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
