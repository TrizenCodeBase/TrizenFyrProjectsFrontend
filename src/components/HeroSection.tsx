import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-light rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle delay-200"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-dark rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle delay-400"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/trizen-logo.png" 
            alt="TRIZEN" 
            className="mx-auto h-20 md:h-24 w-auto"
          />
        </div>

        {/* Main Headline */}
        <div className="animate-fade-in delay-100">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 hero-text-glow">
            Innovative Final Year Projects
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/90 mb-2">
            for B.Tech Students
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
          Get ready for your final year with industry-relevant projects in cutting-edge domains like 
          <span className="font-semibold text-primary-foreground"> AI/ML, IoT, Cloud, Blockchain</span>, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant group px-8 py-6 text-lg font-semibold"
          >
            Browse Projects
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold group"
          >
            <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Start Your Project
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in delay-400">
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/70 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span>100+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span>Industry Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span>Complete Documentation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;