import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Shield, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Pipeline Integrity Dashboard for Major Energy Provider",
      industry: "Energy",
      client: "Fortune 500 Oil & Gas Company",
      challenge: "The client needed real-time visibility into pipeline health across 10,000+ km of infrastructure to ensure regulatory compliance and prevent costly incidents.",
      solution: "Implemented a comprehensive Power BI solution integrated with IoT sensors and SCADA systems, featuring predictive maintenance alerts and automated regulatory reporting.",
      technologies: ["Power BI", "Azure Data Factory", "Azure Synapse", "Azure IoT Hub"],
      outcomes: [
        "40% reduction in unplanned maintenance costs",
        "99.9% compliance with regulatory reporting requirements",
        "Real-time anomaly detection reducing incident response time by 60%",
        "Self-service analytics enabling 100+ field engineers to access insights"
      ],
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Azure Lakehouse Migration for Financial Services",
      industry: "Financial Services",
      client: "Regional Banking Institution",
      challenge: "Legacy data warehouse struggling with performance, high costs, and inability to support real-time analytics for fraud detection and customer insights.",
      solution: "Architected and migrated to Azure Databricks lakehouse with Delta Lake, implementing medallion architecture and real-time streaming for fraud detection.",
      technologies: ["Azure Databricks", "Delta Lake", "Azure Event Hubs", "Power BI", "Unity Catalog"],
      outcomes: [
        "70% reduction in infrastructure costs",
        "Sub-second query performance for fraud detection",
        "Enabled real-time customer 360 analytics",
        "Reduced time-to-insight from days to hours"
      ],
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Governed Self-Service BI for Public Sector",
      industry: "Public Sector",
      client: "Provincial Government Agency",
      challenge: "Multiple departments using disconnected tools, resulting in inconsistent metrics, security concerns, and inability to derive cross-departmental insights.",
      solution: "Designed and implemented enterprise-wide governed BI platform using Microsoft Fabric, establishing centralized semantic models, data governance, and self-service capabilities.",
      technologies: ["Microsoft Fabric", "Power BI", "Azure Purview", "Power Automate"],
      outcomes: [
        "Unified 15 departments onto single analytics platform",
        "Established data governance framework with lineage tracking",
        "Enabled 500+ users with self-service capabilities",
        "90% reduction in manual report generation time"
      ],
      icon: Shield,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl opacity-90">
              Real-world transformations delivered for leading organizations across Energy, 
              Financial Services, and Public Sector industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.id} 
                className="hover-lift border-2 animate-fade-in" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center flex-shrink-0`}>
                        <study.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">{study.industry}</Badge>
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-base">{study.client}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Solution</h3>
                    <p className="text-muted-foreground mb-4">{study.solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Key Outcomes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                          <span className="text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto p-12 bg-card rounded-2xl border-2 border-dashed border-border text-center">
            <p className="text-xl text-muted-foreground">
              Client testimonials and detailed case study downloads are coming soon. 
              Contact us to learn more about these projects and discuss how we can help 
              your organization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver similar transformational outcomes for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="secondary">
              <Link to="/contact">Book Discovery Call</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
