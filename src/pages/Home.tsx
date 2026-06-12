import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building2, Briefcase, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Over 10,000+ jobs available
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Find Your Next <span className="text-primary">Dream Job</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Connect with top employers and discover opportunities that match your skills, passion, and career goals.
          </p>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-4 md:p-2 border border-border">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="pl-10 h-12 md:h-14 border-none shadow-none focus-visible:ring-0 text-base"
                />
              </div>
              <div className="hidden md:block w-px bg-border my-2"></div>
              <div className="flex-1 flex items-center relative border-t md:border-none border-border pt-4 md:pt-0">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 md:translate-y-[-50%] h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="City, state, or zip code" 
                  className="pl-10 h-12 md:h-14 border-none shadow-none focus-visible:ring-0 text-base"
                />
              </div>
              <Button type="button" size="lg" className="h-12 md:h-14 px-8 text-base w-full md:w-auto mt-4 md:mt-0">
                Search Jobs
              </Button>
            </form>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>Popular searches:</span>
            <Link to="/jobs?q=Designer" className="hover:text-primary transition-colors">Designer</Link>
            <Link to="/jobs?q=Developer" className="hover:text-primary transition-colors">Developer</Link>
            <Link to="/jobs?q=Product+Manager" className="hover:text-primary transition-colors">Product Manager</Link>
            <Link to="/jobs?q=Marketing" className="hover:text-primary transition-colors">Marketing</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">15k+</h3>
              <p className="text-sm text-muted-foreground">Active Jobs</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">3k+</h3>
              <p className="text-sm text-muted-foreground">Companies</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">50k+</h3>
              <p className="text-sm text-muted-foreground">Candidates</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">120k+</h3>
              <p className="text-sm text-muted-foreground">Applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Jobs</h2>
              <p className="text-muted-foreground">Discover the latest and most popular opportunities.</p>
            </div>
            <Button variant="outline" className="hidden sm:flex">View All Jobs</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mock Job Cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                    <Building2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Full-time
                  </span>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    Senior Software Engineer
                  </h3>
                  <p className="text-sm text-muted-foreground">TechNova Inc.</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" /> $120k - $150k
                  </div>
                </div>
                <Button className="w-full" variant="secondary">Apply Now</Button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="w-full">View All Jobs</Button>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Top Companies</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Leading organizations trust CareerConnect to find exceptional talent.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 font-bold text-xl text-muted-foreground">
                <Building2 className="h-8 w-8" />
                Company {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
