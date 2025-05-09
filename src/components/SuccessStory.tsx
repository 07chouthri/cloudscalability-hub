
import React from 'react';
import { cn } from '@/lib/utils';
import { useResponsive } from './ResponsiveContext';

interface SuccessStoryProps {
  year: string;
  title: string;
  description: string;
  position?: 'left' | 'right';
  className?: string;
  animation?: boolean;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  year,
  title,
  description,
  position = 'left',
  className,
  animation = true,
}) => {
  const { isMobile } = useResponsive();
  
  // Always use a vertical layout on mobile
  const finalPosition = isMobile ? 'left' : position;

  return (
    <div 
      className={cn(
        "relative mb-8 md:mb-16",
        finalPosition === 'left' ? 'text-left' : 'text-right',
        className
      )}
    >
      <div className={cn(
        "success-story-card",
        animation && "animate-fade-in",
        isMobile ? "w-full" : "max-w-[85%] md:max-w-[70%]",
        finalPosition === 'left' ? "ml-0 mr-auto" : "ml-auto mr-0"
      )}>
        <span className="success-story-year">{year}</span>
        <h3 className="text-xl md:text-2xl font-bold my-3">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default SuccessStory;
