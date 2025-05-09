
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
import ResourcesSection from '@/components/ResourcesSection';
import GlobalCoverageSection from '@/components/GlobalCoverageSection';
import IndustriesSection from '@/components/IndustriesSection';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { useResponsive } from '@/components/ResponsiveContext';
import SEOHead from '@/components/SEOHead';

const IndexPage = () => {
  const { isMobile, isTablet } = useResponsive();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash links on initial page load
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo(0, 0); // First scroll to top
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 250);
      }
    }

    // Handle scroll to top button visibility and progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 200);
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

  // Schema.org structured data for the homepage
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HADS TechNovations LLP",
    "url": "https://hads.tech/",
    "logo": "https://hads.tech/logo.png",
    "description": "HADS provides enterprise-grade cloud solutions, AWS migration services, and IT consulting to help businesses transform their digital infrastructure.",
    "sameAs": [
      "https://www.linkedin.com/company/hads-technovations-llp/",
      "https://twitter.com/HADSTechnovations"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "Cloud Migration",
          "description": "Seamless transition to cloud infrastructure with minimal disruption"
        },
        {
          "@type": "Service",
          "name": "DevOps Automation",
          "description": "Streamline development and operations for faster delivery"
        },
        {
          "@type": "Service",
          "name": "Cloud Cost Optimization",
          "description": "Reduce cloud expenditure while maximizing performance"
        },
        {
          "@type": "Service",
          "name": "Security & Compliance",
          "description": "Ensure data protection and regulatory compliance"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white" ref={scrollRef}>
      <SEOHead
        title="HADS Technovations LLP"
        description="HADS offers enterprise-grade AWS cloud solutions, migration services, DevOps automation, and IT consulting to help businesses transform their digital infrastructure."
        keywords="cloud solutions, AWS migration, DevOps, FinOps, cloud security, AWS partner, cloud consulting, cloud management"
        ogUrl="/"
        schema={schema}
      />
      
      {/* Full-height hero section with navbar overlay */}
      {/* <div className="relative h-screen"> */}
        {/* Hero Background */}
        <div id="hero" 
        // className="absolute inset-0 z-0"
        >
          <HeroSection />
        </div>
        
        {/* Navbar overlay with completely transparent background */}
        <div 
        // className="relative z-50"
        >
          <Navbar />
        </div>
      {/* </div> */}
      
      <main className="relative z-10 bg-white pt-8 md:pt-16 px-4 md:px-6 lg:px-8">
        <div id="services" className="mt-4 md:mt-8 lg:mt-16">
          <ServicesSection />
        </div>
        <div id="roadmap" className="mt-6 md:mt-8 lg:mt-16">
          <EnhancedCloudRoadmap />
        </div>
        {/* Countries section now comes before Industries */}
        <div id="global-coverage" className="mt-4 md:mt-8">
          <GlobalCoverageSection />
        </div>
        <div id="industries" className="mt-2 md:mt-4">
          <IndustriesSection />
        </div>
        <div id="resources" className="mt-6 md:mt-8 lg:mt-16">
          <ResourcesSection />
        </div>
        <div id="about" className="mt-6 md:mt-8 lg:mt-16">
          <AboutSection />
        </div>
        <div id="partners" className="mt-6 md:mt-8 lg:mt-16">
          <PartnersSection />
        </div>
        <div id="stats" className="mt-6 md:mt-8 lg:mt-16">
          <StatsSection />
        </div>
        <div id="testimonials" className="mt-6 md:mt-8 lg:mt-16 mb-6 md:mb-8 lg:mb-16">
          <TestimonialsSection />
        </div>
      </main>
      
      <Footer />

      {/* Enhanced Scroll to top button with progress indicator */}
      <button 
        onClick={scrollToTop} 
        className={cn(
          "fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 p-2 md:p-3 lg:p-4 rounded-full bg-gradient-to-r from-hads-purple to-hads-pink text-white shadow-xl z-50 transition-all duration-300 transform",
          showScrollTop ? "opacity-100 translate-y-0 animate-bounce-subtle" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <div className="relative">
          <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" viewBox="0 0 36 36">
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
          <ArrowUp size={isMobile ? 12 : isTablet ? 14 : 18} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200" />
        </div>
      </button>
    </div>
  );
};

export default IndexPage;
