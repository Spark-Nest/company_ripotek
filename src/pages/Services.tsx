import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  Layers, 
  Database, 
  LineChart, 
  Brain, 
  Zap, 
  Shield,
  GitBranch,
  Workflow,
  BarChart3,
  Sparkles,
  Server,
  GraduationCap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const strategyServices = [
    {
      icon: Layers,
      title: "Data Architecture Reviews",
      description: "Comprehensive assessments of your current data landscape with actionable recommendations.",
      features: [
        "Current state architecture documentation",
        "Gap analysis and risk assessment",
        "Future state design recommendations",
        "Technology stack evaluation"
      ]
    },
    {
      icon: Shield,
      title: "Data Governance",
      description: "Establish frameworks that ensure data quality, security, and regulatory compliance.",
      features: [
        "Governance policy development",
        "Data stewardship programs",
        "Compliance framework design",
        "Data quality standards"
      ]
    },
    {
      icon: GitBranch,
      title: "Strategic Roadmaps",
      description: "Detailed implementation roadmaps aligned with your business objectives.",
      features: [
        "Phased implementation planning",
        "Resource allocation strategies",
        "Risk mitigation planning",
        "ROI modeling and projections"
      ]
    }
  ];

  const buildServices = [
    {
      icon: Database,
      title: "Lakehouse Architecture",
      description: "Modern data lakehouse implementations on Azure, Databricks, and Microsoft Fabric.",
      features: [
        "Medallion architecture design",
        "Data lake to lakehouse migration",
        "Delta Lake implementation",
        "Unity Catalog configuration"
      ]
    },
    {
      icon: Workflow,
      title: "ELT Pipeline Development",
      description: "Scalable, maintainable data pipelines using Azure Data Factory and Databricks.",
      features: [
        "Batch and streaming pipelines",
        "Incremental loading strategies",
        "Data orchestration workflows",
        "Pipeline monitoring & alerting"
      ]
    },
    {
      icon: BarChart3,
      title: "Semantic Modeling",
      description: "Business-friendly data models that power self-service analytics.",
      features: [
        "Star/snowflake schema design",
        "Power BI semantic models",
        "DAX calculation development",
        "Performance optimization"
      ]
    }
  ];

  const analyticsServices = [
    {
      icon: LineChart,
      title: "Power BI Solutions",
      description: "Interactive dashboards and reports that drive business decisions.",
      features: [
        "Custom dashboard development",
        "Real-time analytics",
        "Mobile-optimized reports",
        "Row-level security implementation"
      ]
    },
    {
      icon: BarChart3,
      title: "KPI Frameworks",
      description: "Strategic metrics that align with your business objectives.",
      features: [
        "KPI identification workshops",
        "Balanced scorecard design",
        "Executive dashboard creation",
        "Performance tracking systems"
      ]
    },
    {
      icon: Sparkles,
      title: "Embedded Analytics",
      description: "Integrate analytics directly into your applications and workflows.",
      features: [
        "Power BI embedded implementation",
        "White-label analytics solutions",
        "API integration",
        "Custom visualization development"
      ]
    }
  ];

  const aiServices = [
    {
      icon: Brain,
      title: "Generative AI POCs",
      description: "Rapid prototyping of AI solutions using Azure OpenAI and industry frameworks.",
      features: [
        "Use case identification",
        "RAG implementation",
        "Prompt engineering",
        "Solution architecture design"
      ]
    },
    {
      icon: Sparkles,
      title: "MLOps Implementation",
      description: "Production-ready ML systems with CI/CD, monitoring, and governance.",
      features: [
        "Model versioning & registry",
        "Automated training pipelines",
        "Model monitoring & drift detection",
        "A/B testing frameworks"
      ]
    },
    {
      icon: Server,
      title: "Feature Engineering",
      description: "Feature stores and transformation pipelines for consistent ML features.",
      features: [
        "Feature store implementation",
        "Feature transformation pipelines",
        "Online/offline feature serving",
        "Feature monitoring"
      ]
    }
  ];

  const managedServices = [
    {
      icon: Zap,
      title: "Platform Administration",
      description: "Comprehensive management of your data platform infrastructure.",
      features: [
        "User access management",
        "Platform configuration",
        "Workspace administration",
        "License optimization"
      ]
    },
    {
      icon: Shield,
      title: "Monitoring & Support",
      description: "Proactive monitoring and rapid issue resolution to ensure uptime.",
      features: [
        "24/7 infrastructure monitoring",
        "Performance optimization",
        "Incident response",
        "Regular health checks"
      ]
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      description: "Strategic cost management and resource optimization.",
      features: [
        "Cost analysis and reporting",
        "Resource rightsizing",
        "Reserved capacity planning",
        "Spend forecasting"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              End-to-end data consulting from strategy to implementation. We deliver governed 
              self-service BI, Azure modernization, and AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy & Architecture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strategy & <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Establish a solid foundation with comprehensive data strategy, architecture design, 
              and governance frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build & Engineering */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build & <span className="gradient-text">Engineering</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Modern data platform implementation with Azure, Databricks, and Microsoft Fabric.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & BI */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Analytics & <span className="gradient-text">Business Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Transform data into actionable insights with Power BI dashboards and self-service analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MLOps & AI */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              MLOps & <span className="gradient-text">Artificial Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Harness the power of AI with production-ready ML systems and generative AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Managed <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Focus on your business while we manage, monitor, and optimize your data platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedServices.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Callout */}
      <section className="section-padding bg-accent/10 border-y-2 border-accent">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Looking for Training?</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We offer comprehensive training programs in Power BI, Azure Data Engineering, 
                Databricks, AI, and more. Learn from industry experts with hands-on projects 
                and job placement assistance.
              </p>
            </div>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 whitespace-nowrap">
              <Link to="/training">
                Explore Training Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data Platform?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our consulting services can accelerate your data transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="secondary">
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
