import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import UrgencyBanner from "@/components/UrgencyBanner";
import SocialProofNotification from "@/components/SocialProofNotification";
import ProjectCard from "@/components/ProjectCard";
import ProjectTabs from "@/components/ProjectTabs";
import SearchAndFilter from "@/components/SearchAndFilter";
import CTASection from "@/components/CTASection";
import RelatedTopics from "@/components/RelatedTopics";

// Mock data - replace with actual API calls
const mockProjects = [
  {
    id: "AIM001",
    code: "AIM001",
    title: "AI-Powered Personal Finance Manager with Expense Tracking and Investment Recommendations",
    description: "An intelligent personal finance management system that uses machine learning algorithms to analyze spending patterns, categorize expenses, and provide personalized investment recommendations based on user's financial goals and risk tolerance.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "OpenCV"],
    domain: "AI & Machine Learning",
    duration: "8-10 weeks",
    difficulty: "Intermediate" as const,
    rating: 4.8,
    enrolledCount: 156,
    featured: true,
    hasSourceCode: true,
    hasDocumentation: true
  },
  {
    id: "AIM002", 
    code: "AIM002",
    title: "Smart Healthcare Assistant with Symptom Analysis and Doctor Recommendation System",
    description: "A comprehensive healthcare platform that uses natural language processing to analyze symptoms, provides preliminary health assessments, and recommends appropriate specialists based on medical history and current symptoms.",
    technologies: ["Python", "NLTK", "Flask", "PostgreSQL", "Docker", "AWS"],
    domain: "AI & Machine Learning",
    duration: "10-12 weeks",
    difficulty: "Advanced" as const,
    rating: 4.9,
    enrolledCount: 203,
    featured: true,
    hasSourceCode: true,
    hasDocumentation: true
  },
  {
    id: "AIM003",
    code: "AIM003", 
    title: "Intelligent Traffic Management System with Real-time Optimization",
    description: "A smart traffic management solution that uses computer vision and machine learning to monitor traffic flow, predict congestion, and optimize traffic light timing in real-time to reduce waiting times and improve traffic efficiency.",
    technologies: ["Python", "OpenCV", "YOLO", "Raspberry Pi", "IoT", "TensorFlow"],
    domain: "AI & Machine Learning",
    duration: "12-14 weeks",
    difficulty: "Advanced" as const,
    rating: 4.7,
    enrolledCount: 89,
    featured: false,
    hasSourceCode: true,
    hasDocumentation: true
  },
  {
    id: "AIM004",
    code: "AIM004",
    title: "Automated Code Review Assistant with Bug Detection and Performance Analysis",
    description: "An AI-powered code review tool that automatically analyzes code quality, detects potential bugs, suggests improvements, and provides performance optimization recommendations for various programming languages.",
    technologies: ["Python", "AST", "Machine Learning", "Django", "Redis", "GitHub API"],
    domain: "AI & Machine Learning", 
    duration: "8-10 weeks",
    difficulty: "Intermediate" as const,
    rating: 4.6,
    enrolledCount: 134,
    featured: false,
    hasSourceCode: true,
    hasDocumentation: true
  },
  {
    id: "AIM005",
    code: "AIM005",
    title: "Smart Agriculture Monitoring System with Crop Disease Detection",
    description: "An IoT-based agricultural monitoring system that uses computer vision and machine learning to detect crop diseases, monitor soil conditions, and provide automated irrigation recommendations for optimal crop yield.",
    technologies: ["Python", "OpenCV", "Arduino", "Sensors", "Machine Learning", "Mobile App"],
    domain: "AI & Machine Learning",
    duration: "10-12 weeks", 
    difficulty: "Intermediate" as const,
    rating: 4.8,
    enrolledCount: 167,
    featured: true,
    hasSourceCode: true,
    hasDocumentation: true
  }
];

const ProjectListing = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);
  const [activeTab, setActiveTab] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Filter projects based on tab
    let filtered = [...projects];
    switch (tab) {
      case 'trending':
        filtered = projects.filter(p => p.enrolledCount > 150);
        break;
      case 'popular':
        filtered = projects.filter(p => p.rating > 4.7);
        break;
      default:
        filtered = projects;
    }
    setFilteredProjects(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = projects.filter(project => 
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProjects(filtered);
  };

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase())) ||
        project.domain.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  };

  const handleDownload = () => {
    // Implement download functionality
    console.log('Downloading project titles...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <UrgencyBanner />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  AI & Machine Learning Projects
                </h1>
                <p className="text-gray-600 text-lg">
                  Explore our comprehensive collection of AI projects with complete source code, 
                  documentation, and 24/7 expert support. Perfect for final year students and researchers.
                </p>
              </div>
              
              <SearchAndFilter 
                onSearch={handleSearch}
                onFilter={handleFilter}
                onDownload={handleDownload}
              />
              
              <ProjectTabs onTabChange={handleTabChange} />
              
              {/* Projects Grid */}
              <div className="space-y-4">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-orange-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            <CTASection />
            <RelatedTopics />
          </div>
        </div>
      </div>
      
      <Footer />
      <SocialProofNotification />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProjectListing;
