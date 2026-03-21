"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/builds", label: "Builds" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full">
        <div
          className="w-full px-6 md:px-10 py-3 flex items-center border-b border-white/30"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(250,248,244,0.5) 100%)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-base font-bold text-text-primary whitespace-nowrap flex-shrink-0"
          >
            Once Upon a Techie
          </Link>

          {/* Desktop Links - centered */}
          <div className="hidden md:flex items-center justify-center gap-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-sans text-[13px] text-text-secondary hover:text-text-primary transition-colors py-1"
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brand-orange rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:flex rounded-full bg-brand-orange text-white px-5 py-2.5 text-[13px] font-medium hover:bg-brand-orange/90 transition-colors flex-shrink-0"
          >
            Build With Me
          </Link>

          {/* Mobile Hamburger - orange circle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden bg-brand-orange rounded-full w-10 h-10 flex items-center justify-center ml-auto"
            aria-label="Open menu"
          >
            <Menu size={18} className="text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F5EFE6]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 bg-brand-orange rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={18} className="text-white" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl font-bold text-text-primary hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-brand-orange text-white px-8 py-3 text-base font-medium"
                >
                  Build With Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
