
import AppDevelopmentPage from '@/pages/AppDevelopmentPage';
import SEOHead from '@/components/SEOHead';

export default function AppDevelopment() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS offers custom application development services including mobile app development, web application development, cloud-native applications, and digital transformation solutions in Chennai.",
    "serviceType": "Application Development and Digital Solutions",
    "areaServed": "Chennai, Tamil Nadu, India, Global",
    "sameAs": [
      "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false",
      "http://www.youtube.com/@HADSTechovations",
      "https://twitter.com/HADSTech"
    ]
  };

  const linkedinUrl = "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false";
  const youtubeUrl = "http://www.youtube.com/@HADSTechovations";
  const twitterUrl = "https://twitter.com/HADSTech";

  const enhancedKeywords = "app development Chennai, mobile app development Chennai, web application development Chennai, custom software development Chennai, digital transformation Chennai, cloud native applications Chennai, react native development Chennai, flutter app development Chennai, ios app development Chennai, android app development Chennai, web app development Chennai, progressive web apps Chennai, ecommerce app development Chennai, business app development Chennai, enterprise app development Chennai, app modernization Chennai, legacy app migration Chennai, api development Chennai, microservices development Chennai, serverless applications Chennai, full stack development Chennai, frontend development Chennai, backend development Chennai, database development Chennai, ui ux design Chennai, software consulting Chennai, agile development Chennai, devops integration Chennai, cloud applications Chennai, saas development Chennai, aws cloud applications, aws cloud native applications, aws app development, serverless applications, aws cloud application development, cloud-based applications, aws cloud provider, cloud-based solutions, application development services, software development company Chennai, app development company Chennai, mobile app development company Chennai, web development company Chennai, software solutions Chennai, digital solutions Chennai, technology consulting Chennai, it solutions Chennai";

  return (
    <>
      <SEOHead 
        title="App Development Services Chennai | Mobile & Web Apps | HADS Technovations LLP"
        description="Custom application development services in Chennai. HADS develops mobile apps, web applications, cloud-native solutions, and provides digital transformation services for businesses."
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
