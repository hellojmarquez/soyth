import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Palette, 
  Server, 
  Smartphone, 
  Database, 
  Shield, 
  ArrowRight,
  Clock,
  Users
} from 'lucide-react';

export default function OpportunitiesSection() {
  const roles = [
    {
      icon: Code2,
      title: "Frontend Developer",
      description: "Create beautiful, responsive user interfaces using React, Vue, or Angular. Work on user experience and accessibility.",
      skills: ["React", "JavaScript", "CSS", "HTML", "TypeScript"],
      commitment: "10-15 hrs/week",
      team: "Design & UX",
      level: "Beginner to Advanced"
    },
    {
      icon: Server,
      title: "Backend Developer",
      description: "Build robust APIs and server-side applications. Work with databases, authentication, and scalable architecture.",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"],
      commitment: "10-20 hrs/week", 
      team: "Platform Team",
      level: "Intermediate to Advanced"
    },
    {
      icon: Smartphone,
      title: "Mobile Developer",
      description: "Develop cross-platform mobile applications that reach users everywhere. Focus on native and hybrid solutions.",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
      commitment: "15-25 hrs/week",
      team: "Mobile Team", 
      level: "Intermediate to Advanced"
    },
    {
      icon: Palette,
      title: "UI/UX Designer",
      description: "Design intuitive interfaces and user experiences. Create wireframes, prototypes, and design systems.",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      commitment: "8-12 hrs/week",
      team: "Design & UX",
      level: "Beginner to Advanced"
    },
    {
      icon: Database,
      title: "DevOps Engineer",
      description: "Manage deployment pipelines, cloud infrastructure, and monitoring systems. Ensure scalability and reliability.",
      skills: ["Docker", "AWS", "Kubernetes", "CI/CD", "Monitoring"],
      commitment: "12-18 hrs/week",
      team: "Infrastructure",
      level: "Advanced"
    },
    {
      icon: Shield,
      title: "Security Specialist",
      description: "Implement security best practices, conduct audits, and ensure data protection across all projects.",
      skills: ["Security Auditing", "Penetration Testing", "OWASP", "Encryption"],
      commitment: "8-15 hrs/week",
      team: "Security Team",
      level: "Intermediate to Advanced"
    }
  ];

  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="opportunities" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Volunteer Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the perfect role that matches your skills and interests. All positions are remote 
            and flexible to accommodate your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300 group" data-testid={`opportunity-card-${index}`}>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{role.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{role.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{role.commitment}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{role.team}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Level: </span>
                    <span className="font-medium text-card-foreground">{role.level}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {role.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button 
                  onClick={scrollToApply}
                  className="w-full group-hover:bg-primary/90 transition-colors"
                  data-testid={`button-apply-${index}`}
                >
                  Apply for Role
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see a role that fits? We're always looking for passionate contributors.
          </p>
          <Button 
            variant="outline"
            onClick={scrollToApply}
            data-testid="button-custom-role"
          >
            Suggest a Custom Role
          </Button>
        </div>
      </div>
    </section>
  );
}