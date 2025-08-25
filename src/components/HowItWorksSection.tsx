import { Type, Brain, Zap } from "lucide-react";

const steps = [
  {
    icon: Type,
    title: "Type @command",
    description: "Simply type commands like @summary, @keypoints, or @explain on any webpage"
  },
  {
    icon: Brain,
    title: "AI Processes",
    description: "Our advanced AI instantly analyzes the page content and understands your request"
  },
  {
    icon: Zap,
    title: "Instant Output",
    description: "Get perfectly formatted results in seconds, directly on your current page"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            How It <span className="glow-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to supercharge your browsing experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="feature-card text-center space-y-6 h-full">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-accent to-accent-glow flex items-center justify-center shadow-[var(--shadow-accent)]">
                  <step.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2">
                  <div className="w-12 lg:w-16 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;