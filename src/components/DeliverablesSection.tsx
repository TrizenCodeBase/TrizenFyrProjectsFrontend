import { Card, CardContent } from "@/components/ui/card";
import { Code, FileText, Presentation, Video, HeadphonesIcon, MessageSquare } from "lucide-react";

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: Code,
      title: "Source Code",
      description: "100% working, well-commented code with proper documentation",
      highlight: "100% Working"
    },
    {
      icon: FileText,
      title: "Project Report", 
      description: "Comprehensive IEEE format report with all technical details",
      highlight: "IEEE Format"
    },
    {
      icon: Presentation,
      title: "Presentation PPT",
      description: "Professional presentation slides for your project defense",
      highlight: "Defense Ready"
    },
    {
      icon: Video,
      title: "Video Demo",
      description: "Complete project walkthrough and functionality demonstration", 
      highlight: "Live Demo"
    },
    {
      icon: HeadphonesIcon,
      title: "Implementation Support",
      description: "Step-by-step guidance for setup and execution",
      highlight: "Hands-on Help"
    },
    {
      icon: MessageSquare,
      title: "Doubt Clearing Sessions",
      description: "One-to-one sessions to clarify concepts and resolve queries",
      highlight: "Personal Mentor"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Students Get
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete project package with everything you need to successfully complete and present your final year project
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deliverables.map((item, index) => (
            <Card 
              key={index}
              className="card-hover border-0 shadow-card animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 shadow-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                {/* Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {item.highlight}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Complete Project Solution
            </h3>
            <p className="text-muted-foreground mb-6">
              No more worrying about project completion. We provide everything you need from concept to presentation.
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">On-Time</div>
                <div className="text-sm text-muted-foreground">Delivery Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in delay-100">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-foreground">Quality Assured</div>
          </div>
          <div className="text-center animate-fade-in delay-200">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-foreground">Plagiarism Free</div>
          </div>
          <div className="text-center animate-fade-in delay-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-foreground">Industry Standard</div>
          </div>
          <div className="text-center animate-fade-in delay-400">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-primary font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-foreground">Documentation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;