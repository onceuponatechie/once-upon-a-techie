"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ── Inline Media: animated gradient boxes inside headline ── */
function InlineMedia({ variant }: { variant: "a" | "b" }) {
  const gradients =
    variant === "a"
      ? "from-brand-orange via-butterYellow to-lavender"
      : "from-lavender via-lightGreen to-cursorBlue";

  return (
    <span className="inline-block w-12 h-8 md:w-16 md:h-10 rounded-xl overflow-hidden align-middle mx-1 relative">
      <span
        className={`absolute inset-0 bg-gradient-to-r ${gradients} bg-[length:200%_200%] animate-gradient-shift`}
      />
    </span>
  );
}

/* ── Winking / Waving SVG icon ── */
function WavingIcon() {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* Face circle */}
      <circle cx="32" cy="32" r="28" fill="#FDE68A" />
      {/* Left eye - winking */}
      <motion.path
        d="M22 28 Q24 24 26 28"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M22 28 Q24 24 26 28", "M22 26 L26 26", "M22 28 Q24 24 26 28"] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
      />
      {/* Right eye */}
      <circle cx="40" cy="26" r="2.5" fill="#1A1A1A" />
      {/* Smile */}
      <path d="M26 36 Q32 42 38 36" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Waving hand */}
      <motion.g
        animate={{ rotate: [0, 20, -10, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        style={{ originX: "52px", originY: "18px" }}
      >
        <path
          d="M50 14 C52 8 60 10 58 16 L54 26 C52 30 48 28 50 24 Z"
          fill="#E8703A"
          opacity="0.9"
        />
        {/* Fingers */}
        <path d="M54 10 C55 6 59 7 58 11" stroke="#E8703A" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M56 12 C58 8 62 10 60 14" stroke="#E8703A" strokeWidth="3" strokeLinecap="round" fill="none" />
      </motion.g>
    </motion.svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* Background subtle radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-orange/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Collaboration pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-white/60 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-text-secondary">
            Open to collaboration
          </span>
        </motion.div>

        {/* Waving Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <WavingIcon />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-text-primary mb-6"
        >
          Products, people, and the{" "}
          <InlineMedia variant="a" /> stories that connect{" "}
          <InlineMedia variant="b" /> them.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-text-secondary font-medium mb-10"
        >
          Creator · Builder · Storyteller
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/builds"
            className="bg-text-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-text-primary/90 transition-colors text-base"
          >
            Start With This →
          </Link>
          <Link
            href="/resources"
            className="text-text-secondary hover:text-brand-orange font-medium transition-colors text-base"
          >
            Or grab a freebie →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
