
import { useEffect } from 'react';

interface UseSEOProps {
  title?: string;
  description?: string;
  url?: string;
}

export const useSEO = ({ title, description, url }: UseSEOProps = {}) => {
  useEffect(() => {
    // Update some direct meta tags that might be needed for immediate crawling
    if (title) {
      document.title = title;
    }
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
    
    if (url) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', url);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = url;
        document.head.appendChild(link);
      }
    }
    
    // Submit to search engines hint
    const googleVerification = document.querySelector('meta[name="google-site-verification"]');
    if (!googleVerification) {
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = 'HvXbYac_X5O_bqNo36f6BWuXxFuQle4Imp1afCr-VBo';
      document.head.appendChild(meta);
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [title, description, url]);
};
