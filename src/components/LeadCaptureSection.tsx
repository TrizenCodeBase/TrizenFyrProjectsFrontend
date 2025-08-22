import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, User, GraduationCap, Rocket } from "lucide-react";

const LeadCaptureSection = () => {
  const domains = [
    "AI & Machine Learning",
    "IoT & Embedded Systems", 
    "Cloud Computing",
    "Web & Mobile Applications",
    "Cybersecurity & Blockchain",
    "Data Science & Analytics",
    "Networking & Communication",
    "Mechanical / ECE Projects",
    "Other / Custom Domain"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Interested in a Project?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's get started on your journey to final year success!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-primary" />
                  Start Your Project
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-sm font-medium text-foreground">
                      Mobile Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="mobile"
                        placeholder="+91 9876543210"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="college" className="text-sm font-medium text-foreground">
                      College / Branch *
                    </Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="college"
                        placeholder="College Name, Branch"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground">
                    Preferred Project Domain
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your preferred domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain, index) => (
                        <SelectItem key={index} value={domain.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6 font-semibold"
                  size="lg"
                >
                  Get Free Consultation
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  We'll contact you within 2 hours • Free consultation • No spam
                </div>
              </CardContent>
            </Card>

            {/* Right Side - Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Choose TRIZEN?
                </h3>
                <div className="space-y-4">
                  {[
                    "Free project consultation and domain guidance",
                    "100% original and plagiarism-free projects", 
                    "Complete source code with detailed documentation",
                    "24/7 technical support throughout the project",
                    "On-time delivery with revision support",
                    "Industry-standard project implementations"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <Card className="bg-gradient-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Need Immediate Help?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4" />
                      <span>support@trizen.com</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm opacity-90">
                    Call us for instant project consultation
                  </div>
                </CardContent>
              </Card>

              {/* Success Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-xl shadow-card">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl shadow-card">
                  <div className="text-2xl font-bold text-primary mb-1">48hrs</div>
                  <div className="text-sm text-muted-foreground">Quick Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;