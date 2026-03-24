"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const bookColors = ["#E8703A", "#e9d5ff", "#FDE68A", "#d5ffd8"];

function FanningBooks({ isInView }: { isInView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const angles = hovered ? [-18, -6, 6, 18] : [-4, -1.5, 1.5, 4];
  const translations = hovered ? [-30, -10, 10, 30] : [-6, -2, 2, 6];

  return (
    <div
      className="relative w-48 h-64 md:w-56 md:h-72 mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {bookColors.map((color, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, rotate: 0, x: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  rotate: angles[i],
                  x: translations[i],
                }
              : { opacity: 0, rotate: 0, x: 0 }
          }
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 200,
            delay: i * 0.08,
          }}
          className="absolute inset-0 rounded-2xl shadow-lg"
          style={{
            backgroundColor: color,
            zIndex: i,
            originX: "50%",
            originY: "100%",
          }}
        >
          {/* Book spine detail */}
          <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-black/10 rounded-full" />
          {/* Title lines */}
          <div className="absolute top-8 left-8 right-6 space-y-2">
            <div className="h-2 bg-black/15 rounded-full w-3/4" />
            <div className="h-2 bg-black/10 rounded-full w-1/2" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ReadersCorner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Books animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <FanningBooks isInView={isInView} />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Reader&apos;s Corner
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            Books shape how I think about products, stories, and the craft of creation.
            Here&apos;s what&apos;s on the shelf and what&apos;s shaping my perspective.
          </p>
          <Link
            href="/resources/readers-corner"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all"
          >
            Peep the shelf
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
