
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Check, ArrowRight, Cloud, Database, BarChart3, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnhancedCloudRoadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(roadmapRef, { once: true, threshold: 0.2 });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const roadmapSteps = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Assessment",
      description: "Evaluate your current infrastructure, applications, data, and security posture",
      detail: "Our team conducts a thorough analysis of your current systems to identify opportunities for cloud optimization.",
      delay: 100
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Planning",
      description: "Develop a comprehensive migration strategy and cloud operating model",
      detail: "We create a detailed roadmap tailored to your business needs, timeline, and technical requirements.",
      delay: 300
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Migration",
      description: "Execute your migration with our proven methodology and tooling",
      detail: "Our experts implement the migration process with minimal disruption to your operations.",
      delay: 500
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Optimization",
      description: "Continuously improve performance, security, and cost-efficiency",
      detail: "We help you maximize the value of your cloud investment through ongoing optimization.",
      delay: 700
    }
  ];

  return (
    <section 
      ref={roadmapRef} 
      className="py-20 bg-gradient-to-b from-hads-dark to-hads-purple/90 overflow-hidden relative"
    >
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl text-white font-bold mb-4 transition-all duration-700 text-gradient-animate animate-background-pan",
            isInView ? "opacity-100 translate-y-0 text-white" : "opacity-0 text-white translate-y-10"
          )}>
            Cloud Migration 
            <span className="text-hads-pink"> Roadmap</span>
          </h2>
          <p className={cn(
            "text-lg text-white/80 max-w-2xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} style={{ transitionDelay: "200ms" }}>
            Our structured approach ensures a smooth transition to the cloud with minimal disruption and maximum value
          </p>
        </div>

        <div className="relative">
          {/* Animated connecting line for desktop */}
          <div className={cn(
            "absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-hads-teal to-hads-pink transform -translate-x-1/2 hidden md:block",
            isInView ? "animate-line-grow" : ""
          )}></div>
          
          <div className="space-y-16 md:space-y-0 relative z-10">
            {roadmapSteps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col md:flex-row items-center justify-center transition-all duration-1000 transform",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
                style={{ transitionDelay: `${step.delay}ms` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={cn(
                  "w-full md:w-5/12 mb-8 md:mb-0",
                  index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                )}>
                  <div className={cn(
                    "bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all duration-500",
                    hoveredStep === index ? "transform scale-105 shadow-glow border-hads-teal/50" : "hover:shadow-glow hover:border-hads-teal/50",
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                      <span>Step {index + 1}: {step.title}</span>
                      <div className={cn(
                        "bg-hads-teal/20 p-2 rounded-full transition-all duration-300",
                        hoveredStep === index ? "bg-hads-teal/40 animate-pulse-ring" : ""
                      )}>
                        {step.icon}
                      </div>
                    </h3>
                    <p className="text-white/80">{step.description}</p>

                    {/* Additional details that appear on hover */}
                    <div className={cn(
                      "mt-4 text-white/70 overflow-hidden transition-all duration-300",
                      hoveredStep === index ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      <p>{step.detail}</p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className={cn(
                    "w-12 h-12 rounded-full bg-gradient-to-r from-hads-teal to-hads-pink flex items-center justify-center z-10",
                    hoveredStep === index ? "animate-pulse-ring shadow-glow" : "animate-pulse-slow",
                    index % 2 === 0 ? "" : ""
                  )}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  {index < roadmapSteps.length - 1 && (
                    <div className={cn(
                      "absolute h-20 w-1 bg-gradient-to-b from-hads-teal to-hads-pink -bottom-16 md:hidden",
                      isInView ? "animate-line-grow" : ""
                    )}></div>
                  )}
                </div>

                <div className={cn(
                  "w-full md:w-5/12 transition-all duration-300",
                  hoveredStep === index ? "md:opacity-100" : "md:opacity-50 md:hover:opacity-100",
                  index % 2 === 0 ? "md:text-left md:pl-16" : "md:text-right md:pr-16",
                )}>
                  <div className="hidden md:block">
                    {index === 0 && (
                      <div className="space-y-2">
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Infrastructure assessment</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-100" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Application portfolio analysis</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-200" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Cloud readiness evaluation</span>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="space-y-2">
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Migration strategy development</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-100" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Cloud architecture design</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-200" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Risk assessment & mitigation</span>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="space-y-2">
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Phased implementation</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-100" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Testing & validation</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-200" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Knowledge transfer & training</span>
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="space-y-2">
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Performance monitoring</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-100" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Cost optimization</span>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 transition-all duration-300 transform",
                          hoveredStep === index ? "translate-x-2 transition-delay-200" : ""
                        )}>
                          <Check size={16} className="text-green-400" />
                          <span className="text-white/80">Continuous improvement</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={cn(
          "mt-16 text-center transition-all duration-700 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )} style={{ transitionDelay: "900ms" }}>
          <Link to="/cloud-migration">
            <Button variant="cloud" size="lg" className="group relative overflow-hidden shadow-glow">
              <span className="relative z-10">Explore Our Complete Strategy</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-hads-teal/20 to-hads-pink/20 filter blur-sm animate-pulse-slow"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCloudRoadmap;
