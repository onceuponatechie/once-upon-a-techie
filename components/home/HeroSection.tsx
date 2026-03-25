"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SmileyGreeting from "@/components/shared/SmileyGreeting";

const thumbnails = [
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=130&fit=crop&q=80", label: "Dashboard" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=130&fit=crop&q=80", label: "Code" },
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200&h=130&fit=crop&q=80", label: "Design" },
  { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=130&fit=crop&q=80", label: "Mobile" },
];

function InlineMedia() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % thumbnails.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex align-middle mx-2">
      <span className="relative w-[90px] md:w-[130px] h-[0.8em] rounded-[2rem] overflow-hidden bg-gray-200 inline-block align-middle">
        {thumbnails.map((thumb, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-[2rem] bg-cover bg-center"
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
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FAFAF7 0%, #F5EFE6 60%, #F5EFE6 100%)",
      }}
    >
      {/* Radial white glow from top left */}
      <div className="absolute top-0 left-0 w-[800px] h-[500px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        style={{ y }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Smiley */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <SmileyGreeting />
        </motion.div>

        {/* Pill badge row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-sans font-medium text-text-primary">
              Open to Collaborations
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-display text-6xl md:text-[5.5rem] leading-[1.05] tracking-tight text-text-primary"
        >
          <span className="italic">Products,</span>{" "}
          <span className="italic">people,</span> and the
          <br />
          <InlineMedia />{" "}
          <span className="italic">stories</span> that connect
          <br />
          <InlineMedia /> them.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.9 }}
          className="text-lg md:text-xl font-sans text-gray-600 mt-10 tracking-wide"
        >
          Creator · Builder · Storyteller
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            href="/builds"
            className="rounded-full bg-brandOrange text-white px-8 py-4 font-sans font-medium hover:bg-brandOrange/90 transition-colors shadow-lg shadow-brandOrange/20"
          >
            Start With This →
          </Link>
          <Link
            href="/resources"
            className="font-sans text-gray-500 hover:text-brandOrange transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-brandOrange"
          >
            Or grab a freebie →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
