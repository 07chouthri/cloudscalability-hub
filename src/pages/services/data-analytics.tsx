
import FinOpsPage from '@/pages/FinOpsPage';
import { Helmet } from 'react-helmet-async';

export default function DataAnalytics() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FinOps & Cloud Cost Optimization",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides advanced FinOps and cloud cost optimization solutions including cost management, budget optimization, resource rightsizing, and cloud financial governance in Chennai.",
    "serviceType": "FinOps and Cloud Cost Optimization",
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
        <title>FinOps & Cloud Cost Optimization Chennai | AWS Cost Management | HADS Technovations LLP</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Advanced FinOps and cloud cost optimization services in Chennai. HADS provides cloud cost management, budget optimization, resource rightsizing, AWS cost optimization, and financial governance for businesses."
        />

        {/* Meta Keywords - Top 10 focused keywords */}
        <meta
          name="keywords"
          content="finops Chennai, cloud cost optimization Chennai, AWS cost optimization Chennai, cloud financial management Chennai, cloud budget optimization Chennai, rightsizing recommendations Chennai, reserved instances optimization Chennai, cloud cost analysis Chennai, cloud cost consulting Chennai, cloud economics Chennai"
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
        <meta name="classification" content="FinOps, Cloud Cost Optimization, Financial Management, Cloud Economics" />
        <meta name="language" content="en" />
        <meta name="audience" content="CFOs, Cloud Architects, IT Managers, Finance Teams" />
        <meta name="coverage" content="India, Chennai, Tamil Nadu, APAC, Worldwide" />
        <meta name="category" content="FinOps, Cloud Cost Management, Financial Operations, Cloud Economics" />
        <meta
          name="subject"
          content="Best FinOps Chennai | Cloud Cost Optimization AWS | Premier Cloud Financial Management"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.hadstechnovations.com/services/data-analytics" />

        {/* Open Graph */}
        <meta property="og:title" content="FinOps & Cloud Cost Optimization Chennai | AWS Cost Management | HADS" />
        <meta property="og:description" content="Advanced FinOps and cloud cost optimization services in Chennai. Cloud cost management, budget optimization, and financial governance." />
        <meta property="og:image" content="https://www.hadstechnovations.com/logo.png" />
        <meta property="og:url" content="https://www.hadstechnovations.com/services/data-analytics" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HADS Technovations LLP - FinOps Chennai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="FinOps Chennai | Cloud Cost Optimization AWS | HADS" />
        <meta property="twitter:description" content="Advanced FinOps and cloud cost optimization services in Chennai. Budget optimization and financial governance." />
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
      <FinOpsPage />
    </>
  );
}
