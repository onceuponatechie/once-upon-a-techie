"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

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

/* Featured card - same style as homepage */
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

/* Side card - same style as homepage */
function SideBlogCard({ post }: { post: (typeof posts)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div
        className="relative bg-white rounded-2xl p-6 overflow-hidden border border-surface-muted/30 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute top-3 right-3 w-36 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden z-10 shadow-lg"
              initial={{ x: 30, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: 30, y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }} />
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <div className="flex items-start justify-between gap-3 mb-4">
            <h3 className="font-serif text-lg md:text-xl text-text-primary leading-snug flex-1 font-bold">
              {post.title}
            </h3>
            <div className="w-9 h-9 rounded-full bg-[#c8e636] flex items-center justify-center flex-shrink-0">
              <ArrowRight size={14} className="text-text-primary" />
            </div>
          </div>
          <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-[11px] font-sans font-medium text-text-tertiary uppercase tracking-wider">{post.category}</span>
          <span className="text-text-tertiary/40">·</span>
          <span className="text-xs font-sans text-text-tertiary">{post.date}</span>
          <span className="text-text-tertiary/40">·</span>
          <span className="flex items-center gap-1 text-xs font-sans text-text-tertiary"><Clock size={11} />{post.readingTime}</span>
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

        {/* Featured row: large + 2 stacked (same as homepage) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" style={{ minHeight: "480px" }}>
          <ScrollReveal className="h-full">
            <FeaturedBlogCard post={posts[0]} />
          </ScrollReveal>
          <div className="flex flex-col gap-6 h-full">
            {posts.slice(1, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={0.1 + i * 0.1} className="flex-1">
                <SideBlogCard post={post} />
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
