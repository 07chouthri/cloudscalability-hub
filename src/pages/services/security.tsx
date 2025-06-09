
import SecurityCompliancePage from '@/pages/SecurityCompliancePage';
import { Helmet } from 'react-helmet-async';

export default function Security() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security & Compliance Services",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides comprehensive cybersecurity and compliance solutions including cloud security, data protection, GDPR compliance, security audits, and threat monitoring services in Chennai.",
    "serviceType": "Cybersecurity and Compliance Services",
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
        <title>Cybersecurity & Compliance Services Chennai | Cloud Security GDPR | HADS Technovations LLP</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Comprehensive cybersecurity and compliance services in Chennai. HADS provides cloud security, data protection, GDPR/HIPAA compliance, security audits, penetration testing, and threat monitoring for businesses."
        />

        {/* Meta Keywords - Top 10 focused keywords */}
        <meta
          name="keywords"
          content="cybersecurity Chennai, cloud security Chennai, GDPR compliance Chennai, security audit Chennai, penetration testing Chennai, threat monitoring Chennai, incident response Chennai, security consulting Chennai, network security Chennai, data protection Chennai"
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
        <meta name="classification" content="Cybersecurity, Cloud Security, Compliance, IT Services" />
        <meta name="language" content="en" />
        <meta name="audience" content="Business, Enterprise, Security Officers, IT Professionals" />
        <meta name="coverage" content="India, Chennai, Tamil Nadu, APAC, Worldwide" />
        <meta name="category" content="Cybersecurity, Cloud Security, GDPR Compliance, Security Consulting" />
        <meta
          name="subject"
          content="Best Cybersecurity Services Chennai | Cloud Security GDPR Compliance | Premier Security Consulting"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.hadstechnovations.com/services/security" />

        {/* Open Graph */}
        <meta property="og:title" content="Cybersecurity & Compliance Services Chennai | Cloud Security GDPR | HADS" />
        <meta property="og:description" content="Comprehensive cybersecurity and compliance services in Chennai. Cloud security, GDPR compliance, security audits, and threat monitoring for businesses." />
        <meta property="og:image" content="https://www.hadstechnovations.com/logo.png" />
        <meta property="og:url" content="https://www.hadstechnovations.com/services/security" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HADS Technovations LLP - Cybersecurity Chennai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Cybersecurity Chennai | Cloud Security GDPR | HADS" />
        <meta property="twitter:description" content="Comprehensive cybersecurity services in Chennai. Cloud security, GDPR compliance, and security consulting." />
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
      <SecurityCompliancePage />
    </>
  );
}
