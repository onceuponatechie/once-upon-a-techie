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
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        {/* 3D base */}
        <rect x="4" y="6" width="48" height="46" rx="14" fill="#C85A2A" />
        <rect x="4" y="4" width="48" height="46" rx="14" fill="#E8703A" />
        {/* Highlight */}
        <rect x="6" y="6" width="44" height="20" rx="12" fill="white" opacity="0.15" />
        {/* Paintbrush */}
        <rect x="24" y="14" width="4" height="22" rx="2" fill="white" opacity="0.9" transform="rotate(-15 26 25)" />
        <ellipse cx="21" cy="37" rx="6" ry="4" fill="#FFD93D" transform="rotate(-15 21 37)" />
        {/* Paint drops */}
        <circle cx="17" cy="20" r="4" fill="#FF6B8A" opacity="0.8" />
        <circle cx="36" cy="18" r="3" fill="#4A90D9" opacity="0.7" />
        <circle cx="38" cy="28" r="3.5" fill="#6BCB77" opacity="0.7" />
        {/* Sparkle */}
        <path d="M40 12 L41.5 15 L44.5 16 L41.5 17 L40 20 L38.5 17 L35.5 16 L38.5 15 Z" fill="white" opacity="0.6" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Builder",
    description:
      "From MVPs to full products — I design and develop tools, apps, and platforms using modern technologies that people actually enjoy using.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        {/* 3D base */}
        <rect x="4" y="6" width="48" height="46" rx="14" fill="#3A70B9" />
        <rect x="4" y="4" width="48" height="46" rx="14" fill="#4A90D9" />
        {/* Highlight */}
        <rect x="6" y="6" width="44" height="20" rx="12" fill="white" opacity="0.15" />
        {/* Code brackets */}
        <path d="M18 20 L12 28 L18 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <path d="M38 20 L44 28 L38 36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        {/* Slash */}
        <path d="M30 16 L26 40" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        {/* Cursor blink */}
        <rect x="22" y="26" width="2" height="8" rx="1" fill="#c8e636" opacity="0.9" />
        {/* Sparkle */}
        <circle cx="42" cy="14" r="2" fill="white" opacity="0.4" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Storyteller",
    description:
      "Every product has a story. I connect brands with people through narrative design, content strategy, and authentic voice that builds lasting trust.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        {/* 3D base */}
        <rect x="4" y="6" width="48" height="46" rx="14" fill="#557F5B" />
        <rect x="4" y="4" width="48" height="46" rx="14" fill="#6B8F71" />
        {/* Highlight */}
        <rect x="6" y="6" width="44" height="20" rx="12" fill="white" opacity="0.15" />
        {/* Open book */}
        <path d="M28 16 L28 40" stroke="white" strokeWidth="1.5" opacity="0.5" />
        <path d="M28 16 C24 14 16 14 12 16 L12 38 C16 36 24 36 28 38" fill="white" opacity="0.2" stroke="white" strokeWidth="1.5" />
        <path d="M28 16 C32 14 40 14 44 16 L44 38 C40 36 32 36 28 38" fill="white" opacity="0.15" stroke="white" strokeWidth="1.5" />
        {/* Text lines */}
        <path d="M16 22 L24 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M16 26 L22 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M16 30 L23 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M32 22 L40 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M34 26 L40 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        {/* Sparkles */}
        <circle cx="42" cy="12" r="1.5" fill="#FFD93D" opacity="0.7" />
        <circle cx="14" cy="12" r="1" fill="#FFD93D" opacity="0.5" />
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
