"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div ref={ref} className="px-6 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            About
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            I&apos;m a creator, builder, and storyteller. I make things for the
            internet — products that solve problems, content that resonates, and
            experiences that stick.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-text-secondary leading-relaxed text-lg"
        >
          <p>
            My work sits at the intersection of design, technology, and
            narrative. I believe every great product tells a story, and every
            story can be a product.
          </p>
          <p>
            When I&apos;m not building, you&apos;ll find me reading, writing, or
            experimenting with new tools and frameworks. I share what I learn
            through resources, blog posts, and the occasional freebie.
          </p>
          <p>
            This portfolio is built with Next.js, TypeScript, Tailwind CSS,
            Framer Motion, and Sanity CMS — because the tools you choose say
            something about how you think.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/builds"
            className="bg-text-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-text-primary/90 transition-colors text-center"
          >
            See the Builds →
          </Link>
          <Link
            href="/contact"
            className="bg-white/60 backdrop-blur-sm border border-white/60 text-text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-white/80 transition-colors text-center"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
