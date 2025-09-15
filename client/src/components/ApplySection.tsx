import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  FileText, 
  Users, 
  Rocket, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

export default function ApplySection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Join Our Community",
      description: "Fill out our application form with your background, skills, and interests. Tell us what motivates you to volunteer.",
      action: "Apply Now",
      estimated: "5 mins"
    },
    {
      icon: FileText,
      title: "Portfolio Review",
      description: "Share your work with us - GitHub projects, design portfolios, or any relevant experience you'd like to showcase.",
      action: "Upload Portfolio",
      estimated: "10 mins"
    },
    {
      icon: Users,
      title: "Community Meet & Greet",
      description: "Join a casual video call with our team and other new volunteers. Get to know the community and ask questions.",
      action: "Schedule Call",
      estimated: "30 mins"
    },
    {
      icon: Rocket,
      title: "Start Contributing",
      description: "Get matched with your first project based on your skills and interests. Begin making an impact from day one.",
      action: "Begin Project",
      estimated: "Ongoing"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="apply" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to Apply
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started with Soyth is simple. Follow these four steps to join our community 
            and begin your volunteer journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent z-0" />
                )}
                
                <Card className="p-6 hover-elevate transition-all duration-300 relative z-10" data-testid={`step-card-${index}`}>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-sm text-primary font-semibold mb-2">Step {index + 1}</div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className="text-xs text-muted-foreground mb-4">
                      Estimated time: {step.estimated}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => console.log(`${step.action} clicked`)}
                    data-testid={`button-step-${index}`}
                  >
                    {step.action}
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Requirements */}
        <div className="bg-card rounded-lg p-8 border mb-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            What We're Looking For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Essential Qualities
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-7">
                <li>• Passion for using technology to make a positive impact</li>
                <li>• Commitment to collaborative and inclusive development</li>
                <li>• Willingness to learn and share knowledge with others</li>
                <li>• Ability to communicate effectively in a remote environment</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-card-foreground flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Nice to Have
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-7">
                <li>• Previous experience with open-source projects</li>
                <li>• Understanding of agile development methodologies</li>
                <li>• Experience with version control (Git/GitHub)</li>
                <li>• Interest in mentoring other developers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            data-testid="button-start-application"
          >
            Start Your Application
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            Questions? Reach out to us and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}