
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';


// Use createRoot for concurrent mode
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

// Hydrate the application
createRoot(rootElement).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Add event listener for when the page is fully loaded to execute non-critical scripts
window.addEventListener('load', () => {
  // Performance measurement
  if ('performance' in window) {
    // Report metrics to console in development
    const metrics = performance.getEntriesByType('navigation');
    console.debug('Page load metrics:', metrics[0]);
  }
});
