"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Palette, Hammer } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "I dig into the problem, understand the audience, and map out what success looks like.",
    Icon: Compass,
    rotation: -3,
  },
  {
    number: "2",
    title: "Design",
    description:
      "From wireframes to polished mockups — every pixel tells a story.",
    Icon: Palette,
    rotation: 2,
  },
  {
    number: "3",
    title: "Build",
    description:
      "Turning designs into real, functional products that people actually enjoy using.",
    Icon: Hammer,
    rotation: -1,
  },
];

function AnimatedLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none hidden md:block">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 500"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M150 250 C250 100 350 150 400 200 S500 350 600 250 S750 50 800 200 S950 400 1050 250"
          stroke="#E8703A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Decorative loops */}
        <motion.circle
          cx="350"
          cy="180"
          r="6"
          stroke="#E8703A"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        <motion.circle
          cx="800"
          cy="180"
          r="6"
          stroke="#E8703A"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.path
          d="M950 230 Q980 200 970 250 Q960 290 990 270"
          stroke="#E8703A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
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

        {/* Cards with line */}
        <div className="relative">
          <AnimatedLine />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.2}>
                <motion.div
                  className="bg-white rounded-2xl shadow-sm border border-surface-muted/50 p-8 relative overflow-hidden"
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: step.rotation }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {/* Watermark number */}
                  <span className="absolute top-4 left-4 font-serif text-[64px] text-text-primary/[0.08] leading-none select-none">
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
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
