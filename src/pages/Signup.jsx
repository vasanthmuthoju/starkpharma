import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { CheckCircle } from "lucide-react";
import logo from "../assets/logo.webp";
import PageTransition from "../components/pagetransition";

const Signup = () => {
  const benefits = [
    "14-day free trial, no credit card required",
    "Access to all premium features",
    "Unlimited job postings",
    "AI-powered candidate matching",
    "24/7 customer support",
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-block mb-8">
          <img src={logo} alt="Stark Pharma Logo" className="h-12" />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Benefits */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Free Trial
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of companies using our platform to transform their hiring process
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-success flex-shrink-0 mt-0.5" size={24} />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">500K+</div>
                <div className="text-sm text-muted-foreground">Hires Made</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6">Create your account</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workEmail">Work Email</Label>
                <Input 
                  id="workEmail" 
                  type="email" 
                  placeholder="john@company.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input 
                  id="company" 
                  placeholder="Acme Inc."
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  className="h-12"
                />
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters with 1 number and 1 special character
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-primary shadow-glow-primary text-lg"
              >
                Start Free Trial
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Signup;
