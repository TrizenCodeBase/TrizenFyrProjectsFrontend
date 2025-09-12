import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Latest Projects
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Get notified about new project releases, industry trends, and exclusive resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
              <Button variant="secondary" className="whitespace-nowrap font-semibold">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/5388c539-cddb-44b2-8ad4-a1b8cfd37341.png" 
                alt="TRIZEN Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed">
                Leading provider of innovative final year projects for engineering students. 
                Empowering the next generation with cutting-edge technology solutions.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-secondary">Quick Links</h4>
            <div className="space-y-3">
              {[
                'B.Tech Projects',
                'M.Tech Projects', 
                'Diploma Projects',
                'IEEE Projects',
                'Documentation',
                'Support Center'
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-white/80 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Project Domains */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-secondary">Project Domains</h4>
            <div className="space-y-3">
              {[
                'Machine Learning & AI',
                'IoT & Embedded Systems',
                'Blockchain Technology',
                'Cloud Computing',
                'Robotics & Automation',
                'Mobile App Development'
              ].map((domain) => (
                <a 
                  key={domain}
                  href="#" 
                  className="block text-white/80 hover:text-secondary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {domain}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-secondary">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">+91 9030333433</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">info@trizen.tech</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Innovation Hub, Tech District<br />
                  Hyderabad, Telangana 500032
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button variant="secondary" className="w-full font-semibold shadow-professional">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 TRIZEN Technologies. All rights reserved. | Crafted with innovation.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;