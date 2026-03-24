"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "I like to build things that matter. Every product starts with a story, and every story deserves the right foundation.";

const highlightWords = ["build", "product", "right"];

export default function ScrollDiary() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });

  const words = text.split(" ");

  return (
    <section ref={ref} className="px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            const isHighlight = highlightWords.includes(word.toLowerCase().replace(/[.,!?]/g, ""));

            return (
              <Word
                key={i}
                word={word}
                start={start}
                end={end}
                progress={scrollYProgress}
                highlight={isHighlight}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  word,
  start,
  end,
  progress,
  highlight,
}: {
  word: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  highlight: boolean;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block mr-[0.3em] ${
        highlight ? "italic text-sageGreen" : "text-text-primary"
      }`}
    >
      {word}
    </motion.span>
  );
}
