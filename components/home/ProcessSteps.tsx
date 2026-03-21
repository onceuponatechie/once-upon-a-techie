"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "I dig into the problem, understand the audience, and map out what success looks like.",
    emoji: "🔭",
    yOffset: 0,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Defining the roadmap, prioritizing features, and aligning goals with user needs.",
    emoji: "🧭",
    yOffset: 48,
  },
  {
    number: "03",
    title: "Design",
    description:
      "From wireframes to polished mockups — every pixel tells a story.",
    emoji: "🎨",
    yOffset: -16,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Turning designs into real, functional products that people actually enjoy using.",
    emoji: "🛠️",
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

        {/* 4 staggered warm milky glassy cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <motion.div
                className="relative"
                style={{ marginTop: `${step.yOffset}px` }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Warm milky glassy card */}
                <div
                  className="rounded-3xl p-7 relative overflow-hidden border-2 border-white/70"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(250,248,244,0.5) 100%)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.4)",
                  }}
                >
                  {/* Subtle warm sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#F5EFE6]/20 pointer-events-none rounded-3xl" />

                  <div className="relative z-10">
                    {/* 3D Icon in dark rounded square */}
                    <div className="w-14 h-14 rounded-2xl bg-text-primary flex items-center justify-center mb-6">
                      <span className="text-2xl">{step.emoji}</span>
                    </div>

                    <h3 className="font-serif text-xl mb-3 text-text-primary uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
