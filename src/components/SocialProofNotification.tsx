import { useState, useEffect } from "react";
import { X } from "lucide-react";

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    { name: "Rajesh", project: "AI Project", time: "2 minutes ago" },
    { name: "Priya", project: "IoT Project", time: "5 minutes ago" },
    { name: "Amit", project: "Machine Learning", time: "8 minutes ago" },
    { name: "Sneha", project: "Blockchain Project", time: "12 minutes ago" },
    { name: "Vikram", project: "Web Development", time: "15 minutes ago" }
  ];

  useEffect(() => {
    // Show notification after 3 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Auto-hide after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    // Cycle through notifications every 10 seconds
    const cycleTimer = setInterval(() => {
      setCurrentNotification(prev => (prev + 1) % notifications.length);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  if (!isVisible) return null;

  const notification = notifications[currentNotification];

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs z-40 animate-slide-in">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">✓</span>
        </div>
        <span className="text-sm font-medium text-gray-800">Student Registered</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <p className="text-xs text-gray-600">
        <span className="font-medium text-gray-800">{notification.name}</span> just enrolled for{" "}
        <span className="font-medium text-orange-600">{notification.project}</span>
      </p>
      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
    </div>
  );
};

export default SocialProofNotification;
