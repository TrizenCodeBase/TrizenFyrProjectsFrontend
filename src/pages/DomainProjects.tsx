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
  MessageCircle
} from 'lucide-react';
import { problemService, ProblemStatement, ProblemFilters } from '@/services/problemService';

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

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Search projects by title, technology, or keywords..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 h-12 text-base border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg font-medium"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-xl p-1.5 border-2 border-gray-200">
                <button 
                  className={`px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    !filters.difficulty && !filters.category 
                      ? 'bg-white text-blue-700 shadow-md border border-blue-200' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setFilters(prev => ({ ...prev, difficulty: undefined, category: undefined, page: 1 }));
                  }}
                >
                  All
                </button>
                <button 
                  className={`px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    filters.difficulty === 'Advanced' 
                      ? 'bg-white text-blue-700 shadow-md border border-blue-200' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setFilters(prev => ({ ...prev, difficulty: 'Advanced', page: 1 }));
                  }}
                >
                  Advanced
                </button>
                <button 
                  className={`px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    filters.difficulty === 'Intermediate' 
                      ? 'bg-white text-blue-700 shadow-md border border-blue-200' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setFilters(prev => ({ ...prev, difficulty: 'Intermediate', page: 1 }));
                  }}
                >
                  Intermediate
                </button>
                <button 
                  className={`px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    filters.difficulty === 'Beginner' 
                      ? 'bg-white text-blue-700 shadow-md border border-blue-200' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setFilters(prev => ({ ...prev, difficulty: 'Beginner', page: 1 }));
                  }}
                >
                  Beginner
                </button>
              </div>
              
              {/* Download Button */}
              <Button variant="outline" size="default" className="font-semibold text-base px-6 py-2.5 border-2 border-gray-400 text-gray-700 hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all duration-200 shadow-sm hover:shadow-md">
                <ArrowRight className="mr-2 h-5 w-5 rotate-[-90deg]" />
                Download Titles
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Table */}
        {problemsData?.data && problemsData.data.length > 0 ? (
          <div className="bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2 border-gray-300 bg-gradient-to-r from-gray-100 to-gray-50">
                    <TableHead className="text-sm font-bold text-gray-800 uppercase tracking-wide py-6 px-8">ID</TableHead>
                    <TableHead className="text-sm font-bold text-gray-800 uppercase tracking-wide py-6 px-8">Title</TableHead>
                    <TableHead className="text-sm font-bold text-gray-800 uppercase tracking-wide py-6 px-8">Abstract</TableHead>
                    <TableHead className="text-sm font-bold text-gray-800 uppercase tracking-wide py-6 px-8">Technologies/Tools Involved</TableHead>
                    <TableHead className="text-sm font-bold text-gray-800 uppercase tracking-wide py-6 px-8 text-center">View Details</TableHead>
                  </TableRow>
                </TableHeader>
              <TableBody>
                {problemsData.data.map((project: ProblemStatement, index) => (
                  <TableRow 
                    key={project._id} 
                    className={`group transition-all duration-200 border-b border-gray-200 ${
                      index % 2 === 0 
                        ? 'bg-white hover:bg-blue-50/30' 
                        : 'bg-gray-50/50 hover:bg-blue-50/40'
                    } hover:shadow-sm hover:border-blue-200`}
                  >
                    <TableCell className="py-6 px-8">
                      <div className="font-mono text-base font-bold text-blue-700 tracking-wide">
                        {project.id}
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-8">
                      <div className="font-bold text-gray-900 text-lg leading-tight group-hover:text-blue-800 transition-colors">
                        {project.title}
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-8">
                      <div className="text-base text-gray-700 leading-relaxed max-w-lg font-medium">
                        {project.abstract}
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-8">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-sm font-semibold bg-white border-2 border-gray-300 text-gray-800 hover:border-blue-400 hover:text-blue-700 transition-colors px-3 py-1.5"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge 
                            variant="outline" 
                            className="text-sm font-semibold bg-gray-100 border-2 border-gray-400 text-gray-700 px-3 py-1.5"
                          >
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-8 text-center">
                      <Button 
                        asChild 
                        size="default" 
                        variant="outline" 
                        className="font-semibold text-base px-6 py-2.5 border-2 border-gray-400 text-gray-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        <Link to={`/projects/${project.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </Table>
            </div>
          </div>
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
  );
};

export default DomainProjects;
