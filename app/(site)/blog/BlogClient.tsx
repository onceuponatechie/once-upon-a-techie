"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  heroImage?: any;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  estimatedReadTime?: number;
}

const categoryColors: Record<string, string> = {
  Product: "bg-butterYellow",
  Design: "bg-lavender",
  Tech: "bg-cursorBlue text-white",
  Story: "bg-lightGreen",
};

export default function BlogClient({ posts }: { posts: Post[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div ref={ref} className="px-6 pt-32 pb-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Stories
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            From the desk — thoughts on building, creating, and everything in between.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-tertiary text-lg">
              Stories coming soon. Stay tuned!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="group bg-white/60 backdrop-blur-sm border border-white/60 rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                    {post.heroImage && (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={urlFor(post.heroImage).width(800).url()}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {post.category && (
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              categoryColors[post.category] || "bg-surface-muted"
                            }`}
                          >
                            {post.category}
                          </span>
                        )}
                        {post.estimatedReadTime && (
                          <span className="text-xs text-text-tertiary">
                            {post.estimatedReadTime} min read
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-xl font-bold mb-2 group-hover:text-brand-orange transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-text-secondary text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
