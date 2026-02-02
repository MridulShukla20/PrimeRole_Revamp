/**
 * AI Employee Data Model for PrimeRole
 *
 * Complete data structure for all AI employees across Sales, Marketing, and Hiring departments.
 * Each employee includes role details, responsibilities, tools, and measurable outcomes.
 */

// Type Definitions

export type Department = "Sales" | "Marketing" | "Hiring";

export interface AIEmployeeData {
  id: string;
  name: string;
  role: string;
  department: Department;
  whatTheyDo: string;
  whereItFits: string;
  responsibilities: string[];
  tools: string[];
  reportCardMetrics: string[];
}

// AI Employee Data

export const AI_EMPLOYEES: AIEmployeeData[] = [
  // SALES DEPARTMENT
  {
    id: "mira",
    name: "Mira",
    role: "Data & RevOps Specialist",
    department: "Sales",
    whatTheyDo:
      "Mira keeps your pipeline accurate and your forecasts reliable. She tracks deals, updates CRM records, and surfaces insights that help you make better decisions.",
    whereItFits:
      "Mira works behind the scenes in your sales operations. She monitors your pipeline, flags stalled deals, and ensures your CRM stays current without manual data entry.",
    responsibilities: [
      "Update CRM records after every customer interaction",
      "Track deal progression and flag deals that need attention",
      "Generate weekly pipeline reports with win rate analysis",
      "Identify duplicate records and suggest cleanup actions",
      "Monitor revenue forecasts and highlight gaps",
      "Log activity from emails, calls, and meetings automatically",
    ],
    tools: [
      "Salesforce",
      "HubSpot",
      "Pipedrive",
      "Google Sheets",
      "Slack",
      "Email",
    ],
    reportCardMetrics: [
      "CRM data accuracy (% of up-to-date records)",
      "Time saved on manual data entry (hours per week)",
      "Pipeline visibility (% of deals with current status)",
      "Forecast accuracy (actual vs. projected revenue)",
      "Stalled deals identified and flagged",
    ],
  },
  {
    id: "riya",
    name: "Riya",
    role: "Sales Coach",
    department: "Sales",
    whatTheyDo:
      "Riya helps your sales team improve with every conversation. She reviews call recordings, suggests better messaging, and provides feedback tailored to each rep.",
    whereItFits:
      "Riya supports your sales team during deal cycles. She listens to calls, analyzes email threads, and offers coaching to help reps close more deals and handle objections better.",
    responsibilities: [
      "Review call recordings and identify improvement areas",
      "Suggest responses for common objections",
      "Provide messaging feedback based on winning patterns",
      "Recommend next steps after each customer interaction",
      "Flag deals where coaching could improve outcomes",
      "Share best practices from top-performing reps",
    ],
    tools: [
      "Gong",
      "Chorus",
      "Zoom",
      "Google Meet",
      "Email",
      "Slack",
    ],
    reportCardMetrics: [
      "Call reviews completed per week",
      "Objection handling improvement (before vs. after)",
      "Deal win rate for coached reps",
      "Time to close for coached deals",
      "Rep satisfaction with coaching feedback",
    ],
  },
  {
    id: "maya",
    name: "Maya",
    role: "Outreach Specialist (SDR)",
    department: "Sales",
    whatTheyDo:
      "Maya runs outbound campaigns and keeps your pipeline filled with qualified leads. She writes personalized messages, tracks responses, and books meetings for your team.",
    whereItFits:
      "Maya handles the early stages of your sales funnel. She researches prospects, sends outreach messages, follows up on responses, and schedules discovery calls with interested leads.",
    responsibilities: [
      "Research prospects and build targeted outreach lists",
      "Write personalized cold emails and LinkedIn messages",
      "Send follow-up sequences based on engagement",
      "Qualify inbound leads and route them to the right rep",
      "Book discovery calls and add them to calendars",
      "Track response rates and optimize messaging",
    ],
    tools: [
      "Apollo",
      "Outreach",
      "SalesLoft",
      "LinkedIn Sales Navigator",
      "Gmail",
      "Calendly",
    ],
    reportCardMetrics: [
      "Outreach messages sent per week",
      "Response rate (% of prospects who reply)",
      "Meetings booked per month",
      "Lead-to-qualified conversion rate",
      "Time saved on manual prospecting (hours per week)",
    ],
  },
  {
    id: "sofia",
    name: "Sofia",
    role: "Deal Advisor",
    department: "Sales",
    whatTheyDo:
      "Sofia helps close complex deals by surfacing the right information at the right time. She prepares for calls, drafts proposals, and keeps deals moving forward.",
    whereItFits:
      "Sofia supports your team during active deal cycles. She reviews previous conversations, suggests talking points before calls, and drafts follow-up emails and proposals based on customer needs.",
    responsibilities: [
      "Summarize past conversations before each call",
      "Draft proposals based on customer requirements",
      "Suggest pricing and package recommendations",
      "Write follow-up emails after sales meetings",
      "Track contract status and notify next steps",
      "Identify risks in deal progression and suggest actions",
    ],
    tools: [
      "Salesforce",
      "HubSpot",
      "PandaDoc",
      "DocuSign",
      "Google Docs",
      "Email",
    ],
    reportCardMetrics: [
      "Proposals drafted per week",
      "Time saved on proposal creation (hours per week)",
      "Deal velocity (days from qualified to closed)",
      "Win rate for deals with Sofia's support",
      "Contract turnaround time",
    ],
  },

  // MARKETING DEPARTMENT
  {
    id: "zara",
    name: "Zara",
    role: "Social Media Manager",
    department: "Marketing",
    whatTheyDo:
      "Zara keeps your social channels active and engaging. She drafts posts, schedules content, and tracks what's working across platforms.",
    whereItFits:
      "Zara manages your day-to-day social presence. She creates posts based on your brand voice, responds to comments, and ensures your content calendar stays full without daily planning sessions.",
    responsibilities: [
      "Draft social posts for LinkedIn, Twitter, and Instagram",
      "Schedule content across platforms",
      "Respond to comments and mentions",
      "Repurpose blog content into social threads",
      "Track engagement metrics and suggest improvements",
      "Identify trending topics relevant to your audience",
    ],
    tools: [
      "Buffer",
      "Hootsuite",
      "Later",
      "LinkedIn",
      "Twitter",
      "Instagram",
    ],
    reportCardMetrics: [
      "Posts published per week",
      "Engagement rate (likes, comments, shares)",
      "Follower growth per month",
      "Time saved on content creation (hours per week)",
      "Response time to comments and mentions",
    ],
  },
  {
    id: "lena",
    name: "Lena",
    role: "Email Campaign Manager",
    department: "Marketing",
    whatTheyDo:
      "Lena builds and runs email campaigns that keep your audience engaged. She writes newsletters, manages sequences, and tracks what drives opens and clicks.",
    whereItFits:
      "Lena handles your email marketing end-to-end. She drafts campaign copy, segments your audience, schedules sends, and analyzes performance to improve future campaigns.",
    responsibilities: [
      "Write email copy for newsletters and campaigns",
      "Segment audiences based on behavior and interests",
      "Build automated email sequences for onboarding and nurture",
      "A/B test subject lines and content",
      "Track open rates, click rates, and conversions",
      "Clean email lists and manage unsubscribes",
    ],
    tools: [
      "Mailchimp",
      "ConvertKit",
      "HubSpot",
      "ActiveCampaign",
      "Google Analytics",
    ],
    reportCardMetrics: [
      "Emails sent per month",
      "Open rate (% of emails opened)",
      "Click-through rate (% of clicks)",
      "Conversion rate (email to action)",
      "List growth and churn rate",
    ],
  },
  {
    id: "sana",
    name: "Sana",
    role: "Content Writer",
    department: "Marketing",
    whatTheyDo:
      "Sana creates written content that educates and attracts your audience. She writes blog posts, landing pages, and case studies based on your brand and goals.",
    whereItFits:
      "Sana supports your content marketing strategy. She researches topics, drafts long-form content, optimizes for SEO, and ensures your publishing calendar stays on track.",
    responsibilities: [
      "Write blog posts and articles on assigned topics",
      "Draft landing page copy for campaigns",
      "Create case studies from customer success stories",
      "Optimize content for SEO and readability",
      "Research industry trends and content ideas",
      "Repurpose content into different formats",
    ],
    tools: [
      "Google Docs",
      "Notion",
      "WordPress",
      "Webflow",
      "Grammarly",
      "Clearscope",
    ],
    reportCardMetrics: [
      "Content pieces published per month",
      "Organic traffic driven by content",
      "SEO ranking improvements (target keywords)",
      "Time saved on content creation (hours per week)",
      "Content engagement (time on page, shares)",
    ],
  },

  // HIRING DEPARTMENT
  {
    id: "priya",
    name: "Priya",
    role: "Talent Sourcer",
    department: "Hiring",
    whatTheyDo:
      "Priya finds qualified candidates for your open roles. She searches job boards, reaches out to prospects, and keeps your pipeline full of potential hires.",
    whereItFits:
      "Priya works at the top of your hiring funnel. She writes job posts, searches for candidates, sends outreach messages, and tracks who's interested in your roles.",
    responsibilities: [
      "Write and post job descriptions across job boards",
      "Search for candidates on LinkedIn and other platforms",
      "Send outreach messages to passive candidates",
      "Track candidate responses and interest levels",
      "Build candidate pipelines for each open role",
      "Schedule initial screening calls",
    ],
    tools: [
      "LinkedIn Recruiter",
      "Indeed",
      "Greenhouse",
      "Lever",
      "Email",
      "Calendly",
    ],
    reportCardMetrics: [
      "Candidates sourced per role",
      "Outreach response rate",
      "Candidate-to-interview conversion rate",
      "Time to fill pipeline (days per role)",
      "Sourcing channels that drive best candidates",
    ],
  },
  {
    id: "tara",
    name: "Tara",
    role: "Screening Specialist",
    department: "Hiring",
    whatTheyDo:
      "Tara reviews applications and conducts initial candidate screens. She evaluates resumes, asks qualifying questions, and surfaces the best candidates for your team to interview.",
    whereItFits:
      "Tara handles the screening phase of your hiring process. She reviews incoming applications, conducts phone screens, and provides summaries to help you decide who to interview.",
    responsibilities: [
      "Review resumes and applications against job requirements",
      "Conduct initial phone or video screens",
      "Ask qualifying questions about experience and skills",
      "Summarize candidate strengths and fit",
      "Rank candidates based on role requirements",
      "Schedule follow-up interviews with hiring managers",
    ],
    tools: [
      "Greenhouse",
      "Lever",
      "Ashby",
      "Zoom",
      "Google Meet",
      "Email",
    ],
    reportCardMetrics: [
      "Applications reviewed per week",
      "Screens completed per week",
      "Screen-to-interview conversion rate",
      "Time saved on resume review (hours per week)",
      "Hiring manager satisfaction with candidate quality",
    ],
  },
];

// Helper functions for querying the data

export const getEmployeeById = (id: string): AIEmployeeData | undefined => {
  return AI_EMPLOYEES.find((employee) => employee.id === id);
};

export const getEmployeesByDepartment = (
  department: Department
): AIEmployeeData[] => {
  return AI_EMPLOYEES.filter((employee) => employee.department === department);
};

export const getAllDepartments = (): Department[] => {
  return ["Sales", "Marketing", "Hiring"];
};

export const getDepartmentEmployeeCount = (department: Department): number => {
  return getEmployeesByDepartment(department).length;
};
