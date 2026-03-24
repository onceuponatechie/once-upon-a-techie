"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ── Placeholder cards for the ticker columns ── */
const placeholders = [
  { bg: "from-brand-orange/30 to-butterYellow/30", h: "h-48" },
  { bg: "from-lavender/40 to-cursorBlue/20", h: "h-64" },
  { bg: "from-lightGreen/30 to-butterYellow/20", h: "h-56" },
  { bg: "from-cursorBlue/20 to-lavender/30", h: "h-44" },
  { bg: "from-butterYellow/30 to-brand-orange/20", h: "h-60" },
  { bg: "from-sageGreen/30 to-lightGreen/20", h: "h-52" },
  { bg: "from-brand-orange/20 to-lavender/30", h: "h-48" },
  { bg: "from-cursorBlue/30 to-lightGreen/30", h: "h-56" },
];

function TickerColumn({
  items,
  speed,
  direction,
}: {
  items: typeof placeholders;
  speed: string;
  direction: "up" | "down";
}) {
  const animClass =
    direction === "up"
      ? speed === "fast"
        ? "animate-ticker-up-fast"
        : speed === "mid"
        ? "animate-ticker-up-mid"
        : "animate-ticker-up-slow"
      : "animate-ticker-down-slow";

  return (
    <div className="flex-1 overflow-hidden">
      <div className={`ticker-track ${animClass}`}>
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`${item.h} w-full rounded-2xl bg-gradient-to-br ${item.bg} mb-4`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CreativeVault() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
      className="relative w-full px-6 py-8"
    >
      <div className="max-w-[1400px] mx-auto h-[700px] md:h-[1100px] rounded-[3rem] overflow-hidden relative pointer-events-none">
        {/* Ticker grid */}
        <div className="absolute inset-0 flex gap-4 p-6">
          <TickerColumn
            items={placeholders.slice(0, 4)}
            speed="mid"
            direction="up"
          />
          <TickerColumn
            items={placeholders.slice(2, 6)}
            speed="slow"
            direction="down"
          />
          <div className="hidden md:flex flex-1 overflow-hidden">
            <TickerColumn
              items={placeholders.slice(4, 8)}
              speed="fast"
              direction="up"
            />
          </div>
        </div>

        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/25 z-10" />

        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-lightOatmeal to-transparent z-20" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-lightOatmeal to-transparent z-20" />

        {/* Centerpiece CTA */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-auto">
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-text-primary text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6"
          >
            The Creative Vault
          </motion.div>

          {/* Glassmorphic circle */}
          <Link href="/resources">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full glass flex items-center justify-center shadow-2xl"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-primary"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
