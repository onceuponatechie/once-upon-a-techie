"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  Box,
  Settings,
  Code2,
  MessageCircle,
  Search,
  Pen,
} from "lucide-react";

const leftPills = [
  { label: "Product Building", color: "#E8703A", Icon: Box },
  { label: "Automation", color: "#2D6A4F", Icon: Settings },
  { label: "Python", color: "#4A90D9", Icon: Code2 },
];

const rightPills = [
  { label: "Storytelling", color: "#B4A7D6", Icon: MessageCircle },
  { label: "Research", color: "#4A90D9", Icon: Search },
  { label: "Design", color: "#F5D060", Icon: Pen },
];

const sentence =
  "Writing the unofficial diary of a techie, building towards products that don\u2019t need explaining.";

function ClusteredPill({
  label,
  color,
  Icon,
  rotate,
  offsetX,
  offsetY,
}: {
  label: string;
  color: string;
  Icon: React.ElementType;
  rotate: number;
  offsetX: number;
  offsetY: number;
}) {
  return (
    <motion.div
      className="inline-flex items-center gap-2.5 bg-white shadow-lg rounded-full px-4 py-2.5 border border-white/40 absolute"
      style={{
        transform: `rotate(${rotate}deg) translate(${offsetX}px, ${offsetY}px)`,
        boxShadow:
          "0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={16} style={{ color }} />
      </span>
      <span className="text-sm font-sans font-medium text-text-primary whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}

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

// Clustered positions for left pills (random-ish offsets)
const leftPositions = [
  { rotate: -8, offsetX: -10, offsetY: 0 },
  { rotate: 5, offsetX: 15, offsetY: 70 },
  { rotate: -3, offsetX: -25, offsetY: 145 },
];

// Clustered positions for right pills
const rightPositions = [
  { rotate: 6, offsetX: 10, offsetY: 5 },
  { rotate: -4, offsetX: -15, offsetY: 75 },
  { rotate: 8, offsetX: 20, offsetY: 140 },
];

export default function SkillsPillGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label - no lines */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-serif italic text-text-tertiary text-base">
            What I Do
          </p>
        </ScrollReveal>

        {/* Main layout with pills */}
        <div className="relative flex items-start justify-center">
          {/* Left pills - clustered, desktop */}
          <div className="hidden lg:block relative w-[200px] h-[220px] mr-8 mt-2">
            {leftPills.map((pill, i) => (
              <ScrollReveal key={pill.label} direction="left" delay={0.2 + i * 0.15} className="inline-flex">
                <ClusteredPill
                  {...pill}
                  {...leftPositions[i]}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Center text - scroll triggered grey to black */}
          <ScrollRevealText />

          {/* Right pills - clustered, desktop */}
          <div className="hidden lg:block relative w-[200px] h-[220px] ml-8 mt-2">
            {rightPills.map((pill, i) => (
              <ScrollReveal key={pill.label} direction="right" delay={0.3 + i * 0.15} className="inline-flex">
                <ClusteredPill
                  {...pill}
                  {...rightPositions[i]}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile pills - clustered wrap */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 lg:hidden">
          {[...leftPills, ...rightPills].map((pill, i) => (
            <ScrollReveal key={pill.label} delay={0.1 * i}>
              <motion.div
                className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-3 py-2 border border-white/40"
                style={{
                  transform: `rotate(${i % 2 === 0 ? -3 : 4}deg)`,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${pill.color}20` }}
                >
                  <pill.Icon size={12} style={{ color: pill.color }} />
                </span>
                <span className="text-xs font-sans font-medium text-text-primary">
                  {pill.label}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
