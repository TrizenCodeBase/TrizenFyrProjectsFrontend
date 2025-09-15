import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProjectDomainsSection from "@/components/ProjectDomainsSection";
import ProcessSection from "@/components/ProcessSection";
import SampleProjectsSection from "@/components/SampleProjectsSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ProjectDomainsSection />
      <ProcessSection />
      <SampleProjectsSection />
      <DeliverablesSection />
      <LeadCaptureSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
