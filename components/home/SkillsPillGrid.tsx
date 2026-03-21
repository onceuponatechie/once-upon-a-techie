"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  Box,
  Settings,
  Code2,
  MessageCircle,
  Search,
  Pen,
} from "lucide-react";

const allPills = [
  { label: "Product Building", Icon: Box },
  { label: "Automation", Icon: Settings },
  { label: "Python", Icon: Code2 },
  { label: "Storytelling", Icon: MessageCircle },
  { label: "Research", Icon: Search },
  { label: "Design", Icon: Pen },
];

/* Clustered positions for the pills */
const positions = [
  { rotate: -6, x: -20, y: 0 },
  { rotate: 4, x: 30, y: -10 },
  { rotate: -3, x: 70, y: 15 },
  { rotate: 7, x: -10, y: 5 },
  { rotate: -5, x: 50, y: -5 },
  { rotate: 3, x: 10, y: 10 },
];

export default function SkillsPillGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Big bold headline text */}
        <ScrollReveal>
          <h2 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] leading-[1.15] font-bold text-text-primary text-center mb-14">
            The unofficial diary of a techie,{" "}
            <span className="italic" style={{ color: "#6B8F71" }}>
              building
            </span>{" "}
            towards{" "}
            <span className="italic" style={{ color: "#6B8F71" }}>
              products
            </span>{" "}
            that don&apos;t need explaining.
          </h2>
        </ScrollReveal>

        {/* Clustered white pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {allPills.map((pill, i) => (
            <ScrollReveal key={pill.label} delay={0.08 * i}>
              <motion.div
                className="inline-flex items-center gap-2.5 bg-white shadow-sm rounded-full px-4 py-2.5 border border-surface-muted/40"
                style={{
                  transform: `rotate(${positions[i].rotate}deg)`,
                }}
                animate={{
                  y: [0, -4, 0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              >
                <span className="w-7 h-7 rounded-full bg-surface-light flex items-center justify-center">
                  <pill.Icon size={14} className="text-text-secondary" />
                </span>
                <span className="text-sm font-sans font-medium text-text-primary whitespace-nowrap">
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
