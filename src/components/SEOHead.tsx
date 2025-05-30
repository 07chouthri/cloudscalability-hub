
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
  keywords = 'HADS Technovations LLP, HADS Technovations, HADS LLP, HADS Tech, HADS company, HADS India, HADS cloud services, HADS Technovations Limited Liability Partnership, My Application, cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud consulting services, aws service providers in india, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, HADS Technovations LLP company profile, HADS Technovations LLP services, HADS Technovations LLP India, HADS Technovations LLP AWS partner,cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud based services, aws cloud backup services, basic aws cloud services, aws cloud hosting benefits, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage for small business, aws cloud governance services, amazon cloud gaming service, amazon web services aws healthlake, amazon web services hybrid cloud, aws cloud infrastructure services, amazon cloud storage india, aws cloud storage pricing india, aws cloud provider kubernetes, amazon cloud storage kindle, aws cloud service providers, aws cloud provider load balancer controller, aws storage cloud native options, aws cloud native storage, aws cloud service offerings, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud storage rates, aws cloud services security, aws cloud storage security, aws cloud provider terraform, amazon cloud services vs microsoft azure, aws cloud computing vs data analytics, amazon cloud storage vs google drive, amazon cloud storage vs dropbox, aws cloud website hosting, aws cloud service providers chennai, aws cloud consulting chennai, aws web hosting pricing, cost of aws cloud services, amazon cloud services pricing, aws cloud server pricing, amazon web services billing & cost management dashboard, amazon cloud storage pricing for business, aws cloud service price, azure cloud services pricing india, aws web hosting pricing india, amazon web services pricing model, aws cloud pricing model, aws simple queue service pricing, amazon cloud storage pricing per tb, amazon web services cost per month, amazon web services ec2 pricing, amazon web services cost estimator, amazon web services gpu pricing, aws vs google cloud pricing, aws cloud security pricing, amazon web services vps pricing, amazon web services vm pricing, is aws cloud free, virtual machines migration in cloud computing, how does aws cloud work, aws service provider in chennai, AWS cloud consulting services india, aws cloud consultant, aws cloud india, azure cloud consulting services, aws cloud migration services in india, aws cloud services cost, economic benefit to a client using aws cloud services, aws cloud services overview, managed aws cloud services, cost of aws cloud services, consolidated billing for aws cloud services, aws cloud service provides recommendations, storage services offered by the aws cloud, aws services or features from the aws cloud global infrastructure, aws services can be used to connect the aws cloud and on-premises resources, services offer serverless services in the aws cloud, adopt cloud services covering aws and azure, fully managed nosql database service, host virtual servers in the aws cloud, optimize performance for aws services, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, aws managed services partners, aws managed services pricing, list of aws managed services, amazon aws managed services, aws managed services providers, aws managed services (ams), aws managed services (ams) integration app, aws managed services partner, aws managed services india, benefits of aws managed services, authentication services, managed database services, benefit of using aws managed services, aws service providers in india, aws service providers in india associative, aws service providers associative india, aws service providers automated backups of data, top aws service providers, managed aws service providers, how does aws compare to other cloud service providers, aws infrastructure services list, offering it infrastructure services as web services, aws services can be used as infrastructure automation tools, aws serverless infrastructure, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, best cloud service providers, top 10 cloud service providers, cloud service providers list, private cloud service providers, hyperscale cloud service providers, public cloud service providers, biggest cloud service providers, cloud service providers for small business, major cloud service providers, list of cloud service providers, enterprise cloud service providers, medical cloud service providers, leading cloud service providers, top 10 cloud service providers in world',
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
  
  // Enhanced schema with more specific company information and brand focus
  const enhancedSchema = schema ? {
    ...schema,
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HADS Technovations LLP",
    "alternateName": ["HADS", "HADS Tech", "HADS Technovations", "HADS LLP", "HADS Technovations Limited Liability Partnership", "My Application Provider", "Cloud Application Services"],
    "legalName": "HADS Technovations Limited Liability Partnership",
    "url": "https://www.hadstechnovations.com",
    "logo": "https://www.hadstechnovations.com/logo.png",
    "description": "HADS Technovations LLP is India's premier cloud solutions provider and AWS partner, specializing in application development, cloud migration, DevOps automation, and digital transformation services. Founded in 2020, we serve enterprises globally.",
    "foundingDate": "2020",
    "industry": ["Information Technology", "Cloud Computing", "Software Development"],
    "serviceArea": {
      "@type": "Place",
      "name": "Global",
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "IN"
      }
    },
    "knowsAbout": ["Custom Application Development", "Cloud Applications", "Web Applications", "Mobile Applications", "AWS Cloud Migration", "DevOps Automation", "Cloud Cost Optimization", "FinOps", "Digital Transformation", "Cloud Security", "Cloud Managed Services", "HADS Technovations LLP"],
    "slogan": "Building Tomorrow's Applications Today - HADS Technovations LLP",
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
      "name": "HADS Technovations LLP - Enterprise Application & Cloud Services Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Application Development by HADS Technovations LLP",
            "description": "Build scalable, secure applications tailored to your business needs",
            "url": "https://www.hadstechnovations.com/",
            "serviceType": "Application Development",
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
            "name": "Cloud Application Migration by HADS Technovations LLP",
            "description": "Migrate your applications to the cloud with zero downtime",
            "url": "https://www.hadstechnovations.com/cloud-migration",
            "serviceType": "Application Migration",
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
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "Worldwide"
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
      "https://www.hadstechnovations.com",
      "https://www.hadstechnovations.com/hads-technovations-llp"
    ].filter(Boolean),
    "award": ["AWS Partner", "Top Application Development Company 2024", "Best Cloud Service Provider 2024", "Leading Cloud Solutions Provider India"],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Enterprise Cloud Solutions by HADS Technovations LLP",
        "description": "Complete cloud transformation services for enterprises"
      },
      "eligibleRegion": "Worldwide"
    }
  } : schema;
  
  return (
    <Helmet>
      {/* Enhanced Basic Meta Tags for better indexing with company focus */}
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
      
      {/* Enhanced company-specific meta tags with brand focus */}
      <meta name="organization" content="HADS Technovations LLP" />
      <meta name="company" content="HADS Technovations LLP" />
      <meta name="business-name" content="HADS Technovations LLP" />
      <meta name="legal-name" content="HADS Technovations Limited Liability Partnership" />
      <meta name="brand" content="HADS Technovations LLP" />
      <meta name="classification" content="Cloud Services, AWS Consulting, Cloud Migration, IT Services, Application Development" />
      <meta name="subject" content="HADS Technovations LLP, Cloud computing, AWS, Cloud Migration, DevOps, FinOps, Digital Transformation, My Application" />
      <meta name="copyright" content="© 2024 HADS Technovations LLP. All rights reserved." />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
      <meta name="language" content="English" />
      
      {/* Additional company branding meta tags */}
      <meta name="company-type" content="Limited Liability Partnership" />
      <meta name="company-founded" content="2020" />
      <meta name="company-industry" content="Information Technology, Cloud Computing" />
      <meta name="company-specialization" content="AWS Cloud Migration, Application Development, DevOps Automation" />
      <meta name="company-location" content="India" />
      <meta name="company-service-area" content="Global" />
      
      {/* Additional SEO meta tags for better visibility */}
      <meta name="web_author" content="HADS Technovations LLP" />
      <meta name="resource-type" content="Document" />
      <meta name="audience" content="Business, Enterprise, Developers, IT Professionals" />
      <meta name="coverage" content="Worldwide" />
      <meta name="category" content="Cloud Services, AWS Solutions, IT Consulting, DevOps, Digital Transformation, Application Development" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      
      {/* Enhanced Open Graph / Facebook with company branding */}
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
      
      {/* Enhanced Twitter with company branding */}
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
      
      {/* Enhanced Verification and Search Console */}
      <meta name="google-site-verification" content="HvXbYac_X5O_bqNo36f6BWuXxFuQle4Imp1afCr-VBo" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
      
      {/* Additional indexing hints */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />
      
      {/* Enhanced Structured Data with company focus */}
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
