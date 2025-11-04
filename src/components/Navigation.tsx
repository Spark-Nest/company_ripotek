import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import ripotekLogo from "@/assets/ripotek-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);
  const [openResources, setOpenResources] = useState(false);
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
            className={`flex items-center gap-3 hover:opacity-80 transition-opacity rounded-md px-2 py-1 ${isActive('/') ? 'bg-muted' : 'bg-transparent'}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            <img src={ripotekLogo} alt="Ripotek Technology Inc." className="h-10 w-10 md:h-12 md:w-12" />
            <div className="leading-tight">
              <div className="font-brand text-3xl md:text-4xl font-extrabold tracking-wide text-primary">Ripotek</div>
              <div className="font-brand text-[9px] md:text-[11px] text-muted-foreground tracking-[0.18em]">Design . Engineer . Deliver</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/about" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about') ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>About</Link>

            <DropdownMenu open={openServices} onOpenChange={setOpenServices}>
              <DropdownMenuTrigger onMouseEnter={() => setOpenServices(true)} onMouseLeave={() => setOpenServices(false)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${isActive('/services') ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
                Services <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent onMouseEnter={() => setOpenServices(true)} onMouseLeave={() => setOpenServices(false)} align="start" className="w-64">
                <DropdownMenuItem asChild><Link to="/services">What we do</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Consulting</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/services#strategy">Strategy & Architecture</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services#engineering">Data Engineering</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services#analytics">Analytics & BI</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services#ai">MLOps & AI</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu open={openTraining} onOpenChange={setOpenTraining}>
              <DropdownMenuTrigger onMouseEnter={() => setOpenTraining(true)} onMouseLeave={() => setOpenTraining(false)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${isActive('/training') ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
                Training <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent onMouseEnter={() => setOpenTraining(true)} onMouseLeave={() => setOpenTraining(false)} align="start" className="w-72">
                <DropdownMenuItem asChild><Link to="/training">Ripotek Academy</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training#programs">All Programs</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Programs</DropdownMenuLabel>
                <DropdownMenuItem asChild><Link to="/training/syllabus/power-bi-analyst">Power BI Analyst</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training/syllabus/azure-data-engineer">Azure Data Engineer</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training/syllabus/databricks-engineer">Databricks Engineer</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training/syllabus/business-intelligence-analyst">Business Intelligence Analyst</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training/syllabus/ai-engineer">AI Engineer</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training/syllabus/prompt-engineering">Prompt Engineering</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training/syllabus/python-for-data">Python for Data</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/training/syllabus/azure-data-factory-masterclass">ADF Masterclass</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/case-studies" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/case-studies') ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Case Studies</Link>
            <Link to="/blog" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/blog') ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Blog</Link>

            <DropdownMenu open={openResources} onOpenChange={setOpenResources}>
              <DropdownMenuTrigger onMouseEnter={() => setOpenResources(true)} onMouseLeave={() => setOpenResources(false)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 ${isActive('/resources') ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
                Resources <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent onMouseEnter={() => setOpenResources(true)} onMouseLeave={() => setOpenResources(false)} align="start" className="w-64">
                <DropdownMenuItem asChild><Link to="/resources">Resource Library</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/blog">Blog</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/resources#whitepapers">Whitepapers</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/careers" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/careers') ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Careers</Link>
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
              <div className="px-4 mt-2">
                <div className="text-xs uppercase text-muted-foreground mb-1">Programs</div>
                <div className="grid grid-cols-1 gap-1">
                  <Link to="/training/syllabus/power-bi-analyst" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-muted">Power BI Analyst</Link>
                  <Link to="/training/syllabus/azure-data-engineer" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-muted">Azure Data Engineer</Link>
                  <Link to="/training/syllabus/databricks-engineer" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-muted">Databricks Engineer</Link>
                  <Link to="/training/syllabus/business-intelligence-analyst" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md text-sm hover:bg-muted">Business Intelligence Analyst</Link>
                </div>
              </div>
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
