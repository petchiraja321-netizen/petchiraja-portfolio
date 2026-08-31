"use client";

import {
  Mail,
  Code2,
  Link,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const contacts = [
  {
    icon: Code2,
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/petchiraja321-netizen",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://linkedin.com/in/petchiraja-s-29a72431",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--border)]/60 bg-[var(--background)] py-24 sm:py-32"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[var(--primary)]" />

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                Let&apos;s Connect
              </span>

              <span className="h-px w-10 bg-[var(--primary)]" />
            </div>

            <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Have a problem
              <br />
              <span className="text-[var(--primary)]">
                worth solving?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I&apos;m interested in opportunities where I can build
              intelligent systems, solve meaningful problems, and grow as a
              software and AI engineer.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:petchiraja321@gmail.com"
              className="group mt-9 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#07111F] transition-all duration-300 hover:bg-[var(--primary-hover)] hover:shadow-[0_0_35px_rgba(34,197,94,0.22)]"
            >
              <Mail
                size={16}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              Email Me

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>

        {/* Contact Cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <Reveal
                key={contact.label}
                delay={index * 0.1}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_16px_45px_rgba(34,197,94,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] transition-all duration-300 group-hover:border-[var(--primary)]/50 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                        <Icon
                          size={19}
                          className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                          {contact.label}
                        </p>

                        <p className="mt-1 text-xs text-[var(--muted)]">
                          {contact.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                    />
                  </div>

                  {/* Bottom Hover Line */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Availability */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 px-6 py-5 transition-all duration-300 hover:border-[var(--primary)]/30 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
              </span>

              <span className="font-mono text-xs text-[var(--foreground)]">
                Open to opportunities
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
              <MapPin size={14} />
              Chennai, India
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}