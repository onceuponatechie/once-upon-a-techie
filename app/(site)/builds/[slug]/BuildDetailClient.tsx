"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/client";

interface Build {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail?: any;
  heroScreenshot?: any;
  screenshots?: any[];
  shortDescription?: string;
  caseStudy?: any[];
  tools?: string[];
  category?: string;
  liveUrl?: string;
}

export default function BuildDetailClient({ build }: { build: Build }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <article ref={ref} className="px-6 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/builds"
            className="text-text-secondary hover:text-brand-orange text-sm font-medium transition-colors mb-6 inline-block"
          >
            ← Back to Builds
          </Link>
          {build.category && (
            <p className="text-brand-orange text-sm font-semibold uppercase tracking-wider mb-2">
              {build.category}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {build.title}
          </h1>
          {build.shortDescription && (
            <p className="text-text-secondary text-lg">{build.shortDescription}</p>
          )}
        </motion.div>

        {/* Hero screenshot */}
        {build.heroScreenshot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden mb-12 relative aspect-video"
          >
            <Image
              src={urlFor(build.heroScreenshot).width(1200).url()}
              alt={build.title}
              fill
              className="object-cover"
            />
          </motion.div>
        )}

        {/* Tools & live link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          {build.tools?.map((tool) => (
            <span
              key={tool}
              className="text-sm bg-white/60 backdrop-blur-sm border border-white/60 px-4 py-1.5 rounded-full text-text-secondary"
            >
              {tool}
            </span>
          ))}
          {build.liveUrl && (
            <a
              href={build.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm font-semibold text-brand-orange hover:underline"
            >
              View Live →
            </a>
          )}
        </motion.div>

        {/* Case study body */}
        {build.caseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-brand-orange"
          >
            <PortableText value={build.caseStudy} />
          </motion.div>
        )}

        {/* Screenshots gallery */}
        {build.screenshots && build.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {build.screenshots.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden relative aspect-video"
              >
                <Image
                  src={urlFor(img).width(800).url()}
                  alt={`${build.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </article>
  );
}
