
// Performance optimization utilities

// Bundle size analyzer - helps identify large dependencies
export const analyzeBundleSize = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigationEntries = performance.getEntriesByType('navigation');
    const resourceEntries = performance.getEntriesByType('resource');
    
    console.group('Bundle Analysis');
    console.log('Navigation entries:', navigationEntries);
    console.log('Resource entries:', resourceEntries);
    console.groupEnd();
    
    return {
      navigation: navigationEntries,
      resources: resourceEntries
    };
  }
};

// Memory usage monitor
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log('Memory usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
    });
    return memory;
  }
};

// Critical resource preloader
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/src/images/logo.png',
    '/src/images/Hads.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  // Add CSS containment for better performance
  const style = document.createElement('style');
  style.textContent = `
    .scroll-container {
      contain: layout style paint;
    }
    .scroll-item {
      contain: layout style;
    }
  `;
  document.head.appendChild(style);
};

// Lazy load intersection observer with enhanced performance
export const createOptimizedObserver = (callback: IntersectionObserverCallback) => {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: [0, 0.1, 0.5, 1.0]
  };

  return new IntersectionObserver(callback, options);
};
