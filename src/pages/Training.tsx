import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TrainingCard from "@/components/TrainingCard";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Briefcase,
  CheckCircle,
  MapPin,
  Video,
  Building,
  ArrowRight
} from "lucide-react";
import trainingSession from "@/assets/training-session.jpg";

const Training = () => {
  const courses = [
    {
      title: "Power BI Analyst",
      description: "Master data visualization and business intelligence with Microsoft Power BI.",
      duration: "8 weeks",
      level: "Beginner to Advanced",
      format: "Hybrid",
      highlights: [
        "DAX formulas and calculations",
        "Advanced data modeling",
        "Dashboard design best practices",
        "Real-time analytics implementation",
        "Row-level security configuration"
      ]
    },
    {
      title: "Azure Data Engineer",
      description: "Design and implement data solutions on Microsoft Azure platform.",
      duration: "10 weeks",
      level: "Intermediate",
      format: "Live Online",
      highlights: [
        "Azure Data Factory pipelines",
        "Azure Synapse Analytics",
        "Data lake architecture",
        "Azure Databricks integration",
        "Certification preparation (DP-203)"
      ]
    },
    {
      title: "Databricks Engineer",
      description: "Build scalable data pipelines and lakehouse architectures with Databricks.",
      duration: "8 weeks",
      level: "Intermediate to Advanced",
      format: "Hybrid",
      highlights: [
        "Delta Lake fundamentals",
        "Spark optimization techniques",
        "Unity Catalog administration",
        "Medallion architecture implementation",
        "MLflow integration"
      ]
    },
    {
      title: "Business Intelligence Analyst",
      description: "Comprehensive BI training covering requirements, modeling, and reporting.",
      duration: "12 weeks",
      level: "Beginner",
      format: "Live Online",
      highlights: [
        "Requirements gathering",
        "Dimensional modeling",
        "ETL concepts and tools",
        "Power BI + SQL Server",
        "Business storytelling with data"
      ]
    },
    {
      title: "AI Engineer",
      description: "Build and deploy machine learning and AI solutions in production.",
      duration: "10 weeks",
      level: "Advanced",
      format: "Hybrid",
      highlights: [
        "ML fundamentals and frameworks",
        "Azure Machine Learning",
        "MLOps best practices",
        "GenAI and LangChain",
        "Model deployment strategies"
      ]
    },
    {
      title: "Prompt Engineer",
      description: "Master the art of prompt engineering for generative AI applications.",
      duration: "4 weeks",
      level: "Beginner to Intermediate",
      format: "Live Online",
      highlights: [
        "Prompt design principles",
        "Azure OpenAI Service",
        "RAG implementation",
        "Chain-of-thought techniques",
        "Production prompt management"
      ]
    },
    {
      title: "Python for Data",
      description: "Python programming fundamentals for data analysis and engineering.",
      duration: "6 weeks",
      level: "Beginner",
      format: "Live Online",
      highlights: [
        "Python syntax and fundamentals",
        "Pandas and NumPy",
        "Data visualization with Matplotlib",
        "API integration",
        "Jupyter notebooks"
      ]
    },
    {
      title: "Azure Data Factory Masterclass",
      description: "Deep dive into Azure Data Factory for enterprise ETL/ELT solutions.",
      duration: "6 weeks",
      level: "Intermediate",
      format: "Live Online",
      highlights: [
        "Pipeline design patterns",
        "Mapping data flows",
        "CI/CD for ADF",
        "Performance optimization",
        "Integration with other Azure services"
      ]
    }
  ];

  const formats = [
    {
      icon: MapPin,
      title: "In-Person Calgary",
      description: "Hands-on training at our Calgary facility with direct instructor access."
    },
    {
      icon: Video,
      title: "Live Online",
      description: "Interactive virtual sessions with real-time collaboration and support."
    },
    {
      icon: Building,
      title: "Corporate On-Site",
      description: "Customized training delivered at your organization's location."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 px-4 py-2 bg-accent text-accent-foreground">
              Training-to-Hire Model
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launch Your Data Career
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Industry-leading training programs with hands-on projects, mentorship, 
              and direct pathways to employment.
            </p>
            <Button size="lg" asChild variant="secondary">
              <Link to="/contact">Book a Course Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="gradient-text">Ripotek Training?</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Renowned Instructors</h3>
                    <p className="text-muted-foreground">Learn from seasoned professionals with years of real-world industry experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hands-On Projects</h3>
                    <p className="text-muted-foreground">Work on real-world scenarios and build a portfolio that showcases your skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">One-on-One Coaching</h3>
                    <p className="text-muted-foreground">Personalized mentorship to ensure you master every concept.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Job Placement Support</h3>
                    <p className="text-muted-foreground">Career coaching, resume workshops, and connections to our hiring network.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={trainingSession} 
                alt="Training Session" 
                className="rounded-2xl shadow-strong hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible <span className="gradient-text">Learning Formats</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the format that fits your schedule and learning style
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <div 
                key={index} 
                className="p-8 bg-card rounded-xl border-2 border-border hover:border-accent transition-colors hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <format.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{format.title}</h3>
                <p className="text-muted-foreground">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Course <span className="gradient-text">Catalog</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to prepare you for in-demand data roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <TrainingCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-op/Placement Program */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Training-to-Hire <span className="gradient-text">Pathway</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our unique training-to-hire model connects top graduates with leading organizations 
              looking for skilled data professionals. Complete your training, demonstrate your 
              skills on real projects, and transition directly into a career role.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-card rounded-xl border-2 border-border">
                <div className="text-3xl font-bold gradient-text mb-2">1</div>
                <h3 className="font-semibold mb-2">Learn</h3>
                <p className="text-sm text-muted-foreground">Complete hands-on training with expert instructors</p>
              </div>
              <div className="p-6 bg-card rounded-xl border-2 border-border">
                <div className="text-3xl font-bold gradient-text mb-2">2</div>
                <h3 className="font-semibold mb-2">Practice</h3>
                <p className="text-sm text-muted-foreground">Build portfolio projects on real business scenarios</p>
              </div>
              <div className="p-6 bg-card rounded-xl border-2 border-border">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <h3 className="font-semibold mb-2">Connect</h3>
                <p className="text-sm text-muted-foreground">Get matched with hiring partners in our network</p>
              </div>
            </div>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Link to="/contact">
                Join Our Talent Network <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Graduates</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">15</div>
              <div className="text-sm text-muted-foreground">Industry Experts</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Explore our training programs and take the first step towards a rewarding career in data and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="secondary">
              <Link to="/contact">Enroll in a Course</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
