"use client";

import { motion } from "framer-motion";
import { fadeInVariants, viewportOptions } from "./animations";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wrapper component that fades in section content on scroll
 * Usage: <FadeInSection>{content}</FadeInSection>
 */
export function FadeInSection({ children, className, delay = 0 }: FadeInSectionProps) {
  const variants = delay > 0 ? {
    ...fadeInVariants,
    visible: {
      ...fadeInVariants.visible,
      transition: {
        ...fadeInVariants.visible.transition,
        delay
      }
    }
  } : fadeInVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
