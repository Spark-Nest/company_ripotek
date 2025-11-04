import { Link, useParams } from "react-router-dom";
import { getPostBySlug, blogPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

type Heading = { id: string; text: string; level: 1 | 2 | 3 };

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen pt-20 section-padding">
        <div className="container-custom">
          <p className="text-muted-foreground">Post not found.</p>
          <Link className="text-accent hover:underline" to="/blog">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const { html, headings } = renderMarkdown(post.body);
  const toc = headings.filter((h) => h.level !== 1);

  return (
    <div className="min-h-screen pt-20">
      <header className="relative">
        <div className="h-[38vh] md:h-[48vh] w-full overflow-hidden">
          {post.heroImage ? (
            <img src={post.heroImage} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/30" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom max-w-4xl pb-6 md:pb-10">
            <div className="mb-3 flex flex-wrap gap-2">
              {(post.tags || []).map((tag) => (
                <Badge key={tag} variant="secondary" className="backdrop-blur">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">{post.title}</h1>
            <div className="text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readingTime}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-6 text-sm max-w-5xl mx-auto">
            <Link className="text-accent hover:underline" to="/blog">Back to Blog</Link>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr,300px] max-w-5xl mx-auto">
            <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
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
          <h3 className="text-2xl font-bold mb-6">Related posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getRelated(post.slug).map((rp) => (
              <Link to={`/blog/${rp.slug}`} key={rp.slug} className="group overflow-hidden rounded-2xl border-2 bg-card hover:shadow-xl transition-shadow">
                <div className="relative h-40 w-full overflow-hidden">
                  {rp.heroImage ? (
                    <img src={rp.heroImage} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/30" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground mb-1">{rp.date} • {rp.readingTime}</div>
                  <div className="font-semibold group-hover:text-accent">{rp.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

function getRelated(currentSlug: string) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  const rest = blogPosts.filter((p) => p.slug !== currentSlug);
  const score = (p: typeof blogPosts[number]) => {
    const a = new Set(current?.tags || []);
    let s = 0;
    for (const t of p.tags || []) if (a.has(t)) s++;
    return s;
  };
  return rest.map((p) => ({ p, s: score(p) })).sort((x, y) => y.s - x.s).slice(0, 3).map((x) => x.p);
}

export default BlogPost;

// Minimal Markdown rendering supporting headings, lists, code fences, links, images, hr, blockquotes, and basic tables.
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
    if (inCode) { htmlParts.push(line.replace(/</g, "&lt;").replace(/>/g, "&gt;")); continue; }

    const trimmed = line.trimEnd();
    if (trimmed === "") { flushLists(); htmlParts.push("<br/>"); continue; }
    if (/^---+$/.test(trimmed)) { flushLists(); htmlParts.push("<hr/>"); continue; }
    if (trimmed.startsWith("### ")) { flushLists(); const p = trimmed.slice(4); const id = slugify(p); headings.push({ id, text: p, level: 3 }); htmlParts.push(`<h3 id="${id}">${inline(p)}</h3>`); continue; }
    if (trimmed.startsWith("## ")) { flushLists(); const p = trimmed.slice(3); const id = slugify(p); headings.push({ id, text: p, level: 2 }); htmlParts.push(`<h2 id="${id}">${inline(p)}</h2>`); continue; }
    if (trimmed.startsWith("# ")) { flushLists(); const p = trimmed.slice(2); const id = slugify(p); headings.push({ id, text: p, level: 1 }); htmlParts.push(`<h1 id="${id}">${inline(p)}</h1>`); continue; }
    if (trimmed.startsWith("> ")) { flushLists(); htmlParts.push(`<blockquote>${inline(trimmed.slice(2))}</blockquote>`); continue; }
    if (/^[-*]\s+/.test(trimmed)) { if (!inUl) { flushLists(); inUl = true; htmlParts.push("<ul>"); } htmlParts.push(`<li>${inline(trimmed.replace(/^[-*]\s+/, ""))}</li>`); continue; }
    if (/^\d+\.\s+/.test(trimmed)) { if (!inOl) { flushLists(); inOl = true; htmlParts.push("<ol>"); } htmlParts.push(`<li>${inline(trimmed.replace(/^\d+\.\s+/, ""))}</li>`); continue; }
    const pipeCount = (s: string) => (s.match(/\|/g) || []).length;
    if (pipeCount(trimmed) >= 2) {
      const next = (lines[i + 1] || "").trim();
      if (/^\s*[:\-\|\s]+$/.test(next) && pipeCount(next) >= 1) {
        const headers = trimmed.split("|").map((c) => c.trim()).filter((c) => c.length);
        htmlParts.push("<table><thead><tr>" + headers.map((h) => `<th>${inline(h)}</th>`).join("") + "</tr></thead><tbody>");
        let j = i + 2;
        while (j < lines.length) {
          const rl = (lines[j] || "").trimEnd();
          if (!rl || pipeCount(rl) < 1) break;
          const cols = rl.split("|").map((c) => c.trim()).filter((c) => c.length);
          htmlParts.push("<tr>" + cols.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>");
          j++;
        }
        htmlParts.push("</tbody></table>");
        i = j - 1;
        continue;
      }
    }
    flushLists();
    htmlParts.push(`<p>${inline(trimmed)}</p>`);
  }
  flushLists();
  return { html: htmlParts.join("\n"), headings };
}

