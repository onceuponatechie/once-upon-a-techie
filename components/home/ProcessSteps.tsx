"use client";

import { motion } from "framer-motion";
import { Compass, Target, Palette, Hammer } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "I dig into the problem, understand the audience, and map out what success looks like.",
    Icon: Compass,
    yOffset: 0,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Defining the roadmap, prioritizing features, and aligning goals with user needs.",
    Icon: Target,
    yOffset: 40,
  },
  {
    number: "03",
    title: "Design",
    description:
      "From wireframes to polished mockups — every pixel tells a story.",
    Icon: Palette,
    yOffset: -20,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turning designs into real, functional products that people actually enjoy using.",
    Icon: Hammer,
    yOffset: 60,
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <ScrollReveal className="text-center mb-4">
          <p className="font-serif italic text-text-tertiary text-base">
            My Process, Explained
          </p>
        </ScrollReveal>
        <ScrollReveal className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Here&apos;s how I <span className="italic">build</span>
          </h2>
        </ScrollReveal>

        {/* 4 staggered white cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <motion.div
                className="bg-white rounded-3xl p-7 relative overflow-hidden shadow-sm border border-surface-muted/40"
                style={{ marginTop: `${step.yOffset}px` }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Watermark number */}
                <span className="absolute top-5 right-6 font-serif text-[48px] text-text-primary/[0.06] leading-none select-none">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-surface-cream flex items-center justify-center mb-6">
                    <step.Icon size={22} className="text-brand-orange" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-text-primary">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/20 to-transparent" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
