"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  heroImage?: any;
  excerpt?: string;
  body?: any[];
  tags?: string[];
  category?: string;
  publishedAt?: string;
  estimatedReadTime?: number;
}

export default function BlogPostClient({ post }: { post: Post }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <article ref={ref} className="px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="text-text-secondary hover:text-brand-orange text-sm font-medium transition-colors mb-6 inline-block"
          >
            ← Back to Stories
          </Link>

          <div className="flex items-center gap-3 mb-4">
            {post.category && (
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                {post.category}
              </span>
            )}
            {post.publishedAt && (
              <span className="text-xs text-text-tertiary">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            {post.estimatedReadTime && (
              <span className="text-xs text-text-tertiary">
                · {post.estimatedReadTime} min read
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-text-secondary text-lg mb-8">{post.excerpt}</p>
          )}
        </motion.div>

        {post.heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden mb-12 relative aspect-video"
          >
            <Image
              src={urlFor(post.heroImage).width(1200).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        )}

        {post.body && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-brand-orange"
          >
            <PortableText value={post.body} />
          </motion.div>
        )}

        {post.tags && post.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-2"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-surface-muted px-3 py-1.5 rounded-full text-text-secondary"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </article>
  );
}
