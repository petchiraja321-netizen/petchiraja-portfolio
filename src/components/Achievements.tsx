"use client";

import {
  Trophy,
  Award,
  GraduationCap,
  Medal,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const achievements = [
  {
    number: "01",
    type: "Achievement",
    icon: Trophy,
    title: "7th Place — TRAPX Hackathon",
    organization: "Hackathon",
    description:
      "Secured 7th place among 53 participating teams by developing TRAPX, an AI-powered recruitment scam intelligence platform.",
    year: "2026",
  },
  {
    number: "02",
    type: "Training",
    icon: GraduationCap,
    title: "Innovation Ambassador Training",
    organization:
      "Ministry of Education’s Innovation Cell & AICTE",
    description:
      "Completed Foundation Level training focused on innovation, entrepreneurship, and problem-solving.",
    year: "2026",
  },
  {
    number: "03",
    type: "Certification",
    icon: Award,
    title: "CRUD Operations in MongoDB",
    organization: "MongoDB",
    description:
      "Completed learning focused on creating, reading, updating, and deleting data using MongoDB.",
    year: "2025",
  },
  {
    number: "04",
    type: "Certification",
    icon: Medal,
    title: "Introduction to Artificial Intelligence",
    organization: "IBM SkillsBuild",
    description:
      "Completed foundational learning covering key concepts and applications of artificial intelligence.",
    year: "2025",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative border-t border-[var(--border)]/60 bg-[var(--section)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--primary)]" />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                  Achievements & Certifications
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Proof of{" "}
                <span className="text-[var(--primary)]">
                  learning & building.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                A collection of achievements, certifications, and learning
                milestones that reflect my continuous growth across technology
                and innovation.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Achievement Grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.number}
                delay={index * 0.08}
              >
                <article
                  className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_16px_45px_rgba(34,197,94,0.07)] sm:p-8"
                >

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] transition-all duration-300 group-hover:border-[var(--primary)]/50 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                        <Icon
                          size={19}
                          className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        {item.type}
                      </span>

                    </div>

                    <span className="font-mono text-xs text-[var(--muted)]">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-semibold leading-snug text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-mono text-xs text-[var(--primary)]">
                    {item.organization}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">

                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {item.year}
                    </span>

                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                      Verified milestone

                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>

                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}