import Navbar from "../components/Navbar";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Users, TrendingUp, Clock, CheckCircle, Calendar, FileText } from "lucide-react";
import PageTransition from "../components/pagetransition";

const Dashboard = () => {
  const recentCandidates = [
    { name: "Sarah Johnson", role: "Senior Developer", status: "Interview", score: 95 },
    { name: "Michael Chen", role: "Product Manager", status: "Screening", score: 88 },
    { name: "Emily Rodriguez", role: "UX Designer", status: "Offer", score: 92 },
    { name: "David Kim", role: "Data Analyst", status: "Interview", score: 85 },
  ];

  const stats = [
    { label: "Active Jobs", value: "24", icon: FileText, color: "primary", trend: "+12%" },
    { label: "Total Candidates", value: "1,247", icon: Users, color: "secondary", trend: "+18%" },
    { label: "Interviews Scheduled", value: "56", icon: Calendar, color: "success", trend: "+8%" },
    { label: "Offers Extended", value: "12", icon: CheckCircle, color: "primary", trend: "+25%" },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Recruiting{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time insights into your hiring pipeline
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-glow-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                    stat.color === "primary" ? "bg-primary/10 text-primary" :
                    stat.color === "secondary" ? "bg-secondary/10 text-secondary" :
                    "bg-success/10 text-success"
                  }`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-success text-sm font-semibold">{stat.trend}</span>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pipeline Overview */}
          <Card className="lg:col-span-2 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Hiring Pipeline</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">New Applications</span>
                  <span className="text-muted-foreground">324</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary w-[85%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">In Screening</span>
                  <span className="text-muted-foreground">156</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-secondary w-[65%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Interview Stage</span>
                  <span className="text-muted-foreground">78</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary w-[45%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Offer Stage</span>
                  <span className="text-muted-foreground">23</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-secondary w-[25%] rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary shadow-glow-primary" size="lg">
                <Users className="mr-2" size={20} />
                Post New Job
              </Button>
              <Button className="w-full justify-start" variant="outline" size="lg">
                <Calendar className="mr-2" size={20} />
                Schedule Interview
              </Button>
              <Button className="w-full justify-start" variant="outline" size="lg">
                <FileText className="mr-2" size={20} />
                Review Applications
              </Button>
              <Button className="w-full justify-start" variant="outline" size="lg">
                <TrendingUp className="mr-2" size={20} />
                View Analytics
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Candidates */}
        <Card className="mt-8 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Candidates</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Candidate</th>
                  <th className="text-left py-3 px-4 font-semibold">Position</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">AI Score</th>
                  <th className="text-left py-3 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentCandidates.map((candidate, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {candidate.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium">{candidate.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{candidate.role}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        candidate.status === "Offer" ? "bg-success/10 text-success" :
                        candidate.status === "Interview" ? "bg-primary/10 text-primary" :
                        "bg-secondary/10 text-secondary"
                      }`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[80px]">
                          <div 
                            className="h-full bg-gradient-primary rounded-full" 
                            style={{ width: `${candidate.score}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold text-sm">{candidate.score}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
    </PageTransition>
  );
};

export default Dashboard;
