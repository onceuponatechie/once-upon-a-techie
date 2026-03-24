"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Build {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription?: string;
  category?: string;
  tools?: string[];
  liveUrl?: string;
}

const placeholderBuilds: Build[] = [
  {
    _id: "1",
    title: "Digital Product Studio",
    slug: { current: "digital-product-studio" },
    shortDescription: "A full-stack SaaS platform for creators",
    category: "Web App",
    tools: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    _id: "2",
    title: "Brand Identity System",
    slug: { current: "brand-identity" },
    shortDescription: "Complete design system and brand guidelines",
    category: "Design",
    tools: ["Figma", "Framer", "CSS"],
  },
  {
    _id: "3",
    title: "Content Platform",
    slug: { current: "content-platform" },
    shortDescription: "Headless CMS-driven content experience",
    category: "Platform",
    tools: ["Sanity", "Next.js", "Vercel"],
  },
];

export default function ProjectsCarousel({ builds }: { builds?: Build[] }) {
  const items = builds && builds.length > 0 ? builds : placeholderBuilds;
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isInView, next]);

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold mb-12"
        >
          The Builds
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-video bg-text-primary rounded-3xl overflow-hidden"
        >
          {/* Background cycling images / gradient */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: [
                    "linear-gradient(135deg, #E8703A33, #e9d5ff33)",
                    "linear-gradient(135deg, #e9d5ff33, #5dcdf133)",
                    "linear-gradient(135deg, #d5ffd833, #FDE68A33)",
                  ][activeIndex % 3],
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Content overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {items[activeIndex]?.category && (
                  <span className="text-white/60 text-sm font-medium mb-2 block">
                    {items[activeIndex].category}
                  </span>
                )}
                <h3 className="text-white font-display text-2xl md:text-4xl font-bold mb-2">
                  {items[activeIndex]?.title}
                </h3>
                <p className="text-white/70 text-base md:text-lg max-w-xl mb-4">
                  {items[activeIndex]?.shortDescription}
                </p>
                <Link
                  href={`/builds/${items[activeIndex]?.slug.current}`}
                  className="inline-flex text-white font-medium hover:text-brand-orange transition-colors"
                >
                  View Case Study →
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail pills */}
          <div className="absolute bottom-8 right-8 z-20 flex gap-3">
            {items.map((item, i) => (
              <button
                key={item._id}
                onClick={() => setActiveIndex(i)}
                className={`glass rounded-2xl px-4 py-2 text-xs font-medium transition-all ${
                  i === activeIndex
                    ? "bg-white/60 text-text-primary scale-105"
                    : "text-white/70 hover:bg-white/30"
                }`}
              >
                {item.title.length > 15
                  ? item.title.slice(0, 15) + "…"
                  : item.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Link to all builds */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-right"
        >
          <Link
            href="/builds"
            className="text-text-secondary hover:text-brand-orange font-medium transition-colors"
          >
            See all builds →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
