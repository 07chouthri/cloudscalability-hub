
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import EnhancedCloudRoadmap from '@/components/EnhancedCloudRoadmap';
import CloudTechCarousel from '@/components/CloudTechCarousel';
import ProfessionalCloudCarousel from '@/components/ProfessionalCloudCarousel';
import CloudServicesCarouselHorizontal from '@/components/CloudServicesCarouselHorizontal';
import ResourcesSection from '@/components/ResourcesSection';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update document title
    document.title = "HADS - Cloud Solutions & DevOps Services";
    
    // Handle hash links on initial page load
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 250); // Faster timeout (reduced from 500ms)
      }
    }

    // Handle scroll to top button visibility and progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 200); // Reduced from 300 to show earlier
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white" ref={scrollRef}>
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="technologies">
          <CloudTechCarousel />
        </div>
        <div id="professional-services">
          <ProfessionalCloudCarousel />
        </div>
        <div id="journey">
          <CloudServicesCarouselHorizontal />
        </div>
        <div id="roadmap">
          <EnhancedCloudRoadmap />
        </div>
        <div id="resources" className="bg-white">
          <ResourcesSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="partners">
          <PartnersSection />
        </div>
        <div id="stats">
          <StatsSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
      </main>
      
      <Footer />

      {/* Enhanced Scroll to top button with progress indicator - FASTER ANIMATION */}
      <button 
        onClick={scrollToTop} 
        className={cn(
          "fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-hads-purple to-hads-pink text-white shadow-xl z-50 transition-all duration-300 transform hover:shadow-glow group",
          showScrollTop ? "opacity-100 translate-y-0 animate-bounce-subtle" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <div className="relative">
          <svg className="w-8 h-8" viewBox="0 0 36 36">
            <circle 
              cx="18" 
              cy="18" 
              r="16" 
              fill="none" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2" 
            />
            <circle 
              cx="18" 
              cy="18" 
              r="16" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray={`${2 * Math.PI * 16 * scrollProgress / 100} ${2 * Math.PI * 16}`}
              strokeDashoffset="0" 
              strokeLinecap="round" 
              style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            />
          </svg>
          <ArrowUp size={18} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-200" />
        </div>
      </button>
    </div>
  );
};

export default Index;
