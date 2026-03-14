"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Sparkles,
  PenTool,
  Rocket,
} from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const posts = [
  {
    title: "Why Every Builder Needs a Side Project",
    category: "Building",
    readTime: "5 min read",
    excerpt:
      "Side projects are the playground where innovation thrives. Here's why every creator should have one.",
    Icon: Rocket,
    color: "#E8703A",
    hoverBg: "#E8703A",
  },
  {
    title: "The Art of Product Storytelling",
    category: "Storytelling",
    readTime: "4 min read",
    excerpt:
      "Products don't sell themselves. Learn how to craft narratives that turn users into advocates.",
    Icon: PenTool,
    color: "#B4A7D6",
    hoverBg: "#B4A7D6",
  },
  {
    title: "Automation Secrets I Learned the Hard Way",
    category: "Automation",
    readTime: "6 min read",
    excerpt:
      "From Zapier to Python scripts — the shortcuts that actually saved me hundreds of hours.",
    Icon: Sparkles,
    color: "#2D6A4F",
    hoverBg: "#2D6A4F",
  },
  {
    title: "Design Thinking for Non-Designers",
    category: "Design",
    readTime: "3 min read",
    excerpt:
      "You don't need to be a designer to think like one. A practical guide to solving problems beautifully.",
    Icon: Lightbulb,
    color: "#4A90D9",
    hoverBg: "#4A90D9",
  },
];

function BlogCard({
  post,
}: {
  post: (typeof posts)[0];
}) {
  return (
    <motion.div
      className="group relative bg-surface-light rounded-2xl p-6 overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Hover image slide-in */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-3xl overflow-hidden z-10"
        initial={{ x: 80, y: -60, opacity: 0 }}
        whileHover={{ x: 0, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ backgroundColor: post.hoverBg }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <post.Icon size={32} className="text-white/80" />
        </div>
      </motion.div>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
        style={{ backgroundColor: `${post.color}15` }}
      >
        <post.Icon size={24} style={{ color: post.color }} />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-sans font-medium text-text-tertiary uppercase tracking-wider">
          {post.category}
        </span>
        <span className="text-text-tertiary/40">·</span>
        <span className="text-xs font-sans text-text-tertiary">
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-lg text-text-primary mb-3 leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
        {post.excerpt}
      </p>

      {/* Read more */}
      <span className="inline-flex items-center text-sm font-sans font-medium text-brand-orange group-hover:underline">
        Read more →
      </span>
    </motion.div>
  );
}

export default function BlogPreview() {
  return (
    <section className="bg-surface-cream py-24 md:py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <Link href="/blog">
                <BlogCard post={post} />
              </Link>
            </ScrollReveal>
          ))}
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
