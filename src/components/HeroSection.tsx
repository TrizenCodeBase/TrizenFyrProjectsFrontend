import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Using our color palette: dark blues instead of pure black */}

      {/* Enhanced Background Pattern with Dark Theme */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/15 rounded-full filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/60"></div>

      <div className="container mx-auto px-6 text-center relative z-10 flex items-center justify-center min-h-screen pt-8 md:pt-16">

        <div>
          {/* Main Headline with Dark Theme Styling */}
          <div className="animate-fade-in delay-100">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Innovative Final Year Projects
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-2">
              for B.Tech Students
            </h2>
          </div>

          {/* Subtext with Dark Theme Support */}
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200">
            Get ready for your final year with industry-relevant projects in cutting-edge domains like 
            <span className="font-semibold text-teal-300 bg-teal-500/20 px-2 py-1 rounded-md"> AI/ML, IoT, Cloud, Blockchain</span>, and more.
          </p>

          {/* Enhanced CTA Buttons with Dark Theme */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <Button 
              size="lg" 
              className="bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-teal-500/25 group px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Browse Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-teal-400 text-teal-300 hover:bg-teal-600 hover:text-white px-8 py-6 text-lg font-semibold group backdrop-blur-sm bg-white/10 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Start Your Project
            </Button>
          </div>

          {/* Enhanced Trust Indicators with Dark Theme */}
          <div className="mt-16 animate-fade-in delay-400">
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-300 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span>100+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-200"></div>
                <span>Industry Expert Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-400"></div>
                <span>Complete Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;