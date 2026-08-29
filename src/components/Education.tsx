"use client";

import {
  GraduationCap,
  CalendarDays,
  MapPin,
  BookOpen,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
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
                  Education
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Learning the{" "}
                <span className="text-[var(--primary)]">
                  foundations.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Building a strong foundation in computer science, data
                science, artificial intelligence, and software development.
              </p>
            </div>

          </div>
        </Reveal>

        {/* Education Card */}
        <Reveal delay={0.1}>
          <article className="group relative mt-16 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)] sm:p-9">

            {/* Top Row */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] transition-colors group-hover:border-[var(--primary)]/50">
                  <GraduationCap
                    size={24}
                    className="text-[var(--primary)]"
                  />
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--primary)]">
                    Undergraduate Degree
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                    B.Sc. Computer Science with Data Science
                  </h3>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Bachelor of Science
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
                <CalendarDays size={14} />
                2024 – 2027
              </div>

            </div>

            {/* Details */}
            <div className="mt-8 grid gap-4 border-t border-[var(--border)] pt-7 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <BookOpen
                  size={16}
                  className="text-[var(--primary)]"
                />

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    Specialization
                  </p>

                  <p className="mt-1 text-sm text-[var(--foreground)]">
                    Data Science & Artificial Intelligence
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="text-[var(--primary)]"
                />

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-[var(--foreground)]">
                    Chennai, India
                  </p>
                </div>
              </div>

            </div>

            {/* Focus Areas */}
            <div className="mt-7">

              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--primary)]">
                Core Areas
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Data Science",
                  "Statistics",
                  "Software Development",
                  "Databases",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--section)] px-3 py-1.5 font-mono text-[10px] text-[var(--muted)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

          </article>
        </Reveal>

      </div>
    </section>
  );
}