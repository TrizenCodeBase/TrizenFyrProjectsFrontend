import { useState } from "react";

interface ProjectTabsProps {
  onTabChange: (tab: string) => void;
}

const ProjectTabs = ({ onTabChange }: ProjectTabsProps) => {
  const [activeTab, setActiveTab] = useState('latest');
  
  const tabs = [
    { id: 'latest', label: 'Latest', count: 45, color: 'orange' },
    { id: 'trending', label: 'Trending', count: 23, color: 'red' },
    { id: 'popular', label: 'Most Popular', count: 67, color: 'blue' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="mb-6">
      <div className="flex border-b border-gray-200 bg-white rounded-t-lg">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-all duration-200 flex items-center gap-2 ${
              activeTab === tab.id
                ? `border-${tab.color}-500 text-${tab.color}-600 bg-${tab.color}-50`
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span>{tab.label}</span>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              activeTab === tab.id
                ? `bg-${tab.color}-200 text-${tab.color}-800`
                : 'bg-gray-200 text-gray-600'
            }`}>
              {tab.count}
            </span>
            {tab.id === 'trending' && (
              <span className="text-xs">🔥</span>
            )}
            {tab.id === 'popular' && (
              <span className="text-xs">⭐</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;
