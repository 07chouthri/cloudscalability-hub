
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Cloud, Server, Database, Code, BarChart, Shield } from 'lucide-react';

const CloudTechCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [autoScrollDirection, setAutoScrollDirection] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const technologies = [
    {
      title: "Cloud Migration",
      description: "Seamlessly transition your workloads to AWS, Azure, or Google Cloud",
      icon: <Cloud className="h-10 w-10 text-hads-purple" />,
      color: "from-blue-100 to-blue-200" // Lighter blue gradient
    },
    {
      title: "Containerization",
      description: "Modernize applications with Docker & Kubernetes orchestration",
      icon: <Server className="h-10 w-10 text-hads-purple" />,
      color: "from-pink-100 to-pink-200" // Lighter pink gradient
    },
    {
      title: "FinOps",
      description: "Optimize cloud costs and enhance resource utilization",
      icon: <BarChart className="h-10 w-10 text-hads-purple" />,
      color: "from-teal-100 to-blue-100" // Lighter teal to blue gradient
    },
    {
      title: "DevOps",
      description: "Streamline development workflows with CI/CD pipelines",
      icon: <Code className="h-10 w-10 text-hads-purple" />,
      color: "from-purple-100 to-indigo-100" // Lighter purple gradient
    },
    {
      title: "Data Management",
      description: "Secure cloud storage and database migration solutions",
      icon: <Database className="h-10 w-10 text-hads-purple" />,
      color: "from-blue-100 to-green-100" // Lighter blue to green gradient
    },
    {
      title: "Cloud Security",
      description: "Protect your cloud infrastructure with advanced security protocols",
      icon: <Shield className="h-10 w-10 text-hads-purple" />,
      color: "from-pink-100 to-purple-100" // Lighter pink to purple gradient
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    
    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    
    setMousePosition({ x, y });
    
    if (x < width / 3) {
      const scrollAmount = -1 * (1 - (x / (width / 3))) * 15;
      handleScroll(scrollAmount);
    } else if (x > (width * 2) / 3) {
      const scrollAmount = ((x - (width * 2) / 3) / (width / 3)) * 15;
      handleScroll(scrollAmount);
    }
  };

  const handleScroll = (amount: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollLeft += amount;
    setScrollPosition(carouselRef.current.scrollLeft);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovering) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          if (scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10) {
            setAutoScrollDirection(-1);
          } else if (scrollPosition <= 10) {
            setAutoScrollDirection(1);
          }
          
          handleScroll(1 * autoScrollDirection);
        }
      }, 30);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, autoScrollDirection, scrollPosition]);

  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span className="text-gray-800">Cloud </span>
          <span className="text-hads-pink">Technology</span>
          <span className="text-gray-800"> Expertise</span>
        </h2>
        
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 py-6 px-4 scroll-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card flex-shrink-0 w-80 h-64 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className={cn(
                "h-full p-6 bg-gradient-to-br border border-gray-200", 
                tech.color
              )}>
                <div className="h-full flex flex-col justify-between">
                  <div className="mb-4 flex justify-between items-start">
                    <div className="bg-white/60 p-3 rounded-xl shadow-sm">
                      {tech.icon}
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/60 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-hads-purple" 
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
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tech.title}</h3>
                    <p className="text-gray-700">{tech.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          <div className="text-sm text-gray-600">
            <span className="flex items-center">
              <span className="inline-block mr-2 text-hads-pink">←</span> 
              Swipe or hover to explore more technologies
              <span className="inline-block ml-2 text-hads-pink">→</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudTechCarousel;
