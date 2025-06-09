
import { useRef } from 'react';
import { useInView } from '../hooks/use-in-view';
import { cn } from '@/lib/utils';
import aws from '../images/Aws.svg';
import googal from '../images/Google_Cloud_logo.svg';
import azure from '../images/Microsoft_Azure.svg';
import { useResponsive } from './ResponsiveContext';

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const { isMobile, isTablet } = useResponsive();

  // Partner data with enhanced descriptions and HD online images
  const partners = [
    {
      name: "AWS",
      logo: aws,
      description: "Certified AWS Partner - Expertise in cloud migration, DevOps, and security",
      delay: "150ms"
    },
    {
      name: "Google Cloud",
      logo: googal,
      description: "Specialized in Google Kubernetes Engine, Anthos, and BigQuery solutions",
      delay: "200ms"
    },
    {
      name: "Azure",
      logo: azure,
      description: "Gold Partner with advanced certifications in Azure Cloud and Security",
      delay: "250ms"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="bg-white sm:py-8 md:py-10 relative overflow-hidden"
      aria-labelledby="partners-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 dots-pattern opacity-5" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-hads-purple/5 to-transparent opacity-30 blur-3xl" aria-hidden="true"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-6 md:mb-12 lg:mb-16">
          <div className="flex items-center">
            <div className="h-px w-6 md:w-8 lg:w-12 bg-hads-pink mr-2 md:mr-4" aria-hidden="true"></div>
            <h2 
              id="partners-heading"
              className={cn(
                "text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 transition-all duration-400 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              Winning connections Our industry
            </h2>
          </div>
          <h3 className={cn(
            "text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mt-1 md:mt-2 transition-all duration-400 delay-50 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className='mx-2 text-hads-pink'>partnerships.</span>
          </h3>

          <p className={cn(
            "text-xs sm:text-sm md:text-base text-gray-700 mt-2 md:mt-4 max-w-3xl transition-all duration-400 delay-100 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            With 25+ powerful industry alliances, we provide access to top-tier infrastructure for seamless hybrid and multi-cloud operations.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8" aria-labelledby="partners-heading">
          {partners.map((partner, index) => (
            <li
              key={index}
              className={cn(
                "flex flex-col items-center p-3 sm:p-4 md:p-8 lg:p-10 bg-gray-50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-200 transition-all duration-400 transform hover:bg-gray-100 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 group",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: isInView ? partner.delay : '0ms' }}
              aria-label={`${partner.name} - ${partner.description}`}
            >
              <div className="h-12 sm:h-16 md:h-24 lg:h-40 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" aria-hidden="true"></div>
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-auto max-h-10 sm:max-h-14 md:max-h-20 lg:max-h-36 w-auto max-w-[80%] object-contain relative z-10 transition-transform duration-200 group-hover:scale-110"
                />
              </div>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 md:mb-2 lg:mb-3">{partner.name}</h4>
              <p className="text-xs md:text-sm text-gray-700 text-center">{partner.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;
