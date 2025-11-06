import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Database, Brain, LineChart, Layers, Zap, GraduationCap, CheckCircle, ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
const Home = () => {
  const services = [{
    icon: Layers,
    title: "Strategy & Architecture",
    description: "Data architecture reviews, governance frameworks, and strategic roadmaps.",
    features: ["Enterprise data architecture design", "Governance policy development", "Technology stack assessments", "Migration strategy planning"]
  }, {
    icon: Database,
    title: "Data Engineering",
    description: "Azure/Databricks/Fabric lakehouse, ELT pipelines, and semantic models.",
    features: ["Lakehouse architecture implementation", "ETL/ELT pipeline development", "Data quality frameworks", "Real-time data processing"]
  }, {
    icon: LineChart,
    title: "Analytics & BI",
    description: "Power BI dashboards, KPI frameworks, and embedded analytics.",
    features: ["Interactive dashboard design", "Semantic layer modeling", "Embedded analytics solutions", "Self-service BI enablement"]
  }, {
    icon: Brain,
    title: "MLOps & AI",
    description: "GenAI POCs, feature stores, model serving, and AI integration.",
    features: ["Generative AI solutions", "ML model deployment", "Feature engineering pipelines", "AI governance frameworks"]
  }, {
    icon: Zap,
    title: "Managed Services",
    description: "Platform administration, monitoring, and cost optimization.",
    features: ["24/7 infrastructure monitoring", "Performance optimization", "Cost management", "Security compliance"]
  }, {
    icon: GraduationCap,
    title: "Training & Placement",
    description: "Industry-leading training programs with training-to-hire pathways.",
    features: ["Hands-on project-based learning", "One-on-one coaching & mentorship", "Corporate & individual training", "Job placement assistance"]
  }];
  const stats = [{
    icon: Award,
    value: "15+",
    label: "Years Combined Experience"
  }, {
    icon: Users,
    value: "50+",
    label: "Enterprise Clients"
  }, {
    icon: TrendingUp,
    value: "95%",
    label: "Client Satisfaction"
  }, {
    icon: CheckCircle,
    value: "100+",
    label: "Projects Delivered"
  }];
  const partners = [
    { name: "Microsoft Azure", src: "/logos/color/azure-color.svg", href: "https://azure.microsoft.com/" },
    { name: "Databricks", src: "/logos/color/databricks-color.svg", href: "https://www.databricks.com/" },
    { name: "Microsoft Fabric", src: "/logos/color/fabric-color.png", href: "https://www.microsoft.com/fabric" },
    { name: "Power BI", src: "/logos/color/powerbi-color.svg", href: "https://powerbi.microsoft.com/" },
    { name: "Snowflake", src: "/logos/color/snowflake-color.svg", href: "https://www.snowflake.com/" }
  ];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={heroImage}>
            <source src="https://cdn.coverr.co/videos/coverr-coding-and-collaboration-6994/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 via-primary/60 to-emerald-800/70" />
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="gradient-text">Envision. Engineer. Elevate.</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Modern Data Systems, Real Outcomes.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              We design and build resilient analytics platforms on Azure and Databricks—governed, performant, and ready for scale. Then we upskill your teams to run them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-accent to-accent-glow hover:opacity-90 text-lg px-8 text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow">
                <Link to="/contact">
                  Book Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Removed stats ribbon as requested */}

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Data Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end consulting services and training programs designed to accelerate 
              your data transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <div key={index} className="animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <ServiceCard {...service} />
              </div>)}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild variant="outline">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="gradient-text">Ripotek?</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Industry-Leading Expertise</h3>
                    <p className="text-muted-foreground">Renowned instructors and consultants with real-world experience in Energy, Finance, and Public sectors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hands-On Learning</h3>
                    <p className="text-muted-foreground">Real-world projects, mentorship, and one-on-one coaching to ensure practical skill development.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Training-to-Hire Model</h3>
                    <p className="text-muted-foreground">Direct pathways to employment with co-op placements and talent network connections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">End-to-End Solutions</h3>
                    <p className="text-muted-foreground">From strategy to implementation, we deliver governed self-service BI and Azure modernization.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img src={teamCollaboration} alt="Team Collaboration" className="rounded-2xl shadow-strong hover-lift" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted <span className="gradient-text">Technology Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Certified and experienced in industry-leading platforms
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-card rounded-lg border-2 border-border hover:border-accent transition-colors hover-lift flex items-center justify-center"
                aria-label={partner.name}
                title={partner.name}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-10 w-auto transition-all"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    // Replace color path and suffix, and normalize extension to .svg for fallback
                    let fallback = img.src
                      .replace('/logos/color/', '/logos/')
                      .replace('-color', '');
                    if (fallback.endsWith('.png')) {
                      fallback = fallback.slice(0, -4) + '.svg';
                    }
                    img.onerror = null;
                    img.src = fallback;
                  }}
                />
                <noscript>{partner.name}</noscript>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Data Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you need consulting services or professional training, we're here to help 
            you achieve your data and AI goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="secondary" className="text-lg px-8">
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/training">Browse Training Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
