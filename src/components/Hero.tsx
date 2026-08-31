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

type WordRevealProps = {
  children: string;
  className?: string;
  delay?: number;
};

function WordReveal({
  children,
  className = "",
  delay = 0,
}: WordRevealProps) {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{
              opacity: 0,
              y: "100%",
            }}
            animate={{
              opacity: 1,
              y: "0%",
            }}
            transition={{
              duration: 0.65,
              delay: delay + index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>

          {index < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}

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
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="mb-7 flex min-w-0 items-center gap-3"
            >
              <span className="h-px w-10 shrink-0 bg-[var(--primary)]" />

              <span className="min-w-0 truncate font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--primary)] sm:text-xs sm:tracking-[0.2em]">
                AI / ML · Data Science · Software Development
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.3rem]">
              <WordReveal delay={0.25}>
                Building Intelligent
              </WordReveal>

              <br />

              <WordReveal
                className="text-[var(--foreground)]"
                delay={0.42}
              >
                Systems That Solve
              </WordReveal>

              <br />

              <WordReveal
                className="text-[var(--primary)]"
                delay={0.59}
              >
                Real Problems.
              </WordReveal>
            </h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.85,
                ease: "easeOut",
              }}
              className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:mt-8 sm:text-lg sm:leading-8"
            >
              I build practical AI-powered applications, data-driven
              solutions, and scalable software systems that turn complex
              problems into useful products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
                ease: "easeOut",
              }}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            >
              {/* View Projects */}
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

              {/* Let's Connect */}
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[var(--border)] bg-transparent px-6 py-3.5 font-mono text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[#07111F] hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] sm:w-auto"
              >
                Let&apos;s Connect
              </a>
            </motion.div>

            {/* Core Stack */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 1.12,
                ease: "easeOut",
              }}
              className="mt-10 flex flex-wrap items-center gap-2 sm:mt-12"
            >
              <div className="mr-1 flex items-center gap-2 text-[var(--muted)]">
                <Terminal size={14} />

                <span className="font-mono text-[10px] uppercase tracking-wider">
                  Core Stack
                </span>
              </div>

              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 1.18 + index * 0.05,
                    ease: "easeOut",
                  }}
                  className="rounded-full border border-[var(--border)] bg-[var(--card)]/50 px-3 py-1.5 font-mono text-[10px] text-[var(--muted)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:text-[var(--primary)] sm:text-[11px]"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
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

            {/* ML ENGINEER · DATA SCIENTIST */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: "easeOut",
              }}
              className="group pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="whitespace-nowrap rounded-full border border-[var(--border)] bg-[#07111F]/70 px-4 py-2 backdrop-blur-md transition-all duration-300 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_12px_rgba(34,197,94,0.45)]">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.2em]">
                  ML ENGINEER · DATA SCIENTIST
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 1.4,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--primary)] md:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            Explore My Journey
          </span>

          <ArrowDown
            size={15}
            className="animate-bounce"
          />
        </motion.a>
      </div>
    </section>
  );
}