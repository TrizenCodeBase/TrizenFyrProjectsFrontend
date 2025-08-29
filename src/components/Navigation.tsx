import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Search, User, Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MobileProjectSection = ({ title, items }: { title: string; items: { category: string; links: string[] }[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="border-b border-border/20 py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left font-medium text-foreground hover:text-primary transition-colors"
        >
          <span>{title}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="mt-4 space-y-4">
            {items.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-2">
                  {section.category}
                </h4>
                <div className="space-y-2 ml-4">
                  {section.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex}
                      href="#" 
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border/20 shadow-sm sticky top-0 z-50">
      {/* Top Header Bar - Hidden on mobile */}
      <div className="bg-primary/10 backdrop-blur-sm hidden md:block">
        <div className="container mx-auto px-4 md:px-6 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+91 9030333433</span>
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 font-medium hidden lg:flex">
                2025-26 IEEE TITLES
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10 hidden md:flex">
                <Search className="h-4 w-4 mr-2" />
                <span className="hidden lg:inline">Search</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/10">
                <User className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Sign Up / Log In</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5388c539-cddb-44b2-8ad4-a1b8cfd37341.png" 
              alt="TRIZEN Logo" 
              className="h-8 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden xl:flex items-center gap-8">
            <NavigationMenu className="max-w-none">
              <NavigationMenuList className="gap-2">
              
                {/* B.Tech Projects Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary hover:bg-accent data-[active]:bg-accent data-[state=open]:bg-accent bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200">
                    B.Tech Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[min(1000px,95vw)] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
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
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <div className="flex w-[min(900px,95vw)] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
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
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                              <a href="#" className="block hover:text-primary transition-colors">Digital Twins</a>
                              <a href="#" className="block hover:text-primary transition-colors">Industry 4.0</a>
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
                    <div className="flex w-[min(700px,95vw)] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <div className="flex w-[min(600px,95vw)] bg-background/98 backdrop-blur-md border border-border/50 shadow-xl rounded-lg">
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Project Services */}
                          <div>
                            <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wide border-b border-primary/20 pb-2">PROJECT SERVICES</h4>
                            <div className="space-y-2 text-sm">
                              <a href="#" className="block hover:text-primary transition-colors">Complete Project Implementation</a>
                              <a href="#" className="block hover:text-primary transition-colors">Source Code Development</a>
                              <a href="#" className="block hover:text-primary transition-colors">Documentation & Reports</a>
                              <a href="#" className="block hover:text-primary transition-colors">PPT Presentations</a>
                              <a href="#" className="block hover:text-primary transition-colors">Video Demonstrations</a>
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons - Responsive */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium hidden md:flex">
              Start a Project
            </Button>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hidden lg:flex">
              Paper Publishing
            </Button>
            
            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="xl:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[400px] bg-background border-l border-border shadow-xl">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between py-4 border-b border-border">
                    <img 
                      src="/lovable-uploads/5388c539-cddb-44b2-8ad4-a1b8cfd37341.png" 
                      alt="TRIZEN Logo" 
                      className="h-8 w-auto"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto py-6 space-y-4">
                    {/* Mobile Project Sections */}
                    <MobileProjectSection 
                      title="B.Tech Projects"
                      items={[
                        {
                          category: "Technologies",
                          links: ["EMBEDDED SYSTEMS", "MATLAB/SIMULINK", "VLSI DESIGN", "PYTHON/ML", "ANDROID/MOBILE", "WEB TECHNOLOGIES"]
                        },
                        {
                          category: "Domains",
                          links: ["Robotics & Automation", "IoT & Smart Systems", "Machine Learning & AI", "Computer Vision", "Blockchain Technology"]
                        },
                        {
                          category: "Controllers",
                          links: ["ARM Cortex Series", "Raspberry Pi 4/5", "ESP32/NodeMCU", "Arduino Mega/Uno", "STM32 Series"]
                        }
                      ]}
                    />

                    <MobileProjectSection 
                      title="M.Tech Projects"
                      items={[
                        {
                          category: "Advanced Research",
                          links: ["Deep Learning & Neural Networks", "Computer Vision & Image Processing", "Natural Language Processing", "Reinforcement Learning"]
                        },
                        {
                          category: "Networking & Systems",
                          links: ["5G/6G Wireless Networks", "Software Defined Networking", "Edge & Fog Computing", "Cloud Native Architecture"]
                        },
                        {
                          category: "Emerging Tech",
                          links: ["Quantum Computing", "Blockchain & Cryptocurrency", "Augmented Reality (AR)", "Digital Twins"]
                        }
                      ]}
                    />

                    <MobileProjectSection 
                      title="Diploma Projects"
                      items={[
                        {
                          category: "Basic Projects",
                          links: ["Simple Electronics Circuits", "Basic Programming Logic", "Web Development Basics", "Mobile App Basics"]
                        },
                        {
                          category: "Practical Applications",
                          links: ["Home Automation Systems", "Security & Surveillance", "Motor Control Circuits", "Smart Lighting Systems"]
                        }
                      ]}
                    />

                    <MobileProjectSection 
                      title="Services"
                      items={[
                        {
                          category: "Project Services",
                          links: ["Complete Project Implementation", "Source Code Development", "Documentation & Reports", "PPT Presentations"]
                        },
                        {
                          category: "Additional Services",
                          links: ["Paper Publishing Support", "Technical Workshops", "Career Counselling", "Placement Assistance"]
                        }
                      ]}
                    />

                    {/* Mobile Contact Info */}
                    <div className="pt-6 mt-6 border-t border-border bg-secondary/30 rounded-lg p-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary font-medium">
                          <Phone className="h-5 w-5" />
                          <span>+91 9030333433</span>
                        </div>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                          Start a Project
                        </Button>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium">
                          Paper Publishing
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
