"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ReadersCornerPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          {/* White container with padding */}
          <div className="bg-white rounded-3xl shadow-sm border border-surface-muted/40 p-4 md:p-5">
            <div className="flex flex-col md:flex-row gap-6 min-h-[360px] md:min-h-[400px]">
              {/* Left side - info */}
              <div className="flex-1 flex flex-col justify-center py-4 px-4 md:px-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={18} className="text-brand-orange" />
                  <span className="font-serif italic text-text-tertiary text-sm">
                    Reader&apos;s Corner
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
                  Books, <span className="italic">thoughts,</span> and everything in between
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8 max-w-sm">
                  A curated space for books I&apos;m reading, articles that
                  caught my eye, random notes, excerpts, and whatever fits a
                  lively and aesthetic reader&apos;s corner.
                </p>
                <Link
                  href="/resources/readers-corner"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-6 py-3 font-sans text-sm font-medium hover:bg-brand-orange/90 transition-colors w-fit"
                >
                  Explore the Corner →
                </Link>
              </div>

              {/* Right side - image with rounded corners all 4 sides, snugs right */}
              <div className="flex-1 relative min-h-[260px] md:min-h-0">
                <div
                  className="w-full h-full rounded-2xl overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')",
                  }}
                >
                  {/* Fallback gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-lavender/40 to-brand-blue/30 rounded-2xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
