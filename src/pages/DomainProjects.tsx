import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Search, 
  Filter,
  ArrowLeft,
  Eye, 
  Clock, 
  Code, 
  Star,
  ChevronRight,
  Users,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Download,
  Phone,
  Mail,
  Award
} from 'lucide-react';
import { problemService, ProblemStatement, ProblemFilters } from '@/services/problemService';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import UrgencyBanner from '@/components/UrgencyBanner';
import SocialProofNotification from '@/components/SocialProofNotification';

const DomainProjects = () => {
  const { domain } = useParams<{ domain: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<ProblemFilters>({
    domain: domain ? decodeURIComponent(domain) : undefined,
    status: 'Active',
    page: 1,
    limit: 20
  });

  // Fetch problems for this domain
  const { data: problemsData, isLoading, error } = useQuery({
    queryKey: ['domain-problems', domain, filters],
    queryFn: () => problemService.getProblemsByDomain(
      decodeURIComponent(domain || ''), 
      filters
    ),
    enabled: !!domain,
  });

  // Fetch domain stats
  const { data: domainStats } = useQuery({
    queryKey: ['domain-stats'],
    queryFn: () => problemService.getDomainStats(),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters(prev => ({
      ...prev,
      q: query || undefined,
      page: 1
    }));
  };

  const handleFilterChange = (key: keyof ProblemFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value === 'all' ? undefined : value,
      page: 1
    }));
  };

  const getDomainStats = () => {
    if (!domainStats) return { count: 0 };
    const domainName = decodeURIComponent(domain || '');
    return domainStats.find(stat => stat._id === domainName) || { count: 0 };
  };

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
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          <div className="space-y-6">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-96" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-32" />
              ))}
            </div>
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Error Loading Projects</CardTitle>
            <CardDescription>
              Unable to load projects for this domain. Please try again later.
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

  const domainName = decodeURIComponent(domain || '');
  const stats = getDomainStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <UrgencyBanner />
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative container mx-auto px-6 py-16">
          <Button variant="ghost" asChild className="mb-8 text-white/80 hover:text-white hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white/90 text-sm font-medium">Research Area</span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {domainName}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
                Cutting-edge {domainName.toLowerCase()} projects designed for final year students and research enthusiasts
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Users className="h-4 w-4 text-white/80" />
                <span className="font-medium text-white/90">{stats.count} Projects Available</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
                <TrendingUp className="h-4 w-4 text-green-400" />
                <span className="font-medium text-green-400">Live & Updated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {domainName} Projects
                </h2>
                <p className="text-gray-600">
                  Explore our comprehensive collection of {domainName.toLowerCase()} projects with complete source code, 
                  documentation, and 24/7 expert support. Perfect for final year students and researchers.
                </p>
              </div>
              
              {/* Search and Filters */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search projects by title, technology, or keywords..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-orange-200 text-orange-600 hover:bg-orange-50"
                  >
                    <Download className="h-4 w-4" />
                    Download Titles
                  </Button>
                </div>
                
                {/* Filter Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Filter className="h-4 w-4" />
                    <span>Filter by:</span>
                  </div>
                  {['All', 'Advanced', 'Intermediate', 'Beginner'].map(filter => (
                    <button
                      key={filter}
                      onClick={() => {
                        if (filter === 'All') {
                          setFilters(prev => ({ ...prev, difficulty: undefined, page: 1 }));
                        } else {
                          setFilters(prev => ({ ...prev, difficulty: filter as 'Beginner' | 'Intermediate' | 'Advanced', page: 1 }));
                        }
                      }}
                      className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                        (filter === 'All' && !filters.difficulty) || filters.difficulty === filter
                          ? 'bg-orange-100 text-orange-800 border border-orange-200'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-200'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="space-y-4">
                {problemsData?.data && problemsData.data.length > 0 ? (
                  problemsData.data.map((project: ProblemStatement) => (
                    <div key={project._id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          {/* Header with badges */}
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                              {project.id}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              8-10 weeks
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(project.difficulty || 'Intermediate')}`}>
                              {project.difficulty || 'Intermediate'}
                            </span>
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                              ⭐ Featured
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {project.abstract}
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
                            <span className="flex items-center gap-1 text-green-600">
                              <Code className="h-3 w-3" />
                              Source Code
                            </span>
                            <span className="flex items-center gap-1 text-blue-600">
                              <Star className="h-3 w-3" />
                              4.8
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              156 enrolled
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="ml-4 flex flex-col gap-2 min-w-[120px]">
                          <Button 
                            size="sm" 
                            className="bg-orange-600 hover:bg-orange-700 text-white"
                            asChild
                          >
                            <Link to={`/projects/${project.id}`}>
                              View Details
                            </Link>
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
                  ))
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Code className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      No Projects Available
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                      We're currently updating our {domainName.toLowerCase()} project collection. Check back soon for new additions!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button asChild variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                        <Link to="/">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back to Home
                        </Link>
                      </Button>
                      <Button onClick={() => window.open('https://wa.me/918639648822', '_blank')} className="bg-blue-600 hover:bg-blue-700">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Request Projects
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {problemsData && problemsData.pages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={filters.page === 1}
                      onClick={() => setFilters(prev => ({ ...prev, page: (prev.page || 1) - 1 }))}
                      className="text-gray-600 hover:text-gray-900 disabled:text-gray-400"
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-gray-600 px-4">
                      Page {filters.page} of {problemsData.pages}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={filters.page === problemsData.pages}
                      onClick={() => setFilters(prev => ({ ...prev, page: (prev.page || 1) + 1 }))}
                      className="text-gray-600 hover:text-gray-900 disabled:text-gray-400"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* CTA Section */}
            <div className="sticky top-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-orange-600">🚀</span>
                Ready to Start Your Project?
              </h3>
              
              <div className="space-y-2 mb-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('tel:+918639648822', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now: +91 8639648822
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-green-200 text-green-600 hover:bg-green-50"
                  onClick={() => window.open('https://wa.me/918639648822', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('mailto:support@trizenventures.com', '_self')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </div>

              {/* Social Proof */}
              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-blue-500" />
                    <span>1000+ Students</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                    <Award className="h-3 w-3 text-orange-500" />
                    <span>IEEE Certified Projects</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="font-medium text-green-800">✓ 24/7 Support</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded">
                    <div className="font-medium text-blue-800">✓ 100% Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Topics */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-orange-600">📚</span>
                Related Topics
              </h3>
              
              <div className="space-y-2">
                <div className="border border-gray-100 rounded-lg">
                  <div className="p-3 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-gray-800">Python</span>
                  </div>
                </div>
                <div className="border border-gray-100 rounded-lg">
                  <div className="p-3 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-gray-800">Machine Learning</span>
                  </div>
                </div>
                <div className="border border-gray-100 rounded-lg">
                  <div className="p-3 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-gray-800">Deep Learning</span>
                  </div>
                </div>
                <div className="border border-gray-100 rounded-lg">
                  <div className="p-3 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-medium text-gray-800">Data Science</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <SocialProofNotification />
      <FloatingWhatsApp />
    </div>
  );
};

export default DomainProjects;
