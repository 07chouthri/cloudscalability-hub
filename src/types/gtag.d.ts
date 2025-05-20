
// Type definitions for Google Analytics gtag.js
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// Add any other gtag-related types here as needed
