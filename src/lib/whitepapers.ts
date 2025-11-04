// Whitepapers metadata and content loader
// Uses Vite ?raw imports to load markdown contents

export type Whitepaper = {
  title: string;
  slug: string;
  summary: string;
  date?: string;
  body: string; // markdown
  cover?: string;
};

import wp1 from "@/content/whitepapers/ai-implementation-mid-market.md?raw";
import wp2 from "@/content/whitepapers/digitally-ready-workforce.md?raw";
import aiCover from "@/assets/training-session.jpg";
import workforceCover from "@/assets/team-collaboration.jpg";

export const whitepapers: Whitepaper[] = [
  {
    title: "The Practical Guide to AI Implementation for Mid-Market Companies",
    slug: "ai-implementation-mid-market",
    date: "November 2025",
    summary:
      "A practical, step-by-step framework for mid-market companies to implement AI with measurable ROI, including use case selection, build/buy/partner decisions, and pilot-to-production guidance.",
    body: wp1,
    cover: aiCover,
  },
  {
    title: "Building a Digitally-Ready Workforce: A Strategic Framework for Canadian Employers",
    slug: "digitally-ready-workforce",
    date: "November 2025",
    summary:
      "A comprehensive framework for assessing digital skills, designing upskilling programs, maximizing Canadian funding, and measuring capability ROI across organizations.",
    body: wp2,
    cover: workforceCover,
  },
];

export function getWhitepaperBySlug(slug: string) {
  return whitepapers.find((w) => w.slug === slug);
}
