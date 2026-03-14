"use client";

import { motion, useInView } from "framer-motion";
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

const textLines = [
  "I'm a product storyteller and creative builder",
  "who turns ideas into experiences people love",
  "— through design, automation, and a whole",
  "lot of curiosity.",
];

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
      <div className="inline-flex items-center gap-2.5 bg-white shadow-md rounded-full px-4 py-2.5 border border-white/40">
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

export default function SkillsPillGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <div className="relative flex items-start justify-center" ref={ref}>
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

          {/* Center text */}
          <div className="max-w-xl text-center">
            {textLines.map((line, i) => (
              <motion.span
                key={i}
                className="block font-sans text-xl md:text-[28px] lg:text-[32px] leading-relaxed text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.4, duration: 0.6 }}
              >
                {line}
              </motion.span>
            ))}
          </div>

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

        {/* Mobile pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 lg:hidden">
          {[...leftPills, ...rightPills].map((pill, i) => (
            <ScrollReveal key={pill.label} delay={0.1 * i}>
              <div className="inline-flex items-center gap-2 bg-white shadow-md rounded-full px-3 py-2 border border-white/40">
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
