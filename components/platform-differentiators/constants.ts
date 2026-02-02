/**
 * Copy constants for Platform Differentiators section
 *
 * Structure: Sequential explanation (not grid)
 * Each: Short title, one-line explanation, simple icon
 * Tone: Calm, confident, no hype, no technical deep dives
 */

export interface Differentiator {
  title: string;
  description: string;
  icon: string;
}

export const PLATFORM_DIFFERENTIATORS = {
  heading: "Platform Differentiators",

  items: [
    {
      title: "Approval Queue",
      description: "Every action waits for your approval before it runs.",
      icon: "CheckSquare",
    },
    {
      title: "Conversational coaching (not configuration)",
      description: "Tell your AI employees what to do in plain language. No setup wizards.",
      icon: "MessageSquare",
    },
    {
      title: "AI employee report card",
      description: "See what each AI employee accomplished and how well they performed.",
      icon: "FileText",
    },
    {
      title: "Predictable billing (bundles, hard caps)",
      description: "Fixed bundles with hard caps. No surprise charges, no usage anxiety.",
      icon: "DollarSign",
    },
    {
      title: "Mobile-first capture",
      description: "Add context from your phone. Work continues wherever you are.",
      icon: "Smartphone",
    },
  ] as const,
} as const;
