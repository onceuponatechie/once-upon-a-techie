"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  category?: string;
}

const categoryColors: Record<string, string> = {
  Product: "bg-butterYellow text-text-primary",
  Design: "bg-lavender text-text-primary",
  Tech: "bg-cursorBlue text-white",
  Story: "bg-lightGreen text-text-primary",
  default: "bg-surface-muted text-text-secondary",
};

const placeholderPosts: BlogPost[] = [
  { _id: "1", title: "The Art of Digital Storytelling", slug: { current: "digital-storytelling" }, excerpt: "How narratives shape the products we build and the experiences we create.", category: "Story" },
  { _id: "2", title: "Building in Public: A Retrospective", slug: { current: "building-in-public" }, excerpt: "Lessons from shipping products while documenting the journey.", category: "Product" },
  { _id: "3", title: "Design Systems That Scale", slug: { current: "design-systems" }, excerpt: "Creating flexible, consistent design foundations for growing teams.", category: "Design" },
  { _id: "4", title: "The Developer's Creative Toolkit", slug: { current: "creative-toolkit" }, excerpt: "Tools and workflows that bridge the gap between code and creativity.", category: "Tech" },
];

/* ── 3D icon in glassmorphic circle ── */
function CategoryIcon({ category }: { category: string }) {
  const icons: Record<string, React.ReactNode> = {
    Product: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a4 4 0 0 0-8 0v2" />
      </svg>
    ),
    Design: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
    Tech: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    Story: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  };
  return (
    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-primary">
      {icons[category] || icons.Story}
    </div>
  );
}

export default function BlogSection({ posts }: { posts?: BlogPost[] }) {
  const items = posts && posts.length > 0 ? posts : placeholderPosts;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold mb-4"
        >
          From the Desk
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary mb-12 text-lg"
        >
          Thoughts on building, creating, and everything in between.
        </motion.p>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((post, i) => {
            const colorClass =
              categoryColors[post.category || ""] || categoryColors.default;

            return (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="group relative bg-white/60 backdrop-blur-sm border border-white/60 rounded-3xl p-6 h-full overflow-hidden transition-all hover:shadow-lg">
                    {/* Hover image reveal — gradient peek */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <CategoryIcon category={post.category || "Story"} />
                        {post.category && (
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${colorClass}`}
                          >
                            {post.category}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-brand-orange transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            href="/blog"
            className="text-text-secondary hover:text-brand-orange font-medium transition-colors"
          >
            Read all stories →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
