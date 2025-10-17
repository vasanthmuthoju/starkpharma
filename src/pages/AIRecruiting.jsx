import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { Brain, Target, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import PageTransition from "../components/pagetransition";

const AIRecruiting = () => {
  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">Next-Gen AI Technology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Recruiting Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Harness the power of artificial intelligence to find, evaluate, and hire the best candidates faster than ever before
            </p>
            <Button size="lg" asChild className="bg-gradient-primary shadow-glow-primary">
              <Link to="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How AI Powers Your Recruiting
            </h2>
            <p className="text-xl text-muted-foreground">
              Our advanced machine learning algorithms work behind the scenes to optimize every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-glow-primary transition-all duration-300 border-2 hover:border-primary/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Matching</h3>
              <p className="text-muted-foreground">
                AI analyzes skills, experience, and cultural fit to rank candidates automatically
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-glow-secondary transition-all duration-300 border-2 hover:border-secondary/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Precision Sourcing</h3>
              <p className="text-muted-foreground">
                Discover hidden talent across the web using intelligent search and recommendations
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-glow-primary transition-all duration-300 border-2 hover:border-success/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-muted-foreground">
                Forecast hiring outcomes and identify the best candidates likely to succeed
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Reduce Time-to-Hire by{" "}
                  <span className="text-primary">85%</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI platform automates the most time-consuming parts of recruiting, so you can focus on building relationships with top talent.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Automated Screening</h3>
                      <p className="text-muted-foreground">
                        AI reviews and ranks hundreds of resumes in seconds, not hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Users className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Bias-Free Hiring</h3>
                      <p className="text-muted-foreground">
                        Eliminate unconscious bias with objective, data-driven candidate evaluation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <Sparkles className="text-success" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                      <p className="text-muted-foreground">
                        AI improves over time, learning from your hiring decisions and feedback
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-gradient-subtle border-2">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Resume Screening</span>
                      <span className="text-success font-bold">98%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary w-[98%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Candidate Matching</span>
                      <span className="text-success font-bold">95%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-secondary w-[95%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Skills Assessment</span>
                      <span className="text-success font-bold">92%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary w-[92%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Interview Success Rate</span>
                      <span className="text-success font-bold">89%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-secondary w-[89%] rounded-full"></div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center pt-4 border-t">
                    AI accuracy rates based on 10,000+ successful placements
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience AI Recruiting Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your free trial and see how AI can transform your hiring process
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default AIRecruiting;
