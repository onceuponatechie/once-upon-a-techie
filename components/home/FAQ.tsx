"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

const placeholderFAQs: FAQItem[] = [
  { _id: "1", question: "What kind of projects do you work on?", answer: "I focus on web applications, digital products, and brand experiences. From SaaS platforms to portfolio sites, I bring a builder's mindset paired with design sensibility." },
  { _id: "2", question: "Are you available for freelance work?", answer: "Yes! I'm always open to interesting collaborations. Whether it's a full product build or a creative sprint, let's chat about what you're working on." },
  { _id: "3", question: "What's your tech stack?", answer: "Next.js, TypeScript, Tailwind CSS, and Framer Motion for the frontend. Sanity CMS for content. Vercel for deployment. I pick the right tools for each project." },
  { _id: "4", question: "Do you offer free resources?", answer: "Absolutely! Check out the Creative Vault for templates, guides, and freebies. I believe in sharing what I learn along the way." },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display text-lg font-semibold text-text-primary group-hover:text-brand-orange transition-colors pr-4">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl text-text-secondary flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary leading-relaxed pb-5">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ faqs }: { faqs?: FAQItem[] }) {
  const items = faqs && faqs.length > 0 ? faqs : placeholderFAQs;
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Questions? Answers.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {items.map((item) => (
            <AccordionItem
              key={item._id}
              item={item}
              isOpen={openId === item._id}
              onToggle={() =>
                setOpenId(openId === item._id ? null : item._id)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
