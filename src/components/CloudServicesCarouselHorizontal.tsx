
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Database, Cloud, CloudCog, Server, CloudRain, Cpu, Shield, Gauge } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { Button } from './ui/button';
import { Link } from 'react-router-dom';


const CloudServicesCarouselHorizontal = () => {
  const [sectionRef, setSectionRef] = useState<HTMLDivElement | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Cloud service cards data
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly move your workloads to the cloud with our proven migration strategies",
      icon: <Cloud className="text-hads-purple" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100", // Blue light gradient
      path: "/cloud-migration"
    },
    {
      title: "Container Orchestration",
      description: "Optimize your containerized applications with Kubernetes and Docker expertise",
      icon: <Database className="text-hads-purple" />,
      color: "bg-gradient-to-br from-pink-50 to-pink-100", // Pink light gradient
      path: "/services/cloud-solutions"
    },
    {
      title: "DevOps Automation",
      description: "Implement CI/CD pipelines and automate infrastructure deployment",
      icon: <CloudCog className="text-hads-purple" />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100", // Purple light gradient
      path: "/services/applications"
    },
    {
      title: "FinOps",
      description: "Optimize cloud spending and implement cost management strategies",
      icon: <Gauge className="text-hads-purple" />,
      color: "bg-gradient-to-br from-teal-50 to-blue-50", // Teal to blue light gradient
      path: "/services/data-analytics"
    },
    {
      title: "Multi-Cloud Management",
      description: "Unified management across AWS, Azure, Google Cloud and private clouds",
      icon: <CloudRain className="text-hads-purple" />,
      color: "bg-gradient-to-br from-cyan-50 to-teal-50", // Cyan to teal light gradient
      path: "/services/cloud-solutions"
    },
    {
      title: "Cloud Security",
      description: "Implement secure cloud architectures and compliance frameworks",
      icon: <Shield className="text-hads-purple" />,
      color: "bg-gradient-to-br from-pink-50 to-purple-50", // Pink to purple light gradient
      path: "/services/cloud-solutions"
    },
    {
      title: "Serverless Architecture",
      description: "Build scalable, event-driven applications without managing infrastructure",
      icon: <Cpu className="text-hads-purple" />,
      color: "bg-gradient-to-br from-green-50 to-blue-50", // Green to blue light gradient
      path: "/services/applications"
    },
    {
      title: "Infrastructure as Code",
      description: "Provision and manage cloud resources using Terraform, CloudFormation and Pulumi",
      icon: <Server className="text-hads-purple" />,
      color: "bg-gradient-to-br from-purple-50 to-pink-50", // Purple to pink light gradient
      path: "/services/cloud-solutions"
    }
  ];
  // Update active index when the carousel slides
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Initial call to set the active index
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div ref={setSectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
          <span className='mx-2 text-hads-pink'>Migration</span>
           Journey
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our comprehensive cloud services help you maximize value at every stage
          </p>
        </div>

        
        <div className="relative mt-16 pb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3 px-4">
                  <div className={`${service.color} rounded-xl shadow-md p-6 h-full overflow-hidden relative hover:shadow-lg transition-all duration-300 border border-gray-200`}>
                    <div className="relative z-10">
                      <div className="p-4 mb-6 rounded-full bg-white/80 inline-block shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-6 text-base leading-relaxed">
                        {service.description}
                      </p>
                      <Button 
                        variant="pastel"
                        asChild
                        className="inline-flex items-center font-medium"
                      >
                        <Link to={service.path}>
                          Learn More
                          <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Pagination indicators */}
            <div className="flex justify-center mt-10 gap-2">
              {services.map((_, i) => (
                <div 
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-hads-pink w-6' : 'bg-gray-200 w-2'
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CloudServicesCarouselHorizontal;
