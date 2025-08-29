import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Phone, Search, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      {/* Top Header Bar */}
      <div className="bg-primary-dark">
        <div className="container mx-auto px-6 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9030333433
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary">
                2025-26 IEEE TITLES
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary">
                <User className="h-4 w-4 mr-2" />
                Sign Up / Log In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-1">
              
              {/* B.Tech Projects Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary-foreground hover:bg-primary-light data-[active]:bg-primary-light data-[state=open]:bg-primary-light bg-transparent">
                  B.Tech Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-4 gap-6 p-6 w-[800px]">
                    
                    {/* Technologies Column */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">TECHNOLOGIES</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">EMBEDDED</a>
                        <a href="#" className="block hover:text-primary transition-colors">MATLAB</a>
                        <a href="#" className="block hover:text-primary transition-colors">VLSI</a>
                        <a href="#" className="block hover:text-primary transition-colors">ELECTRICAL</a>
                        <a href="#" className="block hover:text-primary transition-colors">PYTHON</a>
                        <a href="#" className="block hover:text-primary transition-colors">ANDROID</a>
                        <a href="#" className="block hover:text-primary transition-colors">JAVA</a>
                      </div>
                    </div>

                    {/* Domains Column */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">DOMAINS</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">Robotics</a>
                        <a href="#" className="block hover:text-primary transition-colors">IoT</a>
                        <a href="#" className="block hover:text-primary transition-colors">Deep Learning</a>
                        <a href="#" className="block hover:text-primary transition-colors">Industrial Automation</a>
                        <a href="#" className="block hover:text-primary transition-colors">Biomedical</a>
                        <a href="#" className="block hover:text-primary transition-colors">Renewable</a>
                        <a href="#" className="block hover:text-primary transition-colors">Mechatronics</a>
                        <a href="#" className="block hover:text-primary transition-colors">Artificial Intelligence</a>
                      </div>
                    </div>

                    {/* Controllers Column */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">CONTROLLERS</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">ARM7</a>
                        <a href="#" className="block hover:text-primary transition-colors">Raspberry Pi</a>
                        <a href="#" className="block hover:text-primary transition-colors">NodeMCU</a>
                        <a href="#" className="block hover:text-primary transition-colors">Arduino</a>
                        <a href="#" className="block hover:text-primary transition-colors">PIC16F77A</a>
                        <a href="#" className="block hover:text-primary transition-colors">ESP32</a>
                        <a href="#" className="block hover:text-primary transition-colors">STM32</a>
                      </div>
                    </div>

                    {/* Others Column */}
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">OTHERS</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">Android</a>
                        <a href="#" className="block hover:text-primary transition-colors">Embedded with Matlab</a>
                        <a href="#" className="block hover:text-primary transition-colors">Web Applications</a>
                        <a href="#" className="block hover:text-primary transition-colors">Cloud Computing</a>
                        <a href="#" className="block hover:text-primary transition-colors">Blockchain</a>
                        <a href="#" className="block hover:text-primary transition-colors">Cybersecurity</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* M.Tech Projects Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary-foreground hover:bg-primary-light data-[active]:bg-primary-light data-[state=open]:bg-primary-light bg-transparent">
                  M.Tech Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-6 p-6 w-[600px]">
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">ADVANCED RESEARCH</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">Machine Learning</a>
                        <a href="#" className="block hover:text-primary transition-colors">Computer Vision</a>
                        <a href="#" className="block hover:text-primary transition-colors">NLP</a>
                        <a href="#" className="block hover:text-primary transition-colors">Signal Processing</a>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">NETWORKING</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">5G/6G Networks</a>
                        <a href="#" className="block hover:text-primary transition-colors">Network Security</a>
                        <a href="#" className="block hover:text-primary transition-colors">SDN</a>
                        <a href="#" className="block hover:text-primary transition-colors">Edge Computing</a>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">EMERGING TECH</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">Quantum Computing</a>
                        <a href="#" className="block hover:text-primary transition-colors">Blockchain</a>
                        <a href="#" className="block hover:text-primary transition-colors">AR/VR</a>
                        <a href="#" className="block hover:text-primary transition-colors">Metaverse</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Diploma Projects */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary-foreground hover:bg-primary-light data-[active]:bg-primary-light data-[state=open]:bg-primary-light bg-transparent">
                  Diploma Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-6 p-6 w-[400px]">
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">BASIC PROJECTS</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">Simple Electronics</a>
                        <a href="#" className="block hover:text-primary transition-colors">Basic Programming</a>
                        <a href="#" className="block hover:text-primary transition-colors">Web Development</a>
                        <a href="#" className="block hover:text-primary transition-colors">Database Systems</a>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-3 border-b border-border pb-2">PRACTICAL</h3>
                      <div className="space-y-2 text-sm">
                        <a href="#" className="block hover:text-primary transition-colors">Home Automation</a>
                        <a href="#" className="block hover:text-primary transition-colors">Security Systems</a>
                        <a href="#" className="block hover:text-primary transition-colors">Motor Control</a>
                        <a href="#" className="block hover:text-primary transition-colors">Sensor Based</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary-foreground hover:bg-primary-light data-[active]:bg-primary-light data-[state=open]:bg-primary-light bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[300px]">
                    <div className="space-y-3">
                      <a href="#" className="block hover:text-primary transition-colors font-medium">Project Implementation</a>
                      <a href="#" className="block hover:text-primary transition-colors font-medium">Documentation Support</a>
                      <a href="#" className="block hover:text-primary transition-colors font-medium">Paper Publishing</a>
                      <a href="#" className="block hover:text-primary transition-colors font-medium">Training & Workshops</a>
                      <a href="#" className="block hover:text-primary transition-colors font-medium">Internships</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm">
              Start a Project
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-light">
              Paper Publishing
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
