"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const allPills = [
  { label: "Product Building", color: "#E8703A", emoji: "🧱" },
  { label: "Automation", color: "#2D6A4F", emoji: "⚙️" },
  { label: "Python", color: "#4A90D9", emoji: "🐍" },
  { label: "Storytelling", color: "#B4A7D6", emoji: "✍️" },
  { label: "Research", color: "#4A90D9", emoji: "🔍" },
  { label: "Design", color: "#F5D060", emoji: "🎨" },
];

const sentence =
  "Writing the unofficial diary of a techie, building towards products that don\u2019t need explaining.";

function ScrollRevealText() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const words = sentence.split(" ");

  return (
    <div ref={ref} className="max-w-xl text-center mx-auto">
      <p className="font-serif text-[22px] md:text-[28px] lg:text-[32px] leading-[1.4]">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          return (
            <Word
              key={i}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </p>
    </div>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#CCCCCC", "#1A1A1A"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em] transition-none"
    >
      {word}
    </motion.span>
  );
}

function FloatingPill({
  label,
  color,
  emoji,
  delay,
}: {
  label: string;
  color: string;
  emoji: string;
  delay: number;
}) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border-2 border-white/70"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(12px)",
        boxShadow:
          "0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 0 1px rgba(255,255,255,0.3)",
      }}
      animate={{
        y: [0, -6, 0, 4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <span className="text-base leading-none">{emoji}</span>
      <span className="text-xs font-sans font-medium text-text-primary whitespace-nowrap">
        {label}
      </span>
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

export default function SkillsPillGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-serif italic text-text-tertiary text-base">
            What I Do
          </p>
        </ScrollReveal>

        {/* Center text */}
        <ScrollRevealText />

        {/* Floating pills beneath text — same layout on mobile and desktop */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {allPills.map((pill, i) => (
            <ScrollReveal key={pill.label} delay={0.1 * i}>
              <FloatingPill {...pill} delay={i * 0.5} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
