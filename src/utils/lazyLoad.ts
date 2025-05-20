
import { lazy } from 'react';

// Helper function for lazy loading components with configurable retry logic
export function lazyLoadComponent(componentImport: () => Promise<any>) {
  return lazy(() => {
    return componentImport().catch((err) => {
      console.error('Error loading component:', err);
      return componentImport(); // Retry once
    });
  });
}
