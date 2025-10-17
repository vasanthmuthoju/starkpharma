import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Sparkles, ArrowRight, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">AI-Powered Recruiting Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Transform Your{" "}
            <span className=" bg-gradient-hero bg-clip-text text-transparent" >
              Recruiting
            </span>{" "}
            with AI
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up delay-100">
            Streamline hiring, manage workforce, and make data-driven decisions with our 
            all-in-one AI recruiting and workforce management platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up delay-200">
            <Button 
              size="lg" 
              asChild 
              className="bg-gradient-primary shadow-glow-primary hover:shadow-glow-secondary text-lg px-8 py-6 group"
            >
              <Link to="/signup" className="flex items-center gap-2">
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="text-lg px-8 py-6 border-2"
            >
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in delay-300">
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow-primary transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow-secondary transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">85%</div>
              <div className="text-muted-foreground">Faster Hiring</div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow-primary transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-success/10 text-success mb-4 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">AI-First</div>
              <div className="text-muted-foreground">Technology</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
