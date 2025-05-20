
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
