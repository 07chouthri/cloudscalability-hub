
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useIsMobile } from "@/hooks/use-mobile";
import Viedo_For_Home_Page from "../viedo/Home Page.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    // Create a CSS animation for the text instead of using state
    const element = textRef.current;
    if (!element) return;
    
    // Add a class that will trigger the CSS animation
    setTimeout(() => {
      element.classList.add('text-animated');
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <div
      ref={sectionRef}
      className="relative mt-5 w-full min-h-[calc(100vh-5rem)] flex items-center justify-start bg-black overflow-hidden rounded-lg md:rounded-2xl"
    >
      {/* Background Video - Updated for fullscreen display */}
      <video
        src={Viedo_For_Home_Page}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{marginLeft:"200px"}}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>

      <div
        className={`z-20 px-6 md:pl-12 md:pr-6 text-left text-white max-w-full md:max-w-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Tagline with fade-up */}
        <div
          className="inline-block mb-6 px-3 py-1 bg-white/10 border border-white/20 rounded-full 
          text-xs md:text-sm font-medium uppercase tracking-wider backdrop-blur-sm animate-fade-up"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Cloud Migration & Digital Transformation
        </div>

        {/* Heading and description */}
        <div className="flex flex-col items-start text-left p-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 animate-fade-up"
              style={{
                animationDelay: "0.4s",
                opacity: 0,
                animationFillMode: "forwards",
              }}>
            <span className="block mb-2">
              Accelerate Your Cloud Journey with HADS
            </span>
            <span
              ref={textRef}
              className="typed-text block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 
              font-extrabold text-xl md:text-2xl lg:text-3xl"
            >
              Your strategic partner in cloud migration.
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl mt-2 animate-fade-up"
                  style={{
                    animationDelay: "0.8s",
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}>
              with expertise
            </span>
          </h1>
          <p
            className="text-sm md:text-base lg:text-lg text-gray-200 max-w-full md:max-w-lg leading-relaxed mb-6 animate-fade-up"
            style={{
              animationDelay: "1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            We combine cloud technology expertise with industry insights to help
            businesses migrate, modernize, and optimize their applications for the
            cloud era.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-start">
          <Button
            onClick={handleGetStarted}
            variant="cloud"
            size={isMobile ? "default" : "hero"}
            className="animate-fade-up"
            style={{
              animationDelay: "1.2s",
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            Free Cloud Assessment
            <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
