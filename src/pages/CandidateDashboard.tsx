import { Button } from "@/components/ui/button";
import { Briefcase, Bookmark, FileText, Settings, User, Bell, MapPin, Building2, Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CandidateDashboard() {
  return (
    <div className="bg-background min-h-screen">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center border-4 border-background shrink-0">
              <span className="text-3xl font-bold text-primary">JD</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-foreground">John Doe</h1>
              <p className="text-muted-foreground mb-2">Senior Frontend Developer | React | TypeScript</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> San Francisco, CA
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" /> 5+ Years Experience
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Edit Profile</Button>
              <Button>Upload Resume</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="bg-card border border-border rounded-xl overflow-hidden sticky top-24 shadow-sm">
              <div className="p-4 bg-muted/30 border-b border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm">Profile Completion</span>
                  <span className="font-semibold text-sm text-primary">85%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%] rounded-full"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Add your certifications to reach 100%</p>
              </div>
              <nav className="p-2">
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-md bg-primary/10 text-primary font-medium">
                  <Briefcase className="h-5 w-5" /> Dashboard
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <FileText className="h-5 w-5" /> Applied Jobs
                  <span className="ml-auto bg-muted-foreground/20 text-foreground text-xs py-0.5 px-2 rounded-full">12</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <Bookmark className="h-5 w-5" /> Saved Jobs
                  <span className="ml-auto bg-muted-foreground/20 text-foreground text-xs py-0.5 px-2 rounded-full">5</span>
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <Bell className="h-5 w-5" /> Job Alerts
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <User className="h-5 w-5" /> Public Profile
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border-t border-border mt-2 pt-4">
                  <Settings className="h-5 w-5" /> Settings
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Dashboard Content */}
          <div className="lg:w-3/4 space-y-8">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">12</h3>
                  <p className="text-sm text-muted-foreground">Applied Jobs</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">45</h3>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
                  <Bookmark className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">5</h3>
                  <p className="text-sm text-muted-foreground">Saved Jobs</p>
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground">Recent Applications</h2>
                <Link to="#" className="text-sm text-primary hover:underline">View All</Link>
              </div>
              <div className="divide-y divide-border">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center shrink-0">
                        <Building2 className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Frontend Engineer</h4>
                        <p className="text-sm text-muted-foreground">TechNova Inc. • Applied 2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${i === 1 ? 'bg-yellow-500/10 text-yellow-600' : i === 2 ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                        {i === 1 ? 'Under Review' : i === 2 ? 'Interviewing' : 'Rejected'}
                      </span>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Recommended Jobs</h2>
                <p className="text-sm text-muted-foreground mt-1">Based on your profile and search history</p>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                    <h4 className="font-semibold text-foreground">React Developer</h4>
                    <p className="text-sm text-muted-foreground mb-3">StartupX • San Francisco, CA</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">$120k - $140k</span>
                      <Link to={`/jobs/${i}`} className="text-primary font-medium hover:underline">Apply Now</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
