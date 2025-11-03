import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and methodologies to deliver best-in-class solutions."
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "Committed to the highest standards in every project, training session, and client engagement."
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices."
    },
    {
      icon: Eye,
      title: "Client Success",
      description: "Your success is our success. We're invested in delivering measurable business outcomes."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Ripotek</h1>
            <p className="text-xl opacity-90">
              Founded in March 2023 in Calgary, Alberta, Ripotek Technology Inc. was built on a 
              vision to empower organizations through data-driven transformation and world-class training.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Ripotek Technology Inc. emerged from a passion for solving complex data challenges 
                and a commitment to bridging the skills gap in the rapidly evolving fields of data 
                engineering, business intelligence, and artificial intelligence.
              </p>
              <p>
                With decades of combined experience across Energy, Financial Services, and Public 
                Sector industries, our founding team recognized the need for a consulting firm that 
                could not only deliver technical excellence but also transfer knowledge effectively.
              </p>
              <p>
                Today, we serve enterprise clients across North America, providing end-to-end 
                consulting services from strategy to implementation, while simultaneously running 
                comprehensive training programs that prepare the next generation of data professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations and individuals with cutting-edge data solutions and training 
                that drive measurable business value. We are committed to delivering excellence through 
                innovation, expertise, and a client-first approach.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading data consulting and training organization in Western Canada, 
                recognized for transforming how enterprises leverage data and for developing 
                world-class data professionals who shape the industry's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries <span className="gradient-text">We Serve</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift">
              <h3 className="text-2xl font-bold mb-3">Energy</h3>
              <p className="text-muted-foreground">
                Pipeline integrity, production optimization, and regulatory compliance solutions for 
                oil & gas enterprises.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift">
              <h3 className="text-2xl font-bold mb-3">Financial Services</h3>
              <p className="text-muted-foreground">
                Risk analytics, fraud detection, and customer intelligence platforms for banks and 
                insurance companies.
              </p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift">
              <h3 className="text-2xl font-bold mb-3">Public Sector</h3>
              <p className="text-muted-foreground">
                Citizen service optimization, performance dashboards, and data governance for 
                government organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <div className="p-12 bg-muted/30 rounded-2xl border-2 border-dashed border-border">
              <p className="text-xl text-muted-foreground">
                Our leadership profiles are currently being finalized. Check back soon to meet 
                the seasoned professionals leading Ripotek's vision forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
