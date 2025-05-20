
// Type definitions for Google Analytics gtag.js
interface Window {
  dataLayer: any[];
  gtag: (
    command: 'event' | 'config' | 'set' | 'consent',
    action: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
}
