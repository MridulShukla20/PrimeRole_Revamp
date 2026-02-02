/**
 * Copy constants for Departments section
 *
 * Departments: Sales, Marketing, Hiring
 * Each card: Name, 1-line outcome, 3 concrete outcomes, AI employees, CTA
 * No detailed descriptions, no how-it-works logic
 */

export interface AIEmployee {
  name: string;
  role: string;
}

export interface Department {
  name: string;
  outcome: string;
  concreteOutcomes: [string, string, string];
  aiEmployees: AIEmployee[];
  ctaText: string;
}

export const DEPARTMENTS: Department[] = [
  {
    name: "Sales",
    outcome: "Generate qualified leads faster",
    concreteOutcomes: [
      "Outbound campaigns run automatically",
      "Follow-ups handled without delay",
      "Pipeline stays updated in real-time",
    ],
    aiEmployees: [
      { name: "Alex", role: "Sales Development Rep" },
      { name: "Jordan", role: "Account Executive" },
      { name: "Morgan", role: "Sales Operations" },
    ],
    ctaText: "Explore AI employees",
  },
  {
    name: "Marketing",
    outcome: "Consistent content without constant planning",
    concreteOutcomes: [
      "Content published on schedule",
      "Campaign performance tracked automatically",
      "Social posts written and queued",
    ],
    aiEmployees: [
      { name: "Casey", role: "Content Manager" },
      { name: "Taylor", role: "Social Media Manager" },
      { name: "Riley", role: "Marketing Analyst" },
    ],
    ctaText: "Explore AI employees",
  },
  {
    name: "Hiring",
    outcome: "Find candidates without the grind",
    concreteOutcomes: [
      "Job posts written and distributed",
      "Candidates screened and ranked",
      "Interview schedules coordinated",
    ],
    aiEmployees: [
      { name: "Sam", role: "Recruiter" },
      { name: "Avery", role: "Talent Sourcer" },
      { name: "Quinn", role: "Recruiting Coordinator" },
    ],
    ctaText: "Explore AI employees",
  },
] as const;
