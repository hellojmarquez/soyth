import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'Community', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    Volunteer: [
      { name: 'Opportunities', href: '#opportunities' },
      { name: 'How to Apply', href: '#apply' },
      { name: 'Success Stories', href: '#' },
      { name: 'Resources', href: '#' }
    ],
    Support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Guidelines', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@soyth.org', label: 'Email' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-card-foreground">Soyth</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering developers to create positive change through collaborative 
              technology projects and community-driven innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      if (social.href.startsWith('mailto:')) {
                        window.location.href = social.href;
                      } else {
                        console.log(`${social.label} clicked`);
                      }
                    }}
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-card-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-card-foreground transition-colors text-sm"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Soyth Initiative. Made with ❤️ by our volunteer community.
          </p>
          <div className="flex gap-6 text-sm">
            <button 
              className="text-muted-foreground hover:text-card-foreground transition-colors"
              onClick={() => console.log('Privacy Policy clicked')}
              data-testid="footer-privacy"
            >
              Privacy Policy
            </button>
            <button 
              className="text-muted-foreground hover:text-card-foreground transition-colors"
              onClick={() => console.log('Terms of Service clicked')}
              data-testid="footer-terms"
            >
              Terms of Service
            </button>
            <button 
              className="text-muted-foreground hover:text-card-foreground transition-colors"
              onClick={() => console.log('Code of Conduct clicked')}
              data-testid="footer-conduct"
            >
              Code of Conduct
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}