"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categoryColors: Record<string, string> = {
  Design: "#B4A7D6",
  Creator: "#FF6B8A",
  Productivity: "#D4A853",
  Creative: "#FF8E53",
  Dev: "#306998",
  Building: "#4A90D9",
  Storytelling: "#E8703A",
  Automation: "#6B8F71",
};

const posts = [
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Actually Scale",
    excerpt: "Most design systems die within a year. Here is what separates the ones that thrive from the ones that become legacy debt.",
    category: "Design",
    date: "Mar 10, 2026",
    readingTime: "6 min",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&q=80",
  },
  {
    slug: "why-i-build-in-public",
    title: "Why I Build in Public (And You Should Too)",
    excerpt: "Sharing your work before it is perfect feels terrifying. But it is the fastest way to grow, learn, and connect with the right people.",
    category: "Creator",
    date: "Mar 7, 2026",
    readingTime: "4 min",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "automation-changed-my-workflow",
    title: "How Automation Changed My Entire Workflow",
    excerpt: "I went from spending 3 hours on repetitive tasks to 15 minutes. Here are the exact automations I set up.",
    category: "Productivity",
    date: "Mar 3, 2026",
    readingTime: "8 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "art-of-side-projects",
    title: "The Art of Side Projects",
    excerpt: "Side projects are not about shipping products. They are about developing taste, building skills, and exploring curiosity.",
    category: "Creative",
    date: "Feb 28, 2026",
    readingTime: "5 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "tailwind-tips-nobody-talks-about",
    title: "Tailwind Tips Nobody Talks About",
    excerpt: "After two years of daily Tailwind use, these are the patterns and utilities that made the biggest difference.",
    category: "Dev",
    date: "Feb 24, 2026",
    readingTime: "7 min",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=80",
  },
  {
    slug: "storytelling-in-product-design",
    title: "Storytelling in Product Design",
    excerpt: "Every great product tells a story. Here is how to weave narrative into your interfaces.",
    category: "Design",
    date: "Feb 20, 2026",
    readingTime: "6 min",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&q=80",
  },
];

/* Featured card - matches homepage style */
function FeaturedBlogCard({ post }: { post: (typeof posts)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div
        className="relative rounded-2xl overflow-hidden h-full min-h-[420px] group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="absolute top-5 left-5 right-5 z-10 flex items-center gap-4">
          <span className="text-xs font-sans text-white/80">{post.category}</span>
          <span className="text-white/40">·</span>
          <span className="text-xs font-sans text-white/70">{post.date}</span>
          <span className="text-white/40">·</span>
          <span className="text-xs font-sans text-white/70">{post.readingTime}</span>
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

/* Side card - matches homepage revamped style */
function SideBlogCard({ post }: { post: (typeof posts)[0] }) {
  const [hovered, setHovered] = useState(false);
  const catColor = categoryColors[post.category] || "#E8703A";

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div
        className="relative rounded-2xl overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg"
        style={{ backgroundColor: "#f7f2eb" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top image strip */}
        <div className="relative h-28 overflow-hidden flex-shrink-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          <div className="absolute top-3 right-3 z-10">
            <div className="w-8 h-8 rounded-full bg-[#c8e636] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={12} className="text-text-primary" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="mb-2.5">
            <span
              className="text-[10px] font-sans font-semibold uppercase tracking-widest"
              style={{ color: catColor }}
            >
              {post.category}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-sans text-text-tertiary">{post.date}</span>
            <span className="text-text-tertiary/40">·</span>
            <span className="text-[11px] font-sans text-text-tertiary">{post.readingTime}</span>
          </div>
          <h3 className="font-serif text-lg text-text-primary leading-snug mb-2 font-bold group-hover:text-brand-orange transition-colors duration-300">
            {post.title}
          </h3>
          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="font-sans text-xs text-text-secondary leading-relaxed overflow-hidden"
              >
                {post.excerpt}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-serif italic text-text-tertiary text-sm mb-3">
            blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
            The Storyteller&apos;s Log
          </h1>
          <p className="font-sans text-text-secondary text-base max-w-xl mb-14">
            Thoughts on design, building products, creativity, and the messy
            journey of figuring it all out.
          </p>
        </ScrollReveal>

        {/* Featured row: large + 2 stacked — matching homepage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6 mb-6" style={{ minHeight: "480px" }}>
          <ScrollReveal className="h-full">
            <div className="h-full min-h-[480px]">
              <FeaturedBlogCard post={posts[0]} />
            </div>
          </ScrollReveal>
          <div className="flex flex-col mt-6 lg:mt-0" style={{ minHeight: "480px" }}>
            {posts.slice(1, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={0.1 + i * 0.1} className="flex-1">
                <div className="h-full" style={{ paddingTop: i === 0 ? 0 : 3, paddingBottom: i === 0 ? 3 : 0 }}>
                  <SideBlogCard post={post} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Remaining posts in 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(3).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <SideBlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
