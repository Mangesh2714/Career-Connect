import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("seeker");

  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-card border border-border p-8 rounded-2xl shadow-sm">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary mb-4">
            <Briefcase className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Create an account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
        
        <div className="flex bg-muted p-1 rounded-lg">
          <button 
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'seeker' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setRole('seeker')}
          >
            Job Seeker
          </button>
          <button 
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'recruiter' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={() => setRole('recruiter')}
          >
            Recruiter
          </button>
        </div>

        <form className="mt-6 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-1">
                  First name
                </label>
                <Input id="first-name" name="firstName" type="text" required placeholder="John" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-1">
                  Last name
                </label>
                <Input id="last-name" name="lastName" type="text" required placeholder="Doe" />
              </div>
            </div>
            
            {role === 'recruiter' && (
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                  Company name
                </label>
                <Input id="company" name="company" type="text" required placeholder="Acme Inc." />
              </div>
            )}

            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-foreground mb-1">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
              I agree to the{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <div>
            <Button type="submit" className="w-full h-11 text-base">
              Create Account
            </Button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline" className="w-full">
              Google
            </Button>
            <Button type="button" variant="outline" className="w-full">
              LinkedIn
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
