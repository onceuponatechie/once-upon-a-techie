"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Bespoke 3D SVG icons (not emojis) ── */
const ProductIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="3" fill="#4A90D9" />
    <rect x="2" y="4" width="20" height="5" rx="3" fill="#5BA0E9" />
    <circle cx="5.5" cy="6.5" r="1" fill="#FF6B6B" />
    <circle cx="8.5" cy="6.5" r="1" fill="#FFD93D" />
    <circle cx="11.5" cy="6.5" r="1" fill="#6BCB77" />
    <rect x="5" y="12" width="6" height="2" rx="1" fill="white" opacity="0.6" />
    <rect x="5" y="15.5" width="10" height="1.5" rx="0.75" fill="white" opacity="0.3" />
  </svg>
);

const AutomationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#6B8F71" />
    <circle cx="12" cy="12" r="7" fill="#7DA583" />
    <path d="M12 6 L12 12 L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 3 L5 5" stroke="#6B8F71" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 3 L19 5" stroke="#6B8F71" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PythonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#306998" />
    <path d="M12 3 L12 10 C12 11 11 12 10 12 L7 12" stroke="#FFD43B" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 21 L12 14 C12 13 13 12 14 12 L17 12" stroke="#FFD43B" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="9" cy="6.5" r="1.2" fill="#FFD43B" />
    <circle cx="15" cy="17.5" r="1.2" fill="#FFD43B" />
  </svg>
);

const StorytellingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4 C4 4 4 2 6 2 L18 2 C20 2 20 4 20 4 L20 18 C20 20 18 20 18 20 L6 20 C4 20 4 18 4 18 Z" fill="#E8703A" />
    <path d="M4 4 L20 4 L20 18 L4 18 Z" fill="#F08A5A" />
    <rect x="7" y="7" width="10" height="1.5" rx="0.75" fill="white" opacity="0.7" />
    <rect x="7" y="10" width="7" height="1.5" rx="0.75" fill="white" opacity="0.5" />
    <rect x="7" y="13" width="9" height="1.5" rx="0.75" fill="white" opacity="0.4" />
    <path d="M2 22 L6 20 L6 4 L4 4 L4 20 Z" fill="#C85A2A" opacity="0.5" />
  </svg>
);

const ResearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" fill="#B4A7D6" />
    <circle cx="11" cy="11" r="5" fill="#C9BFE3" />
    <circle cx="11" cy="11" r="2" fill="white" opacity="0.5" />
    <path d="M16 16 L21 21" stroke="#8B7DB8" strokeWidth="3" strokeLinecap="round" />
    <path d="M16.5 16.5 L20.5 20.5" stroke="#A393CC" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF6B8A" />
    <rect x="2" y="2" width="20" height="20" rx="4" fill="url(#designGrad)" />
    <circle cx="9" cy="9" r="3" fill="white" opacity="0.4" />
    <rect x="13" y="6" width="5" height="5" rx="1" fill="white" opacity="0.35" />
    <path d="M6 16 L12 13 L15 17 L18 15 L18 18 C18 19.1 17.1 20 16 20 L8 20 C6.9 20 6 19.1 6 18 Z" fill="white" opacity="0.5" />
    <defs>
      <linearGradient id="designGrad" x1="2" y1="2" x2="22" y2="22">
        <stop stopColor="#FF6B8A" />
        <stop offset="1" stopColor="#FF8E53" />
      </linearGradient>
    </defs>
  </svg>
);

const allPills = [
  { label: "Product Building", icon: ProductIcon, bgColor: "#E8F1FB" },
  { label: "Automation", icon: AutomationIcon, bgColor: "#E5F0E8" },
  { label: "Python", icon: PythonIcon, bgColor: "#E5EDF5" },
  { label: "Storytelling", icon: StorytellingIcon, bgColor: "#FCEEE5" },
  { label: "Research", icon: ResearchIcon, bgColor: "#EEEBF5" },
  { label: "Design", icon: DesignIcon, bgColor: "#FDE8EC" },
];

/* ── Scroll-reveal text (word by word) ── */
const headlineWords = [
  { text: "The", style: "normal" as const },
  { text: "unofficial", style: "normal" as const },
  { text: "diary", style: "normal" as const },
  { text: "of", style: "normal" as const },
  { text: "a", style: "normal" as const },
  { text: "techie,", style: "normal" as const },
  { text: "building", style: "accent" as const },
  { text: "towards", style: "normal" as const },
  { text: "products", style: "accent" as const },
  { text: "that", style: "normal" as const },
  { text: "don\u2019t", style: "normal" as const },
  { text: "need", style: "normal" as const },
  { text: "explaining.", style: "normal" as const },
];

function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  return (
    <div ref={containerRef} className="mb-14">
      <h2 className="font-serif text-[28px] md:text-[44px] lg:text-[52px] leading-[1.2] font-bold text-center max-w-4xl mx-auto">
        {headlineWords.map((word, i) => (
          <ScrollWord
            key={i}
            word={word.text}
            isAccent={word.style === "accent"}
            index={i}
            total={headlineWords.length}
            progress={scrollYProgress}
          />
        ))}
      </h2>
    </div>
  );
}

function ScrollWord({
  word,
  isAccent,
  index,
  total,
  progress,
}: {
  word: string;
  isAccent: boolean;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const yOffset = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span
      style={isAccent ? { opacity, y: yOffset, color: "#6B8F71" } : { opacity, y: yOffset }}
      className={`inline-block mr-[0.3em] ${isAccent ? "italic" : ""}`}
    >
      {word}
    </motion.span>
  );
}

export default function SkillsPillGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Scroll-reveal headline */}
        <ScrollRevealText />

        {/* 3D bespoke icon pills — clustered */}
        <div className="flex flex-wrap justify-center gap-3">
          {allPills.map((pill, i) => {
            const Icon = pill.icon;
            return (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 border border-white/60"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(250,248,244,0.7) 100%)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: pill.bgColor }}
                >
                  <Icon />
                </span>
                <span className="text-sm font-sans font-medium text-text-primary whitespace-nowrap">
                  {pill.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
