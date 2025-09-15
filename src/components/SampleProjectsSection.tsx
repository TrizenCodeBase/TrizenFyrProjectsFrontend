import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, FileText, Video, MessageCircle, ArrowRight } from "lucide-react";

const SampleProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Attendance Tracking System",
      domain: "AI & Machine Learning",
      description: "Smart facial recognition system with cloud integration for automated attendance management in educational institutions.",
      technologies: ["Python", "OpenCV", "AWS", "React", "MongoDB"],
      duration: "8-10 Weeks",
      deliverables: ["Source Code", "IEEE Report", "PPT", "Video Demo"],
      featured: true
    },
    {
      title: "IoT-Based Smart Home Automation",
      domain: "IoT & Embedded Systems", 
      description: "Complete home automation system with mobile app control, sensor integration, and real-time monitoring capabilities.",
      technologies: ["Arduino", "ESP32", "Flutter", "Firebase", "Sensors"],
      duration: "10-12 Weeks",
      deliverables: ["Hardware Setup", "Mobile App", "Documentation", "Live Demo"]
    },
    {
      title: "Blockchain-Based Voting System",
      domain: "Cybersecurity & Blockchain",
      description: "Secure and transparent e-voting platform using blockchain technology with voter authentication and result verification.",
      technologies: ["Solidity", "Web3", "React", "MetaMask", "IPFS"],
      duration: "8-12 Weeks", 
      deliverables: ["Smart Contracts", "Web App", "Security Report", "Demo"]
    },
    {
      title: "Cloud-Native E-Commerce Platform",
      domain: "Cloud Computing",
      description: "Scalable e-commerce solution built with microservices architecture, containerized deployment, and CI/CD pipeline.",
      technologies: ["Node.js", "Docker", "Kubernetes", "AWS", "React"],
      duration: "10-14 Weeks",
      deliverables: ["Full Stack App", "Deployment Guide", "Architecture Docs", "Performance Report"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sample Project Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collection of innovative projects that have helped students excel in their final year evaluations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`card-hover border-2 ${project.featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-primary-light/5' : 'border-border'} animate-slide-up`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={project.featured ? "default" : "secondary"} className="mb-2">
                    {project.domain}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground border-0">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-foreground leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">What You Get:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.deliverables.map((item, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark shadow-elegant group"
                  onClick={() => window.open('https://wa.me/918639648822', '_blank')}
                >
                  Contact Us to Start
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            This is just a small sample. We have 200+ projects across all domains.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 group"
            onClick={() => window.open('https://wa.me/918639648822', '_blank')}
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SampleProjectsSection;