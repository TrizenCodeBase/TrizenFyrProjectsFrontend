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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Students Get
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Complete project package with everything you need to successfully complete and present your final year project
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deliverables.map((item, index) => (
            <Card 
              key={index}
              className="card-hover border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-teal-500/20 animate-slide-up transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-2xl mb-6 shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Badge */}
                <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full mb-4">
                  {item.highlight}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Complete Project Solution
            </h3>
            <p className="text-slate-300 mb-6">
              No more worrying about project completion. We provide everything you need from concept to presentation.
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                <div className="text-sm text-slate-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">On-Time</div>
                <div className="text-sm text-slate-400">Delivery Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in delay-100">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-teal-400 font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-white">Quality Assured</div>
          </div>
          <div className="text-center animate-fade-in delay-200">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-teal-400 font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-white">Plagiarism Free</div>
          </div>
          <div className="text-center animate-fade-in delay-300">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-teal-400 font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-white">Industry Standard</div>
          </div>
          <div className="text-center animate-fade-in delay-400">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-teal-400 font-bold">✓</span>
            </div>
            <div className="text-sm font-medium text-white">Documentation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;