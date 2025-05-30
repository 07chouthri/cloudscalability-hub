
import ContainerizationPage from '@/pages/ContainerizationPage';
import SEOHead from '@/components/SEOHead';

export default function CloudSolutions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Solutions",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides comprehensive cloud solutions to help businesses leverage the power of cloud computing.",
    "serviceType": "Cloud Solutions and Services",
    "areaServed": "Global",
    "sameAs": [
      "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false",
      "http://www.youtube.com/@HADSTechovations",
      "https://twitter.com/HADSTech"
    ]
  };

  // Social media URLs
  const linkedinUrl = "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false";
  const youtubeUrl = "http://www.youtube.com/@HADSTechovations";
  const twitterUrl = "https://twitter.com/HADSTech";

  // Enhanced keywords for better SEO
  const enhancedKeywords = "cloud solutions, AWS, Azure, GCP, multi-cloud, hybrid cloud, cloud infrastructure, cloud architecture, cloud optimization, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, aws cloud services list, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage, aws cloud infrastructure services, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud services security, aws cloud storage security, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, economic benefit to a client using aws cloud services";

  return (
    <>
      <SEOHead 
        title="Cloud Solutions | HADS Technovations LLP"
        description="Transform your business with our comprehensive cloud solutions. HADS helps organizations implement, optimize, and manage cloud infrastructure."
        keywords={enhancedKeywords}
        ogUrl="/services/cloud-solutions"
        schema={schema}
        linkedinUrl={linkedinUrl}
        youtubeUrl={youtubeUrl}
        twitterUrl={twitterUrl}
      />
      <ContainerizationPage />
    </>
  );
}
