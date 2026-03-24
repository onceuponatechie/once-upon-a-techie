"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={ref} className="px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Build With Me
          </h1>
          <p className="text-text-secondary text-lg">
            Got a project in mind? Let&apos;s make something great together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-white/80 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-white/80 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-secondary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-white/60 border border-white/80 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-orange/30 resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-brand-orange text-white font-semibold px-8 py-3.5 rounded-full hover:bg-brand-orange/90 transition-colors"
          >
            Send Message →
          </button>
        </motion.form>
      </div>
    </div>
  );
}
