import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700">
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
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering B.Tech students with innovative final year projects. Complete solutions with source code, documentation, and 24/7 support.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/trizenventures/" 
                aria-label="Facebook"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/TrizenVenture" 
                aria-label="Twitter"
                className="w-10 h-10 bg-slate-700 hover:bg-sky-500 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/trizenventuresllp/" 
                aria-label="LinkedIn"
                className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/trizenventures" 
                aria-label="Instagram"
                className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                aria-label="GitHub"
                className="w-10 h-10 bg-slate-700 hover:bg-gray-800 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/918639648822" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-slate-700 hover:bg-green-600 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg 
                  className="h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Project Categories */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base">Project Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">AI & Machine Learning</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">IoT & Embedded Systems</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Cloud Computing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Blockchain & Crypto</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Mobile Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Web Development</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Custom Projects</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Source Code</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">24/7 Support</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Project Guidance</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-300 transition-colors text-sm">Technical Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-base">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">Email us</p>
                  <a href="mailto:support@trizen.tech" className="text-sm text-slate-300 hover:text-teal-300 transition-colors">
                    support@trizenventures.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">Call us</p>
                  <a href="tel:+91-8639648822" className="text-sm text-slate-300 hover:text-teal-300 transition-colors">
                    +91-8639648822
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-sm text-slate-300">
                  Gajuwaka,Visakhapatnam, Andhrapradesh<br />
                  India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-slate-400">
                © 2025 TRIZEN. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-slate-400 hover:text-teal-300 transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-300 transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-300 transition-colors">Refund Policy</a>
              </div>
            </div>
            
            {/* <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Made with</span>
              <span className="text-teal-400">❤️</span>
              <span>in India</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;