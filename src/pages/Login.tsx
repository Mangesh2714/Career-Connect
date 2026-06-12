import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-card border border-border p-8 rounded-2xl shadow-sm">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary mb-4">
            <Briefcase className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link to="/register" className="font-medium text-primary hover:underline">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
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
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm font-medium text-primary hover:underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
              Remember me
            </label>
          </div>

          <div>
            <Button type="submit" className="w-full h-11 text-base">
              Sign in
            </Button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
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
