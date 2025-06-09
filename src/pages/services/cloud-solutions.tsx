
import ContainerizationPage from '@/pages/ContainerizationPage';
import { Helmet } from 'react-helmet-async';

export default function CloudSolutions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Solutions & Managed Services",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides comprehensive cloud solutions and managed services including AWS, Azure, GCP multi-cloud architecture, cloud infrastructure management, and 24x7 cloud support in Chennai.",
    "serviceType": "Cloud Solutions and Managed Services",
    "areaServed": "Chennai, Tamil Nadu, India, Global",
    "sameAs": [
      "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false",
      "http://www.youtube.com/@HADSTechovations",
      "https://twitter.com/HADSTech"
    ]
  };

  return (
    <>
      <Helmet>
        {/* SEO Title */}
        <title>Cloud Solutions & Managed Services Chennai | AWS Azure GCP Multi-Cloud | HADS Technovations LLP</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Leading cloud solutions and managed services in Chennai. HADS provides AWS, Azure, GCP multi-cloud architecture, 24x7 cloud support, infrastructure management, containerization, and serverless solutions for businesses."
        />

        {/* Meta Keywords - Top 10 focused keywords */}
        <meta
          name="keywords"
          content="cloud solutions Chennai, AWS cloud services Chennai, Azure cloud services Chennai, multi-cloud architecture Chennai, cloud infrastructure management Chennai, 24x7 cloud support Chennai, cloud migration Chennai, serverless architecture Chennai, containerization services Chennai, cloud managed services Tamil Nadu"
        />

        {/* Robots & Crawlers */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Business Info */}
        <meta name="author" content="HADS Technovations LLP" />
        <meta name="reply-to" content="info@hadstechnovations.com" />
        <meta name="copyright" content="HADS Technovations LLP" />
        <meta name="web_author" content="HADS Technovations LLP" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="classification" content="Cloud Services, AWS Consulting, Cloud Migration, IT Services" />
        <meta name="language" content="en" />
        <meta name="audience" content="Business, Enterprise, Developers, IT Professionals" />
        <meta name="coverage" content="India, Chennai, Tamil Nadu, APAC, Worldwide" />
        <meta name="category" content="Cloud Services, AWS Solutions, IT Consulting, DevOps, Digital Transformation" />
        <meta
          name="subject"
          content="Best Cloud Solutions Chennai | AWS Azure GCP Multi-Cloud Services | Premier Cloud Infrastructure Management"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.hadstechnovations.com/services/cloud-solutions" />

        {/* Open Graph */}
        <meta property="og:title" content="Cloud Solutions & Managed Services Chennai | AWS Azure GCP Multi-Cloud | HADS" />
        <meta property="og:description" content="Leading cloud solutions and managed services in Chennai. HADS provides AWS, Azure, GCP multi-cloud architecture, 24x7 cloud support, and infrastructure management for businesses." />
        <meta property="og:image" content="https://www.hadstechnovations.com/logo.png" />
        <meta property="og:url" content="https://www.hadstechnovations.com/services/cloud-solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HADS Technovations LLP - Cloud Solutions Chennai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Cloud Solutions Chennai | AWS Azure GCP Multi-Cloud | HADS" />
        <meta property="twitter:description" content="Leading cloud solutions and managed services in Chennai. AWS, Azure, GCP multi-cloud architecture and 24x7 support." />
        <meta property="twitter:image" content="https://www.hadstechnovations.com/logo.png" />
        <meta property="twitter:site" content="@HADSTech" />
        <meta property="twitter:creator" content="@HADSTech" />

        {/* Verification */}
        <meta name="google-site-verification" content="HvXbYac_X5O_bqNo36f6BWuXxFuQle4Imp1afCr-VBo" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <ContainerizationPage />
    </>
  );
}
