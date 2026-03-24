"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

interface Resource {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail?: any;
  category?: string;
  description?: string;
  gumroadUrl?: string;
  isFree?: boolean;
}

export default function ResourcesClient({
  resources,
}: {
  resources: Resource[];
}) {
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
            The Creative Vault
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Templates, guides, and freebies — grab what you need.
          </p>
        </motion.div>

        {resources.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-tertiary text-lg">
              Resources coming soon. Stay tuned!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <motion.div
                key={resource._id}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <a
                  href={resource.gumroadUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                    {resource.thumbnail && (
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={urlFor(resource.thumbnail).width(600).url()}
                          alt={resource.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        {resource.category && (
                          <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                            {resource.category}
                          </span>
                        )}
                        {resource.isFree && (
                          <span className="text-xs font-bold text-sageGreen bg-lightGreen px-2 py-0.5 rounded-full">
                            Free
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-lg font-bold group-hover:text-brand-orange transition-colors">
                        {resource.title}
                      </h2>
                      {resource.description && (
                        <p className="text-text-secondary text-sm mt-1 line-clamp-2">
                          {resource.description}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
