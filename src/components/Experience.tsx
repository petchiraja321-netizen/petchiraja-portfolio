"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import SectionReveal from "./SectionReveal";

const experiences = [
  {
    year: "2026",
    company: "Edgeup Edutech",
    role: "ML Developer Intern",
    duration: "Aug 2026 – Oct 2026",
    description:
      "Developed Python-based machine learning solutions through data preprocessing, exploratory analysis, and practical ML techniques while gaining hands-on experience in real-world AI application development.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "EDA",
      "PyTorch",
    ],
  },

  {
    year: "2026",
    company: "Cognifyz IT Solutions",
    role: "Machine Learning Intern",
    duration: "Jul 2026 – Aug 2026",
    description:
      "Performed data preprocessing, exploratory analysis, and machine learning experimentation using Python to identify meaningful patterns and apply machine learning concepts to practical data science tasks.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "EDA",
    ],
  },

  {
    year: "2026",
    company: "Imarticus Learning",
    role: "Data Analyst Intern",
    duration: "Jun 2026 – Jul 2026",
    description:
      "Performed data cleaning, transformation, and exploratory analysis using Python, SQL, and Pandas to identify trends, generate insights, and support data-driven decision-making through visualization.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Data Analysis",
      "Data Visualization",
    ],
  },

  {
    year: "2026",
    company: "Greens Technology",
    role: "Data Analyst Intern",
    duration: "Apr 2026 – May 2026",
    description:
      "Performed data cleaning, preprocessing, and exploratory analysis using Python, Pandas, and NumPy to identify trends and generate meaningful insights through data visualization and analytical reporting.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "EDA",
    ],
  },

  {
    year: "2026",
    company: "Turerz",
    role: "Prompt Engineering Intern",
    duration: "Feb 2026 – Mar 2026",
    description:
      "Worked on prompt engineering tasks and explored practical applications of generative AI and large language models to improve AI-assisted workflows and support solution development.",
    skills: [
      "Prompt Engineering",
      "Generative AI",
      "LLMs",
      "AI Workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-[var(--border)]/60 bg-[var(--background)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Side Label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--primary)]" />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                  Experience
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Where I&apos;ve{" "}
                <span className="text-[var(--primary)]">
                  worked & learned.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Hands-on industry experiences across machine learning,
                data analytics, prompt engineering, and software development.
              </p>
            </div>

          </div>
        </SectionReveal>

        {/* =========================
            EXPERIENCE TIMELINE
        ========================== */}
        <div className="relative mt-16">

          {/* Timeline Line */}
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-16px)] w-px bg-[var(--border)] sm:block" />

          <div className="space-y-10">

            {experiences.map((experience, index) => (
              <SectionReveal
                key={`${experience.company}-${experience.role}`}
                delay={index * 0.1}
              >
                <article className="relative sm:pl-12">

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-[var(--background)] sm:flex">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
                  </div>

                  {/* Experience Card */}
                  <div className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-[0_14px_45px_rgba(34,197,94,0.06)] sm:p-8">

                    {/* Company Header */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                      {/* Company Details */}
                      <div>

                        {/* Year + Duration */}
                        <div className="flex flex-wrap items-center gap-3">

                          <span className="font-mono text-xs text-[var(--primary)]">
                            {experience.year}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-[var(--border)]" />

                          <span className="font-mono text-xs text-[var(--muted)]">
                            {experience.duration}
                          </span>

                        </div>

                        {/* Company */}
                        <h3 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                          {experience.company}
                        </h3>

                        {/* Role */}
                        <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                          {experience.role}
                        </p>

                      </div>

                      {/* Experience Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] transition-colors duration-300 group-hover:border-[var(--primary)]/40">

                        <BriefcaseBusiness
                          size={19}
                          className="text-[var(--primary)]"
                        />

                      </div>

                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">

                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[var(--border)] bg-[var(--section)] px-3 py-1.5 font-mono text-[10px] text-[var(--muted)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/[0.04] hover:text-[var(--primary)]"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                    {/* Bottom Hover Line */}
                    <div className="pointer-events-none mt-6 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

                  </div>
                </article>
              </SectionReveal>
            ))}

          </div>
        </div>

        {/* =========================
            RESUME BUTTON
        ========================== */}
        <SectionReveal delay={0.15}>
          <div className="mt-12">

            <a
              href="/Petchiraja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full resume"
              className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-mono text-xs text-[var(--foreground)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/[0.04] hover:text-[var(--primary)]"
            >

              <CalendarDays
                size={15}
                className="transition-transform duration-200 group-hover:scale-105"
              />

              View Full Resume

              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </a>

          </div>
        </SectionReveal>

      </div>
    </section>
  );
}