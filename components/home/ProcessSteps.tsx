"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const personas = [
  {
    title: "Creator",
    description:
      "I craft visual stories, write about the intersection of tech and creativity, and turn abstract ideas into tangible experiences that resonate with real people.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="4" y="6" width="44" height="42" rx="12" fill="#C85A2A" />
        <rect x="4" y="4" width="44" height="42" rx="12" fill="#E8703A" />
        <rect x="6" y="6" width="40" height="18" rx="10" fill="white" opacity="0.12" />
        <rect x="22" y="13" width="4" height="20" rx="2" fill="white" opacity="0.85" transform="rotate(-15 24 23)" />
        <ellipse cx="19" cy="35" rx="5.5" ry="3.5" fill="#FFD93D" transform="rotate(-15 19 35)" />
        <circle cx="16" cy="18" r="3.5" fill="#FF6B8A" opacity="0.75" />
        <circle cx="34" cy="16" r="2.5" fill="#4A90D9" opacity="0.65" />
        <circle cx="36" cy="26" r="3" fill="#6BCB77" opacity="0.65" />
        <path d="M38 11 L39.5 14 L42.5 15 L39.5 16 L38 19 L36.5 16 L33.5 15 L36.5 14 Z" fill="white" opacity="0.5" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Builder",
    description:
      "From MVPs to full products — I design and develop tools, apps, and platforms using modern technologies that people actually enjoy using day to day.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="4" y="6" width="44" height="42" rx="12" fill="#3A70B9" />
        <rect x="4" y="4" width="44" height="42" rx="12" fill="#4A90D9" />
        <rect x="6" y="6" width="40" height="18" rx="10" fill="white" opacity="0.12" />
        <path d="M17 19 L11 26 L17 33" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <path d="M35 19 L41 26 L35 33" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <path d="M28 14 L24 38" stroke="#FFD93D" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        <rect x="21" y="24" width="2" height="7" rx="1" fill="#c8e636" opacity="0.85" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Storyteller",
    description:
      "Every product has a story. I connect brands with people through narrative design, content strategy, and authentic voice that builds lasting trust and loyalty.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="4" y="6" width="44" height="42" rx="12" fill="#557F5B" />
        <rect x="4" y="4" width="44" height="42" rx="12" fill="#6B8F71" />
        <rect x="6" y="6" width="40" height="18" rx="10" fill="white" opacity="0.12" />
        <path d="M26 14 L26 38" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <path d="M26 14 C22 12 15 12 11 14 L11 35 C15 33 22 33 26 35" fill="white" opacity="0.18" stroke="white" strokeWidth="1.5" />
        <path d="M26 14 C30 12 37 12 41 14 L41 35 C37 33 30 33 26 35" fill="white" opacity="0.12" stroke="white" strokeWidth="1.5" />
        <path d="M15 20 L23 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M15 24 L21 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M15 28 L22 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M30 20 L38 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M32 24 L38 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="40" cy="10" r="1.5" fill="#FFD93D" opacity="0.65" />
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
    [0.92, 1 - (total - 1 - index) * 0.02]
  );

  return (
    <motion.div
      ref={cardRef}
      className="sticky"
      style={{ top: `${140 + index * 24}px`, y, opacity, scale }}
    >
      <div
        className="rounded-3xl overflow-hidden border-2 border-white/70 flex flex-col md:flex-row"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.65) 0%, rgba(250,248,244,0.55) 100%)",
          backdropFilter: "blur(16px)",
          boxShadow:
            "0 12px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        {/* Image side */}
        <div className="md:w-2/5 min-h-[220px] md:min-h-[320px]">
          <div
            className="w-full h-full min-h-[220px] md:min-h-[320px] bg-cover bg-center"
            style={{ backgroundImage: `url('${persona.image}')` }}
          />
        </div>

        {/* Content side */}
        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-5">{persona.icon}</div>
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
