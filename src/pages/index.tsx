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
import CloudMigrationExitModal from '@/components/CloudMigrationExitModal';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { useResponsive } from '@/components/ResponsiveContext';
import SEOHead from '@/components/SEOHead';
import PeriodicPromotionModal from '@/components/PeriodicPromotionModal';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your actual Google Analytics ID

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

  // Enhanced Schema.org structured data for the homepage
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HADS TechNovations LLP",
    "url": "https://www.hadstechnovations.com/",
    "logo": "https://www.hadstechnovations.com/logo.png",
    "description": "HADS provides enterprise-grade cloud solutions, AWS migration services, and IT consulting to help businesses transform their digital infrastructure.",
    "sameAs": [
      "https://www.hadstechnovations.com/",
      "https://x.com/HADSTech",
      "https://www.facebook.com/hadstechnovations/",
      "https://www.linkedin.com/company/hads-technovations-llp",
      "http://www.youtube.com/@HADSTechovations",
      "https://twitter.com/HADSTech"
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
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cloud Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AWS Cloud Migration",
            "url": "https://www.hadstechnovations.com/cloud-migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FinOps Services",
            "url": "https://www.hadstechnovations.com/finops"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps Automation",
            "url": "https://www.hadstechnovations.com/devops"
          }
        }
      ]
    }
  };

  // Social media URLs
  const linkedinUrl = "https://www.linkedin.com/company/hads-technovations-llp";
  const youtubeUrl = "http://www.youtube.com/@HADSTechovations";
  const twitterUrl = "https://twitter.com/HADSTech";

  // Enhanced keywords for better SEO - using the comprehensive keywords list provided
  const enhancedKeywords = "HADS Technovations LLP, HADS, hads cloud services, cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud consulting services, aws service providers in india, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, best cloud services providers in chennai, top cloud service providers, managed cloud service providers";

  return (
    <div className="min-h-screen flex flex-col bg-white" ref={scrollRef}>
      <SEOHead
        title="HADS Technovations LLP | Enterprise Cloud & AWS Solutions"
        description="HADS offers enterprise-grade AWS cloud solutions, migration services, DevOps automation, and IT consulting to help businesses transform their digital infrastructure."
        keywords={enhancedKeywords}
        ogUrl="/"
        schema={schema}
        linkedinUrl={linkedinUrl}
        youtubeUrl={youtubeUrl}
        twitterUrl={twitterUrl}
        gaMeasurementId={GA_MEASUREMENT_ID}
      />
      
      {/* Google Analytics - extra implementation via component to ensure it loads */}
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      
      {/* Main content */}
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
       <div id="CloudMigrationExitModal">
          <CloudMigrationExitModal />
        </div>
      <main className="relative z-10 bg-white pt-8 md:pt-16 px-4 md:px-6 lg:px-8">
        <div id="services">
          <ServicesSection />
        </div>
        <div id="roadmap">
          <EnhancedCloudRoadmap />
        </div>
        {/* Countries section now comes before Industries */}
        <div id="global-coverage">
          <GlobalCoverageSection />
        </div>
        <div id="industries">
          <IndustriesSection />
        </div>
        <div id="resources">
          <ResourcesSection />
        </div>
        <div id="about"className="mt-10">
          <AboutSection />
        </div>
        <div id="partners">
          <PartnersSection />
        </div>
        <div id="stats" className="mt-10">
          <StatsSection />
        </div>
        <div id="testimonials" className="mt-10">
          <TestimonialsSection />
        </div>
      </main>
      
      {/* Add the periodic promotion modal */}
      <PeriodicPromotionModal />
      
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
