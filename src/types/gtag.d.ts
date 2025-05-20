
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

// Add additional performance-related types if not available in lib.dom.d.ts
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  duration: number;
  cancelable: boolean;
}
