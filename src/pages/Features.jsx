import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import {
  Brain,
  Users,
  Search,
  MessageSquare,
  Calendar,
  FileText,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Clock,
  CheckCircle,
} from "lucide-react";
import PageTransition from "../components/pagetransition";

const featureCategories = [
  {
    title: "AI-Powered Recruiting",
    description: "Leverage artificial intelligence to transform your hiring process",
    icon: Brain,
    color: "primary",
    features: [
      "Smart candidate matching and ranking",
      "Resume parsing and analysis",
      "Predictive hiring analytics",
      "Bias-free screening",
    ],
  },
  {
    title: "Applicant Tracking System",
    description: "Streamline your recruitment pipeline from start to finish",
    icon: Users,
    color: "secondary",
    features: [
      "Customizable hiring workflows",
      "Collaborative hiring tools",
      "Interview scheduling automation",
      "Offer management",
    ],
  },
  {
    title: "Candidate Sourcing",
    description: "Find top talent across multiple channels",
    icon: Search,
    color: "success",
    features: [
      "Multi-channel job posting",
      "Social media integration",
      "Talent pool management",
      "Chrome extension for sourcing",
    ],
  },
  {
    title: "Communication Tools",
    description: "Engage candidates with automated messaging",
    icon: MessageSquare,
    color: "primary",
    features: [
      "Email campaign automation",
      "SMS notifications",
      "Chatbot integration",
      "Interview feedback collection",
    ],
  },
  {
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with powerful insights",
    icon: TrendingUp,
    color: "secondary",
    features: [
      "Real-time dashboards",
      "Custom report builder",
      "Hiring metrics tracking",
      "ROI analysis",
    ],
  },
  {
    title: "Compliance & Security",
    description: "Stay compliant and secure at all times",
    icon: Shield,
    color: "success",
    features: [
      "GDPR compliance",
      "EEOC reporting",
      "Data encryption",
      "Audit trails",
    ],
  },
];

const getIconColorClass = (color) => {
  switch (color) {
    case "primary":
      return "bg-primary/10 text-primary";
    case "secondary":
      return "bg-secondary/10 text-secondary";
    case "success":
      return "bg-success/10 text-success";
    default:
      return "bg-primary/10 text-primary";
  }
};

const Features = () => {
  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powerful Features for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Modern Recruiting
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to hire better, faster, and smarter - all in one platform
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-glow-primary transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${getIconColorClass(category.color)}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={20} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Recruiting?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies using our platform to build better teams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary"
              >
                <Link to="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Features;
