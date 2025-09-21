import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, FileText, Star, Users } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    code: string;
    title: string;
    description: string;
    technologies: string[];
    domain: string;
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    rating: number;
    enrolledCount: number;
    featured?: boolean;
    hasSourceCode: boolean;
    hasDocumentation: boolean;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          {/* Header with badges */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
              {project.code}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {project.duration}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(project.difficulty)}`}>
              {project.difficulty}
            </span>
            {project.featured && (
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 4).map(tech => (
              <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            {project.hasSourceCode && (
              <span className="flex items-center gap-1 text-green-600">
                <Code className="h-3 w-3" />
                Source Code
              </span>
            )}
            {project.hasDocumentation && (
              <span className="flex items-center gap-1 text-blue-600">
                <FileText className="h-3 w-3" />
                Documentation
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500" />
              {project.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {project.enrolledCount} enrolled
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ml-4 flex flex-col gap-2 min-w-[120px]">
          <Button 
            size="sm" 
            className="bg-orange-600 hover:bg-orange-700 text-white"
            onClick={() => window.open('https://wa.me/918639648822', '_blank')}
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs border-orange-200 text-orange-600 hover:bg-orange-50"
            onClick={() => window.open('https://wa.me/918639648822', '_blank')}
          >
            Quick Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
