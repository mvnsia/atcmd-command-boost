import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--gradient-hero)] relative overflow-hidden">
      <div className="section-padding text-center space-y-8">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Type <span className="glow-text">@commands</span>.{" "}
            <br />
            Get instant results.
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Simplify your browsing with AI-powered commands. Get summaries, key points, and insights instantly on any website.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button className="hero-button text-lg">
              <Chrome className="mr-2 h-5 w-5" />
              Download Extension
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Free • Works with Chrome • 50,000+ users
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl rounded-full"></div>
            <img 
              src={heroMockup} 
              alt="Atcmd Chrome Extension in action showing AI-powered command results"
              className="relative z-10 w-full rounded-radius-large shadow-2xl border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;