
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { BarChart, Code, Database, Shield, Cloud } from 'lucide-react';
import { useResponsive } from './ResponsiveContext';

const CloudTechExpertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const { isMobile, isTablet } = useResponsive();
  
  // Get grid class based on screen size
  const getGridClass = () => {
    if (isMobile) return "grid grid-cols-1 gap-4 md:gap-6";
    if (isTablet) return "grid grid-cols-2 gap-4 md:gap-6";
    return "grid grid-cols-4 gap-4 md:gap-6";
  };

  const technologies = [
    {
      title: "Cloud Migration",
      description: "Seamlessly transition your workloads to AWS, Azure, or Google Cloud",
      icon: <Cloud className={isMobile ? "h-6 w-6" : "h-8 w-8"} />,
      color: "bg-gradient-to-r from-[#3a1b6d] to-[#00bcd4]",
      delay: 0
    },
    {
      title: "Containerization",
      description: "Modernize applications with Docker & Kubernetes orchestration",
      icon: <Database className={isMobile ? "h-6 w-6" : "h-8 w-8"} />,
      color: "bg-gradient-to-r from-[#e91e63] to-[#3a1b6d]",
      delay: 100
    },
    {
      title: "FinOps",
      description: "Optimize cloud costs and enhance resource utilization",
      icon: <BarChart className={isMobile ? "h-6 w-6" : "h-8 w-8"} />,
      color: "bg-gradient-to-r from-[#00bcd4] to-[#e91e63]", 
      delay: 200
    },
    {
      title: "DevOps",
      description: "Streamline development workflows with CI/CD pipelines",
      icon: <Code className={isMobile ? "h-6 w-6" : "h-8 w-8"} />,
      color: "bg-gradient-to-r from-[#3a1b6d] to-[#e91e63]",
      delay: 300
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="py-8 md:py-16 bg-[#0f0a2a] overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          <span className="text-white">Cloud </span>
          <span className="text-[#e91e63]">Technology</span>
          <span className="text-white"> Expertise</span>
        </h2>
        
        <div className={getGridClass()}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: isInView ? `${tech.delay}ms` : "0ms" }}
            >
              <div className={`${tech.color} p-4 md:p-6 h-full`}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 md:mb-6">
                    <div className="bg-white/20 p-3 md:p-4 rounded-lg inline-block">
                      {tech.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{tech.title}</h3>
                  <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">{tech.description}</p>
                  
                  <div className="mt-auto flex justify-end">
                    <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3 w-3 md:h-4 md:w-4 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudTechExpertise;
