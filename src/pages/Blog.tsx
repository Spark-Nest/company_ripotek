import { Link } from "react-router-dom";
import { blogPosts, allTags } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

const Blog = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const featured = useMemo(() => blogPosts.find((p) => p.featured) || blogPosts[0], []);
  const filteredPosts = useMemo(() => {
    const list = blogPosts.filter((p) => !p.featured);
    if (!activeTag) return list;
    return list.filter((p) => (p.tags || []).includes(activeTag));
  }, [activeTag]);

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Insights & Articles</h1>
            <p className="text-lg opacity-90">
              Practical guides and thought leadership from the Ripotek team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Tag Filters */}
          <TagFilters
            tags={useMemo(() => allTags(), [])}
            activeTag={activeTag}
            setActiveTag={setActiveTag}
          />

          {/* Featured post */}
          <Featured featured={featured} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border-2 bg-card hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 md:h-56 w-full overflow-hidden">
                    {post.heroImage ? (
                      <img
                        src={post.heroImage}
                        alt=""
                        className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/30" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {(post.tags || []).slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="backdrop-blur">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2 flex gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.summary}</p>
                    <div className="inline-flex items-center text-accent font-medium">
                      Read more <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Local UI helpers
const TagFilters = ({
  tags,
  activeTag,
  setActiveTag,
}: {
  tags: string[];
  activeTag: string | null;
  setActiveTag: (t: string | null) => void;
}) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2 items-center">
      <span className="text-sm text-muted-foreground mr-2">Filter by tag:</span>
      <button
        className={`px-3 py-1 rounded-full text-sm border ${!activeTag ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
        onClick={() => setActiveTag(null)}
      >
        All
      </button>
      {tags.map((t) => (
        <button
          key={t}
          className={`px-3 py-1 rounded-full text-sm border ${activeTag === t ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
          onClick={() => setActiveTag(activeTag === t ? null : t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

const Featured = ({ featured }: { featured: (typeof blogPosts)[number] }) => {
  if (!featured) return null;
  return (
    <Link to={`/blog/${featured.slug}`} className="block mb-10">
      <div className="relative h-72 w-full overflow-hidden rounded-2xl border-2">
        {featured.heroImage ? (
          <img src={featured.heroImage} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/20 to-accent/30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="p-6">
            <div className="mb-2 text-sm text-muted-foreground">
              {featured.date} • {featured.readingTime}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold max-w-3xl">{featured.title}</h2>
            <p className="max-w-3xl text-muted-foreground mt-2">
              {featured.summary}
            </p>
            <div className="mt-4 inline-flex items-center text-accent font-medium">
              Read post <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;

