import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Soyth</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('opportunities')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-opportunities"
            >
              Opportunities
            </button>
            <button 
              onClick={() => scrollToSection('apply')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-apply"
            >
              How to Apply
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('hero')}
              data-testid="button-join-now"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('opportunities')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-opportunities"
              >
                Opportunities
              </button>
              <button 
                onClick={() => scrollToSection('apply')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-apply"
              >
                How to Apply
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('hero')}
                className="w-full"
                data-testid="mobile-button-join-now"
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}