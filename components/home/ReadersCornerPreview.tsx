"use client";

import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ReadersCornerPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Italicized label matching other sections */}
        <ScrollReveal className="text-center mb-4">
          <p className="font-serif italic text-text-tertiary text-base">
            Reader&apos;s Corner
          </p>
        </ScrollReveal>
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Books, <span className="italic">thoughts,</span> and everything in between
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          {/* White container with padding */}
          <div className="bg-white rounded-3xl shadow-sm border border-surface-muted/40 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 min-h-[380px] md:min-h-[420px]">
              {/* Left side - info */}
              <div className="flex-1 flex flex-col justify-center py-4 md:pl-4">
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

              {/* Right side - image with rounded corners on all 4 sides, padded inside container */}
              <div className="flex-1 relative min-h-[280px] md:min-h-0">
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
