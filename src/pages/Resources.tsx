import { FileText, Video, Download, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { whitepapers } from "@/lib/whitepapers";

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Whitepapers & Research",
      description: "In-depth analysis on data architecture, governance, and industry trends.",
      comingSoon: false
    },
    {
      icon: Video,
      title: "Webinar Replays",
      description: "On-demand access to our expert-led webinars on data and AI topics.",
      comingSoon: true
    },
    {
      icon: Download,
      title: "Templates & Tools",
      description: "Downloadable templates for data governance, architecture design, and more.",
      comingSoon: true
    },
    {
      icon: Video,
      title: "Demo Training Videos",
      description: "Sample training content showcasing our instructional methodology.",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resource Library</h1>
            <p className="text-xl opacity-90">
              Insights, templates, and educational content to accelerate your data journey.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Whitepapers & <span className="gradient-text">Research</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth guides and frameworks from real-world Canadian implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitepapers.map((wp, idx) => (
              <Card key={wp.slug} className="hover-lift border-2 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                {wp.cover ? (
                  <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/30">
                    <img
                      src={wp.cover}
                      alt={wp.title}
                      loading="lazy"
                      onError={(e) => {
                        // hide broken image and rely on gradient background
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
                  </div>
                ) : null}
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    {wp.date && <Badge variant="secondary">{wp.date}</Badge>}
                  </div>
                  <CardTitle className="text-xl">{wp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{wp.summary}</p>
                  <Link to={`/resources/whitepapers/${wp.slug}`} className="inline-flex items-center text-accent font-medium">
                    Read whitepaper <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {resourceCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover-lift border-2 animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    {category.comingSoon && (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Blog Section */}
          <div className="text-center py-16 bg-muted/30 rounded-2xl border-2 border-dashed border-border">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Blog & <span className="gradient-text">Newsletter</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Our thought leadership blog and monthly newsletter are currently in development. 
              Stay tuned for expert insights on data architecture, AI trends, and industry best practices.
            </p>
            <Badge variant="outline" className="text-base px-6 py-2">
              Launching Q2 2025
            </Badge>
          </div>
        </div>
      </section>

      {/* Capabilities Deck Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Download className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Capabilities <span className="gradient-text">Deck</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download our comprehensive capabilities deck to learn more about our services, 
              methodologies, and success stories.
            </p>
            <div className="p-8 bg-card rounded-xl border-2 border-dashed border-border">
              <p className="text-muted-foreground">
                Coming soon. For immediate needs, please <a href="/contact" className="text-accent hover:underline">contact us</a> 
                for a custom presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
