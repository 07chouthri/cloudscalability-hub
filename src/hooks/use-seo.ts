
import { useEffect } from 'react';

interface UseSEOProps {
  title?: string;
  description?: string;
  url?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  twitterUrl?: string;
}

export const useSEO = ({ 
  title, 
  description, 
  url,
  linkedinUrl,
  youtubeUrl,
  twitterUrl 
}: UseSEOProps = {}) => {
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
    
    // Add social media links as meta tags
    const addOrUpdateMetaProperty = (property: string, content: string) => {
      const meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('property', property);
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    };
    
    if (linkedinUrl) {
      addOrUpdateMetaProperty('og:see_also', linkedinUrl);
    }
    
    if (youtubeUrl) {
      addOrUpdateMetaProperty('og:see_also', youtubeUrl);
    }
    
    if (twitterUrl) {
      addOrUpdateMetaProperty('og:see_also', twitterUrl);
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
  }, [title, description, url, linkedinUrl, youtubeUrl, twitterUrl]);
};
