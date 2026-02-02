"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonHoverVariants } from "@/components/motion/animations";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * Animated button component with subtle hover feedback
 * Usage: <Button variant="primary" href="/signup">Start for free</Button>
 */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center text-center";

  const variantStyles = {
    primary:
      "px-5 py-2.5 bg-primary text-white rounded-lg text-label-md hover:bg-primary-600 transition-colors shadow-soft",
    secondary:
      "px-4 py-2.5 text-center text-label-md text-neutral-700 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors",
    text: "px-4 py-2 text-label-md text-neutral-700 hover:text-neutral-900 transition-colors",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          className={combinedClassName}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          variants={buttonHoverVariants}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHoverVariants}
    >
      {children}
    </motion.button>
  );
}
