import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, Building2, Filter, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for filters
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Director"];
  const workModes = ["Remote", "Hybrid", "On-site"];

  return (
    <div className="bg-background min-h-screen pb-12">
      {/* Search Header */}
      <div className="bg-muted/30 border-b border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Find Jobs</h1>
          <div className="bg-card rounded-xl shadow-sm p-2 border border-border">
            <form className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Job title, skills, or company" 
                  className="pl-10 h-12 border-none shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="hidden md:block w-px bg-border my-2"></div>
              <div className="flex-1 flex items-center relative border-t md:border-none border-border pt-2 md:pt-0">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 md:translate-y-[-50%] h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Location" 
                  className="pl-10 h-12 border-none shadow-none focus-visible:ring-0"
                />
              </div>
              <Button type="button" className="h-12 px-8 mt-2 md:mt-0">Search</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <span className="font-medium text-foreground">1,245 Jobs Found</span>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>

          {/* Filters Sidebar */}
          <aside className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Filters</h2>
                <button className="text-sm text-primary hover:underline">Clear all</button>
              </div>

              {/* Job Type Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Job Type</h3>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-4 w-4" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Work Mode Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Work Mode</h3>
                <div className="space-y-2">
                  {workModes.map((mode) => (
                    <label key={mode} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-4 w-4" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Experience Level</h3>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="rounded border-input text-primary focus:ring-primary h-4 w-4" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full lg:hidden" onClick={() => setShowFilters(false)}>Apply Filters</Button>
            </div>
          </aside>

          {/* Job Listings */}
          <div className="lg:w-3/4">
            <div className="hidden lg:flex justify-between items-center mb-6">
              <span className="font-medium text-foreground">1,245 Jobs Found</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm border-border bg-background rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>Most Relevant</option>
                  <option>Most Recent</option>
                  <option>Salary (High to Low)</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {/* Mock Job Cards */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="group flex flex-col sm:flex-row gap-4 border border-border bg-card rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="h-14 w-14 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Building2 className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          <Link to={`/jobs/${i}`}>Senior Frontend Developer</Link>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">InnovateTech Solutions</p>
                      </div>
                      <button className="text-muted-foreground hover:text-primary transition-colors p-1">
                        <Bookmark className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> San Francisco, CA (Hybrid)
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" /> $130k - $160k
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="bg-muted px-2 py-0.5 rounded text-xs text-foreground">React</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="bg-muted px-2 py-0.5 rounded text-xs text-foreground">TypeScript</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">Posted 2 days ago</span>
                      <Link to={`/jobs/${i}`} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-3">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="default" size="icon" className="h-9 w-9">1</Button>
              <Button variant="outline" size="icon" className="h-9 w-9">2</Button>
              <Button variant="outline" size="icon" className="h-9 w-9">3</Button>
              <span className="text-muted-foreground mx-2">...</span>
              <Button variant="outline" size="icon" className="h-9 w-9">10</Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
