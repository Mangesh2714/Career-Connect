import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">CareerConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting top talent with the world's most innovative companies. Your next career move starts here.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Candidates</h3>
            <ul className="space-y-3">
              <li><Link to="/jobs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Browse Jobs</Link></li>
              <li><Link to="/companies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Browse Companies</Link></li>
              <li><Link to="/salary" className="text-sm text-muted-foreground hover:text-primary transition-colors">Salary Insights</Link></li>
              <li><Link to="/resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Employers</h3>
            <ul className="space-y-3">
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Post a Job</Link></li>
              <li><Link to="/search" className="text-sm text-muted-foreground hover:text-primary transition-colors">Search Resumes</Link></li>
              <li><Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Talent Solutions</Link></li>
              <li><Link to="/advertise" className="text-sm text-muted-foreground hover:text-primary transition-colors">Advertise with us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
