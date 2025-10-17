import { Brain, Users, BarChart3, Zap, Shield, Globe } from "lucide-react";
import { Card } from "../components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Sourcing",
    description: "Intelligent candidate matching using advanced machine learning algorithms to find the perfect fit for your roles.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Applicant Tracking System",
    description: "Streamline your hiring pipeline with our intuitive ATS. Track candidates from application to offer seamlessly.",
    color: "secondary",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven recruitment decisions with real-time analytics, predictive insights, and comprehensive reporting.",
    color: "success",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Save time with automated candidate engagement, interview scheduling, and communication workflows.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Stay compliant with built-in GDPR, EEOC, and industry-specific regulatory compliance features.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Global Workforce",
    description: "Manage distributed teams across multiple locations with multi-currency, multi-language support.",
    color: "secondary",
  },
];

const getColorClass = (color) => {
  switch (color) {
    case "primary":
      return "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground";
    case "secondary":
      return "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground";
    case "success":
      return "bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground";
    case "accent":
      return "bg-accent/10 text-accent-foreground group-hover:bg-accent";
    default:
      return "bg-primary/10 text-primary";
  }
};

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Scale Recruiting
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to transform your hiring process and workforce management
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-glow-primary transition-all duration-300 group cursor-pointer border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${getColorClass(feature.color)}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
