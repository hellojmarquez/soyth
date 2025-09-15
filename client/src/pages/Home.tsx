import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import ApplySection from '@/components/ApplySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OpportunitiesSection />
        <ApplySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}