
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: Record<string, any>;
  linkedinUrl?: string;
  youtubeUrl?: string;
  twitterUrl?: string;
  canonical?: string;
  ogType?: string;
  gaMeasurementId?: string;
  author?: string;
  language?: string;
}

const SEOHead = ({
  title,
  description,
  keywords = 'HADS Technovations LLP, cloud migration company chennai, aws partner india, managed cloud services chennai, devops automation india, finops cost optimization, cybersecurity services chennai, cloud consulting tamil nadu, aws migration services, azure migration chennai, cloud infrastructure management, 24x7 cloud support india, kubernetes services chennai, docker containerization, ci cd pipeline automation, cloud security assessment, compliance management india, disaster recovery planning, cloud backup solutions chennai, serverless architecture aws, microservices development, api gateway management, database migration services, data analytics cloud platform, machine learning aws, artificial intelligence cloud, iot cloud solutions chennai, edge computing services, hybrid cloud architecture, multi cloud strategy, cloud native development, infrastructure as code terraform, configuration management ansible, monitoring alerting solutions, log management elk stack, performance optimization cloud, scalability consulting, high availability design, fault tolerance planning, load balancing aws, auto scaling configuration, blue green deployment, canary releases, feature flags implementation, chaos engineering practices, site reliability engineering, platform engineering services, cloud economics consulting, total cost ownership analysis, roi cloud migration, budget optimization strategies, cost allocation models, chargeback showback implementation, rightsizing recommendations, reserved instances planning, spot instances optimization, savings plans analysis, waste elimination cloud, carbon footprint reduction, green computing practices, sustainable cloud architecture, renewable energy cloud, environmental impact assessment, cloud training programs, aws certification training, azure fundamentals course, devops bootcamp chennai, kubernetes certification, docker training workshop, terraform infrastructure course, ansible automation training, jenkins ci cd workshop, git version control training',
  ogImage = 'https://www.hadstechnovations.com/logo.png',
  ogUrl,
  schema,
  linkedinUrl,
  youtubeUrl,
  twitterUrl,
  canonical,
  ogType = 'website',
  gaMeasurementId,
  author = 'HADS Technovations LLP',
  language = 'en'
}: SEOHeadProps) => {
  const siteUrl = 'https://www.hadstechnovations.com';
  const fullUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  const canonicalUrl = canonical || fullUrl;
  
  // Optimized schema with more targeted company information
  const enhancedSchema = schema ? {
    ...schema,
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HADS Technovations LLP",
    "alternateName": ["HADS Technovations", "HADS LLP", "Cloud Migration Company Chennai", "AWS Partner India"],
    "legalName": "HADS Technovations Limited Liability Partnership",
    "url": "https://www.hadstechnovations.com",
    "logo": "https://www.hadstechnovations.com/logo.png",
    "description": "HADS Technovations LLP is a professional cloud migration company in Chennai, Tamil Nadu, India. As an AWS certified partner, we provide managed cloud services, DevOps automation, FinOps cost optimization, and cybersecurity solutions to enterprises globally since 2020.",
    "foundingDate": "2020",
    "industry": ["Cloud Migration Services", "AWS Partner Services", "Managed Cloud Services", "DevOps Automation"],
    "serviceArea": {
      "@type": "Place",
      "name": "Chennai, Tamil Nadu, India and Global",
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "IN"
      }
    },
    "knowsAbout": ["Cloud Migration Chennai", "AWS Partner India", "Managed Cloud Services", "DevOps Automation", "FinOps Cost Optimization", "Cybersecurity Chennai"],
    "slogan": "Professional Cloud Migration Company Chennai | AWS Certified Partner India",
    "brand": {
      "@type": "Brand",
      "name": "HADS Technovations LLP",
      "logo": "https://www.hadstechnovations.com/logo.png"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "legalName": "HADS Technovations Limited Liability Partnership"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HADS Technovations LLP - Professional Cloud Migration & IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Migration Company Chennai",
            "description": "Professional cloud migration services with zero downtime guarantee",
            "url": "https://www.hadstechnovations.com/cloud-migration",
            "serviceType": "Cloud Migration",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AWS Partner Services India",
            "description": "Certified AWS consulting and implementation services across India",
            "url": "https://www.hadstechnovations.com/aws-services",
            "serviceType": "AWS Partner Services",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Cloud Services",
            "description": "24/7 managed cloud services with monitoring, support, and optimization",
            "url": "https://www.hadstechnovations.com/managed-services",
            "serviceType": "Managed Cloud Services",
            "provider": {
              "@type": "Organization",
              "name": "HADS Technovations LLP"
            }
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "customer service",
      "email": "info@hadstechnovations.com",
      "availableLanguage": ["English", "Hindi", "Tamil"],
      "areaServed": "Chennai, Tamil Nadu, India, Global"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Tamil Nadu",
      "addressLocality": "Chennai"
    },
    "sameAs": [
      linkedinUrl,
      youtubeUrl,
      twitterUrl,
      "https://www.hadstechnovations.com"
    ].filter(Boolean),
    "award": ["AWS Certified Partner 2024", "Top Cloud Migration Company Chennai", "Leading Cloud Services Provider Tamil Nadu"],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Professional Cloud Migration & IT Services",
        "description": "Complete cloud transformation services for enterprises"
      },
      "eligibleRegion": "Chennai, Tamil Nadu, India, Global"
    }
  } : schema;
  
  return (
    <Helmet>
      {/* Optimized Basic Meta Tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Optimized company-specific meta tags */}
      <meta name="organization" content="HADS Technovations LLP" />
      <meta name="company" content="HADS Technovations LLP" />
      <meta name="business-name" content="HADS Technovations LLP" />
      <meta name="legal-name" content="HADS Technovations Limited Liability Partnership" />
      <meta name="brand" content="HADS Technovations LLP" />
      <meta name="classification" content="Cloud Migration, AWS Partner, Managed Cloud Services, DevOps, IT Services" />
      <meta name="subject" content="HADS Technovations LLP, Cloud Migration Company Chennai, AWS Partner India, DevOps Automation, FinOps, Cybersecurity" />
      <meta name="copyright" content="© 2024 HADS Technovations LLP. All rights reserved." />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
      <meta name="language" content="English" />
      
      {/* Enhanced company branding meta tags */}
      <meta name="company-type" content="Limited Liability Partnership" />
      <meta name="company-founded" content="2020" />
      <meta name="company-industry" content="Cloud Migration, AWS Partner Services, IT Consulting" />
      <meta name="company-specialization" content="Cloud Migration, AWS Consulting, DevOps Automation, FinOps" />
      <meta name="company-location" content="Chennai, Tamil Nadu, India" />
      <meta name="company-service-area" content="Global" />
      
      {/* Additional SEO meta tags */}
      <meta name="web_author" content="HADS Technovations LLP" />
      <meta name="resource-type" content="Document" />
      <meta name="audience" content="Business, Enterprise, Developers, IT Professionals" />
      <meta name="coverage" content="Chennai, Tamil Nadu, India, Global" />
      <meta name="category" content="Cloud Migration, AWS Partner Services, Managed Cloud Services, DevOps, Cybersecurity" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Optimized Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="HADS Technovations LLP" />
      <meta property="og:locale" content="en_US" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:region" content="Tamil Nadu" />
      <meta property="business:contact_data:locality" content="Chennai" />
      
      {/* Optimized Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@HADSTech" />
      <meta property="twitter:site" content="@HADSTech" />
      
      {/* Social Media URLs as meta tags */}
      {linkedinUrl && <meta property="og:see_also" content={linkedinUrl} />}
      {youtubeUrl && <meta property="og:see_also" content={youtubeUrl} />}
      {twitterUrl && <meta property="og:see_also" content={twitterUrl} />}
      
      {/* Verification and Search Console */}
      <meta name="google-site-verification" content="HvXbYac_X5O_bqNo36f6BWuXxFuQle4Imp1afCr-VBo" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
      
      {/* Additional indexing hints */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />
      
      {/* Optimized Structured Data */}
      {enhancedSchema && (
        <script type="application/ld+json">
          {JSON.stringify(enhancedSchema)}
        </script>
      )}

      {/* Google Analytics Script via Helmet */}
      {gaMeasurementId && gaMeasurementId !== "G-XXXXXXXXXX" && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              send_page_view: true,
              anonymize_ip: true,
              transport_type: 'beacon'
            });
          `}</script>
        </>
      )}
      
      {/* Preconnect to improve loading speed */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;
