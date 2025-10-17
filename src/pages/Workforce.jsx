import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Calendar, FileText, Users, BarChart3 } from "lucide-react";
import PageTransition from "../components/pagetransition";

const Workforce = () => {
  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Workforce Management
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Manage timesheets, leave, expenses, and compliance all in one unified platform
            </p>
            <Button size="lg" asChild className="bg-gradient-hero shadow-glow-primary">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              All-in-One Workforce Solution
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to manage your distributed workforce effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-glow-primary transition-all duration-300 border-2 hover:border-primary/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Time Tracking</h3>
              <p className="text-muted-foreground mb-6">
                Accurate time tracking with automated timesheets, project tracking, and overtime management
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Clock in/out functionality
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Project time allocation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Overtime calculations
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-glow-secondary transition-all duration-300 border-2 hover:border-secondary/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Leave Management</h3>
              <p className="text-muted-foreground mb-6">
                Streamlined leave requests, approvals, and tracking with customizable policies
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Multiple leave types
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Approval workflows
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Balance tracking
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-glow-primary transition-all duration-300 border-2 hover:border-success/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-success/10 text-success mb-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expense Management</h3>
              <p className="text-muted-foreground mb-6">
                Submit, approve, and reimburse expenses with automated policy enforcement
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                  Receipt scanning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                  Policy automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                  Reimbursement tracking
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-glow-secondary transition-all duration-300 border-2 hover:border-primary/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Document Management</h3>
              <p className="text-muted-foreground mb-6">
                Centralized document storage with e-signature and version control
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Digital signatures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Template library
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Secure storage
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-glow-primary transition-all duration-300 border-2 hover:border-secondary/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Employee Self-Service</h3>
              <p className="text-muted-foreground mb-6">
                Empower employees with self-service portals for personal information and requests
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Profile management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Request submissions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Document access
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-glow-secondary transition-all duration-300 border-2 hover:border-success/50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-success/10 text-success mb-6">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics & Reports</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive workforce analytics and compliance reporting
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                  Custom dashboards
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                  Compliance reports
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                  Export capabilities
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Card className="p-8">
                <div className="text-5xl font-bold text-primary mb-4">60%</div>
                <div className="text-lg font-semibold mb-2">Time Saved</div>
                <p className="text-sm text-muted-foreground">
                  On administrative tasks through automation
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-5xl font-bold text-secondary mb-4">99.9%</div>
                <div className="text-lg font-semibold mb-2">Accuracy</div>
                <p className="text-sm text-muted-foreground">
                  In payroll and time tracking calculations
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-5xl font-bold text-success mb-4">50+</div>
                <div className="text-lg font-semibold mb-2">Countries</div>
                <p className="text-sm text-muted-foreground">
                  Supported with multi-currency and compliance
                </p>
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
              Streamline Workforce Management
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Everything your team needs in one powerful platform
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

export default Workforce;
