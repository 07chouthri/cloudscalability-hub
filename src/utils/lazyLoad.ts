
import { lazy } from 'react';

// Enhanced lazy loading with retry logic and preloading capabilities
export function lazyLoadComponent(componentImport: () => Promise<any>) {
  return lazy(() => {
    return componentImport().catch((err) => {
      console.error('Error loading component:', err);
      // Retry once after a short delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(componentImport());
        }, 1000);
      });
    });
  });
}

// Utility for preloading components
export function preloadComponent(componentImport: () => Promise<any>) {
  const componentImportFn = componentImport;
  componentImportFn();
}

// Preload critical components on idle
export function preloadCriticalComponents() {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Preload commonly accessed pages
      import('../pages/AboutPage');
      import('../pages/ContactPage');
    });
  }
}
