"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const sentence =
  "The unofficial diary of a techie, helping to build the right product and build the product right.";

const specialWords = new Set(["build", "product", "right.", "right"]);

function Word({
  word,
  range,
  progress,
  isSpecial,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  isSpecial: boolean;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress,
    range,
    isSpecial ? ["#CCCCCC", "#8DA399"] : ["#CCCCCC", "#1A1A1A"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block mr-[0.3em] transition-none ${isSpecial ? "italic" : ""}`}
    >
      {word}
    </motion.span>
  );
}

export default function ScrollDiary() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const words = sentence.split(" ");

  return (
    <section ref={ref} className="relative w-full py-32 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center mx-auto">
        <p className="font-display text-3xl md:text-5xl leading-[1.3] text-gray-300">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
            return (
              <Word
                key={i}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
                isSpecial={specialWords.has(cleanWord)}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
