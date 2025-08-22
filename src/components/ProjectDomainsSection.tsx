import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Wifi, 
  Cloud, 
  Smartphone, 
  Shield, 
  BarChart3, 
  Network, 
  Cpu,
  ArrowRight
} from "lucide-react";

const ProjectDomainsSection = () => {
  const domains = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent systems, predictive analytics, computer vision, NLP projects",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Wifi,
      title: "IoT & Embedded Systems", 
      description: "Smart devices, sensor networks, automation, real-time monitoring",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "AWS, Azure, distributed systems, microservices architecture",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Applications",
      description: "React, Flutter, full-stack development, responsive designs",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Blockchain",
      description: "Security protocols, encryption, smart contracts, decentralized apps",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description: "Big data processing, visualization, statistical analysis, insights",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Network,
      title: "Networking & Communication",
      description: "Network protocols, wireless systems, communication frameworks",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Cpu,
      title: "Mechanical / ECE Projects",
      description: "Hardware integration, control systems, signal processing",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Project Domains
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore cutting-edge technology domains and find the perfect project that aligns with your career goals
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {domains.map((domain, index) => (
            <Card 
              key={index} 
              className="card-hover cursor-pointer border-2 hover:border-primary/20 group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${domain.gradient} mb-4 shadow-elegant group-hover:shadow-glow transition-all duration-300`}>
                  <domain.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {domain.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {domain.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="w-full text-primary hover:text-primary-foreground hover:bg-primary group/btn"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't find your domain? We cover many more specialized areas.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark shadow-elegant px-8"
          >
            View All Domains
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDomainsSection;