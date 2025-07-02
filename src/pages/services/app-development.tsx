import AppDevelopmentPage from '@/pages/AppDevelopmentPage';
import { Helmet } from 'react-helmet-async';

export default function AppDevelopment() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Application Development Services",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides comprehensive application development services including mobile app development, web application development, custom software development, and progressive web apps in Chennai.",
    "serviceType": "Application Development Services",
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
        <title>App Development Services Chennai | Mobile Web Apps | HADS Technovations LLP</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Comprehensive application development services in Chennai. HADS provides mobile app development, web application development, custom software development, progressive web apps, and full-stack development for businesses."
        />

        {/* Meta Keywords - Top 5 focused keywords */}
        <meta
          name="keywords"
          content="app development Chennai, mobile app development Chennai, web application development Chennai, custom software development Chennai, progressive web apps Chennai"
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
        <meta name="classification" content="Application Development, Mobile Apps, Web Development, Software Development" />
        <meta name="language" content="en" />
        <meta name="audience" content="Business, Startups, Entrepreneurs, IT Professionals" />
        <meta name="coverage" content="India, Chennai, Tamil Nadu, APAC, Worldwide" />
        <meta name="category" content="App Development, Mobile Development, Web Development, Software Engineering" />
        <meta
          name="subject"
          content="Best App Development Chennai | Mobile Web Apps Development | Premier Software Development Services"
        />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.hadstechnovations.com/services/app-development" />

        {/* Open Graph */}
        <meta property="og:title" content="App Development Services Chennai | Mobile Web Apps | HADS" />
        <meta property="og:description" content="Comprehensive application development services in Chennai. Mobile app development, web applications, and custom software development for businesses." />
        <meta property="og:image" content="https://www.hadstechnovations.com/logo.png" />
        <meta property="og:url" content="https://www.hadstechnovations.com/services/app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HADS Technovations LLP - App Development Chennai" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="App Development Chennai | Mobile Web Apps | HADS" />
        <meta property="twitter:description" content="Comprehensive application development services in Chennai. Mobile and web app development." />
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
      <AppDevelopmentPage />
    </>
  );
}