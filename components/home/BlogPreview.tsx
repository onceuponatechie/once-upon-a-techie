"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categoryColors: Record<string, string> = {
  Building: "#4A90D9",
  Storytelling: "#E8703A",
  Automation: "#2D6A4F",
  Design: "#B4A7D6",
  Dev: "#306998",
  Creator: "#FF6B8A",
  Creative: "#FF8E53",
  Productivity: "#D4A853",
};

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
        className="relative rounded-2xl overflow-hidden h-full min-h-[520px] group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${post.imageBg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        <div className="absolute top-5 left-5 right-5 z-10 flex items-center gap-3">
          <span
            className="text-[10px] font-sans font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}
          >
            {post.category}
          </span>
          <span className="text-xs font-sans text-white/60">{post.date}</span>
          <span className="text-xs font-sans text-white/60">{post.readTime}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 leading-tight font-bold">
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

        <div className="absolute top-5 right-5 z-10">
          <div className="w-10 h-10 rounded-full bg-[#c8e636] flex items-center justify-center">
            <ArrowRight size={16} className="text-text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* Side blog card — revamped modern Framer aesthetic */
function SideCard({ post }: { post: (typeof posts)[0] }) {
  const catColor = categoryColors[post.category] || "#E8703A";

  return (
    <Link href="/blog" className="block h-full">
      <div
        className="rounded-2xl overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg border border-surface-muted/20"
        style={{ backgroundColor: "#fafaf7" }}
      >
        {/* Image strip at top */}
        <div className="relative h-32 overflow-hidden flex-shrink-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('${post.imageBg}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
          <div className="absolute top-3 right-3 z-10">
            <div className="w-8 h-8 rounded-full bg-[#c8e636] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={12} className="text-text-primary" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category — colored, above date */}
          <span
            className="text-[10px] font-sans font-semibold uppercase tracking-widest mb-2"
            style={{ color: catColor }}
          >
            {post.category}
          </span>

          {/* Date + read time */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-sans text-text-tertiary">{post.date}</span>
            <span className="text-text-tertiary/40">·</span>
            <span className="text-[11px] font-sans text-text-tertiary">{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg text-text-primary leading-snug font-bold group-hover:text-brand-orange transition-colors duration-300 mb-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-sans text-xs text-text-secondary leading-relaxed mt-auto">
            {post.excerpt}
          </p>
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

        {/* Layout: featured left, 2 stacked right — side cards fill featured height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ minHeight: "520px" }}>
          <ScrollReveal className="h-full">
            <FeaturedCard post={posts[0]} />
          </ScrollReveal>

          {/* Two side cards — each takes exactly half the height */}
          <div className="flex flex-col gap-3 h-full" style={{ minHeight: "520px" }}>
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
