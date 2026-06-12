import { Button } from "@/components/ui/button";
import { Building2, MapPin, Briefcase, Clock, DollarSign, Calendar, Share2, Bookmark, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobDetails() {
  return (
    <div className="bg-background min-h-screen">
      {/* Job Header */}
      <div className="bg-card border-b border-border py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-start gap-6">
              <div className="h-20 w-20 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border shadow-sm">
                <Building2 className="h-10 w-10 text-muted-foreground" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Senior Frontend Developer</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <Link to="/companies/1" className="hover:text-primary transition-colors font-medium">InnovateTech Solutions</Link>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> San Francisco, CA (Hybrid)
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> Posted 2 days ago
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" size="icon" className="shrink-0 h-11 w-11 rounded-full">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="shrink-0 h-11 w-11 rounded-full">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button size="lg" className="w-full md:w-auto px-8 h-11 rounded-full shadow-md hover:shadow-lg transition-all">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Job Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><Briefcase className="h-4 w-4"/> Job Type</p>
                  <p className="font-medium text-foreground">Full-time</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><MapPin className="h-4 w-4"/> Workspace</p>
                  <p className="font-medium text-foreground">Hybrid</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><DollarSign className="h-4 w-4"/> Salary</p>
                  <p className="font-medium text-foreground">$130k - $160k</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><Calendar className="h-4 w-4"/> Experience</p>
                  <p className="font-medium text-foreground">5+ Years</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Job Description</h2>
              <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground">
                <p className="mb-4">
                  We are looking for an experienced Senior Frontend Developer to join our core product team. You will be responsible for building and maintaining the user interface of our flagship application, ensuring a seamless and intuitive experience for our users.
                </p>
                <p className="mb-4">
                  In this role, you will collaborate closely with designers, product managers, and backend engineers to deliver high-quality features. You should have a deep understanding of modern web technologies, particularly React and TypeScript, and a passion for crafting elegant and performant UI components.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Key Responsibilities</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Develop new user-facing features using React.js and TypeScript.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Build reusable components and front-end libraries for future use.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Translate UI/UX design wireframes to actual code that will produce visual elements of the application.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Optimize application for maximum speed and scalability.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Requirements</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span>5+ years of experience in front-end development.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Thorough understanding of React.js and its core principles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span>Experience with modern front-end build pipelines and tools.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10 border-t border-border pt-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Tags / Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "GraphQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-4">Company Profile</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center shrink-0 border border-border">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">InnovateTech Solutions</h4>
                  <Link to="/companies/1" className="text-sm text-primary hover:underline">View Company Profile</Link>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                InnovateTech Solutions is a leading provider of innovative software products for the enterprise market. We are dedicated to building tools that empower teams to do their best work.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-medium text-foreground">2010</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Employees</span>
                  <span className="font-medium text-foreground">201-500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Industry</span>
                  <span className="font-medium text-foreground">Information Technology</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <h3 className="font-bold text-lg mb-2 text-foreground">Ready to Apply?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Submit your application directly through CareerConnect for faster processing.
              </p>
              <Button size="lg" className="w-full h-12">Apply for this Job</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
