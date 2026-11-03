"use client";

import React, { useState } from "react";
import { MapPin, ExternalLink, ArrowUpRight, Check, AlertCircle, Send, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Full-Stack Engineering");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Spam prevention
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (name, email, and message).");
      return;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          projectType,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred. Please contact via direct email.";
      setStatus("error");
      setErrorMessage(msg);
    }
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-28 bg-[#0c0d10] text-[#f4f4f6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#232732]/60">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#3b82f6] uppercase tracking-widest">
              <span>06</span>
              <span className="w-8 h-px bg-[#3b82f6]" />
              <span>Direct Inquiries</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6]">
              Get in Touch
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#9ca3af] max-w-md leading-relaxed">
            Available for full-stack engineering roles, backend microservice contracts, and collaborative software projects.
          </p>
        </div>

        {/* 2-Column Editorial Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Location Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                Direct Communication
              </span>
              <p className="font-sans text-sm sm:text-base text-[#9ca3af] leading-relaxed">
                Whether you have an engineering opportunity, want to collaborate on a Go / React project, or simply wish to connect, feel free to reach out directly.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded border border-[#232732] bg-[#111317] flex flex-col gap-3">
              <span className="font-mono text-xs text-[#6b7280] uppercase tracking-wider">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-mono text-sm text-[#f4f4f6] hover:text-[#3b82f6] transition-colors truncate"
                >
                  {profileData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-[11px] font-mono text-[#9ca3af] hover:text-[#f4f4f6] bg-[#14171d] border border-[#232732] rounded transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <span className="text-xs text-[#6b7280] font-sans">
                Typically responds within 24–48 hours.
              </span>
            </div>

            {/* Verified Profiles Ledger */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="font-mono text-xs text-[#6b7280] uppercase tracking-wider">
                Verified Profiles
              </span>

              <div className="flex flex-col gap-2 text-xs font-mono">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded border border-[#232732] bg-[#111317] hover:border-[#3b82f6]/50 flex items-center justify-between text-[#f4f4f6] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-4 h-4 text-[#9ca3af]" />
                    <span>GitHub · @NXRts</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6b7280]" />
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded border border-[#232732] bg-[#111317] hover:border-[#3b82f6]/50 flex items-center justify-between text-[#f4f4f6] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-4 h-4 text-[#9ca3af]" />
                    <span>LinkedIn · Muhammad Yusuf Arrofi</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6b7280]" />
                </a>

                <a
                  href={profileData.socials.linksPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded border border-[#232732] bg-[#111317] hover:border-[#3b82f6]/50 flex items-center justify-between text-[#f4f4f6] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <ExternalLink className="w-4 h-4 text-[#9ca3af]" />
                    <span>Links Hub · links-mee.vercel.app</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6b7280]" />
                </a>
              </div>
            </div>

            {/* Independent Sponsorship & Patronage */}
            <div id="support" className="flex flex-col gap-3 pt-3 border-t border-[#232732]/60">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-mono text-xs text-[#3b82f6] uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 text-[#3b82f6]" />
                  <span>Support My Work</span>
                </div>
                <p className="font-sans text-xs text-[#9ca3af] leading-relaxed">
                  If you appreciate my open-source tools (DataScry, JapanApp, Aria2App) and wish to back their independent maintenance:
                </p>
              </div>

              <div className="flex flex-col gap-2 text-xs font-mono">
                {profileData.sponsorship.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded border border-[#232732] bg-[#111317] hover:border-[#3b82f6]/50 hover:bg-[#14171d] flex items-center justify-between text-[#f4f4f6] transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                        style={{ backgroundColor: sponsor.color }}
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-xs text-[#f4f4f6]">
                          {sponsor.name}
                        </span>
                        <span className="text-[10px] text-[#6b7280]">
                          {sponsor.method}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#9ca3af] group-hover:text-[#3b82f6] transition-colors">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#161922] border border-[#232732] text-[#9ca3af]">
                        {sponsor.currency}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#6b7280] group-hover:text-[#3b82f6]" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Geographical Base */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#6b7280] pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span>{profileData.location} [{profileData.timezone}]</span>
            </div>
          </div>

          {/* Right Column: Accessible, Functional Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded border border-[#232732] bg-[#111317]">
            <div className="flex flex-col gap-1 pb-6 border-b border-[#232732]/60">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6b7280]">
                Send a Message
              </span>
              <h3 className="font-sans text-xl font-bold text-[#f4f4f6]">
                Direct Dispatch Form
              </h3>
            </div>

            {status === "success" ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6] flex items-center justify-center text-[#3b82f6]">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-lg font-bold text-[#f4f4f6]">
                  Message Delivered
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#9ca3af] max-w-sm">
                  Thank you for reaching out. Your transmission was received and I will review it shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-4 py-2 rounded bg-[#14171d] hover:bg-[#1a1e26] border border-[#232732] text-xs font-mono text-[#f4f4f6] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-5">
                {/* Spam trap */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-xs text-[#9ca3af]"
                    >
                      Your Name <span className="text-[#3b82f6]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="editorial-input"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-xs text-[#9ca3af]"
                    >
                      Email Address <span className="text-[#3b82f6]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="editorial-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-type"
                    className="font-mono text-xs text-[#9ca3af]"
                  >
                    Topic / Scope
                  </label>
                  <select
                    id="contact-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="editorial-input cursor-pointer"
                  >
                    <option value="Full-Stack Engineering">Full-Stack Engineering Opportunity</option>
                    <option value="Backend / Go Development">Backend / Go Development Role</option>
                    <option value="Independent Project Collaboration">Independent Project Collaboration</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-xs text-[#9ca3af]"
                  >
                    Message <span className="text-[#3b82f6]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Describe your project, role requirements, or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="editorial-input resize-y"
                  />
                </div>

                {status === "error" && (
                  <div className="p-3 rounded bg-red-950/40 border border-red-800/60 flex items-center gap-2 text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#f4f4f6] hover:bg-white text-[#0c0d10] font-sans font-medium text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
