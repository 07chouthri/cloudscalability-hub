
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useResponsive } from './ResponsiveContext';

const CloudMigrationBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bannerRef, { once: true, threshold: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useResponsive();
  
  return (
    <section className="py-6 md:py-12 bg-gray-50" ref={bannerRef}>
      <div className="container max-w-7xl mx-auto px-4">
        <div 
          className={cn(
            "bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark rounded-xl md:rounded-2xl p-6 md:p-12 text-white overflow-hidden relative transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className={cn(
              "text-xl md:text-3xl font-bold mb-3 md:mb-4 animate-fade-up",
              isInView ? "opacity-100" : "opacity-0"
            )} style={{ animationDelay: isInView ? '0.3s' : '0s' }}>
              Cloud Journey Strategy
            </h2>
            <p className={cn(
              "text-sm md:text-lg mb-4 md:mb-6 text-white/90 animate-fade-up",
              isInView ? "opacity-100" : "opacity-0"
            )} style={{ animationDelay: isInView ? '0.5s' : '0s' }}>
              Discover our comprehensive approach to migrating your business to the cloud, focusing on scalability, reliability, and cost efficiency.
            </p>
            <Link to="/cloud-migration">
              <button 
                className={cn(
                  "group bg-white text-hads-purple hover:bg-transparent hover:text-white rounded-md px-4 md:px-8 py-2 md:py-4 text-sm md:text-md font-medium transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg animate-fade-up shiny-button overflow-hidden relative",
                  isInView ? "opacity-100" : "opacity-0",
                  isHovered ? "shadow-glow" : ""
                )} 
                style={{ animationDelay: isInView ? '0.7s' : '0s' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center">
                  {isMobile ? "Explore" : "Explore Strategy"}
                  <ArrowRight 
                    className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationBanner;
