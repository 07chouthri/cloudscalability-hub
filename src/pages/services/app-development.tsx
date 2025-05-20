
import AppDevelopmentPage from '@/pages/AppDevelopmentPage';
import SEOHead from '@/components/SEOHead';

export default function AppDevelopment() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Development",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS offers custom application development services for businesses seeking digital transformation solutions.",
    "serviceType": "Application Development",
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

  // Enhanced keywords for better SEO
  const enhancedKeywords = "app development, custom application, mobile app, web app, software development, application modernization, HADS app solutions, aws cloud services, aws cloud, cloud services, cloud applications, cloud-based applications, aws cloud application development, serverless applications, aws app development, aws cloud native applications, aws cloud provider, cloud-based solutions";

  return (
    <>
      <SEOHead 
        title="App Development | HADS Technovations LLP"
        description="Build custom applications that drive your business forward with HADS Technovations' expert development team."
        keywords={enhancedKeywords}
        ogUrl="/services/app-development"
        schema={schema}
        linkedinUrl={linkedinUrl}
        youtubeUrl={youtubeUrl}
        twitterUrl={twitterUrl}
      />
      <AppDevelopmentPage />
    </>
  );
}
