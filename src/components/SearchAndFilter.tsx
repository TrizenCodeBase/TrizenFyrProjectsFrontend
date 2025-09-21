import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Download, Filter } from "lucide-react";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  onDownload: () => void;
}

const SearchAndFilter = ({ onSearch, onFilter, onDownload }: SearchAndFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All", "Python", "Machine Learning", "Deep Learning", "IoT", 
    "Web Development", "Blockchain", "Mobile App", "Data Science"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilter(filter);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-4 items-center mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, technology, or domain..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        <Button 
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white"
        >
          Search
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-orange-200 text-orange-600 hover:bg-orange-50"
          onClick={onDownload}
        >
          <Download className="h-4 w-4" />
          Download Titles
        </Button>
      </form>
      
      {/* Filter Tags */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Filter className="h-4 w-4" />
          <span>Filter by:</span>
        </div>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-orange-100 text-orange-800 border border-orange-200'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span>📊 <strong>1,250+</strong> Projects Available</span>
            <span>🎯 <strong>15+</strong> Domains Covered</span>
            <span>👥 <strong>5,000+</strong> Students Helped</span>
          </div>
          <div className="text-xs text-gray-500">
            Last updated: 2 hours ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
