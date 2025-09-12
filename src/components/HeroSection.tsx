import { Button } from "@/components/ui/button";
import { BookOpen, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-bounce-gentle"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-bounce-gentle delay-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-ocean opacity-10 rounded-full blur-3xl animate-bounce-gentle delay-400"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Innovative <span className="text-secondary">Final Year</span>
              <br />
              <span className="text-gradient bg-gradient-ocean bg-clip-text text-transparent">Projects</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-white/90">
              for B.Tech Students
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
              Get ready for your final year with industry-relevant projects in cutting-edge domains like 
              <span className="font-bold text-secondary"> AI/ML, IoT, Cloud, Blockchain</span>, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-300">
              <Button size="lg" variant="professional" className="text-lg px-8 py-4 font-semibold shadow-glow">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Projects
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-semibold bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <Rocket className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-400">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-professional hover:shadow-glow transition-all duration-300">
                <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                <div className="text-lg text-white/90">Successful Projects</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-professional hover:shadow-glow transition-all duration-300">
                <div className="text-4xl font-bold text-secondary mb-2">Expert</div>
                <div className="text-lg text-white/90">Industry Support</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-professional hover:shadow-glow transition-all duration-300">
                <div className="text-4xl font-bold text-secondary mb-2">Complete</div>
                <div className="text-lg text-white/90">Documentation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;