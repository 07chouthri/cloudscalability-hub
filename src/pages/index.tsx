
import { useEffect, useRef, useState, memo } from 'react';
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
import { useResponsive } from '@/components/ResponsiveContext';
import SEOHead from '@/components/SEOHead';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { preloadCriticalComponents } from '@/utils/lazyLoad';

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

// Memoized scroll button component for better performance
const ScrollToTopButton = memo(({ showScrollTop, scrollProgress, scrollToTop, isMobile, isTablet }: {
  showScrollTop: boolean;
  scrollProgress: number;
  scrollToTop: () => void;
  isMobile: boolean;
  isTablet: boolean;
}) => (
  <button 
    onClick={scrollToTop} 
    className={cn(
      "fixed bottom-4 md:bottom-6 lg:bottom-8 right-4 md:right-6 lg:right-8 p-2 md:p-3 lg:p-4 rounded-full bg-gradient-to-r from-hads-purple to-hads-pink text-white shadow-xl z-50 transition-all duration-300 transform",
      showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
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
));

const IndexPage = () => {
  const { isMobile, isTablet } = useResponsive();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload critical components
    preloadCriticalComponents();
    
    // Optimized scroll to top
    window.scrollTo(0, 0);
    
    // Handle hash links with better performance
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo(0, 0);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 250);
      }
    }

    // Throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
          
          setScrollProgress(progress);
          setShowScrollTop(scrollTop > 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  // Social media URLs
  const socialUrls = {
    linkedin: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false",
    youtube: "http://www.youtube.com/@HADSTechovations",
    twitter: "https://twitter.com/HADSTech"
  };

  // Enhanced keywords with stronger company branding
  const seoKeywords = "HADS Technovations LLP, HADS Technovations, HADS LLP, HADS Tech, HADS company, HADS India, HADS Technovations Limited Liability Partnership, My Application, custom application development, cloud applications, web applications, mobile applications, enterprise software development, application modernization, cloud migration services, aws consulting, application hosting, software development company india, custom software solutions, business applications, cloud native applications, application security, scalable applications, HADS application services, digital transformation, devops automation, finops optimization, managed cloud services, HADS Technovations LLP company profile, HADS Technovations LLP services, HADS Technovations LLP AWS partner, HADS Technovations LLP cloud solutions";

  // Enhanced Schema.org structured data with stronger company focus
  const enhancedSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HADS Technovations LLP",
    "alternateName": ["HADS", "HADS Tech", "HADS Technovations", "HADS LLP", "HADS Technovations Limited Liability Partnership", "My Application Provider", "Cloud Application Services"],
    "legalName": "HADS Technovations Limited Liability Partnership",
    "url": "https://www.hadstechnovations.com/",
    "logo": "https://www.hadstechnovations.com/logo.png",
    "description": "HADS Technovations LLP - India's leading cloud solutions provider and AWS partner. We specialize in custom application development, cloud migration services, and enterprise-grade digital transformation solutions. Founded in 2020, serving enterprises globally with cutting-edge technology solutions.",
    "foundingDate": "2020",
    "industry": ["Information Technology and Cloud Services", "Software Development", "Cloud Computing"],
    "serviceArea": {
      "@type": "Place",
      "name": "Global",
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "IN"
      }
    },
    "knowsAbout": ["Custom Application Development", "Cloud Applications", "Web Applications", "Mobile Applications", "AWS Cloud Migration", "DevOps Automation", "Cloud Cost Optimization", "FinOps", "Digital Transformation", "Cloud Security", "Cloud Managed Services", "HADS Technovations LLP", "My Application Development"],
    "slogan": "Building Tomorrow's Applications Today - Your Trusted Cloud Partner",
    "brand": {
      "@type": "Brand",
      "name": "HADS Technovations LLP",
      "logo": "https://www.hadstechnovations.com/logo.png",
      "url": "https://www.hadstechnovations.com/"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "legalName": "HADS Technovations Limited Liability Partnership"
    },
    "applicationCategory": ["Business Applications", "Enterprise Software", "Cloud Applications", "Web Applications"],
    "sameAs": [
      "https://www.hadstechnovations.com/",
      "https://x.com/HADSTech",
      "https://www.facebook.com/hadstechnovations/",
      socialUrls.linkedin,
      socialUrls.youtube,
      socialUrls.twitter,
      "https://www.hadstechnovations.com/hads-technovations-llp"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Tamil Nadu",
      "addressLocality": "Chennai"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "email": "info@hadstechnovations.com",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise Application & Cloud Services Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Application Development",
            "description": "Build scalable, secure applications tailored to your business needs",
            "url": "https://www.hadstechnovations.com/",
            "serviceType": "Application Development",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Application Migration",
            "description": "Migrate your applications to the cloud with zero downtime",
            "url": "https://www.hadstechnovations.com/cloud-migration",
            "serviceType": "Application Migration",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps Automation Services",
            "description": "End-to-end DevOps automation for faster delivery and improved reliability",
            "url": "https://www.hadstechnovations.com/devops",
            "serviceType": "DevOps Automation",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Cost Optimization FinOps",
            "description": "Advanced FinOps strategies to reduce cloud spend by up to 40%",
            "url": "https://www.hadstechnovations.com/finops",
            "serviceType": "FinOps",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Managed Services",
            "description": "24/7 cloud infrastructure management and support",
            "url": "https://www.hadstechnovations.com/cloud-managed-services",
            "serviceType": "Managed Services",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security & Compliance Services",
            "description": "Enterprise-grade security and compliance solutions for cloud environments",
            "url": "https://www.hadstechnovations.com/security-compliance",
            "serviceType": "Security & Compliance",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        }
      ]
    },
    "award": ["AWS Partner", "Top Application Development Company 2024", "Best Cloud Service Provider 2024", "Leading Indian Cloud Solutions Provider"],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Enterprise Cloud Solutions by HADS Technovations LLP",
        "description": "Complete cloud transformation services for enterprises"
      },
      "eligibleRegion": "Worldwide"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white" ref={scrollRef}>
      <SEOHead
        title="HADS Technovations LLP | Leading Cloud Solutions Provider"
        description="HADS Technovations LLP - India's premier cloud solutions provider and AWS partner specializing in cloud migration, DevOps automation, and digital transformation."
        keywords={seoKeywords}
        ogUrl="/"
        schema={enhancedSchema}
        linkedinUrl={socialUrls.linkedin}
        youtubeUrl={socialUrls.youtube}
        twitterUrl={socialUrls.twitter}
        gaMeasurementId={GA_MEASUREMENT_ID}
      />
      
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      
      <div id="hero">
        <HeroSection />
      </div>
        
      <div>
        <Navbar />
      </div>

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
        <div id="global-coverage">
          <GlobalCoverageSection />
        </div>
        <div id="industries">
          <IndustriesSection />
        </div>
        <div id="resources">
          <ResourcesSection />
        </div>
        <div id="about" className="mt-10">
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
      
      <Footer />

      <ScrollToTopButton 
        showScrollTop={showScrollTop}
        scrollProgress={scrollProgress}
        scrollToTop={scrollToTop}
        isMobile={isMobile}
        isTablet={isTablet}
      />
    </div>
  );
};

export default IndexPage;
