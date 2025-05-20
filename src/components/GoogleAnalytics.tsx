
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { captureWebVitals, reportToAnalytics } from '@/utils/performanceMonitoring';

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  if (!measurementId || measurementId === "G-XXXXXXXXXX") return null;
  
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV === 'production') {
      // Capture web vitals and send them to Google Analytics
      captureWebVitals((metrics) => {
        reportToAnalytics(metrics);
      });
    }
  }, []);

  return (
    <Helmet>
      {/* Load Google Analytics script asynchronously */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          send_page_view: false,  // We'll send page views manually for better control
          anonymize_ip: true,     // Anonymize IP addresses for better privacy
          transport_type: 'beacon', // Use navigator.sendBeacon for better reliability
          custom_map: {           // Custom dimensions for web vitals
            dimension1: 'web_vitals_metric_name',
            dimension2: 'web_vitals_metric_value'
          }
        });
        
        // Track page views with the Router
        document.addEventListener('DOMContentLoaded', function() {
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
          });
        });
      `}</script>
    </Helmet>
  );
};

export default GoogleAnalytics;
