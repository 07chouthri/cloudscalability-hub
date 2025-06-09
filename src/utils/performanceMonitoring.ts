
/**
 * Performance monitoring utilities
 */

export interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

/**
 * Captures Web Vitals metrics
 */
export const captureWebVitals = (callback: (metrics: PerformanceMetrics) => void): void => {
  let metrics: PerformanceMetrics = {
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  };

  // First Contentful Paint
  const fcpEntryHandler = (entries: PerformanceObserverEntryList) => {
    const fcpEntry = entries.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
      callback({...metrics});
    }
  };

  // Largest Contentful Paint
  const lcpEntryHandler = (entries: PerformanceObserverEntryList) => {
    const lcpEntry = entries.getEntries().slice(-1)[0];
    if (lcpEntry) {
      metrics.lcp = lcpEntry.startTime;
      callback({...metrics});
    }
  };

  // First Input Delay
  const fidEntryHandler = (entries: PerformanceObserverEntryList) => {
    const fidEntry = entries.getEntries()[0] as PerformanceEventTiming;
    if (fidEntry) {
      metrics.fid = fidEntry.processingStart - fidEntry.startTime;
      callback({...metrics});
    }
  };

  // Cumulative Layout Shift
  const clsEntryHandler = (entries: PerformanceObserverEntryList) => {
    const clsEntry = entries.getEntries()[0];
    if (clsEntry && 'value' in clsEntry) {
      metrics.cls = clsEntry.value as number;
      callback({...metrics});
    }
  };

  // Time to First Byte
  if (performance.getEntriesByType('navigation').length > 0) {
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    metrics.ttfb = (navigationEntry as PerformanceNavigationTiming).responseStart;
    callback({...metrics});
  }

  // Register performance observers
  if ('PerformanceObserver' in window) {
    // First Contentful Paint
    try {
      new PerformanceObserver(fcpEntryHandler).observe({
        type: 'paint',
        buffered: true
      });
    } catch (e) {
      console.log('FCP observation not supported');
    }

    // Largest Contentful Paint
    try {
      new PerformanceObserver(lcpEntryHandler).observe({
        type: 'largest-contentful-paint',
        buffered: true
      });
    } catch (e) {
      console.log('LCP observation not supported');
    }

    // First Input Delay
    try {
      new PerformanceObserver(fidEntryHandler).observe({
        type: 'first-input',
        buffered: true
      });
    } catch (e) {
      console.log('FID observation not supported');
    }

    // Cumulative Layout Shift
    try {
      new PerformanceObserver(clsEntryHandler).observe({
        type: 'layout-shift',
        buffered: true
      });
    } catch (e) {
      console.log('CLS observation not supported');
    }
  }
};

/**
 * Reports metrics to Google Analytics
 */
export const reportToAnalytics = (metrics: PerformanceMetrics) => {
  if (typeof window.gtag !== 'function') return;

  // Report each metric individually
  if (metrics.lcp !== null) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: 'LCP',
      value: Math.round(metrics.lcp),
      non_interaction: true,
    });
  }

  if (metrics.fid !== null) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: 'FID',
      value: Math.round(metrics.fid),
      non_interaction: true,
    });
  }

  if (metrics.cls !== null) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: 'CLS',
      value: Math.round(metrics.cls * 1000) / 1000,
      non_interaction: true,
    });
  }
};
