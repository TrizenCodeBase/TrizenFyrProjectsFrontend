import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, Star, Users, Award } from "lucide-react";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
