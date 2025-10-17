import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { FileText, Users, Calendar, TrendingUp, CheckCircle, Clock } from "lucide-react";
import PageTransition from "../components/pagetransition";

const ATS = () => {
  const workflowSteps = [
    { title: "Job Posting", status: "Complete", color: "success" },
    { title: "Candidate Screening", status: "In Progress", color: "primary" },
    { title: "Interview Rounds", status: "Pending", color: "muted" },
    { title: "Offer Management", status: "Pending", color: "muted" },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Modern{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Applicant Tracking System
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamline your entire hiring pipeline with intelligent workflows, collaborative tools, and real-time insights
            </p>
            <Button size="lg" asChild className="bg-gradient-secondary shadow-glow-secondary">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Workflow Demo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visualize Your Hiring Pipeline
            </h2>
            <p className="text-xl text-muted-foreground">
              Track every candidate through your customizable workflow stages
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-subtle">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <Card className={`p-6 text-center border-2 ${
                      step.color === "success" ? "border-success bg-success/5" : 
                      step.color === "primary" ? "border-primary bg-primary/5" : 
                      "border-border"
                    }`}>
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                        step.color === "success" ? "bg-success/10 text-success" : 
                        step.color === "primary" ? "bg-primary/10 text-primary" : 
                        "bg-muted text-muted-foreground"
                      }`}>
                        {step.color === "success" ? <CheckCircle size={24} /> : 
                         step.color === "primary" ? <Clock size={24} /> : 
                         <FileText size={24} />}
                      </div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.status}</p>
                    </Card>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 translate-x-full w-4">
                        <div className="h-0.5 bg-border"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">156</div>
                    <div className="text-sm text-muted-foreground">Total Candidates</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">23</div>
                    <div className="text-sm text-muted-foreground">In Interview</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-success mb-2">8</div>
                    <div className="text-sm text-muted-foreground">Offers Extended</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-glow-primary transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <FileText size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Resume Parsing</h3>
                <p className="text-muted-foreground">
                  Automatically extract and structure candidate information from resumes and CVs
                </p>
              </Card>

              <Card className="p-8 hover:shadow-glow-secondary transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Collaborative Hiring</h3>
                <p className="text-muted-foreground">
                  Enable team members to review, comment, and rate candidates together
                </p>
              </Card>

              <Card className="p-8 hover:shadow-glow-primary transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-success/10 text-success mb-6">
                  <Calendar size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Scheduling</h3>
                <p className="text-muted-foreground">
                  Automated interview scheduling with calendar integration and reminders
                </p>
              </Card>

              <Card className="p-8 hover:shadow-glow-secondary transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Pipeline Analytics</h3>
                <p className="text-muted-foreground">
                  Track conversion rates, time-to-hire, and identify bottlenecks instantly
                </p>
              </Card>

              <Card className="p-8 hover:shadow-glow-primary transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Offer Management</h3>
                <p className="text-muted-foreground">
                  Create, send, and track offer letters with e-signature capabilities
                </p>
              </Card>

              <Card className="p-8 hover:shadow-glow-secondary transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-success/10 text-success mb-6">
                  <FileText size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom Workflows</h3>
                <p className="text-muted-foreground">
                  Build hiring workflows that match your unique recruitment process
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simplify Your Hiring Process
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of teams using our ATS to hire faster and smarter
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 bg-white text-secondary hover:bg-white/90">
              <Link to="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default ATS;
