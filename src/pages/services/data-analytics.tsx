
import FinOpsPage from '@/pages/FinOpsPage';
import SEOHead from '@/components/SEOHead';

export default function DataAnalytics() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Analytics",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides advanced data analytics solutions to derive actionable insights from your business data.",
    "serviceType": "Data Analytics and Business Intelligence",
    "areaServed": "Global",
    "sameAs": [
      "https://www.linkedin.com/company/hads-technovations-llp",
      "http://www.youtube.com/@HADSTechovations",
      "https://twitter.com/HADSTech"
    ]
  };

  // Social media URLs
  const linkedinUrl = "https://www.linkedin.com/company/hads-technovations-llp";
  const youtubeUrl = "http://www.youtube.com/@HADSTechovations";
  const twitterUrl = "https://twitter.com/HADSTech";

  return (
    <>
      <SEOHead 
        title="Data Analytics | HADS Technovations LLP"
        description="Leverage our data analytics expertise to transform your raw data into actionable insights. HADS helps businesses make data-driven decisions with advanced analytics solutions."
        keywords="data analytics, business intelligence, HADS data solutions, big data, data visualization, predictive analytics, data warehousing, business insights, data-driven decisions"
        ogUrl="/services/data-analytics"
        schema={schema}
        linkedinUrl={linkedinUrl}
        youtubeUrl={youtubeUrl}
        twitterUrl={twitterUrl}
      />
      <FinOpsPage />
    </>
  );
}
