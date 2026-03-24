"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "Tell Better Stories",
    description: "Craft narratives that resonate. From content strategy to brand voice.",
    hoverBg: "hover:bg-butterYellow",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="28" height="36" rx="4" fill="#FDE68A" stroke="#1A1A1A" strokeWidth="2" />
        <rect x="16" y="4" width="28" height="36" rx="4" fill="#fff" stroke="#1A1A1A" strokeWidth="2" />
        <line x1="22" y1="14" x2="38" y2="14" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="20" x2="36" y2="20" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="26" x2="34" y2="26" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    offset: "md:mt-0",
  },
  {
    title: "Build a Thing",
    description: "From concept to launch. Websites, apps, and digital products.",
    hoverBg: "hover:bg-lavender",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="6" fill="#e9d5ff" stroke="#1A1A1A" strokeWidth="2" />
        <path d="M18 22L14 26L18 30" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 22L34 26L30 30" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="22" y1="32" x2="26" y2="20" stroke="#E8703A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    offset: "md:mt-16",
  },
  {
    title: "Think Like a Creator",
    description: "Frameworks, systems, and mindsets for the creative process.",
    hoverBg: "hover:bg-lightGreen",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="20" r="14" fill="#d5ffd8" stroke="#1A1A1A" strokeWidth="2" />
        <path d="M18 38C18 32 24 30 24 30C24 30 30 32 30 38" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="18" r="2" fill="#1A1A1A" />
        <circle cx="28" cy="18" r="2" fill="#1A1A1A" />
        <path d="M20 24Q24 28 28 24" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    offset: "md:mt-8",
  },
];

export default function TheTrio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Choose Your Adventure?
        </motion.h2>

        {/* Staggered zigzag layout */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex-1 ${card.offset}`}
            >
              <div
                className={`group bg-white/60 backdrop-blur-sm border border-white/60 rounded-3xl p-8 transition-colors duration-300 ${card.hoverBg}`}
              >
                <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
