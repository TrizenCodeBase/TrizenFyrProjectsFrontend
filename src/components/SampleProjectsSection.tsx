import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Clock, Code, FileText, Video, MessageCircle, ArrowRight, Star, Eye } from "lucide-react";
import { problemService } from "@/services/problemService";

const SampleProjectsSection = () => {
  // Fetch featured projects from API
  const { data: featuredProjects, isLoading } = useQuery({
    queryKey: ['featured-projects'],
    queryFn: () => problemService.getFeaturedProblems(4),
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="border-2 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Skeleton className="h-4 w-32 mb-3" />
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-5 w-16" />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))
          ) : featuredProjects && featuredProjects.length > 0 ? (
            featuredProjects.map((project, index) => (
              <Card 
                key={project._id}
                className={`card-hover border-2 ${project.featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-primary-light/5' : 'border-border'} animate-slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="mb-2">
                      {project.domain}
                    </Badge>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <Badge className="bg-gradient-primary text-primary-foreground border-0">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge className={getDifficultyColor(project.difficulty)}>
                        {project.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="font-mono text-xs">
                      {project.id}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      {project.viewCount}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                    {project.abstract}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 5}
                        </Badge>
                      )}
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
                      {project.deliverables.slice(0, 4).map((item, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1">
                      <Link to={`/projects/${project.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary-dark shadow-elegant group"
                      onClick={() => window.open('https://wa.me/918639648822', '_blank')}
                    >
                      Contact Us
                      <MessageCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            // Fallback when no featured projects
            <div className="col-span-2 text-center py-12">
              <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No Featured Projects Available
              </h3>
              <p className="text-muted-foreground mb-4">
                Check back soon for our latest featured projects!
              </p>
            </div>
          )}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            This is just a small sample. We have many more projects across all domains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 group"
              asChild
            >
              <Link to="/projects/domain/AI%20%26%20Machine%20Learning">
                Browse AI Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark shadow-elegant px-8 group"
              onClick={() => window.open('https://wa.me/918639648822', '_blank')}
            >
              Contact Us
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleProjectsSection;