import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Heart, 
  GraduationCap, 
  TrendingUp, 
  Users,
  Globe,
  Coffee,
  Laptop,
  ArrowRight
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses and equity options."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health benefits, wellness programs, and mental health support."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning budget, certifications, and conference attendance."
    },
    {
      icon: Globe,
      title: "Flexible Work",
      description: "Hybrid work model with remote options and flexible scheduling."
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Generous PTO, parental leave, and focus on sustainable work practices."
    },
    {
      icon: Laptop,
      title: "Latest Technology",
      description: "Access to cutting-edge tools, platforms, and development resources."
    }
  ];

  const openings = [
    {
      title: "Senior Data Engineer",
      type: "Full-Time",
      location: "Calgary / Remote",
      department: "Consulting",
      description: "Design and implement enterprise-scale data solutions using Azure, Databricks, and Microsoft Fabric."
    },
    {
      title: "Power BI Consultant",
      type: "Full-Time",
      location: "Calgary / Remote",
      department: "Consulting",
      description: "Deliver BI solutions for enterprise clients, from requirements to deployment."
    },
    {
      title: "Training Instructor - Azure Data Engineering",
      type: "Contract",
      location: "Calgary / Hybrid",
      department: "Training",
      description: "Lead training programs for aspiring data engineers with hands-on instruction."
    },
    {
      title: "AI/ML Engineer",
      type: "Full-Time",
      location: "Calgary / Remote",
      department: "Consulting",
      description: "Build and deploy ML solutions, implement MLOps, and lead GenAI initiatives."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90 mb-8">
              Build your career with a fast-growing consulting firm at the forefront of 
              data engineering, AI, and business intelligence.
            </p>
            <Button size="lg" asChild variant="secondary">
              <Link to="#openings">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Ripotek */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Ripotek?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building something special - a company where talented individuals can 
              make an impact while growing their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover-lift border-2 animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Culture</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
                  <p className="text-muted-foreground">
                    We believe the best solutions come from diverse perspectives working together. 
                    Our open, collaborative culture encourages knowledge sharing and mutual support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth Mindset</h3>
                  <p className="text-muted-foreground">
                    Continuous learning is at our core. We invest in your professional development 
                    with training budgets, mentorship programs, and opportunities to work on cutting-edge projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Work-Life Integration</h3>
                  <p className="text-muted-foreground">
                    We understand that our team members have lives outside work. Our flexible 
                    policies and supportive culture help you maintain balance and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our growing team and make an impact from day one
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card 
                key={index} 
                className="hover-lift border-2 hover:border-accent transition-all animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{job.type}</Badge>
                        <Badge variant="outline">{job.location}</Badge>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.description}</CardDescription>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see the right role? We're always looking for talented individuals.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Submit Your Resume <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community & CSR */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Community <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Beyond our core business, we're committed to giving back through mentorship programs, 
              scholarship initiatives, community meetup hosting, and educational speaking engagements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-xl border-2 border-border text-left">
                <h3 className="font-semibold text-lg mb-2">Mentorship Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Providing guidance to aspiring data professionals through one-on-one mentorship.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border-2 border-border text-left">
                <h3 className="font-semibold text-lg mb-2">Scholarship Initiatives</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting underrepresented groups in tech through training scholarships.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border-2 border-border text-left">
                <h3 className="font-semibold text-lg mb-2">Community Meetups</h3>
                <p className="text-sm text-muted-foreground">
                  Hosting regular meetups for data professionals to network and learn.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border-2 border-border text-left">
                <h3 className="font-semibold text-lg mb-2">Speaking Engagements</h3>
                <p className="text-sm text-muted-foreground">
                  Sharing knowledge at conferences, universities, and industry events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
