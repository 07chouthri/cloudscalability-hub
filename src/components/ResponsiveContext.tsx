
import React, { createContext, useContext, useEffect, useState } from "react";
import { BREAKPOINTS } from "@/hooks/use-mobile";

type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl";

interface ResponsiveContextType {
  breakpoint: BreakpointType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const defaultValue: ResponsiveContextType = {
  breakpoint: "lg",
  isMobile: false,
  isTablet: false,
  isDesktop: true,
};

const ResponsiveContext = createContext<ResponsiveContextType>(defaultValue);

export const useResponsive = () => useContext(ResponsiveContext);

export const ResponsiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ResponsiveContextType>(defaultValue);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      let breakpoint: BreakpointType = "lg";
      if (width < 640) breakpoint = "xs";
      else if (width < 768) breakpoint = "sm";
      else if (width < 1024) breakpoint = "md";
      else if (width < 1280) breakpoint = "lg";
      else breakpoint = "xl";
      
      setState({
        breakpoint,
        isMobile: width < BREAKPOINTS.TABLET,
        isTablet: width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.LAPTOP,
        isDesktop: width >= BREAKPOINTS.LAPTOP,
      });
    };

    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={state}>
      {children}
    </ResponsiveContext.Provider>
  );
};
