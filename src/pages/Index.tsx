import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection"; 
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;