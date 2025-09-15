import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Code, Heart } from 'lucide-react';
import heroImage from '@assets/generated_images/Diverse_developers_collaborating_workspace_cdf9264a.png';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOpportunities = () => {
    const element = document.getElementById('opportunities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Diverse group of developers collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Code for a
            <span className="block text-accent-foreground">Better World</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join Soyth's volunteer web developer initiative. Connect with passionate developers, 
            contribute to meaningful projects, and grow your skills while making a real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              data-testid="button-join-community"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToOpportunities}
              className="bg-background/20 backdrop-blur border-primary-foreground/30 text-primary-foreground hover:bg-background/30"
              data-testid="button-view-opportunities"
            >
              View Opportunities
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 backdrop-blur rounded-lg mb-2 mx-auto">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground" data-testid="stat-members">500+</div>
              <div className="text-primary-foreground/80 text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 backdrop-blur rounded-lg mb-2 mx-auto">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground" data-testid="stat-projects">150+</div>
              <div className="text-primary-foreground/80 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 backdrop-blur rounded-lg mb-2 mx-auto">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground" data-testid="stat-impact">1M+</div>
              <div className="text-primary-foreground/80 text-sm">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}