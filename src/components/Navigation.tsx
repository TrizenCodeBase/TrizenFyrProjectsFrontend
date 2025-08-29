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
    <nav className="bg-background/95 backdrop-blur-md border-b border-border/20 shadow-sm sticky top-0 z-50">
      {/* Top Header Bar */}
      <div className="bg-primary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                +91 9030333433
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 font-medium">
                2025-26 IEEE TITLES
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10">
                <User className="h-4 w-4 mr-2" />
                Sign Up / Log In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5388c539-cddb-44b2-8ad4-a1b8cfd37341.png" 
              alt="TRIZEN Logo" 
              className="h-12 w-auto"
            />
          </div>
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-2">
              
              {/* B.Tech Projects Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary hover:bg-accent data-[active]:bg-accent data-[state=open]:bg-accent bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200">
                  B.Tech Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[1000px] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
                    {/* Left Sidebar */}
                    <div className="w-64 bg-primary/5 p-6 border-r border-border">
                      <h3 className="font-bold text-primary mb-4 text-lg">IEEE Major Projects</h3>
                      <div className="space-y-3">
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Application Major Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Minor Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Final Year Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Capstone Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Industry Projects</a>
                      </div>
                    </div>
                    
                    {/* Right Content Grid */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">TECHNOLOGIES</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">EMBEDDED SYSTEMS</a>
                            <a href="#" className="block hover:text-primary transition-colors">MATLAB/SIMULINK</a>
                            <a href="#" className="block hover:text-primary transition-colors">VLSI DESIGN</a>
                            <a href="#" className="block hover:text-primary transition-colors">ELECTRICAL SYSTEMS</a>
                            <a href="#" className="block hover:text-primary transition-colors">PYTHON/ML</a>
                            <a href="#" className="block hover:text-primary transition-colors">ANDROID/MOBILE</a>
                            <a href="#" className="block hover:text-primary transition-colors">JAVA ENTERPRISE</a>
                            <a href="#" className="block hover:text-primary transition-colors">WEB TECHNOLOGIES</a>
                          </div>
                        </div>

                        {/* Domains */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">DOMAINS</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Robotics & Automation</a>
                            <a href="#" className="block hover:text-primary transition-colors">IoT & Smart Systems</a>
                            <a href="#" className="block hover:text-primary transition-colors">Machine Learning & AI</a>
                            <a href="#" className="block hover:text-primary transition-colors">Computer Vision</a>
                            <a href="#" className="block hover:text-primary transition-colors">Biomedical Engineering</a>
                            <a href="#" className="block hover:text-primary transition-colors">Renewable Energy</a>
                            <a href="#" className="block hover:text-primary transition-colors">Smart Agriculture</a>
                            <a href="#" className="block hover:text-primary transition-colors">Blockchain Technology</a>
                          </div>
                        </div>

                        {/* Controllers */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">CONTROLLERS</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">ARM Cortex Series</a>
                            <a href="#" className="block hover:text-primary transition-colors">Raspberry Pi 4/5</a>
                            <a href="#" className="block hover:text-primary transition-colors">ESP32/NodeMCU</a>
                            <a href="#" className="block hover:text-primary transition-colors">Arduino Mega/Uno</a>
                            <a href="#" className="block hover:text-primary transition-colors">PIC Microcontrollers</a>
                            <a href="#" className="block hover:text-primary transition-colors">FPGA Development</a>
                            <a href="#" className="block hover:text-primary transition-colors">STM32 Series</a>
                            <a href="#" className="block hover:text-primary transition-colors">Jetson Nano/Xavier</a>
                          </div>
                        </div>

                        {/* Specializations */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">SPECIALIZATIONS</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Cloud Computing</a>
                            <a href="#" className="block hover:text-primary transition-colors">Cybersecurity</a>
                            <a href="#" className="block hover:text-primary transition-colors">Data Science</a>
                            <a href="#" className="block hover:text-primary transition-colors">Mobile App Development</a>
                            <a href="#" className="block hover:text-primary transition-colors">Game Development</a>
                            <a href="#" className="block hover:text-primary transition-colors">DevOps & CI/CD</a>
                            <a href="#" className="block hover:text-primary transition-colors">Full Stack Development</a>
                            <a href="#" className="block hover:text-primary transition-colors">Network Security</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* M.Tech Projects Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary hover:bg-accent data-[active]:bg-accent data-[state=open]:bg-accent bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200">
                  M.Tech Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[900px] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
                    {/* Left Sidebar */}
                    <div className="w-64 bg-primary/5 p-6 border-r border-border">
                      <h3 className="font-bold text-primary mb-4 text-lg">PG Research Projects</h3>
                      <div className="space-y-3">
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Thesis Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Research Publications</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Conference Papers</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Journal Publications</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Industry Collaboration</a>
                      </div>
                    </div>
                    
                    {/* Right Content Grid */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Advanced Research */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">ADVANCED RESEARCH</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Deep Learning & Neural Networks</a>
                            <a href="#" className="block hover:text-primary transition-colors">Computer Vision & Image Processing</a>
                            <a href="#" className="block hover:text-primary transition-colors">Natural Language Processing</a>
                            <a href="#" className="block hover:text-primary transition-colors">Advanced Signal Processing</a>
                            <a href="#" className="block hover:text-primary transition-colors">Reinforcement Learning</a>
                            <a href="#" className="block hover:text-primary transition-colors">Quantum Machine Learning</a>
                            <a href="#" className="block hover:text-primary transition-colors">Federated Learning</a>
                            <a href="#" className="block hover:text-primary transition-colors">Explainable AI</a>
                          </div>
                        </div>

                        {/* Networking & Systems */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">NETWORKING & SYSTEMS</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">5G/6G Wireless Networks</a>
                            <a href="#" className="block hover:text-primary transition-colors">Software Defined Networking</a>
                            <a href="#" className="block hover:text-primary transition-colors">Edge & Fog Computing</a>
                            <a href="#" className="block hover:text-primary transition-colors">Network Function Virtualization</a>
                            <a href="#" className="block hover:text-primary transition-colors">Distributed Systems</a>
                            <a href="#" className="block hover:text-primary transition-colors">Cloud Native Architecture</a>
                            <a href="#" className="block hover:text-primary transition-colors">Microservices & Containers</a>
                            <a href="#" className="block hover:text-primary transition-colors">High Performance Computing</a>
                          </div>
                        </div>

                        {/* Emerging Technologies */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">EMERGING TECH</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Quantum Computing</a>
                            <a href="#" className="block hover:text-primary transition-colors">Blockchain & Cryptocurrency</a>
                            <a href="#" className="block hover:text-primary transition-colors">Augmented Reality (AR)</a>
                            <a href="#" className="block hover:text-primary transition-colors">Virtual Reality (VR)</a>
                            <a href="#" className="block hover:text-primary transition-colors">Mixed Reality (MR)</a>
                            <a href="#" className="block hover:text-primary transition-colors">Digital Twins</a>
                            <a href="#" className="block hover:text-primary transition-colors">Industry 4.0</a>
                            <a href="#" className="block hover:text-primary transition-colors">Autonomous Systems</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Diploma Projects */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary hover:bg-accent data-[active]:bg-accent data-[state=open]:bg-accent bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200">
                  Diploma Projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[700px] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
                    {/* Left Sidebar */}
                    <div className="w-56 bg-primary/5 p-6 border-r border-border">
                      <h3 className="font-bold text-primary mb-4 text-lg">Polytechnic Projects</h3>
                      <div className="space-y-3">
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Final Semester Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Mini Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Workshop Projects</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Industrial Training</a>
                      </div>
                    </div>
                    
                    {/* Right Content Grid */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Basic Projects */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">BASIC PROJECTS</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Simple Electronics Circuits</a>
                            <a href="#" className="block hover:text-primary transition-colors">Basic Programming Logic</a>
                            <a href="#" className="block hover:text-primary transition-colors">Web Development Basics</a>
                            <a href="#" className="block hover:text-primary transition-colors">Database Management</a>
                            <a href="#" className="block hover:text-primary transition-colors">Mobile App Basics</a>
                            <a href="#" className="block hover:text-primary transition-colors">Networking Fundamentals</a>
                            <a href="#" className="block hover:text-primary transition-colors">Digital Electronics</a>
                            <a href="#" className="block hover:text-primary transition-colors">Basic Automation</a>
                          </div>
                        </div>

                        {/* Practical Applications */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">PRACTICAL APPLICATIONS</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Home Automation Systems</a>
                            <a href="#" className="block hover:text-primary transition-colors">Security & Surveillance</a>
                            <a href="#" className="block hover:text-primary transition-colors">Motor Control Circuits</a>
                            <a href="#" className="block hover:text-primary transition-colors">Sensor-Based Projects</a>
                            <a href="#" className="block hover:text-primary transition-colors">Smart Lighting Systems</a>
                            <a href="#" className="block hover:text-primary transition-colors">Temperature Monitoring</a>
                            <a href="#" className="block hover:text-primary transition-colors">Voice Control Systems</a>
                            <a href="#" className="block hover:text-primary transition-colors">Traffic Management</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary hover:bg-accent data-[active]:bg-accent data-[state=open]:bg-accent bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-[600px] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
                    {/* Left Sidebar */}
                    <div className="w-48 bg-primary/5 p-6 border-r border-border">
                      <h3 className="font-bold text-primary mb-4 text-lg">Our Services</h3>
                      <div className="space-y-3">
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Academic Support</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Research Assistance</a>
                        <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">Career Guidance</a>
                      </div>
                    </div>
                    
                    {/* Right Content Grid */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Project Services */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">PROJECT SERVICES</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Complete Project Implementation</a>
                            <a href="#" className="block hover:text-primary transition-colors">Source Code Development</a>
                            <a href="#" className="block hover:text-primary transition-colors">Documentation & Reports</a>
                            <a href="#" className="block hover:text-primary transition-colors">PPT Presentations</a>
                            <a href="#" className="block hover:text-primary transition-colors">Video Demonstrations</a>
                            <a href="#" className="block hover:text-primary transition-colors">Live Project Support</a>
                          </div>
                        </div>

                        {/* Additional Services */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">ADDITIONAL SERVICES</h4>
                          <div className="space-y-2 text-sm">
                            <a href="#" className="block hover:text-primary transition-colors">Paper Publishing Support</a>
                            <a href="#" className="block hover:text-primary transition-colors">Technical Workshops</a>
                            <a href="#" className="block hover:text-primary transition-colors">Industry Internships</a>
                            <a href="#" className="block hover:text-primary transition-colors">Career Counselling</a>
                            <a href="#" className="block hover:text-primary transition-colors">Placement Assistance</a>
                            <a href="#" className="block hover:text-primary transition-colors">Certification Courses</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Start a Project
            </Button>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Paper Publishing
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
