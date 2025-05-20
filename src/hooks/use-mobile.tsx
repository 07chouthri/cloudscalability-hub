
import * as React from "react"

// Define constant breakpoints for consistency
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1280
}

/**
 * Hook to detect if the current viewport is mobile
 * @returns boolean indicating if the screen is mobile width
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.TABLET)
    }
    
    // Initial check
    checkSize()
    
    // Add event listener
    window.addEventListener("resize", checkSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return !!isMobile
}

/**
 * Hook to detect if the current viewport is tablet
 * @returns boolean indicating if the screen is tablet width
 */
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth
      setIsTablet(width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.LAPTOP)
    }
    
    // Initial check
    checkSize()
    
    // Add event listener
    window.addEventListener("resize", checkSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return !!isTablet
}

/**
 * Hook to detect if the current viewport is a desktop
 * @returns boolean indicating if the screen is desktop width
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= BREAKPOINTS.LAPTOP)
    }
    
    // Initial check
    checkSize()
    
    // Add event listener
    window.addEventListener("resize", checkSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return !!isDesktop
}

/**
 * Hook to get the current responsive size category
 * @returns string representing the current size category ('mobile', 'tablet', 'laptop', 'desktop')
 */
export function useResponsiveSize() {
  const [size, setSize] = React.useState<'mobile' | 'tablet' | 'laptop' | 'desktop' | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth
      if (width < BREAKPOINTS.MOBILE) {
        setSize('mobile')
      } else if (width < BREAKPOINTS.TABLET) {
        setSize('tablet')
      } else if (width < BREAKPOINTS.LAPTOP) {
        setSize('laptop')
      } else {
        setSize('desktop')
      }
    }
    
    // Initial check
    checkSize()
    
    // Add event listener
    window.addEventListener("resize", checkSize)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  return size
}

/**
 * Hook to get window dimensions
 * @returns object containing current window width and height
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    window.addEventListener("resize", handleResize)
    
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
