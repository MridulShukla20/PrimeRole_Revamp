/**
 * Copy constants for How PrimeRole Works section
 *
 * Core model: Humans and AI employees work in a loop
 * Presentation: Diagram-first, minimal text
 * No hype language, no over-explanation
 */

export interface WorkflowStep {
  stepNumber: number;
  label: string;
}

export const HOW_IT_WORKS = {
  heading: "How PrimeRole works",
  description:
    "Humans and AI employees work together in a continuous loop. You stay in control.",

  steps: [
    {
      stepNumber: 1,
      label: "Share context",
    },
    {
      stepNumber: 2,
      label: "AI suggests actions",
    },
    {
      stepNumber: 3,
      label: "Human approval",
    },
    {
      stepNumber: 4,
      label: "Actions executed",
    },
  ] as const,
} as const;
