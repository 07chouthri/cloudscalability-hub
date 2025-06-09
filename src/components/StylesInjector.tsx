
import { useEffect } from 'react';

const StylesInjector = () => {
  useEffect(() => {
    // Add enhanced server-card class to all service cards
    const serviceCards = document.querySelectorAll('#services .relative.group');
    serviceCards.forEach(card => {
      card.classList.add('server-card');
      
      // Create and append the shine effect element
      const shineEffect = document.createElement('div');
      shineEffect.className = 'card-shine-effect';
      card.appendChild(shineEffect);
    });
    
    // Add modern styling to carousel containers (without pink shadows)
    const carouselContainers = document.querySelectorAll('#technologies > div > div');
    carouselContainers.forEach(container => {
      container.classList.add('modern-carousel-container');
      container.classList.remove('carousel-container'); // Remove old class that might have pink shadows
    });
    
    // Handle scroll events for navbar
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null;
};

export default StylesInjector;
