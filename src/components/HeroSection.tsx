
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MousePointer,
  CloudCog,
  Database,
  BarChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Rotate through features
    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(featureInterval);
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  const serviceFeatures = [
    {
      icon: <CloudCog className="w-12 h-12 text-hads-teal" />,
      title: "Cloud Solutions",
      description: "Scalable and secure infrastructure for your business",
      benefits: ["High availability", "Disaster recovery", "Global scale"],
    },
    {
      icon: <Database className="w-12 h-12 text-hads-pink" />,
      title: "Containerization",
      description: "Modern deployment strategies with Docker & Kubernetes",
      benefits: [
        "Consistent environments",
        "Easy scaling",
        "Faster deployments",
      ],
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-400" />,
      title: "FinOps",
      description: "Optimize your cloud costs for maximum efficiency",
      benefits: [
        "Reduced spending",
        "Resource optimization",
        "Budget forecasting",
      ],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center bg-hads-dark overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-hads-dark via-hads-purple to-hads-dark opacity-70"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className={cn(
              "space-y-8 transition-all duration-1000 ease-out transform lg:w-1/2",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            )}
          >
            <div>
              <div
                className="mb-6 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white">
                  Cloud Migration & Digital Transformation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                <span
                  className="block animate-fade-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  Accelerate your
                </span>
                <span
                  className="text-gradient bg-gradient-to-r from-teal-400 to-blue-500 animate-fade-up"
                  style={{ animationDelay: "0.7s" }}
                >
                  cloud journey
                </span>
                <span
                  className="block animate-fade-up"
                  style={{ animationDelay: "0.9s" }}
                >
                  with expertise
                </span>
              </h1>
            </div>
            <p
              className="text-lg text-gray-200 max-w-lg animate-fade-up font-sans"
              style={{ animationDelay: "1.1s" }}
            >
              We combine cloud technology expertise with industry insights to
              help businesses migrate, modernize, and optimize their
              applications for the cloud era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleGetStarted}
                variant="cloud"
                size="hero"
                className="transition-all duration-300 ease-in-out animate-fade-up bg-gradient-to-r from-pink-600 to-purple-600"
                style={{ animationDelay: "1.3s" }}
              >
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 ease-out transform lg:w-1/2",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            )}
          >
            <div className="relative">
              <div className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="mb-6 bg-white/10 rounded-full p-4">
                    {serviceFeatures[activeFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {serviceFeatures[activeFeature].title}
                  </h3>
                  <p className="text-white/80 mb-6">
                    {serviceFeatures[activeFeature].description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 w-full">
                  {serviceFeatures[activeFeature].benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center"
                    >
                      <span className="text-xs text-white/70">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
