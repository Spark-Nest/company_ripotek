import { Link, useParams } from "react-router-dom";
import { jobs } from "@/lib/jobs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight, Copy, Share2 } from "lucide-react";

const CareerJob = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen pt-20 section-padding">
        <div className="container-custom">
          <p className="text-muted-foreground">Role not found.</p>
          <Link className="text-accent hover:underline" to="/careers">Back to Careers</Link>
        </div>
      </div>
    );
  }

  const buildJobUrl = () => `${window.location.origin}/careers/${job.slug}`;

  const onCopyLink = async () => {
    const url = buildJobUrl();
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: url });
    } catch {
      toast({ title: "Copy failed", description: "Unable to copy link. Please try again." });
    }
  };

  const onShare = async () => {
    const url = buildJobUrl();
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({ title: job.title, text: `Opportunity at Ripotek: ${job.title}` , url });
      } catch {
        // no-op
      }
    } else {
      await onCopyLink();
      toast({ title: "Share not supported", description: "Link copied to clipboard instead." });
    }
  };

  // Build schema.org JobPosting for SEO
  const jobPosting = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.roleOverview}`,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Ripotek Technologies Inc.",
      sameAs: "https://ripotek.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "CA",
      },
    },
    applicantLocationRequirements: undefined,
    industry: job.department,
    identifier: { "@type": "PropertyValue", name: "Ripotek", value: job.slug },
    estimatedSalary: job.salaryRange || job.compensation,
    url: buildJobUrl(),
  } as any;

  return (
    <div className="min-h-screen pt-20 pb-24 lg:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} />
      {/* Header */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="mb-4">
              <Link to="/careers" className="text-primary-foreground/90 hover:underline">← Back to Careers</Link>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="secondary">{job.employmentType}</Badge>
              <Badge variant="outline" className="bg-background/10 text-primary-foreground">{job.location}</Badge>
              <Badge className="bg-background/20 text-primary-foreground">{job.department}</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{job.title}</h1>
            <p className="text-lg opacity-90 max-w-3xl">{job.roleOverview}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <a href={`mailto:${job.howToApply.email}?subject=${encodeURIComponent(job.howToApply.subject)}`}>
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" onClick={onCopyLink}><Copy className="h-4 w-4 mr-1" /> Copy link</Button>
              <Button variant="ghost" onClick={onShare}><Share2 className="h-4 w-4 mr-1" /> Share</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[1fr,320px] max-w-6xl">
            <article className="space-y-8">
              {/* Meta cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {job.salaryRange && (
                  <Card className="p-4">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Salary Range</div>
                    <div className="font-semibold">{job.salaryRange}</div>
                  </Card>
                )}
                {job.travel && (
                  <Card className="p-4">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Travel</div>
                    <div className="font-semibold">{job.travel}</div>
                  </Card>
                )}
                {job.commitment && (
                  <Card className="p-4">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Commitment</div>
                    <div className="font-semibold">{job.commitment}</div>
                  </Card>
                )}
                {job.reportingTo && (
                  <Card className="p-4">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Reporting To</div>
                    <div className="font-semibold">{job.reportingTo}</div>
                  </Card>
                )}
              </div>

              {/* Sections */}
              {job.sections.map((sec, i) => (
                <section key={i} className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-semibold">{sec.heading}</h2>
                  {sec.paragraphs && sec.paragraphs.map((p, j) => (
                    <p key={j} className="text-muted-foreground">{p}</p>
                  ))}
                  {sec.items && (
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {sec.items.map((it, k) => (
                        <li key={k}>{it}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Interview process */}
              {job.interviewProcess && (
                <section className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-semibold">Interview Process</h2>
                  <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                    {job.interviewProcess.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                  {job.timeline && (
                    <p className="text-sm text-muted-foreground">Timeline: {job.timeline}</p>
                  )}
                </section>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-4">
              <Card className="p-5">
                <h3 className="font-semibold mb-2">Apply for this role</h3>
                <p className="text-sm text-muted-foreground mb-3">Send your application to:</p>
                <a className="text-accent underline" href={`mailto:${job.howToApply.email}?subject=${encodeURIComponent(job.howToApply.subject)}`}>
                  {job.howToApply.email}
                </a>
                {job.howToApply.instructions && job.howToApply.instructions.length > 0 && (
                  <div className="mt-3">
                    <div className="text-sm font-medium mb-1">Include:</div>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      {job.howToApply.instructions.map((it, k) => (
                        <li key={k}>{it}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4 flex gap-2">
                  <Button asChild>
                    <a href={`mailto:${job.howToApply.email}?subject=${encodeURIComponent(job.howToApply.subject)}`}>Apply Now</a>
                  </Button>
                  <Button variant="outline" onClick={onCopyLink}><Copy className="h-4 w-4 mr-1" /> Copy link</Button>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Sticky mobile apply bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm p-3">
        <div className="container-custom flex gap-2">
          <Button asChild className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <a href={`mailto:${job.howToApply.email}?subject=${encodeURIComponent(job.howToApply.subject)}`}>
              Apply Now
            </a>
          </Button>
          <Button variant="outline" onClick={onCopyLink}><Copy className="h-4 w-4" /></Button>
          <Button variant="ghost" onClick={onShare}><Share2 className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
};

export default CareerJob;
