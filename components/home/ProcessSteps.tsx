"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const personas = [
  {
    title: "Creator",
    description:
      "I craft visual stories, write about the intersection of tech and creativity, and turn abstract ideas into tangible experiences that resonate.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="12" fill="#1A1A1A" />
        <path d="M24 14L28 22H20L24 14Z" fill="#E8703A" />
        <circle cx="24" cy="30" r="5" fill="#6B8F71" />
        <rect x="15" y="24" width="4" height="8" rx="2" fill="#4A90D9" />
        <rect x="29" y="24" width="4" height="8" rx="2" fill="#B4A7D6" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Builder",
    description:
      "From MVPs to full products — I design and develop tools, apps, and platforms using modern technologies that people actually enjoy using.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="12" fill="#1A1A1A" />
        <path d="M16 32L24 16L32 32H16Z" fill="#4A90D9" opacity="0.8" />
        <rect x="21" y="22" width="6" height="10" rx="1" fill="#E8703A" />
        <circle cx="24" cy="19" r="3" fill="#FFEDAB" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Storyteller",
    description:
      "Every product has a story. I connect brands with people through narrative design, content strategy, and authentic voice that builds lasting trust.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="12" fill="#1A1A1A" />
        <path d="M14 20C14 17 17 15 20 15H28C31 15 34 17 34 20V28C34 31 31 33 28 33H20C17 33 14 31 14 28V20Z" fill="#6B8F71" opacity="0.6" />
        <path d="M18 22H30M18 26H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&q=80",
  },
];

function StackCard({
  persona,
  index,
  total,
}: {
  persona: (typeof personas)[0];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.9, 1 - (total - 1 - index) * 0.02]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="sticky"
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      {...({ style: { top: `${140 + index * 20}px`, y, opacity, scale } } as any)}
    >
      <div
        className="rounded-3xl overflow-hidden border-2 border-white/70 flex flex-col md:flex-row"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.65) 0%, rgba(250,248,244,0.55) 100%)",
          backdropFilter: "blur(16px)",
          boxShadow:
            "0 12px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.4)",
        }}
      >
        {/* Image side */}
        <div className="md:w-2/5 min-h-[240px] md:min-h-[320px]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${persona.image}')` }}
          />
        </div>

        {/* Content side */}
        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-6">{persona.icon}</div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {persona.title}
          </h3>
          <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-md">
            {persona.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-6">
          <p className="font-serif italic text-text-tertiary text-base">
            Who I Am
          </p>
        </ScrollReveal>
        <ScrollReveal className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary font-bold">
            Creator. Builder. Storyteller.
          </h2>
        </ScrollReveal>

        {/* Stacking cards */}
        <div className="relative space-y-8">
          {personas.map((persona, i) => (
            <StackCard
              key={persona.title}
              persona={persona}
              index={i}
              total={personas.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
