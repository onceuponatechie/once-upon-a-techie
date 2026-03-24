"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

interface Book {
  _id: string;
  title: string;
  author: string;
  coverImage?: any;
  rating?: number;
  shortTake?: string;
  isCurrentlyReading?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export default function ReadersCornerClient({ books }: { books: Book[] }) {
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
            Reader&apos;s Corner
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Books that shape how I think about products, stories, and the craft of creation.
          </p>
        </motion.div>

        {books.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-tertiary text-lg">
              Book shelf coming soon!
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <motion.div
                key={book._id}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/60 backdrop-blur-sm border border-white/60 rounded-3xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  {book.coverImage && (
                    <div className="w-20 h-28 rounded-xl overflow-hidden relative flex-shrink-0">
                      <Image
                        src={urlFor(book.coverImage).width(200).url()}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-text-secondary text-sm mt-1">
                      {book.author}
                    </p>
                    {book.rating && (
                      <div className="flex gap-0.5 mt-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span
                            key={j}
                            className={`text-sm ${
                              j < book.rating!
                                ? "text-butterYellow"
                                : "text-surface-muted"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                    {book.isCurrentlyReading && book.currentPage && book.totalPages && (
                      <div className="mt-2">
                        <div className="w-full h-1.5 bg-surface-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brand-orange rounded-full"
                            style={{
                              width: `${(book.currentPage / book.totalPages) * 100}%`,
                            }}
                          />
                        </div>
                        <p className="text-xs text-text-tertiary mt-1">
                          {book.currentPage} / {book.totalPages} pages
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {book.shortTake && (
                  <p className="text-text-secondary text-sm mt-4 leading-relaxed">
                    {book.shortTake}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
