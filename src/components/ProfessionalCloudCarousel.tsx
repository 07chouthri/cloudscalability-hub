
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CloudCog, Server, Database, Network, Shield, Code, BarChart, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const ProfessionalCloudCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cloud services data with light gradients
  const cloudServices = [
    {
      icon: <Database className="h-12 w-12 text-hads-purple" />,
      title: "Cloud Management",
      description: "Deliver end-to-end cloud infrastructure monitoring, automation, and optimization services to ensure performance reliability, operational efficiency, and cost-effectiveness across cloud environments.",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
      path: "/services/cloud-solutions"
    },
    {
      icon: <BarChart className="h-12 w-12 text-hads-purple" />,
      title: "FinOps",
      description: "Enhance resource efficiency and control cloud spending through our FinOps-driven approach, combining financial accountability with continuous cost optimization.",
      gradientFrom: "from-teal-50",
      gradientTo: "to-blue-50",
      path: "/services/data-analytics"
    },
    {
      icon: <Code className="h-12 w-12 text-hads-purple" />,
      title: "DevOps",
      description: "Streamline software delivery pipelines by automating deployments and fostering seamless collaboration across development, operations, and QA teams.",
      gradientFrom: "from-purple-50",
      gradientTo: "to-indigo-50",
      path: "/services/applications"
    },
    {
      icon: <Shield className="h-12 w-12 text-hads-purple" />,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with end-to-end security solutions and industry-aligned compliance frameworks to ensure data protection, governance, and regulatory adherence.",
      gradientFrom: "from-cyan-50",
      gradientTo: "to-teal-50",
      path: "/services/cloud-solutions"
    },
    {
      icon: <CloudCog className="h-12 w-12 text-hads-purple" />,
      title: "Cloud Migration",
      description: "Migrate workloads to AWS, Azure, or Google Cloud with minimal disruption, ensuring operational continuity and maximizing business value through strategic cloud adoption.",
      gradientFrom: "from-pink-50",
      gradientTo: "to-red-50",
      path: "/cloud-migration"
    },
    {
      icon: <Server className="h-12 w-12 text-hads-purple" />,
      title: "Containerization",
      description: "Modernize application architecture using Docker containers and Kubernetes orchestration to achieve enhanced scalability, portability, and automated workload management.",
      gradientFrom: "from-pink-50",
      gradientTo: "to-purple-50",
      path: "/services/cloud-solutions"
    },
    {
      icon: <Network className="h-12 w-12 text-hads-purple" />,
      title: "Cloud Strategy",
      description: "Design and execute tailored multi-cloud strategies that align with your business objectives, ensuring flexibility, resilience, and optimal resource utilization across cloud platforms.",
      gradientFrom: "from-blue-50",
      gradientTo: "to-teal-50",
      path: "/services/cloud-solutions"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-hads-purple" />,
      title: "Subscription Services",
      description: "Provide managed cloud services with transparent, predictable pricing models and continuous optimization to enhance performance, security, and cost-efficiency.",
      gradientFrom: "from-purple-50",
      gradientTo: "to-pink-50",
      path: "/services/cloud-solutions"
    }
  ];

  const handlePageChange = (index: number) => {
    setCurrentIndex(index);
    resetAutoScroll();
  };

  const totalPages = Math.ceil(cloudServices.length / 4);
  const currentPage = Math.floor(currentIndex / 4) + 1;

  // Auto scroll functionality
  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        // If we're at the last set of cards, go back to the beginning
        if (prevIndex >= cloudServices.length - 4) {
          return 0;
        }
        // Otherwise, advance to the next card
        return prevIndex + 1;
      });
    }, 5000); // Change slide every 5 seconds
  };

  const resetAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      startAutoScroll();
    }
  };

  // Start auto scroll on component mount
  useEffect(() => {
    startAutoScroll();
    
    // Clean up the interval when component unmounts
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="py-16 bg-white"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="opacity-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              <span className="text-gray-800">Professional </span>
              <span className="text-hads-pink">Cloud</span>
              <span className="text-gray-800"> Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive in the cloud era with security, scalability, and cost optimization.
            </p>
          </div>

          {/* Carousel container */}
          <div className="relative overflow-hidden">
            {/* Cards container with smooth transition */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(${-currentIndex * 25}%)`,
              }}
            >
              {cloudServices.map((service, index) => (
                <div 
                  key={index} 
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex-shrink-0"
                >
                  <div className="h-[350px] rounded-2xl overflow-hidden relative shadow-md hover:shadow-lg transition-all duration-300">
                    {/* Background gradient */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br border border-gray-200", 
                      service.gradientFrom, 
                      service.gradientTo
                    )}></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col p-6 z-10">
                      <div className="mb-4 bg-white/80 p-3 rounded-xl w-min shadow-sm">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-700 text-sm flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination indicator dots for visual reference */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(cloudServices.length / 4) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i * 4)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 4) === i ? 'bg-hads-pink' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCloudCarousel;
