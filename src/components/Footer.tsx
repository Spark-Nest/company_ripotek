import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import ripotekLogo from "@/assets/ripotek-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const serviceLinks = [{
    name: "Strategy & Architecture",
    path: "/services"
  }, {
    name: "Data Engineering",
    path: "/services"
  }, {
    name: "Analytics & BI",
    path: "/services"
  }, {
    name: "MLOps & AI",
    path: "/services"
  }];
  const trainingLinks = [{
    name: "Power BI Analyst",
    path: "/training"
  }, {
    name: "Azure Data Engineer",
    path: "/training"
  }, {
    name: "Databricks Engineer",
    path: "/training"
  }, {
    name: "AI Engineer",
    path: "/training"
  }];
  const companyLinks = [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Case Studies",
    path: "/case-studies"
  }, {
    name: "Careers",
    path: "/careers"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={ripotekLogo} alt="Ripotek Technology Inc." className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Ripotek Technology Inc.</span>
                <span className="text-sm opacity-80">Design. Engineer. Deliver</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-6 max-w-sm">
              Enterprise data consulting and training services. Empowering organizations with 
              governed self-service BI, Azure modernization, and industry-leading expertise.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Calgary, Alberta, Canada</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@ripotek.com" className="hover:underline">info@ripotek.com</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1306-999-3552</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="font-semibold mb-4">Training</h3>
            <ul className="space-y-2">
              {trainingLinks.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} Ripotek Technology Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 hover:underline">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 hover:underline">
                Privacy Policy
              </Link>
              <Link to="/refund" className="text-sm opacity-80 hover:opacity-100 hover:underline">
                Refund Policy
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
