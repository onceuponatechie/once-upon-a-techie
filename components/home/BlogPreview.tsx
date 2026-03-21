"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const posts = [
  {
    title: "Why Every Builder Needs a Side Project",
    category: "Building",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    excerpt:
      "Side projects are the playground where innovation thrives. Here's why every creator should have one — and how to start without burning out.",
    imageBg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "The Art of Product Storytelling",
    category: "Storytelling",
    date: "Mar 5, 2026",
    readTime: "4 min read",
    excerpt:
      "Products don't sell themselves. Learn how to craft narratives that turn users into advocates.",
    imageBg: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Automation Secrets I Learned the Hard Way",
    category: "Automation",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    excerpt:
      "From Zapier to Python scripts — the shortcuts that actually saved me hundreds of hours.",
    imageBg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80",
  },
];

/* Large featured blog card (left) */
function FeaturedCard({ post }: { post: (typeof posts)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="/blog" className="block h-full">
      <div
        className="relative rounded-2xl overflow-hidden h-full min-h-[480px] group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${post.imageBg}')` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        {/* Top meta */}
        <div className="absolute top-5 left-5 right-5 z-10 flex items-center gap-4">
          <span className="text-xs font-sans text-white/80">
            {post.category}
          </span>
          <span className="text-white/40">·</span>
          <span className="text-xs font-sans text-white/70">
            {post.date}
          </span>
          <span className="text-white/40">·</span>
          <span className="text-xs font-sans text-white/70">
            {post.readTime}
          </span>
        </div>

        {/* Bottom title / excerpt on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 leading-tight">
            {post.title}
          </h3>
          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="font-sans text-sm text-white/70 leading-relaxed max-w-md"
              >
                {post.excerpt}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Arrow button */}
        <div className="absolute top-5 right-5 z-10">
          <div className="w-10 h-10 rounded-full bg-[#c8e636] flex items-center justify-center">
            <ArrowRight size={16} className="text-text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* Side blog card (right, no image by default, hover shows image) */
function SideCard({ post }: { post: (typeof posts)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="/blog" className="block">
      <div
        className="relative bg-white rounded-2xl p-6 overflow-hidden border border-surface-muted/30 hover:shadow-md transition-all duration-300 h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover image slide-in */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute top-3 right-3 w-36 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden z-10 shadow-lg"
              initial={{ x: 30, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: 30, y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${post.imageBg}')` }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-serif text-lg md:text-xl text-text-primary leading-snug flex-1">
            {post.title}
          </h3>
          <div className="w-9 h-9 rounded-full bg-[#c8e636] flex items-center justify-center flex-shrink-0">
            <ArrowRight size={14} className="text-text-primary" />
          </div>
        </div>

        {/* Excerpt */}
        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-[11px] font-sans font-medium text-text-tertiary uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-text-tertiary/40">·</span>
          <span className="text-xs font-sans text-text-tertiary">
            {post.date}
          </span>
          <span className="text-text-tertiary/40">·</span>
          <span className="text-xs font-sans text-text-tertiary">
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-4">
          <p className="font-serif italic text-text-tertiary text-base">
            From the Blog
          </p>
        </ScrollReveal>
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Latest <span className="italic">stories</span>
          </h2>
        </ScrollReveal>

        {/* Layout: large card left, 2 stacked cards right — equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ minHeight: "520px" }}>
          {/* Featured large card */}
          <ScrollReveal className="h-full">
            <FeaturedCard post={posts[0]} />
          </ScrollReveal>

          {/* Two side cards stacked — each takes exactly half the height */}
          <div className="flex flex-col gap-6 h-full">
            {posts.slice(1).map((post, i) => (
              <ScrollReveal key={post.title} delay={0.1 + i * 0.1} className="flex-1">
                <SideCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link
            href="/blog"
            className="font-sans text-sm text-text-secondary hover:text-brand-orange transition-colors"
          >
            Read all posts →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
