"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

interface Build {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail?: any;
  shortDescription?: string;
  tools?: string[];
  category?: string;
  liveUrl?: string;
}

export default function BuildsClient({ builds }: { builds: Build[] }) {
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
            The Builds
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Products, experiments, and everything I&apos;ve shipped.
          </p>
        </motion.div>

        {builds.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-tertiary text-lg">
              Projects coming soon. Check back later!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {builds.map((build, i) => (
              <motion.div
                key={build._id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/builds/${build.slug.current}`}>
                  <div className="group bg-white/60 backdrop-blur-sm border border-white/60 rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                    {build.thumbnail && (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={urlFor(build.thumbnail).width(800).url()}
                          alt={build.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      {build.category && (
                        <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                          {build.category}
                        </span>
                      )}
                      <h2 className="font-display text-xl font-bold mt-1 mb-2 group-hover:text-brand-orange transition-colors">
                        {build.title}
                      </h2>
                      {build.shortDescription && (
                        <p className="text-text-secondary text-sm line-clamp-2">
                          {build.shortDescription}
                        </p>
                      )}
                      {build.tools && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {build.tools.slice(0, 4).map((tool) => (
                            <span
                              key={tool}
                              className="text-xs bg-surface-muted px-3 py-1 rounded-full text-text-secondary"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
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
