import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getWhitepaperBySlug } from "@/lib/whitepapers";
import { ArrowRight, Copy, Share2, FileDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type Heading = { id: string; text: string; level: 1 | 2 | 3 };

const Whitepaper = () => {
  const { slug } = useParams();
  const wp = slug ? getWhitepaperBySlug(slug) : undefined;

  if (!wp) {
    return (
      <div className="min-h-screen pt-20 section-padding">
        <div className="container-custom">
          <p className="text-muted-foreground">Whitepaper not found.</p>
          <Link className="text-accent hover:underline" to="/resources">Back to Resources</Link>
        </div>
      </div>
    );
  }

  const { html, headings } = renderMarkdown(wp.body);
  const toc = headings.filter((h) => h.level !== 1);

  const onCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: url });
    } catch {
      toast({ title: "Copy failed", description: "Please copy the URL manually." });
    }
  };

  const onShare = async () => {
    const url = window.location.href;
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({ title: wp.title, url });
      } catch {
        // ignore
      }
    } else {
      await onCopyLink();
      toast({ title: "Share not supported", description: "Link copied to clipboard instead." });
    }
  };

  // Social meta and canonical
  useEffect(() => {
    const canonical = `${window.location.origin}/resources/whitepapers/${wp.slug}`;
    document.title = `${wp.title} | Ripotek Resources`;
    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };
    const desc = wp.summary || "";
    setMeta("property", "og:title", wp.title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", "article");
    setMeta("property", "og:url", canonical);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", wp.title);
    setMeta("name", "twitter:description", desc);
    if ((wp as any).cover) {
      setMeta("property", "og:image", (wp as any).cover as string);
      setMeta("name", "twitter:image", (wp as any).cover as string);
    }
    setLink("canonical", canonical);
    return () => {
      // no cleanup; leave tags in place when navigating
    };
  }, [wp.title, wp.summary, wp.slug]);

  const downloadPdf = async () => {
    const pdfUrl = `/whitepapers/${wp.slug}.pdf`;
    try {
      const res = await fetch(pdfUrl, { method: "HEAD" });
      if (res.ok) {
        window.open(pdfUrl, "_blank");
      } else {
        toast({ title: "PDF not available", description: "Opening print dialog to save as PDF." });
        window.print();
      }
    } catch {
      toast({ title: "PDF unavailable", description: "Opening print dialog to save as PDF." });
      window.print();
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <header className="relative">
        <div className="section-padding gradient-bg text-primary-foreground">
          <div className="container-custom max-w-4xl">
            <div className="mb-3 text-primary-foreground/90">
              <Link className="hover:underline" to="/resources">← Back to Resources</Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">{wp.title}</h1>
            {wp.date && <div className="text-sm opacity-90 mb-4">{wp.date}</div>}
            <div className="flex items-center gap-2">
              <button onClick={onCopyLink} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border bg-background text-foreground hover:bg-muted transition-colors">
                <Copy className="h-4 w-4" /> Copy link
              </button>
              <button onClick={onShare} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border bg-background text-foreground hover:bg-muted transition-colors">
                <Share2 className="h-4 w-4" /> Share
              </button>
              <button onClick={downloadPdf} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border bg-background text-foreground hover:bg-muted transition-colors">
                <FileDown className="h-4 w-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr,300px] max-w-5xl mx-auto">
            <div className="min-w-0">
              <article
                className="prose prose-sm md:prose-base lg:prose-lg prose-neutral dark:prose-invert max-w-none break-words"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-xl border-2 p-5 bg-card">
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Table of contents</div>
                <nav className="space-y-2">
                  {toc.length === 0 && <div className="text-sm text-muted-foreground">No sections</div>}
                  {toc.map((h) => (
                    <a key={h.id} href={`#${h.id}`} className={`block text-sm hover:text-accent ${h.level === 3 ? "ml-4" : ""}`}>
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom max-w-5xl">
          <div className="rounded-2xl border-2 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="font-semibold">Want help implementing these ideas?</div>
              <div className="text-sm text-muted-foreground">Book a discovery call to explore how this applies to your organization.</div>
            </div>
            <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;

// Minimal Markdown rendering (replicated from BlogPost.tsx)
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
    let t = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, src) => `<img src="${String(src)}" alt="${String(alt)}" class="max-w-full h-auto rounded-xl border my-6"/>`);
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
