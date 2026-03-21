"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const thumbnails = [
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=130&fit=crop&q=80", label: "Dashboard" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=130&fit=crop&q=80", label: "Code" },
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200&h=130&fit=crop&q=80", label: "Design" },
  { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=130&fit=crop&q=80", label: "Mobile" },
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
    <span className="inline-flex align-middle mx-1">
      <span className="relative w-[48px] h-[32px] md:w-[64px] md:h-[40px] rounded-xl md:rounded-2xl overflow-hidden border border-white/20 shadow-md inline-block align-middle">
        {thumbnails.map((thumb, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-xl md:rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: `url('${thumb.src}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
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
      className="relative flex items-start justify-center overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12"
      style={{
        background: "linear-gradient(135deg, #FAFAF7 0%, #F5EFE6 60%, #F5EFE6 100%)",
      }}
    >
      {/* Radial white glow from top left */}
      <div className="absolute top-0 left-0 w-[800px] h-[500px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Pill badge row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-surface-muted/30">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-xs font-sans font-medium text-text-primary">
              Open to Collaborations
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-[36px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-tight text-text-primary mb-5 font-bold"
        >
          Products, people, and the
          <br className="hidden sm:block" />
          <MediaBox />{" "}
          <span className="italic">why</span> that connects
          <br className="hidden sm:block" />
          <MediaBox /> them.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-sans text-base md:text-lg font-light text-text-secondary tracking-widest mb-8"
        >
          Creator · Builder · Storyteller
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
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
            className="font-sans text-text-secondary hover:text-brand-orange transition-colors underline underline-offset-4 decoration-text-secondary/40 hover:decoration-brand-orange"
          >
            Or grab a freebie →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
