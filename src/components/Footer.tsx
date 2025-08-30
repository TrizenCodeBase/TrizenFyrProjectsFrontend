import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5388c539-cddb-44b2-8ad4-a1b8cfd37341.png" 
                alt="TRIZEN Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering B.Tech students with innovative final year projects. Complete solutions with source code, documentation, and 24/7 support.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="p-2">
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Project Categories */}
          <div className="space-y-6">
            <h3 className="text-foreground font-semibold text-base">Project Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">AI & Machine Learning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">IoT & Embedded Systems</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cloud Computing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blockchain & Crypto</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Mobile Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Web Development</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-foreground font-semibold text-base">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Custom Projects</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Source Code</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">24/7 Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Project Guidance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Technical Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-foreground font-semibold text-base">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <a href="mailto:support@trizen.tech" className="text-sm text-foreground hover:text-primary transition-colors">
                    support@trizen.tech
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <a href="tel:+91-9876543210" className="text-sm text-foreground hover:text-primary transition-colors">
                    +91-9876543210
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">
                    Bangalore, Karnataka<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2024 TRIZEN. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Refund Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <span className="text-primary">❤️</span>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;