import { useState, useEffect } from "react";
import { X, Clock } from "lucide-react";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 text-center text-sm relative">
      <div className="flex items-center justify-center gap-2">
        <span className="text-lg">🔥</span>
        <span className="font-semibold">Limited Time Offer:</span>
        <span>Get 20% off on all AI Projects</span>
        <div className="flex items-center gap-1 ml-2">
          <Clock className="h-4 w-4" />
          <span className="font-mono">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default UrgencyBanner;
