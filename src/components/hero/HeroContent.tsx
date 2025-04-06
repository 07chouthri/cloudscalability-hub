
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroContentProps {
  isVisible: boolean;
}

const HeroContent = ({ isVisible }: HeroContentProps) => {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div 
      className={cn(
        "space-y-8 transition-all duration-1000 ease-out transform lg:w-1/2", 
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <div>
        <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <span className="inline-block py-1 px-3 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
            Cloud Migration & Digital Transformation
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 leading-tight">
          <span className="block animate-fade-up" style={{ animationDelay: '0.5s' }}>Accelerate your</span>
          <span className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <span className="text-gradient">cloud journey</span>
          </span>
          <span className="block animate-fade-up" style={{ animationDelay: '0.9s' }}>with expertise</span>
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-lg animate-fade-up font-sans" style={{ animationDelay: '1.1s' }}>
        We combine cloud technology expertise with industry insights to help businesses 
        migrate, modernize, and optimize their applications for the cloud era.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button 
          onClick={handleGetStarted}
          size="hero"
          className="transition-all duration-300 ease-in-out animate-fade-up bg-gradient-to-r from-[#00c6dc] to-[#e91e63] hover:shadow-lg hover:shadow-pink-500/20 hover:translate-y-[-2px]" 
          style={{ animationDelay: '1.3s' }}
        >
          Get Started
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
