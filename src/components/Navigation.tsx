import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ripotekLogo from "@/assets/ripotek-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "About",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Training",
    path: "/training"
  }, {
    name: "Case Studies",
    path: "/case-studies"
  }, {
    name: "Blog",
    path: "/blog"
  }, {
    name: "Resources",
    path: "/resources"
  }, {
    name: "Careers",
    path: "/careers"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className={`flex items-center gap-3 hover:opacity-80 transition-opacity ${isActive('/') ? 'bg-muted rounded-md px-2 py-1' : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            <img src={ripotekLogo} alt="Ripotek Technology Inc." className="h-10 w-10 md:h-12 md:w-12" />
            <div className="leading-tight">
              <div className="font-brand text-3xl md:text-4xl font-extrabold tracking-wide text-primary">Ripotek</div>
              <div className="font-brand text-[9px] md:text-[11px] text-muted-foreground tracking-[0.18em]">Design.Engineer.Deliver</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
                {link.name}
              </Link>)}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
                  {link.name}
                </Link>)}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Book Discovery Call</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
