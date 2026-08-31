"use client";

import {
  ArrowUp,
  Code2,
  Mail,
} from "lucide-react";

import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)]"
    >
      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.025] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

            {/* Brand */}
            <div>
              <a
                href="#home"
                className="group inline-flex items-center gap-2"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] transition-all duration-300 group-hover:border-[var(--primary)]/50 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                  <Code2
                    size={17}
                    className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <span className="font-mono text-sm font-semibold tracking-wide text-[var(--foreground)]">
                  PETCHIRAJA
                  <span className="text-[var(--primary)]">.DEV</span>
                </span>
              </a>

              <p className="mt-3 max-w-sm text-xs leading-6 text-[var(--muted)]">
                Building intelligent systems that solve real problems.
              </p>
            </div>

            {/* Social / Navigation */}
            <div className="flex flex-wrap items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/petchiraja321-netizen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-10 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
              >
                <span className="font-semibold">
                  GH
                </span>

                <span className="hidden sm:inline">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/petchiraja-s-29a72431a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-10 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
              >
                <span className="font-semibold">
                  in
                </span>

                <span className="hidden sm:inline">
                  LinkedIn
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:petchiraja321@gmail.com"
                aria-label="Email"
                className="group flex h-10 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3.5 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
              >
                <Mail
                  size={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="hidden sm:inline">
                  Email
                </span>
              </a>

              {/* Back To Top */}
              <a
                href="#home"
                aria-label="Back to top"
                className="group ml-1 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)] text-[#07111F] transition-all duration-300 hover:bg-[var(--primary-hover)] hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]"
              >
                <ArrowUp
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Bottom Divider */}
        <div className="mt-10 border-t border-[var(--border)] pt-6">
          <div className="flex flex-col gap-3 text-[10px] sm:flex-row sm:items-center sm:justify-between">

            <p className="font-mono text-[var(--muted)]">
              © 2026 Petchiraja. All rights reserved.
            </p>

            <div className="flex items-center gap-3 font-mono text-[var(--muted)]">
              <span>AI</span>
              <span className="text-[var(--border)]">·</span>
              <span>Data</span>
              <span className="text-[var(--border)]">·</span>
              <span>Software</span>
              <span className="text-[var(--border)]">·</span>
              <span>Cloud</span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}