import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const RelatedTopics = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['python']);

  const topics = {
    python: {
      title: "Python",
      items: [
        "Deep Learning",
        "Data Mining", 
        "Cloud Computing",
        "Data Science",
        "Artificial Intelligence"
      ]
    },
    android: {
      title: "Android",
      items: [
        "Mobile Computing",
        "Cloud Computing",
        "Data Mining",
        "Secure Computing"
      ]
    },
    java: {
      title: "Java",
      items: [
        "Cloud Computing",
        "Data Mining",
        "CyberSecurity",
        "BlockChain",
        "Big Data",
        "Secure Computing",
        "Software Engineering",
        "Networking"
      ]
    },
    embedded: {
      title: "Embedded",
      items: [
        "Embedded applications",
        "Deep Learning",
        "OpenCV",
        "Industrial Automation",
        "Machine Learning",
        "Artificial Intelligence",
        "Mechatronics",
        "Renewable",
        "Electrical",
        "Robotics",
        "Biomedical",
        "Image Processing",
        "WSN",
        "IOT"
      ]
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-orange-600">📚</span>
        Related Topics
      </h3>
      
      <div className="space-y-2">
        {Object.entries(topics).map(([key, section]) => (
          <div key={key} className="border border-gray-100 rounded-lg">
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800">{section.title}</span>
              {expandedSections.includes(key) ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.includes(key) && (
              <div className="px-3 pb-3 space-y-1">
                {section.items.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-800 mb-3">Follow Us</h4>
        <div className="flex gap-2">
          {[
            { name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
            { name: 'Instagram', icon: '📷', color: 'bg-pink-600' },
            { name: 'YouTube', icon: '📺', color: 'bg-red-600' },
            { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
            { name: 'Twitter', icon: '🐦', color: 'bg-sky-500' }
          ].map(social => (
            <a
              key={social.name}
              href="#"
              className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
              title={social.name}
            >
              <span className="text-xs">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedTopics;
