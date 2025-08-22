import { Card, CardContent } from "@/components/ui/card";
import { Search, MousePointer, HeadphonesIcon, Trophy } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Explore Problem Statements",
      description: "Browse real-world innovative ideas across multiple technology domains",
      number: "01"
    },
    {
      icon: MousePointer,
      title: "Select Your Project",
      description: "Choose the project that excites you and aligns with your career goals",
      number: "02"
    },
    {
      icon: HeadphonesIcon,
      title: "Get Complete Support",
      description: "We deliver source code, execution guidance, and comprehensive documentation",
      number: "03"
    },
    {
      icon: Trophy,
      title: "Succeed in Your Final Year",
      description: "Get ready to present with confidence and ace your project evaluation",
      number: "04"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step process to get your dream final year project completed successfully
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary-light transform -translate-x-1/2 z-0"></div>
                )}
                
                <Card className="card-hover border-0 shadow-card relative z-10 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <span className="text-sm font-bold text-primary-foreground">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 shadow-elegant">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of students who have successfully completed their final year projects with our guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Quick Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;