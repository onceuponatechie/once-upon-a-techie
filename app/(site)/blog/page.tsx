"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const posts = [
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Actually Scale",
    excerpt: "Most design systems die within a year. Here is what separates the ones that thrive from the ones that become legacy debt.",
    category: "Design",
    readingTime: "6 min",
    color: "from-brand-orange/20 to-brand-yellow/10",
  },
  {
    slug: "why-i-build-in-public",
    title: "Why I Build in Public (And You Should Too)",
    excerpt: "Sharing your work before it is perfect feels terrifying. But it is the fastest way to grow, learn, and connect with the right people.",
    category: "Creator",
    readingTime: "4 min",
    color: "from-brand-lavender/20 to-brand-blue/10",
  },
  {
    slug: "automation-changed-my-workflow",
    title: "How Automation Changed My Entire Workflow",
    excerpt: "I went from spending 3 hours on repetitive tasks to 15 minutes. Here are the exact automations I set up and how you can too.",
    category: "Productivity",
    readingTime: "8 min",
    color: "from-brand-green/20 to-brand-blue/10",
  },
  {
    slug: "art-of-side-projects",
    title: "The Art of Side Projects",
    excerpt: "Side projects are not about shipping products. They are about developing taste, building skills, and exploring curiosity.",
    category: "Creative",
    readingTime: "5 min",
    color: "from-brand-blue/20 to-brand-lavender/10",
  },
  {
    slug: "tailwind-tips-nobody-talks-about",
    title: "Tailwind Tips Nobody Talks About",
    excerpt: "After two years of daily Tailwind use, these are the patterns and utilities that made the biggest difference in my workflow.",
    category: "Dev",
    readingTime: "7 min",
    color: "from-brand-yellow/20 to-brand-orange/10",
  },
  {
    slug: "storytelling-in-product-design",
    title: "Storytelling in Product Design",
    excerpt: "Every great product tells a story. Here is how to weave narrative into your interfaces and make users feel something.",
    category: "Design",
    readingTime: "6 min",
    color: "from-brand-orange/20 to-brand-green/10",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="font-serif italic text-brand-green text-sm mb-3">
            blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-text-primary mb-4">
            The Storyteller&apos;s <span className="font-serif italic">Log</span>
          </h1>
          <p className="font-sans text-text-secondary text-base max-w-xl mb-14">
            Thoughts on design, building products, creativity, and the
            messy journey of figuring it all out.
          </p>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden hover:shadow-lg transition-shadow duration-300 min-h-[220px] flex flex-col justify-between">
                  {/* Hover image effect - slides in from top-right */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${post.color} rounded-bl-[60px] translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out`}
                  />

                  <div className="relative z-10">
                    {/* Category + Reading Time */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-brand-orange">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-sans text-text-tertiary">
                        <Clock size={11} />
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-normal text-text-primary mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read more */}
                  <div className="relative z-10 mt-5">
                    <span className="font-sans text-sm font-medium text-text-tertiary group-hover:text-brand-orange transition-colors duration-300">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
