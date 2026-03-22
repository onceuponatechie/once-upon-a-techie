"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Twitter, Linkedin, Link2, Check } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categoryColors: Record<string, string> = {
  Design: "#B4A7D6",
  Creator: "#FF6B8A",
  Productivity: "#D4A853",
  Creative: "#FF8E53",
  Dev: "#306998",
};

const postData = {
  title: "Design Systems That Actually Scale",
  category: "Design",
  readingTime: "6 min",
  date: "March 10, 2026",
  heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop&q=80",
  content: [
    { type: "paragraph", text: "Most design systems die within their first year. They start with great intentions: a unified component library, consistent tokens, and shared principles. But somewhere between the second redesign and the third team using them differently, things fall apart." },
    { type: "heading", text: "The Foundation Problem" },
    { type: "paragraph", text: "The biggest mistake teams make is treating a design system as a project rather than a product. Projects have deadlines and deliverables. Products have users, feedback loops, and continuous iteration. When you treat your design system as a project, you build it once and expect it to last. When you treat it as a product, you plan for evolution from day one." },
    { type: "paragraph", text: "This shift in mindset changes everything. You start thinking about adoption metrics, developer experience, and documentation quality. You create channels for feedback and dedicate time for improvements. You version your releases and communicate changes proactively." },
    { type: "heading", text: "Tokens Over Components" },
    { type: "paragraph", text: "Here is a contrarian take: components are the least important part of a design system. Tokens are where the real power lives. Spacing scales, color primitives, typography stacks, motion curves these are the DNA of your visual language. Components are just expressions of that DNA." },
    { type: "paragraph", text: "When your tokens are solid, teams can build new components that feel native to the system without asking permission. When your tokens are weak, even the official components will feel inconsistent across different contexts." },
    { type: "heading", text: "The Documentation Gap" },
    { type: "paragraph", text: "If your design system is a tree falling in a forest, documentation is the sound it makes. Without it, the system might as well not exist. But good documentation is not just API references and prop tables. It is stories, examples, and guidance on when not to use something." },
    { type: "paragraph", text: "The best design system documentation I have seen reads like a conversation between a senior designer and a curious junior. It anticipates questions, provides context, and treats the reader as an intelligent person who just needs a little guidance." },
    { type: "heading", text: "Making It Last" },
    { type: "paragraph", text: "A design system that lasts is one that people want to use, not one they are forced to use. That means investing in developer experience, maintaining clear governance without bureaucracy, and celebrating contributions from the wider team. The systems that thrive are the ones that feel like they belong to everyone." },
  ],
  relatedPosts: [
    { slug: "tailwind-tips-nobody-talks-about", title: "Tailwind Tips Nobody Talks About", category: "Dev", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&q=80" },
    { slug: "storytelling-in-product-design", title: "Storytelling in Product Design", category: "Design", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&q=80" },
    { slug: "art-of-side-projects", title: "The Art of Side Projects", category: "Creative", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop&q=80" },
  ],
};

export default function BlogPostPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const catColor = categoryColors[postData.category] || "#E8703A";

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <motion.div
          className="h-full bg-brand-orange"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-24 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-sans text-text-tertiary hover:text-text-primary transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[11px] font-sans font-semibold uppercase tracking-wider"
                  style={{ color: catColor }}
                >
                  {postData.category}
                </span>
                <span className="text-[11px] font-sans text-text-tertiary">
                  {postData.readingTime}
                </span>
                <span className="text-[11px] font-sans text-text-tertiary">
                  {postData.date}
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
                {postData.title}
              </h1>

              <div className="flex items-center gap-3">
                <span className="text-xs font-sans text-text-tertiary mr-1">Share</span>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand-orange transition-all duration-300" style={{ backgroundColor: "#fafaf7" }} aria-label="Share on Twitter">
                  <Twitter size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand-orange transition-all duration-300" style={{ backgroundColor: "#fafaf7" }} aria-label="Share on LinkedIn">
                  <Linkedin size={14} />
                </a>
                <button onClick={handleCopyLink} className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:bg-brand-orange hover:text-white transition-all duration-300" style={{ backgroundColor: "#fafaf7" }} aria-label="Copy link">
                  {copied ? <Check size={14} /> : <Link2 size={14} />}
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden mb-12">
              <div
                className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url('${postData.heroImage}')` }}
              />
            </div>
          </ScrollReveal>

          {/* Body Content */}
          <div className="mb-20">
            {postData.content.map((block, i) => (
              <ScrollReveal key={i} delay={0.03 * i}>
                {block.type === "heading" ? (
                  <h2 className="font-serif text-2xl font-bold text-text-primary mt-12 mb-5">
                    {block.text}
                  </h2>
                ) : (
                  <p className="font-sans text-base text-text-secondary leading-[1.8] mb-5">
                    {block.text}
                  </p>
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* Related Posts — matching homepage card style */}
          <ScrollReveal>
            <div className="border-t border-surface-muted pt-12">
              <h3 className="font-serif text-xl font-bold text-text-primary mb-8">
                Keep Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {postData.relatedPosts.map((related) => {
                  const relCatColor = categoryColors[related.category] || "#E8703A";
                  return (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-surface-muted/20"
                      style={{ backgroundColor: "#fafaf7" }}
                    >
                      <div
                        className="w-full h-32 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${related.image}')` }}
                      />
                      <div className="p-4">
                        <span
                          className="text-[10px] font-sans font-semibold uppercase tracking-wider"
                          style={{ color: relCatColor }}
                        >
                          {related.category}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-text-primary mt-1 group-hover:text-brand-orange transition-colors duration-300">
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </motion.article>
    </>
  );
}
