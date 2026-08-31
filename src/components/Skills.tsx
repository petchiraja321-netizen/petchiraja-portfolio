"use client";

import {
  BrainCircuit,
  Database,
  Code2,
  BarChart3,
  Container,
  GitBranch,
  Waypoints,
  Globe,
} from "lucide-react";

import SectionReveal from "./SectionReveal";

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
      "Tableau",
      "MS Excel",
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

  {
    number: "07",
    title: "AI-Assisted Development",
    icon: Code2,
    description:
      "Accelerating software development through AI-assisted coding, rapid prototyping, and iterative problem-solving.",
    skills: [
      "Claude Code",
      "GitHub Copilot",
      "OpenAI Codex",
      "Prompt Engineering",
      "Rapid Prototyping",
    ],
  },

  {
    number: "08",
    title: "Data Structures & Algorithms",
    icon: Waypoints,
    description:
      "Applying core data structures and algorithmic thinking to design efficient, scalable, and maintainable solutions.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Sorting & Searching",
      "Trees & Graphs",
      "Complexity Analysis",
    ],
  },

  {
    number: "09",
    title: "Computer Networks",
    icon: Globe,
    description:
      "Understanding how applications communicate through networks, protocols, and client–server systems.",
    skills: [
      "TCP/IP",
      "HTTP / HTTPS",
      "DNS",
      "Client–Server Architecture",
      "REST Communication",
      "Network Fundamentals",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[var(--border)]/60 bg-[var(--background)] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Side Label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 shrink-0 bg-[var(--primary)]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">
                  Technical Stack
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Technologies I use to turn data and ideas into{" "}
                <span className="text-[var(--primary)]">
                  working systems.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                A practical technology stack spanning artificial intelligence, data science, algorithms, software development, databases, computer networks, AI-assisted development, and cloud-native systems.
                data science, software development, databases, and
                cloud-native systems.
              </p>
            </div>

          </div>
        </SectionReveal>

        {/* Skill Groups */}
        <div className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <SectionReveal
                key={group.number}
                delay={index * 0.07}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)] sm:p-7">

                  {/* Card Top */}
                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] transition-all duration-300 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/[0.06]">
                      <Icon
                        size={19}
                        className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className="font-mono text-xs text-[var(--muted)]">
                      {group.number}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--primary)]">
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

                  {/* Bottom Hover Line */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

                </article>
              </SectionReveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}