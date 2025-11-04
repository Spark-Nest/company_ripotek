import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Send, Calendar as CalendarIcon, Inbox } from "lucide-react";

const Contact = () => {
  const [formType, setFormType] = useState<string>("consulting");
  const calendlyUrl = (import.meta as any).env?.VITE_CALENDLY_URL || "https://calendly.com/paroyal007/30min";
  const formRef = useRef<HTMLFormElement | null>(null);

  // Load Calendly inline widget script once on client
  useEffect(() => {
    const src = "https://assets.calendly.com/assets/external/widget.js";
    if (document.querySelector(`script[src='${src}']`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Build simple widget URL with required embed params only
  const widgetUrl = (typeof window !== 'undefined')
    ? `${calendlyUrl}${calendlyUrl.includes('?') ? '&' : '?'}embed_domain=${window.location.hostname || 'localhost'}&embed_type=Inline`
    : calendlyUrl;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll be in touch soon.");
  };

  const handleRequestProposal = () => {
    setFormType("consulting");
    // Always jump to top for a clear start
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    toast.success("Switched to Consulting — tell us about your project.");
  };


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl opacity-90">
              Whether you need consulting services, training programs, or career opportunities, 
              we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Calgary, Alberta, Canada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@ripotek.com" className="text-muted-foreground hover:text-accent transition-colors">
                        info@ripotek.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+1306-999-3552</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM MST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>

              {/* Booking calendar moved next to the form */}
            </div>

            {/* Booking Calendar + Contact Form side-by-side */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Booking Calendar */}
              <Card className="border-2 border-accent/60 bg-accent/5 h-full flex flex-col" style={{ minHeight: 720 }}>
                <CardHeader>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold shadow mb-2 w-fit">
                    <CalendarIcon className="h-3.5 w-3.5" /> Live Booking
                  </div>
                  <CardTitle className="text-2xl font-brand">Booking Calendar</CardTitle>
                  <CardDescription>
                    Schedule a discovery call directly on our calendar
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="rounded-lg overflow-hidden border flex-1">
                    <div
                      className="calendly-inline-widget h-full"
                      data-url={widgetUrl}
                      style={{ minWidth: "320px", height: "100%" }}
                    />
                  </div>
                  <div className="mt-3 text-right">
                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline text-accent hover:opacity-80">
                      Open in Calendly
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="border-2 h-full flex flex-col" style={{ minHeight: 720 }}>
                <CardHeader>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold shadow mb-2 w-fit">
                    <Inbox className="h-3.5 w-3.5" /> Contact Form
                  </div>
                  <CardTitle className="text-2xl font-brand">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Form Type Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="formType">I'm interested in</Label>
                      <Select value={formType} onValueChange={setFormType}>
                        <SelectTrigger id="formType">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulting">Consulting Services</SelectItem>
                          <SelectItem value="training">Training Programs</SelectItem>
                          <SelectItem value="careers">Career Opportunities</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1306-999-3552" />
                      </div>
                    </div>

                    {/* Company/Organization */}
                    {(formType === "consulting" || formType === "general") && (
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input id="company" placeholder="Your Company Name" />
                      </div>
                    )}

                    {/* Course Interest (for training) */}
                    {formType === "training" && (
                      <div className="space-y-2">
                        <Label htmlFor="course">Course of Interest</Label>
                        <Select>
                          <SelectTrigger id="course">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="powerbi">Power BI Analyst</SelectItem>
                            <SelectItem value="azure">Azure Data Engineer</SelectItem>
                            <SelectItem value="databricks">Databricks Engineer</SelectItem>
                            <SelectItem value="bi">Business Intelligence Analyst</SelectItem>
                            <SelectItem value="ai">AI Engineer</SelectItem>
                            <SelectItem value="prompt">Prompt Engineer</SelectItem>
                            <SelectItem value="python">Python for Data</SelectItem>
                            <SelectItem value="adf">Azure Data Factory</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your needs..." 
                        rows={6}
                        required 
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift border-2">
              <CardHeader>
                <CardTitle>Request a Proposal</CardTitle>
                <CardDescription>
                  Get a detailed proposal for your consulting project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" onClick={handleRequestProposal}>
                  Request Proposal
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2">
              <CardHeader>
                <CardTitle>Download Capabilities</CardTitle>
                <CardDescription>
                  Learn more about our services and expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/capabilities/capabilities.html" target="_blank" rel="noopener noreferrer">
                    Download Deck
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2">
              <CardHeader>
                <CardTitle>Join Talent Network</CardTitle>
                <CardDescription>
                  Connect with us for future opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/careers#openings" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                    Join Network
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
