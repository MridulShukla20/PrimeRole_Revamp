/**
 * Framer Motion animation utilities for PrimeRole
 *
 * Design principles:
 * - Calm and premium feel
 * - No bounce or flashy effects
 * - Subtle and refined
 */

// Animation variants for sections fading in on scroll
export const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1] as const, // Custom ease for premium feel
    }
  }
};

// Animation variants for staggered children
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

// Card hover elevation animation
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
  },
  hover: {
    y: -4,
    boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: {
      duration: 0.25,
      ease: [0.22, 0.61, 0.36, 1] as const
    }
  }
};

// Button hover feedback animation
export const buttonHoverVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: [0.22, 0.61, 0.36, 1] as const
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: [0.22, 0.61, 0.36, 1] as const
    }
  }
};

// Viewport options for scroll-triggered animations
export const viewportOptions = {
  once: true, // Animate only once
  margin: "0px 0px -100px 0px", // Trigger slightly before entering viewport
  amount: 0.2 // Trigger when 20% of element is visible
};
