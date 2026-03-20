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
    yOffset: 48,
  },
  {
    number: "03",
    title: "Design",
    description:
      "From wireframes to polished mockups — every pixel tells a story.",
    Icon: Palette,
    yOffset: -16,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turning designs into real, functional products that people actually enjoy using.",
    Icon: Hammer,
    yOffset: 64,
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

        {/* 4 staggered 3D glassmorphism cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <motion.div
                className="relative"
                style={{ marginTop: `${step.yOffset}px` }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* 3D glassmorphism card */}
                <div
                  className="bg-white/70 backdrop-blur-xl rounded-3xl p-7 relative overflow-hidden border-2 border-white/80"
                  style={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.4)",
                  }}
                >
                  {/* Subtle gradient sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 pointer-events-none rounded-3xl" />

                  {/* Watermark number */}
                  <span className="absolute top-4 right-5 font-serif text-[56px] text-text-primary/[0.04] leading-none select-none">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    {/* Icon circle */}
                    <div className="w-14 h-14 rounded-2xl bg-surface-cream/80 flex items-center justify-center mb-6 border border-white/50">
                      <step.Icon size={24} className="text-brand-orange" />
                    </div>

                    <h3 className="font-serif text-xl mb-3 text-text-primary">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange/30 via-brand-orange/10 to-transparent" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
