"use client";

import {
  BrainCircuit,
  Database,
  Code2,
  BarChart3,
  Container,
  GitBranch,
  Globe,
  Layers3,
} from "lucide-react";
import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    description:
      "Building intelligent solutions using machine learning, NLP, and modern AI tools.",
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
    ],
  },
  {
    number: "02",
    title: "Data Science",
    icon: BarChart3,
    description:
      "Transforming data into insights through analysis, statistics, visualization, and modelling.",
    skills: [
      "Data Analysis",
      "Statistics",
      "Data Visualization",
      "Jupyter",
      "Power BI",
      "R",
    ],
  },
  {
    number: "03",
    title: "Software Development",
    icon: Code2,
    description:
      "Developing modern applications, APIs, and maintainable software systems.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    number: "04",
    title: "Databases",
    icon: Database,
    description:
      "Designing and working with structured and NoSQL databases for application systems.",
    skills: [
      "MySQL",
      "MongoDB",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    icon: Container,
    description:
      "Exploring containerized and cloud-native approaches for deploying scalable applications.",
    skills: [
      "Docker",
      "Cloud Native",
      "Containerization",
      "Deployment",
    ],
  },
  {
    number: "06",
    title: "Tools & Workflow",
    icon: GitBranch,
    description:
      "Using modern development tools and version-control workflows to build and manage projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Git Workflow",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[var(--border)]/60 bg-[var(--background)] py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 shrink-0 bg-[var(--primary)]" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">
                  Technical Stack
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Tools I use to{" "}
                <span className="text-[var(--primary)]">
                  build.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                A practical technology stack spanning artificial intelligence,
                data science, software development, databases, and
                cloud-native systems.
              </p>
            </div>

          </div>
        </Reveal>

        {/* Skill Groups */}
        <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.number}
                delay={index * 0.07}
              >
                <article
                  className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)] sm:p-7"
                >

                  {/* Number */}
                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] transition-all duration-300 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/[0.06]">
                      <Icon
                        size={19}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <span className="font-mono text-xs text-[var(--muted)]">
                      {group.number}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-[var(--foreground)]">
                    {group.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--section)] px-3 py-1.5 font-mono text-[10px] text-[var(--muted)] transition-all duration-200 hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/[0.05] hover:text-[var(--primary)]"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

                </article>
              </Reveal>
            );
          })}

        </div>

        {/* Stack Footer */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

            {/* Left */}
            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--section)]">
                <Layers3
                  size={17}
                  className="text-[var(--primary)]"
                />
              </div>

              <div>
                <p className="font-mono text-xs text-[var(--foreground)]">
                  Full-stack thinking
                </p>

                <p className="mt-1 text-[10px] text-[var(--muted)]">
                  AI → Data → Software → Cloud
                </p>
              </div>

            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">

              <span className="flex items-center gap-1.5">
                <BrainCircuit size={12} />
                AI
              </span>

              <span className="flex items-center gap-1.5">
                <BarChart3 size={12} />
                Data
              </span>

              <span className="flex items-center gap-1.5">
                <Globe size={12} />
                Web
              </span>

              <span className="flex items-center gap-1.5">
                <Container size={12} />
                Cloud
              </span>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}