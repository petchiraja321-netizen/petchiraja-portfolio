"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

      let currentSection = "about";

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (href: string) => {
    setMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)]/60 bg-[#07111F]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            setMenuOpen(false);
          }}
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          {/* PR Logo */}
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-[var(--primary)]/40 bg-[var(--primary)]/10 transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/15">
            <img
              src="/pr-logo.png"
              alt="PR Logo"
              className="h-full w-full object-contain p-1"
            />
          </div>

          {/* Name */}
          <div className="hidden text-left sm:block">
            <p className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-[var(--foreground)]">
              Petchiraja
            </p>

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
              AI/ML· Data · Software
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`group relative font-mono text-xs transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[var(--primary)] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Resume Button */}
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-lg border border-[var(--primary)]/50 bg-[var(--primary)] px-4 py-2.5 font-mono text-xs font-semibold text-[#07111F] transition-all duration-200 hover:bg-[var(--primary-hover)] hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] sm:flex"
        >
          Resume
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-[var(--border)] p-2 text-[var(--foreground)] transition-colors hover:border-[var(--primary)]/50 hover:text-[var(--primary)] lg:hidden"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[#07111F]/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">

            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`rounded-lg px-3 py-2.5 text-left font-mono text-sm transition-colors ${
                    isActive
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Mobile Resume */}
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex w-fit items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2.5 font-mono text-xs font-semibold text-[#07111F] transition-colors hover:bg-[var(--primary-hover)]"
            >
              Resume
              <ArrowUpRight size={14} />
            </a>

          </div>
        </div>
      )}
    </header>
  );
}