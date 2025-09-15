import { Card } from '@/components/ui/card';
import { Code, Users, Globe, Zap } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Skill Development",
      description: "Learn cutting-edge technologies while working on real projects with experienced mentors."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded developers from around the world in our supportive community."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on projects that make a difference in communities worldwide."
    },
    {
      icon: Zap,
      title: "Fast Growth",
      description: "Accelerate your career with hands-on experience and professional networking."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Soyth Initiative
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soyth is a global community of volunteer web developers dedicated to creating 
            positive change through technology. We believe that code has the power to solve 
            real-world problems and connect people across boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`feature-card-${index}`}>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-card rounded-lg p-8 border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We're building a world where technology serves humanity. Through collaborative 
                development, mentorship, and community-driven projects, we empower developers 
                to create solutions that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a beginner looking to learn or an experienced developer wanting 
                to give back, Soyth provides the platform, community, and projects to make 
                your impact meaningful.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="stat-countries">45</div>
                  <div className="text-muted-foreground text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="stat-nonprofits">120</div>
                  <div className="text-muted-foreground text-sm">Non-profits Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="stat-hours">50K</div>
                  <div className="text-muted-foreground text-sm">Hours Volunteered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="stat-startups">30</div>
                  <div className="text-muted-foreground text-sm">Startups Launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}