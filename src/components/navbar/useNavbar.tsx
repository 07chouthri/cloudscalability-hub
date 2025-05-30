
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 5); // Reduced from 10 to trigger earlier
      if (currentScrollY > lastScrollY && currentScrollY > 50) { // Reduced from 100 to be more responsive
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== path) {
      navigate(path);
      if (sectionId) {
        // Need to wait for the page to load before scrolling to section
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else if (sectionId) {
      // Already on the right page, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Always close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isVisible,
    isActive,
    handleNavigation
  };
};

export default useNavbar;
