import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Building2, Users, TrendingUp, Search, Plus, Filter, MoreHorizontal, UserCheck, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecruiterDashboard() {
  return (
    <div className="bg-background min-h-screen pb-12">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center border border-border">
                <Building2 className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">InnovateTech Solutions</h1>
                <p className="text-muted-foreground">Recruiter Dashboard</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Company Profile</Button>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" /> Post a Job
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                <h3 className="text-3xl font-bold text-foreground mt-1">12</h3>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <p className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <TrendingUp className="h-3 w-3" /> +2 this week
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                <h3 className="text-3xl font-bold text-foreground mt-1">458</h3>
              </div>
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <p className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <TrendingUp className="h-3 w-3" /> +45 this week
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Shortlisted</p>
                <h3 className="text-3xl font-bold text-foreground mt-1">64</h3>
              </div>
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                <UserCheck className="h-5 w-5" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting interview</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Hired</p>
                <h3 className="text-3xl font-bold text-foreground mt-1">8</h3>
              </div>
              <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - ATS Table */}
          <div className="lg:w-3/4">
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-bold text-foreground">Recent Applications</h2>
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="text" placeholder="Search candidates..." className="pl-9 h-9" />
                  </div>
                  <Button variant="outline" size="sm" className="h-9 gap-1 shrink-0">
                    <Filter className="h-4 w-4" /> Filter
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground bg-muted/50 border-b border-border">
                    <tr>
                      <th className="px-6 py-3 font-medium">Candidate Name</th>
                      <th className="px-6 py-3 font-medium">Applied For</th>
                      <th className="px-6 py-3 font-medium">Applied Date</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { name: 'Alice Smith', role: 'Frontend Engineer', date: 'Oct 24, 2026', status: 'Under Review', color: 'bg-yellow-500/10 text-yellow-600' },
                      { name: 'Michael Chen', role: 'Product Manager', date: 'Oct 23, 2026', status: 'Shortlisted', color: 'bg-indigo-500/10 text-indigo-600' },
                      { name: 'Sarah Jones', role: 'Backend Developer', date: 'Oct 21, 2026', status: 'Interviewing', color: 'bg-green-500/10 text-green-600' },
                      { name: 'David Wilson', role: 'UI/UX Designer', date: 'Oct 20, 2026', status: 'Rejected', color: 'bg-red-500/10 text-red-600' },
                      { name: 'Emma Brown', role: 'Frontend Engineer', date: 'Oct 19, 2026', status: 'Under Review', color: 'bg-yellow-500/10 text-yellow-600' },
                    ].map((app, i) => (
                      <tr key={i} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                              {app.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-medium text-foreground">{app.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{app.role}</td>
                        <td className="px-6 py-4 text-muted-foreground">{app.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${app.color}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50">
                              <UserCheck className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                              <XCircle className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-border flex justify-between items-center text-sm text-muted-foreground">
                <span>Showing 1 to 5 of 458 entries</span>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Active Jobs */}
          <aside className="lg:w-1/4">
            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="font-bold text-lg text-foreground">Active Jobs</h3>
                <Link to="#" className="text-sm text-primary hover:underline">View All</Link>
              </div>
              <div className="divide-y divide-border">
                {[
                  { title: 'Frontend Engineer', applicants: 124 },
                  { title: 'Product Manager', applicants: 89 },
                  { title: 'Backend Developer', applicants: 210 },
                  { title: 'UI/UX Designer', applicants: 35 },
                ].map((job, i) => (
                  <div key={i} className="p-4 hover:bg-muted/50 transition-colors">
                    <h4 className="font-medium text-foreground mb-1">{job.title}</h4>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{job.applicants} Applicants</span>
                      <span className="text-green-600 text-xs font-medium bg-green-500/10 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
