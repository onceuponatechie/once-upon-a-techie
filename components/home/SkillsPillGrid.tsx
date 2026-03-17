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
  "Writing the unofficial diary of a techie, building towards products with great experience";

function SkillPill({
  label,
  color,
  Icon,
  direction,
  delay,
}: {
  label: string;
  color: string;
  Icon: React.ElementType;
  direction: "left" | "right";
  delay: number;
}) {
  return (
    <ScrollReveal
      direction={direction}
      delay={delay}
      className="inline-flex"
    >
      <div
        className="inline-flex items-center gap-2.5 bg-white shadow-lg rounded-full px-4 py-2.5 border border-white/40"
        style={{
          transform: "perspective(800px) rotateY(5deg) rotateX(2deg)",
          boxShadow:
            "0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        }}
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
      </div>
    </ScrollReveal>
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
    <div ref={ref} className="max-w-2xl text-center mx-auto">
      <p className="font-sans text-2xl md:text-[32px] lg:text-[36px] leading-relaxed">
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

export default function SkillsPillGrid() {
  return (
    <section className="bg-surface-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-serif italic text-text-tertiary text-base">
            <span className="inline-block w-8 h-[1px] bg-text-tertiary/30 align-middle mr-3" />
            Hello!
            <span className="inline-block w-8 h-[1px] bg-text-tertiary/30 align-middle ml-3" />
          </p>
        </ScrollReveal>

        {/* Main layout with pills */}
        <div className="relative flex items-start justify-center">
          {/* Left pills - desktop */}
          <div className="hidden lg:flex flex-col gap-4 pt-4 mr-8">
            {leftPills.map((pill, i) => (
              <SkillPill
                key={pill.label}
                {...pill}
                direction="left"
                delay={0.2 + i * 0.15}
              />
            ))}
          </div>

          {/* Center text - scroll triggered grey to black */}
          <ScrollRevealText />

          {/* Right pills - desktop */}
          <div className="hidden lg:flex flex-col gap-4 pt-4 ml-8">
            {rightPills.map((pill, i) => (
              <SkillPill
                key={pill.label}
                {...pill}
                direction="right"
                delay={0.3 + i * 0.15}
              />
            ))}
          </div>
        </div>

        {/* Mobile pills - go beneath text on smaller screens */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 lg:hidden">
          {[...leftPills, ...rightPills].map((pill, i) => (
            <ScrollReveal key={pill.label} delay={0.1 * i}>
              <div
                className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-3 py-2 border border-white/40"
                style={{
                  transform: "perspective(600px) rotateY(3deg)",
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
