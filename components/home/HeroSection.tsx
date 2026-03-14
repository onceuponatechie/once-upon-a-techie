"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SmileyGreeting from "@/components/shared/SmileyGreeting";

const thumbnails = [
  { bg: "#2D6A4F", label: "Project 1" },
  { bg: "#4A90D9", label: "Project 2" },
  { bg: "#B4A7D6", label: "Project 3" },
  { bg: "#E8703A", label: "Project 4" },
];

function MediaBox() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % thumbnails.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex align-middle mx-1.5">
      <span className="relative w-[72px] h-[42px] md:w-[130px] md:h-[72px] rounded-2xl md:rounded-3xl overflow-hidden bg-dark-card glassmorphism border border-white/20 shadow-lg inline-block align-middle">
        {thumbnails.map((thumb, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-2xl md:rounded-3xl flex items-center justify-center text-white text-[10px] md:text-xs font-sans"
            style={{ backgroundColor: thumb.bg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {thumb.label}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FAFAF7 0%, #F0EDE8 100%)",
      }}
    >
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/50 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        {/* Smiley */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <SmileyGreeting />
        </motion.div>

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 glassmorphism rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="text-sm font-sans text-text-secondary">
            Open to Collaborations
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-serif text-[40px] md:text-[56px] lg:text-[60px] leading-[1.1] tracking-tight text-text-primary mb-6"
        >
          <span className="italic">Products,</span>{" "}
          <span className="italic">people,</span> and the
          <br className="hidden sm:block" />
          <MediaBox />{" "}
          <span className="italic">stories</span> that connect
          <br className="hidden sm:block" />
          <MediaBox /> them.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-sans text-base md:text-lg font-medium text-text-secondary tracking-wide mb-10"
        >
          Creator · Builder · Storyteller
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/builds"
            className="rounded-full bg-brand-orange text-white px-8 py-4 font-sans font-medium hover:bg-brand-orange/90 transition-colors shadow-lg shadow-brand-orange/20"
          >
            Explore My Work →
          </Link>
          <Link
            href="/resources"
            className="font-sans text-text-secondary hover:text-brand-orange transition-colors"
          >
            Or grab a freebie →
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          <div className="flex -space-x-2">
            {["#E8703A", "#4A90D9", "#2D6A4F", "#B4A7D6", "#F5D060"].map(
              (color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  style={{ backgroundColor: color }}
                />
              )
            )}
          </div>
          <span className="text-xs font-sans text-text-tertiary">
            Trusted by Leaders
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
