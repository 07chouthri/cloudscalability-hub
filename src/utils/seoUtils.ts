
// SEO Utility functions to help improve search engine visibility

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateServiceSchema = (serviceName: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "serviceType": "Cloud Computing Services",
    "areaServed": "Global",
    "url": url,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Solutions`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": description
          }
        }
      ]
    }
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "HADS Technovations LLP",
    "alternateName": ["HADS", "HADS Tech", "HADS Technovations"],
    "description": "Leading cloud solutions provider specializing in AWS migration, DevOps automation, and digital transformation services.",
    "url": "https://www.hadstechnovations.com",
    "logo": "https://www.hadstechnovations.com/logo.png",
    "image": "https://www.hadstechnovations.com/logo.png",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@hadstechnovations.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Tamil Nadu"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cloud Services Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AWS Cloud Migration",
            "description": "Seamless migration to AWS cloud infrastructure"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps Automation",
            "description": "Streamlined development and deployment processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Cost Optimization",
            "description": "FinOps services to reduce cloud spending"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    },
    "sameAs": [
      "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false",
      "http://www.youtube.com/@HADSTechovations",
      "https://twitter.com/HADSTech"
    ]
  };
};

// Function to submit sitemap to search engines
export const submitSitemap = () => {
  if (typeof window !== 'undefined') {
    // Google Search Console sitemap submission URL
    const googleSubmitUrl = `https://www.google.com/ping?sitemap=https://www.hadstechnovations.com/sitemap.xml`;
    
    // Bing Webmaster Tools sitemap submission URL
    const bingSubmitUrl = `https://www.bing.com/ping?sitemap=https://www.hadstechnovations.com/sitemap.xml`;
    
    console.log('Submit your sitemap to Google:', googleSubmitUrl);
    console.log('Submit your sitemap to Bing:', bingSubmitUrl);
  }
};

// Enhanced meta keywords generator
export const generateMetaKeywords = (baseKeywords: string[], serviceKeywords: string[] = []) => {
  const companyKeywords = [
    'HADS Technovations LLP',
    'HADS',
    'HADS Tech',
    'HADS Technovations'
  ];
  
  const industryKeywords = [
    'cloud migration',
    'aws consulting',
    'devops automation',
    'cloud cost optimization',
    'digital transformation',
    'aws partner',
    'cloud solutions provider'
  ];
  
  return [...companyKeywords, ...baseKeywords, ...serviceKeywords, ...industryKeywords].join(', ');
};
