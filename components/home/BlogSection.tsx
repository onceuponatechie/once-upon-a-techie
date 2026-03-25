"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categoryColors: Record<string, string> = {
  Building: "#E8703A",
  Storytelling: "#e9d5ff",
  Automation: "#5dcdf1",
  Design: "#FDE68A",
};

const posts = [
  {
    title: "Why Every Builder Needs a Side Project",
    category: "Building",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    excerpt:
      "Side projects are the playground where innovation thrives. Here's why every creator should have one.",
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
  {
    title: "Designing for Delight, Not Just Function",
    category: "Design",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    excerpt:
      "Great design makes people feel something. Here's how to inject delight into every pixel.",
    imageBg: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&q=80",
  },
];

function BlogCard({ post }: { post: (typeof posts)[0] }) {
  const [hovered, setHovered] = useState(false);
  const catColor = categoryColors[post.category] || "#888";

  return (
    <Link href="/blog" className="block">
      <div
        className="relative rounded-[2rem] bg-lightCream p-5 md:p-8 border border-gray-100 h-[280px] md:h-[320px] group overflow-hidden flex flex-col justify-between"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Category icon circle */}
        <div
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 flex items-center justify-center mb-4"
          style={{ boxShadow: `0 0 0 2px ${catColor}20` }}
        >
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: catColor }}
          />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 text-[11px] font-sans text-gray-400 mb-2">
          <span>{post.date}</span>
          <span>·</span>
          <span style={{ color: catColor }}>{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg md:text-2xl text-text-primary leading-snug mb-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3 hidden md:block">
          {post.excerpt}
        </p>

        {/* Read more */}
        <span className="text-xs font-sans font-medium text-brandOrange mt-auto">
          Read more →
        </span>

        {/* Hover image slide-in */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 z-10 rounded-[2rem] overflow-hidden"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${post.imageBg}')` }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-xl text-white leading-snug">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-text-primary">
            From the{" "}
            <span className="italic text-lavender">Desk</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link
            href="/blog"
            className="font-sans text-sm text-gray-500 hover:text-brandOrange transition-colors"
          >
            Read all stories →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
