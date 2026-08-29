"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Code2,
} from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "TRAPX",
    subtitle: "AI Recruitment Scam Intelligence Platform",
    problem:
      "Job seekers face fake recruiters, suspicious job offers, payment scams, and fraudulent offer letters.",
    solution:
      "Built an AI-powered recruitment trust platform that analyzes multiple evidence sources and produces explainable scam-risk insights.",
    stack: ["Python", "NLP", "LLM", "React", "Node.js", "MongoDB"],
    result:
      "Designed multi-input scam analysis, recruiter verification, offer-letter forensics, and explainable trust scoring.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Fake News Detection",
    subtitle: "Machine Learning Classification System",
    problem:
      "Online misinformation makes it difficult for users to distinguish reliable news from misleading content.",
    solution:
      "Developed a machine learning pipeline that processes text features and classifies news content using NLP techniques.",
    stack: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Pandas"],
    result:
      "Created an end-to-end text classification workflow covering preprocessing, feature extraction, training, and evaluation.",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Insurance Fraud Detection",
    subtitle: "ML-Based Fraud Risk Analysis",
    problem:
      "Fraudulent insurance claims can create financial loss and increase manual investigation workload.",
    solution:
      "Built a machine learning workflow to identify patterns associated with suspicious insurance claims.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    result:
      "Applied data preprocessing, exploratory analysis, model training, and performance evaluation to fraud-risk prediction.",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Backend Development",
    subtitle: "Team-Based Web Application Backend",
    problem:
      "Modern web applications require reliable APIs, structured databases, and maintainable server-side logic.",
    solution:
      "Collaborated with a team to develop backend services, REST APIs, database schemas, and application logic.",
    stack: ["Node.js", "JavaScript", "MongoDB", "MySQL", "REST API"],
    result:
      "Implemented core backend functionality while working in a collaborative development environment.",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-[var(--border)]/60 bg-[var(--section)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--primary)]" />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                  Selected Projects
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                From problems to{" "}
                <span className="text-[var(--primary)]">
                  working solutions.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Selected work across artificial intelligence, machine learning,
                data science, and software development.
              </p>
            </div>

          </div>
        </Reveal>

        {/* Projects */}
        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
            >
              <article
                className={`group relative overflow-hidden rounded-2xl border bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_16px_50px_rgba(34,197,94,0.08)] sm:p-9 ${
                  project.featured
                    ? "border-[var(--primary)]/35"
                    : "border-[var(--border)]"
                }`}
              >

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute right-0 top-0 rounded-bl-xl border-b border-l border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--primary)]">
                      Featured Project
                    </span>
                  </div>
                )}

                <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

                  {/* Project Info */}
                  <div>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-5 text-3xl font-bold text-[var(--foreground)]">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-[var(--primary)]">
                      {project.subtitle}
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap gap-3">

                      <a
                        href={project.github}
                        className="group/button flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 font-mono text-xs text-[var(--foreground)] transition-all duration-200 hover:border-[var(--primary)]/60 hover:text-[var(--primary)]"
                      >
                        <Code2
                          size={15}
                          className="transition-transform group-hover/button:scale-110"
                        />

                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        className="group/button flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2.5 font-mono text-xs font-semibold text-[#07111F] transition-all duration-200 hover:bg-[var(--primary-hover)] hover:shadow-[0_0_24px_rgba(34,197,94,0.2)]"
                      >
                        Live Demo

                        <ExternalLink
                          size={14}
                          className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                        />
                      </a>

                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    {/* Problem */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--primary)]">
                        Problem
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--primary)]">
                        Solution
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {project.solution}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--primary)]">
                        Tech Stack
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[var(--border)] bg-[var(--section)] px-3 py-1.5 font-mono text-[10px] text-[var(--muted)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Result */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--primary)]">
                        Result
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {project.result}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Bottom Glow Line */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.15}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
          >
            Interested in my work?

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

      </div>
    </section>
  );
}