"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const bookCovers = [
  { title: "Atomic Habits", color: "#E8703A" },
  { title: "Creative Confidence", color: "#4A90D9" },
  { title: "Show Your Work", color: "#2D6A4F" },
  { title: "Steal Like an Artist", color: "#B4A7D6" },
];

export default function ReadersCornerPreview() {
  return (
    <section className="bg-surface-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden gradient-border">
            <div className="absolute inset-[1.5px] rounded-3xl overflow-hidden bg-surface-warm">
              <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[500px]">
                {/* Left side - info */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={18} className="text-brand-orange" />
                    <span className="text-xs font-sans uppercase tracking-wider text-text-tertiary">
                      Reader&apos;s Corner
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                    Books, <span className="italic">thoughts,</span>
                    <br />
                    and everything in between
                  </h2>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8 max-w-sm">
                    A curated collection of books I&apos;m reading, articles
                    that caught my eye, random notes, excerpts, stories,
                    and visual stories — my own little Pinterest for
                    the curious mind.
                  </p>
                  <Link
                    href="/resources/readers-corner"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-6 py-3 font-sans text-sm font-medium hover:bg-brand-orange/90 transition-colors w-fit"
                  >
                    Explore the Corner →
                  </Link>
                </div>

                {/* Right side - visual */}
                <div className="flex-1 relative p-8 flex items-center justify-center overflow-hidden">
                  <div className="relative flex gap-3">
                    {bookCovers.map((book, i) => (
                      <ScrollReveal
                        key={book.title}
                        direction="right"
                        delay={0.3 + i * 0.15}
                      >
                        <div
                          className="w-[100px] h-[140px] md:w-[120px] md:h-[170px] rounded-xl shadow-lg flex items-end p-3"
                          style={{
                            backgroundColor: book.color,
                            transform: `rotate(${(i - 1.5) * 3}deg)`,
                          }}
                        >
                          <span className="text-white text-xs font-sans font-medium leading-tight">
                            {book.title}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
