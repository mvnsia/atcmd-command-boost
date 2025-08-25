import { FileText, List, Lightbulb, Search, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "@summary",
    description: "Get concise summaries of any article, blog post, or webpage content in seconds"
  },
  {
    icon: List,
    title: "@keypoints", 
    description: "Extract the most important points and takeaways from complex content"
  },
  {
    icon: Lightbulb,
    title: "@explain",
    description: "Break down complex concepts into simple, easy-to-understand explanations"
  },
  {
    icon: Search,
    title: "@analyze",
    description: "Deep dive into content structure, arguments, and supporting evidence"
  },
  {
    icon: MessageSquare,
    title: "@questions",
    description: "Generate thoughtful questions for better understanding and discussion"
  },
  {
    icon: BarChart3,
    title: "@insights",
    description: "Discover hidden patterns, trends, and actionable insights from data"
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Powerful <span className="glow-text">Commands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access AI superpowers with simple commands. Just type @ and see the magic happen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-radius bg-gradient-to-r from-primary to-primary-light flex items-center justify-center shadow-[var(--shadow-primary)]">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold glow-text">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-8">
          <p className="text-lg text-muted-foreground mb-6">
            And many more commands to discover...
          </p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-secondary rounded-radius border border-border">
            <span className="text-sm font-medium">Coming soon:</span>
            <span className="glow-text font-semibold">@translate @compare @research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;