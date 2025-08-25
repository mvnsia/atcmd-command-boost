import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Boost your productivity with{" "}
            <span className="glow-text">Atcmd</span> today!
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who are already saving hours every week with AI-powered commands.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="hero-button text-lg">
            <Chrome className="mr-2 h-6 w-6" />
            Install Now - It's Free
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span>Rated 4.8/5 by 10,000+ users</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-border">
          <div className="space-y-2">
            <div className="text-2xl font-bold glow-text">50k+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold glow-text">1M+</div>
            <div className="text-sm text-muted-foreground">Commands Processed</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold glow-text">5hrs</div>
            <div className="text-sm text-muted-foreground">Avg. Weekly Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;