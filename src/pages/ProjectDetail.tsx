import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  ArrowLeft, 
  Clock, 
  Code, 
  Star, 
  Eye, 
  CheckCircle, 
  BookOpen,
  Target,
  Users,
  MessageCircle,
  ExternalLink,
  GraduationCap,
  FileText,
  Settings,
  Video,
  ShoppingCart
} from 'lucide-react';
import { problemService } from '@/services/problemService';
import { useState } from 'react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  // Fetch project details
  const { data: project, isLoading, error } = useQuery({
    queryKey: ['project-detail', id],
    queryFn: () => problemService.getProblemByCustomId(id || ''),
    enabled: !!id,
  });

  // Fetch related projects (same domain)
  const { data: relatedProjects } = useQuery({
    queryKey: ['related-projects', project?.domain],
    queryFn: () => problemService.getProblemsByDomain(project?.domain || '', { limit: 4 }),
    enabled: !!project?.domain,
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Major': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Minor': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Capstone': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <div className="space-y-6">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-96" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Skeleton className="h-64" />
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
              </div>
              <div className="space-y-6">
                <Skeleton className="h-48" />
                <Skeleton className="h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Project Not Found</CardTitle>
            <CardDescription>
              The project you're looking for doesn't exist or has been removed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const relatedProjectsList = relatedProjects?.data?.filter(p => p.id !== project.id) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Purple Header Section - Inspired by Trizen Ventures */}
      <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white py-16 px-6 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Button variant="ghost" asChild className="mb-8 text-white/80 hover:text-white hover:bg-white/10">
            <Link to={`/projects/domain/${encodeURIComponent(project.domain)}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {project.domain}
            </Link>
          </Button>

          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 font-mono text-sm px-4 py-2 rounded-full backdrop-blur-sm">
              Project Code: {project.id}
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Tabbed Navigation - White Bar */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex overflow-x-auto">
            <button
              className={`flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'text-purple-700 border-purple-700 bg-purple-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              <FileText className="h-4 w-4" />
              Read Abstract
            </button>
            <button
              className={`flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === 'specifications'
                  ? 'text-purple-700 border-purple-700 bg-purple-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              <Settings className="h-4 w-4" />
              Specifications
            </button>
            <button
              className={`flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === 'learning-outcomes'
                  ? 'text-purple-700 border-purple-700 bg-purple-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('learning-outcomes')}
            >
              <Target className="h-4 w-4" />
              Learning Outcomes
            </button>
            <button
              className={`flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === 'demo'
                  ? 'text-purple-700 border-purple-700 bg-purple-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('demo')}
            >
              <Video className="h-4 w-4" />
              Demo Video
            </button>
            <button
              className={`flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === 'request'
                  ? 'text-purple-700 border-purple-700 bg-purple-50/50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('request')}
            >
              <ShoppingCart className="h-4 w-4" />
              Project Request / Buy
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-6xl py-12 px-6">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Objective Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">OBJECTIVE</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-lg">
                  This project aims to develop an advanced {project.domain.toLowerCase()} solution that addresses real-world challenges through innovative technology implementation. The primary objective is to create a comprehensive system that demonstrates practical application of modern development practices and provides valuable learning outcomes for students and researchers.
                </p>
              </div>
            </div>

            {/* Abstract Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">ABSTRACT</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {project.abstract}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-300 text-sm px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <Badge className={`${getCategoryColor(project.category)} text-xs`}>
                          {project.category}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Difficulty:</span>
                        <Badge className={`${getDifficultyColor(project.difficulty)} text-xs`}>
                          {project.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">SPECIFICATIONS</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Project ID:</span>
                        <Badge variant="outline" className="font-mono">{project.id}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Domain:</span>
                        <span className="font-medium">{project.domain}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Status:</span>
                        <Badge className={project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Views:</span>
                        <span className="font-medium">{project.viewCount}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                    {project.prerequisites && project.prerequisites.length > 0 ? (
                      <ul className="space-y-2">
                        {project.prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No specific prerequisites listed.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'learning-outcomes' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">LEARNING OUTCOMES</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                {project.learningOutcomes && project.learningOutcomes.length > 0 ? (
                  <div className="space-y-4">
                    {project.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{outcome}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">Learning outcomes will be defined during project development.</p>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">DELIVERABLES</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="space-y-4">
                  {project.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{deliverable}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'demo' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">DEMO VIDEO</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Demo Video Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  We're working on creating a comprehensive demo video for this project. 
                  It will showcase the key features, functionality, and implementation details.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://wa.me/918639648822', '_blank')}
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Request Demo Access
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'request' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">PROJECT REQUEST / BUY</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingCart className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get This Project</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Ready to start working on this project? Contact us to discuss customization options, 
                    get detailed documentation, or acquire the complete project package with source code, 
                    documentation, and implementation guidance.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                      onClick={() => window.open('https://wa.me/918639648822', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contact via WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View All Projects
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Projects */}
        {relatedProjectsList.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide mb-6">RELATED PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjectsList.slice(0, 2).map((relatedProject) => (
                <Card key={relatedProject._id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="font-mono text-sm">
                        {relatedProject.id}
                      </Badge>
                      <Badge className={`${getDifficultyColor(relatedProject.difficulty)} text-xs`}>
                        {relatedProject.difficulty}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {relatedProject.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {relatedProject.abstract}
                    </p>
                    
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={`/projects/${relatedProject.id}`}>
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;