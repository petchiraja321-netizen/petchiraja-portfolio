"use client";

import {
  BrainCircuit,
  Database,
  CloudCog,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const capabilities = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI / Machine Learning",
    description:
      "Building practical machine learning and AI solutions for real-world problems using data, models, and intelligent automation.",
  },
  {
    icon: Database,
    number: "02",
    title: "Data Science",
    description:
      "Turning raw data into meaningful insights through data analysis, statistics, visualization, and predictive modelling.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Software Development",
    description:
      "Developing reliable applications and backend systems with modern web technologies, APIs, databases, and clean architecture.",
  },
  {
    icon: CloudCog,
    number: "04",
    title: "Cloud Native AI",
    description:
      "Exploring containerized, deployable AI systems designed to move from experimentation toward scalable real-world applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[var(--border)]/60 bg-[var(--section)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--primary)]" />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                  About / Profile
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                I build systems,
                <br />
                <span className="text-[var(--primary)]">
                  not just projects.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                I&apos;m a Computer Science with Data Science student focused
                on building intelligent software solutions. My interests span
                artificial intelligence, machine learning, data science,
                backend development, and cloud-native systems.
              </p>

              <a
                href="#projects"
                className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                Explore my work

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Capability Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.number}
                delay={index * 0.08}
              >
                <article
                  className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:p-8"
                >
                  {/* Card Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] transition-colors group-hover:border-[var(--primary)]/40">
                      <Icon
                        size={20}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <span className="font-mono text-xs text-[var(--muted)]">
                      {item.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className="mt-7 text-xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}