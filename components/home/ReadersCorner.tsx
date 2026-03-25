"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const bookColors = ["#F87171", "#5dcdf1", "#FDE68A", "#e9d5ff"];

const fanPositions = [
  { x: -40, rotate: -15 },
  { x: -15, rotate: -5 },
  { x: 10, rotate: 5 },
  { x: 35, rotate: 15 },
];

export default function ReadersCorner() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
        {/* Left: Fanning books */}
        <motion.div
          initial="stacked"
          whileInView="fanned"
          viewport={{ once: false, amount: 0.5 }}
          className="relative w-48 h-64 md:w-56 md:h-72 flex-shrink-0"
        >
          {bookColors.map((color, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-xl shadow-lg"
              style={{
                backgroundColor: color,
                zIndex: bookColors.length - i,
                transformOrigin: "bottom center",
              }}
              variants={{
                stacked: { x: 0, rotate: 0 },
                fanned: {
                  x: fanPositions[i].x,
                  rotate: fanPositions[i].rotate,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: i * 0.05,
                  },
                },
              }}
            >
              {/* Book spine lines */}
              <div className="absolute top-4 left-4 right-4 space-y-2">
                <div className="h-2 bg-white/30 rounded-full w-3/4" />
                <div className="h-2 bg-white/20 rounded-full w-1/2" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Text content */}
        <div className="text-center md:text-left max-w-md">
          <ScrollReveal>
            <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
              The Reader&apos;s{" "}
              <span className="italic text-sageGreen">Corner</span>
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8">
              A curated space for books I&apos;m reading, articles that caught my
              eye, random notes, excerpts, and whatever fits a lively and
              aesthetic reader&apos;s corner.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/resources/readers-corner"
              className="inline-flex items-center gap-2 rounded-full bg-brandOrange text-white px-6 py-3 font-sans text-sm font-medium hover:bg-brandOrange/90 transition-colors"
            >
              Peep the shelf →
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
