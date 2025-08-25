import { Users, GraduationCap, Camera, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    title: "Influencers & Marketers",
    description: "Quickly analyze competitor content, extract key insights, and stay ahead of trends",
    highlight: "Save 5+ hours weekly"
  },
  {
    icon: Camera,
    title: "Content Creators",
    description: "Research topics faster, generate ideas, and understand your audience's interests",
    highlight: "3x faster research"
  },
  {
    icon: GraduationCap,
    title: "Students & Researchers",
    description: "Summarize academic papers, extract key findings, and accelerate your learning",
    highlight: "Study 60% more efficiently"
  },
  {
    icon: Users,
    title: "Business Professionals",
    description: "Process industry reports, analyze market data, and make informed decisions",
    highlight: "Better insights, faster"
  }
];

const AudienceSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Who <span className="glow-text">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals already supercharging their productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="feature-card group">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-radius-large bg-gradient-to-r from-accent to-accent-glow flex items-center justify-center shadow-[var(--shadow-accent)] flex-shrink-0">
                    <audience.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-semibold">{audience.title}</h3>
                    <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                      {audience.highlight}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              50,000+ active users
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              4.8★ average rating
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-accent-glow rounded-full mr-2"></div>
              1M+ commands processed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;