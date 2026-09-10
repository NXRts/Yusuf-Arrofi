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
    <section id="contact" className="max-w-[1280px] mx-auto w-full px-4 md:px-8 py-16 flex flex-col gap-8">
      <div className="p-6 md:p-12 rounded-3xl bg-[#172133] border border-[#2f3446] shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#4cd7f6] tracking-wider">
                  04 // COLLABORATE
                </span>
                <span className="w-10 h-0.5 bg-[#4cd7f6]" />
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Let's Build Great Web & Software Products Together
              </h2>

              <p className="font-sans text-sm text-[#c7c4d8] leading-relaxed">
                Open to full-stack engineering roles, contract development, and high-impact open source collaboration. Reach out directly or connect through my networks.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-[#151b2c] border border-[#2f3446]/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#24293b] flex items-center justify-center text-[#4cd7f6] shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] text-[#CBD5E1] uppercase">
                    Location & Status
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#F8FAFC] truncate">
                    {profileData.location}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#151b2c] border border-[#2f3446]/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#24293b] flex items-center justify-center text-[#c3c0ff] shrink-0">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] text-[#CBD5E1] uppercase">
                      Links Portal
                    </span>
                    <a
                      href={profileData.socials.linksPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[#4cd7f6] hover:underline truncate"
                    >
                      links-mee.vercel.app
                    </a>
                  </div>
                </div>
                <a
                  href={profileData.socials.linksPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#24293b] hover:bg-[#33394a] rounded-lg text-[#F8FAFC] font-mono text-xs transition-colors shrink-0"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          {/* Contact Right Column: Interactive Terminal Form */}
          <div className="lg:col-span-7 bg-[#151b2c]/90 border border-[#2f3446] p-6 md:p-8 rounded-2xl shadow-inner flex flex-col gap-4">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#2f3446]/60">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#acedff]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#4cd7f6]/80" />
                </div>
                <span className="font-mono text-xs text-[#CBD5E1] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  dispatch-message.sh
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#918fa1]">
                UTF-8 / TLS Encrypted
              </span>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-[#4cd7f6]/10 border border-[#4cd7f6]/40 flex items-center justify-center text-[#4cd7f6]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-xl font-bold text-[#F8FAFC]">
                    Message Transmitted Successfully!
                  </h3>
                  <p className="font-sans text-sm text-[#c7c4d8] max-w-sm">
                    Thank you. Yusuf has received your transmission and typically responds within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-[#24293b] hover:bg-[#33394a] rounded-lg text-xs font-mono text-[#4cd7f6] border border-[#2f3446] transition-colors"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kenjiro Sato"
                      className="w-full bg-[#172133] border border-[#2f3446] text-[#F8FAFC] px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#4cd7f6] font-sans text-sm placeholder:text-[#918fa1] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#172133] border border-[#2f3446] text-[#F8FAFC] px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#4cd7f6] font-sans text-sm placeholder:text-[#918fa1] transition-colors"
                    />
                  </div>
                </div>

                {/* Project / Role Type Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider">
                    Project / Role Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`px-3 py-2 rounded-lg text-center font-mono text-xs transition-all ${
                          projectType === type
                            ? "bg-[#4f46e5] text-white font-bold border border-[#4f46e5] shadow-md shadow-[#4f46e5]/25"
                            : "bg-[#172133] text-[#c7c4d8] border border-[#2f3446] hover:bg-[#24293b]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-bold text-[#CBD5E1] uppercase tracking-wider">
                    Project Details & Objectives
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your architecture goals, timelines, or role scope..."
                    className="w-full bg-[#172133] border border-[#2f3446] text-[#F8FAFC] p-4 rounded-lg focus:outline-none focus:border-[#4cd7f6] font-sans text-sm placeholder:text-[#918fa1] resize-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-[11px] text-[#CBD5E1]">
                    Typical response time: &lt; 24h
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#4f46e5] to-[#A855F7] text-white font-sans text-sm font-bold rounded-lg shadow-lg shadow-[#A855F7]/25 hover:opacity-95 transition-all flex items-center gap-2 disabled:opacity-50"
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
