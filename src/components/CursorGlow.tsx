"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let frame = 0;

    const moveCursor = (e: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Soft Background Glow */}
      <div
        className="absolute -left-24 -top-24 h-48 w-48 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.08) 28%, rgba(34,197,94,0.025) 50%, transparent 72%)",
          filter: "blur(20px)",
        }}
      />

      {/* Micro Neural Grid */}
      <div
        className="absolute -left-10 -top-10 h-20 w-20 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(34,197,94,0.28) 0.7px, transparent 0.7px)",
          backgroundSize: "8px 8px",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, transparent 68%)",
          maskImage:
            "radial-gradient(circle, black 0%, transparent 68%)",
        }}
      />

      {/* Neural Connections */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="absolute -left-6 -top-6 opacity-40"
      >
        <line
          x1="24"
          y1="24"
          x2="8"
          y2="11"
          stroke="rgba(34,197,94,0.18)"
          strokeWidth="0.7"
        />

        <line
          x1="24"
          y1="24"
          x2="40"
          y2="12"
          stroke="rgba(34,197,94,0.14)"
          strokeWidth="0.7"
        />

        <line
          x1="24"
          y1="24"
          x2="38"
          y2="39"
          stroke="rgba(34,197,94,0.12)"
          strokeWidth="0.7"
        />
      </svg>

      {/* Neural Nodes */}
      <span
        className="absolute -left-[18px] -top-[15px] h-[2px] w-[2px] rounded-full"
        style={{
          background: "#86efac",
          boxShadow: "0 0 5px rgba(34,197,94,0.65)",
        }}
      />

      <span
        className="absolute left-[15px] -top-[13px] h-[2px] w-[2px] rounded-full"
        style={{
          background: "#86efac",
          boxShadow: "0 0 5px rgba(34,197,94,0.6)",
        }}
      />

      <span
        className="absolute left-[14px] top-[17px] h-[2px] w-[2px] rounded-full"
        style={{
          background: "#86efac",
          boxShadow: "0 0 5px rgba(34,197,94,0.55)",
        }}
      />

      {/* Small 3D Cursor */}
      <svg
        width="18"
        height="22"
        viewBox="0 0 58 70"
        className="relative"
        style={{
          transform: "rotate(-8deg)",
          filter:
            "drop-shadow(0 0 1.5px rgba(34,197,94,0.5)) drop-shadow(0 0 3px rgba(34,197,94,0.12))",
        }}
      >
        <defs>
          <linearGradient
            id="tinyCursor"
            x1="10"
            y1="5"
            x2="48"
            y2="65"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#eafff0" />
            <stop offset="28%" stopColor="#86efac" />
            <stop offset="58%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#087f3c" />
          </linearGradient>
        </defs>

        <path
          d="M10 7 L51 25 C55 27 55 31 51 33 L36 40 L40 57 C41 62 38 66 34 67 C31 68 28 66 27 62 L10 13 C8 8 8 7 10 7Z"
          fill="#04351c"
          opacity="0.7"
          transform="translate(1 1.5)"
        />

        <path
          d="M10 7 L51 25 C55 27 55 31 51 33 L36 40 L40 57 C41 62 38 66 34 67 C31 68 28 66 27 62 L10 13 C8 8 8 7 10 7Z"
          fill="url(#tinyCursor)"
          stroke="#b7ffd0"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        <path
          d="M11 9 L47 26 L34 31 L15 13 Z"
          fill="#ffffff"
          opacity="0.12"
        />

        <circle
          cx="29"
          cy="34"
          r="1.5"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}