"use client";

import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { motion } from "motion/react";
import NeuralScene from "./NeuralScene";

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Data Science",
  "React",
  "Docker",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(var(--foreground) 1px, transparent 1px),
              linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[var(--primary)]/[0.04] blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">

        {/* Main Hero Grid */}
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            {/* Label */}
            <div className="mb-7 flex min-w-0 items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-[var(--primary)]" />

              <span className="min-w-0 truncate font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--primary)] sm:text-xs sm:tracking-[0.2em]">
                AI / ML · Data Science · Software Development
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.3rem]">
              Building Intelligent
              <br />

              <span className="text-[var(--foreground)]">
                Systems That Solve
              </span>

              <br />

              <span className="text-[var(--primary)]">
                Real Problems.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:mt-8 sm:text-lg sm:leading-8">
              I build practical AI-powered applications, data-driven
              solutions, and scalable software systems that turn complex
              problems into useful products.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">

              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3.5 font-mono text-sm font-semibold text-[#07111F] transition-all duration-300 hover:bg-[var(--primary-hover)] hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] sm:w-auto"
              >
                View Projects

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)]/40 px-6 py-3.5 font-mono text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)]/50 hover:bg-[var(--card)] sm:w-auto"
              >
                Let&apos;s Connect
              </a>

            </div>

            {/* Core Stack */}
            <div className="mt-10 flex flex-wrap items-center gap-2 sm:mt-12">

              <div className="mr-1 flex items-center gap-2 text-[var(--muted)]">
                <Terminal size={14} />

                <span className="font-mono text-[10px] uppercase tracking-wider">
                  Core Stack
                </span>
              </div>

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)]/50 px-3 py-1.5 font-mono text-[10px] text-[var(--muted)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:text-[var(--primary)] sm:text-[11px]"
                >
                  {skill}
                </span>
              ))}

            </div>
          </motion.div>

          {/* RIGHT — 3D */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <NeuralScene />

            <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[#07111F]/70 px-4 py-2 backdrop-blur-md">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.2em]">
                Intelligent Systems · Cloud Native AI
              </span>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--primary)] md:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            Scroll to explore
          </span>

          <ArrowDown
            size={15}
            className="animate-bounce"
          />
        </a>

      </div>
    </section>
  );
}