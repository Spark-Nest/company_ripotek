import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { getSyllabus } from "@/lib/syllabi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, DollarSign, Printer } from "lucide-react";

type Heading = { id: string; text: string; level: 1 | 2 | 3 };

const Syllabus = () => {
  const { slug } = useParams();
  const meta = slug ? getSyllabus(slug) : undefined;
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    if (!meta) return;
    document.title = `${meta.title} | Training Syllabus`;
    // Fetch rich HTML content from public folder
    fetch(meta.fileUrl)
      .then((r) => r.text())
      .then(setBody)
      .catch(() => setBody("# Syllabus\nContent unavailable."));
  }, [meta?.fileUrl, meta?.title]);

  const rendered = useMemo(() => {
    // If the asset already contains HTML (rich text), pass through.
    const looksLikeHtml = /<\w+[\s\S]*>/.test(body);
    return looksLikeHtml ? { html: body, headings: [] as Heading[] } : renderMarkdown(body);
  }, [body]);

  if (!meta) {
    return (
      <div className="min-h-screen pt-20 section-padding">
        <div className="container-custom">
          <p className="text-muted-foreground">Syllabus not found.</p>
          <Link className="text-accent hover:underline" to="/training">Back to Training</Link>
        </div>
      </div>
    );
  }

  const onPrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <header className="section-padding gradient-bg text-primary-foreground no-print">
        <div className="container-custom max-w-5xl">
          {/* Print header (visible only on print) */}
          <div className="print-only mb-4">
            <div style={{ fontSize: "20px", fontWeight: 700 }}>{meta.title}</div>
            <div style={{ fontSize: "12px" }}>Tuition: CAD ${meta.priceCad.toLocaleString()} · Duration: {meta.durationWeeks} weeks · Printed on: {new Date().toLocaleDateString()}</div>
          </div>
          <div className="mb-4">
            <Link to="/training" className="inline-flex items-center text-primary-foreground/90 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Training
            </Link>
          </div>
          <div className="rounded-xl px-5 py-4 md:px-7 md:py-6 shadow-2xl border border-white/20 bg-white/10">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">{meta.title}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                <Calendar className="h-3.5 w-3.5 mr-1" /> {meta.durationWeeks} Weeks
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                <DollarSign className="h-3.5 w-3.5 mr-1" /> CAD ${meta.priceCad.toLocaleString()}
              </Badge>
            </div>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 items-stretch">
            <Button size="lg" onClick={onPrint} variant="secondary" className="inline-flex items-center justify-center">
              <Printer className="h-4 w-4 mr-2" /> Print to PDF
            </Button>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 inline-flex items-center justify-center">
              <Link to="/contact">Enroll / Ask a Question</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1fr,320px] max-w-6xl mx-auto">
            <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: rendered.html }} />
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border-2 p-6 bg-card">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">On this page</div>
                <nav className="space-y-2">
                  {rendered.headings.filter((h) => h.level !== 1).map((h) => (
                    <a key={h.id} href={`#${h.id}`} className={`block text-sm hover:text-accent ${h.level === 3 ? "ml-4" : ""}`}>
                      {h.text}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 p-4 rounded-xl bg-muted/40 border">
                  <div className="text-sm font-semibold">Tuition</div>
                  <div className="text-2xl font-bold mt-1">CAD ${meta.priceCad.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Payment plans available</div>
                  <Button asChild size="sm" className="w-full mt-4 bg-gradient-to-r from-primary to-accent">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Syllabus;

// Minimal Markdown rendering (reuse from Whitepaper)
function renderMarkdown(md: string): { html: string; headings: Heading[] } {
  const lines = md.split(/\r?\n/);
  const htmlParts: string[] = [];
  const headings: Heading[] = [];
  let inUl = false;
  let inOl = false;
  let inCode = false;
  let codeLang = "";

  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
  const flushLists = () => {
    if (inUl) { htmlParts.push("</ul>"); inUl = false; }
    if (inOl) { htmlParts.push("</ol>"); inOl = false; }
  };
  const inline = (text: string) => {
    let t = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, src) => `<img src="${String(src)}" alt="${String(alt)}" class="rounded-xl border my-6"/>`);
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">$1<\/a>');
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return t;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.replace(/\t/g, "  ");

    const fence = line.match(/^(```|~~~)(.*)$/);
    if (fence) {
      if (!inCode) {
        flushLists();
        inCode = true;
        codeLang = ((fence[2] as string) || "").trim();
        htmlParts.push(`<pre class="not-prose overflow-x-auto"><code class="language-${codeLang}">`);
      } else {
        inCode = false;
        codeLang = "";
        htmlParts.push("</code></pre>");
      }
      continue;
    }

    if (inCode) {
      htmlParts.push(line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      continue;
    }

    const h = line.match(/^(#{1,3})\s+(.+)$/);
    if (h) {
      flushLists();
      const level = h[1].length as 1 | 2 | 3;
      const text = h[2].trim();
      const id = slugify(text);
      headings.push({ id, text, level });
      htmlParts.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
      continue;
    }

    const hr = line.match(/^---+$/);
    if (hr) {
      flushLists();
      htmlParts.push("<hr/>");
      continue;
    }

    const li = line.match(/^\s*[-*]\s+(.+)$/);
    if (li) {
      if (!inUl) { flushLists(); inUl = true; htmlParts.push("<ul>"); }
      htmlParts.push(`<li>${inline(li[1])}</li>`);
      continue;
    }
    const oli = line.match(/^\s*\d+\.\s+(.+)$/);
    if (oli) {
      if (!inOl) { flushLists(); inOl = true; htmlParts.push("<ol>"); }
      htmlParts.push(`<li>${inline(oli[1])}</li>`);
      continue;
    }

    if (line.trim() === "") {
      flushLists();
      htmlParts.push("<br/>");
      continue;
    }

    htmlParts.push(`<p>${inline(line)}</p>`);
  }

  flushLists();
  return { html: htmlParts.join("\n"), headings };
}
