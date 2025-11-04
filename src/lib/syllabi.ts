// Training program syllabi metadata
export type SyllabusMeta = {
  slug: string;
  title: string;
  durationWeeks: number;
  priceCad: number;
  fileUrl: string; // path under /public
};

export const syllabi: SyllabusMeta[] = [
  {
    slug: "power-bi-analyst",
    title: "Power BI Analyst Program",
    durationWeeks: 12,
    priceCad: 1599,
    fileUrl: "/syllabi/power-bi-analyst.html",
  },
  {
    slug: "azure-data-engineer",
    title: "Azure Data Engineer Program",
    durationWeeks: 24,
    priceCad: 3999,
    fileUrl: "/syllabi/azure-data-engineer.html",
  },
  {
    slug: "databricks-engineer",
    title: "Databricks Engineer Program",
    durationWeeks: 24,
    priceCad: 3999,
    fileUrl: "/syllabi/databricks-engineer.html",
  },
  {
    slug: "business-intelligence-analyst",
    title: "Business Intelligence Analyst Program",
    durationWeeks: 12,
    priceCad: 1799,
    fileUrl: "/syllabi/business-intelligence-analyst.html",
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer Program",
    durationWeeks: 24,
    priceCad: 3999,
    fileUrl: "/syllabi/ai-engineer.html",
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering Program",
    durationWeeks: 12,
    priceCad: 1599,
    fileUrl: "/syllabi/prompt-engineering.html",
  },
  {
    slug: "python-for-data",
    title: "Python for Data Program",
    durationWeeks: 12,
    priceCad: 1599,
    fileUrl: "/syllabi/python-for-data.html",
  },
  {
    slug: "azure-data-factory-masterclass",
    title: "Azure Data Factory Masterclass",
    durationWeeks: 12,
    priceCad: 1799,
    fileUrl: "/syllabi/azure-data-factory-masterclass.html",
  },
];

export function getSyllabus(slug: string) {
  return syllabi.find((s) => s.slug === slug);
}
