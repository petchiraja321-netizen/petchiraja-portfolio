"use client";

import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#07111F]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111F]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

          {/* Back to Portfolio */}
          <a
            href="/"
            className="flex items-center gap-2 font-mono text-xs text-white/60 transition-colors hover:text-[#22C55E]"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </a>

          {/* Resume Actions */}
          <div className="flex items-center gap-2">

            {/* Download */}
            <a
              href="/Petchiraja_Resume.pdf"
              download="Petchiraja_Resume.pdf"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-white/70 transition-all hover:border-[#22C55E]/50 hover:text-[#22C55E]"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Open PDF */}
            <a
              href="/Petchiraja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#22C55E] px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#07111F] transition-all hover:bg-[#4ADE80]"
            >
              <ExternalLink size={14} />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

          </div>
        </div>
      </header>

      {/* Resume Viewer */}
      <section className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">

          <iframe
            src="/Petchiraja_Resume.pdf"
            title="Petchiraja Resume"
            className="h-[calc(100vh-110px)] min-h-[700px] w-full"
          />

        </div>
      </section>
    </main>
  );
}