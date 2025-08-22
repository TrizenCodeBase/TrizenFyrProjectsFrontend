import { CheckCircle, Users, FileText, HeadphonesIcon, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Users,
      title: "100+ Successful Projects",
      description: "Satisfied clients with delivered projects"
    },
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "Detailed reports and presentations"
    },
    {
      icon: HeadphonesIcon,
      title: "Implementation Support",
      description: "Hands-on guidance throughout the project"
    },
    {
      icon: Eye,
      title: "Live Demos & Guidance",
      description: "One-to-one mentoring sessions"
    },
    {
      icon: Award,
      title: "Industry Domain Experts",
      description: "Learn from experienced professionals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose TRIZEN?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence in every project with comprehensive support and industry expertise
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <Card key={index} className="card-hover border-0 shadow-card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 shadow-glow">
                  <point.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in delay-100">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center animate-fade-in delay-200">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center animate-fade-in delay-300">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
          <div className="text-center animate-fade-in delay-400">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8-12</div>
            <div className="text-muted-foreground">Weeks Duration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;