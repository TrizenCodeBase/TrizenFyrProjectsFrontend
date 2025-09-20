import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://trizenfypcmsbackend.llp.trizenventures.com/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor to handle errors gracefully
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log error in development only
    if (import.meta.env.DEV) {
      console.warn('API Error:', error.response?.status, error.message);
    }
    return Promise.reject(error);
  }
);

// Problem Statement interface
export interface ProblemStatement {
  _id: string;
  id: string;                    // AIM001, AIM002, etc.
  title: string;                 // "AI-Powered Personal Finance Manager"
  abstract: string;              // Detailed description
  technologies: string[];        // ["HTML", "CSS", "JS", "Python"]
  domain: string;               // "AI & Machine Learning"
  category: 'Major' | 'Minor' | 'Capstone';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;             // "8-10 weeks"
  deliverables: string[];       // ["Source Code", "Documentation"]
  prerequisites: string[];      // Required knowledge
  learningOutcomes: string[];   // What students will learn
  status: 'Active' | 'Draft' | 'Archived';
  createdAt: string;
  updatedAt: string;
  featured: boolean;            // For highlighting popular projects
  tags: string[];              // For better search/filtering
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  viewCount: number;           // Track popularity
}

export interface ProblemFilters {
  q?: string;
  domain?: string;
  difficulty?: string;
  category?: string;
  status?: string;
  page?: number;
  limit?: number;
}

export interface ProblemResponse {
  success: boolean;
  data: ProblemStatement[];
  count: number;
  total: number;
  page: number;
  pages: number;
}

export interface ProblemStats {
  overview: {
    total: number;
    active: number;
    draft: number;
    archived: number;
    featured: number;
    totalViews: number;
  };
  domainDistribution: Array<{
    _id: string;
    count: number;
  }>;
  difficultyDistribution: Array<{
    _id: string;
    count: number;
  }>;
}

// Domain constants
export const DOMAINS = [
  'AI & Machine Learning',
  'IoT & Embedded Systems',
  'Cloud Computing',
  'Web & Mobile Applications',
  'Cybersecurity & Blockchain',
  'Data Science & Analytics',
  'Networking & Communication',
  'Mechanical / ECE Projects'
];

export const CATEGORIES = ['Major', 'Minor', 'Capstone'];
export const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced'];
export const STATUS_OPTIONS = ['Active', 'Draft', 'Archived'];

// API service functions
export const problemService = {
  // Get all problems with optional filters
  getProblems: async (filters: ProblemFilters = {}): Promise<ProblemResponse> => {
    const response = await api.get('/public/problems', { params: filters });
    return response.data;
  },

  // Get problems by domain
  getProblemsByDomain: async (domain: string, filters: ProblemFilters = {}): Promise<ProblemResponse> => {
    const response = await api.get(`/public/problems/domain/${encodeURIComponent(domain)}`, { 
      params: filters 
    });
    return response.data;
  },

  // Get a single problem by custom ID (e.g., AIM001)
  getProblemByCustomId: async (customId: string): Promise<ProblemStatement> => {
    const response = await api.get(`/public/problems/${customId}`);
    return response.data.data;
  },

  // Get featured problems
  getFeaturedProblems: async (limit?: number): Promise<ProblemStatement[]> => {
    const response = await api.get('/public/problems/featured', { 
      params: { limit } 
    });
    return response.data.data;
  },

  // Get popular problems
  getPopularProblems: async (limit?: number): Promise<ProblemStatement[]> => {
    const response = await api.get('/public/problems/popular', { 
      params: { limit } 
    });
    return response.data.data;
  },

  // Search problems
  searchProblems: async (filters: ProblemFilters = {}): Promise<ProblemResponse> => {
    const response = await api.get('/public/problems/search', { 
      params: filters 
    });
    return response.data;
  },

  // Get problem statistics
  getProblemStats: async (): Promise<ProblemStats> => {
    const response = await api.get('/public/problems/stats');
    return response.data.data;
  },

  // Get domain statistics (project counts per domain)
  getDomainStats: async (): Promise<Array<{ _id: string; count: number }>> => {
    const response = await api.get('/public/problems/stats');
    return response.data.data.domainDistribution;
  }
};

export default problemService;
