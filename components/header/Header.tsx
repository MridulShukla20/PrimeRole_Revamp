"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { buttonHoverVariants } from "@/components/motion/animations";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-semibold text-lg">PrimeRole</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/departments"
              className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Departments
            </Link>
            <Link
              href="/ai-employees"
              className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              AI Employees
            </Link>
            <Link
              href="/platform"
              className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Platform
            </Link>
            <Link
              href="/pricing"
              className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/book-demo" variant="text">
              Book a demo
            </Button>
            <Button href="/signup" variant="primary">
              Start for free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-100 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/departments"
                className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Departments
              </Link>
              <Link
                href="/ai-employees"
                className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Employees
              </Link>
              <Link
                href="/platform"
                className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platform
              </Link>
              <Link
                href="/pricing"
                className="text-body-md text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100">
                <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>
                  <motion.div
                    className="px-4 py-2.5 text-center text-label-md text-neutral-700 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHoverVariants}
                  >
                    Book a demo
                  </motion.div>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <motion.div
                    className="px-4 py-2.5 text-center bg-primary text-white rounded-lg text-label-md hover:bg-primary-600 transition-colors shadow-soft"
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHoverVariants}
                  >
                    Start for free
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
