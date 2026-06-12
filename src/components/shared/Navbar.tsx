import { Link } from "react-router-dom";
import { Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">CareerConnect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link to="/jobs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Find Jobs
            </Link>
            <Link to="/companies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Companies
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              For Employers
            </Link>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
              <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Sign In
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b border-border transition-all duration-200 ease-in-out",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            to="/jobs"
            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Find Jobs
          </Link>
          <Link
            to="/companies"
            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            Companies
          </Link>
          <Link
            to="/pricing"
            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            For Employers
          </Link>
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-border">
            <Link
              to="/login"
              className="block rounded-md px-3 py-2 text-center text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
