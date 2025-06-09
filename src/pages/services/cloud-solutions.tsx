
import ContainerizationPage from '@/pages/ContainerizationPage';
import SEOHead from '@/components/SEOHead';

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

  const linkedinUrl = "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false";
  const youtubeUrl = "http://www.youtube.com/@HADSTechovations";
  const twitterUrl = "https://twitter.com/HADSTech";

  const enhancedKeywords = "cloud solutions Chennai, managed cloud services Chennai, AWS cloud solutions Chennai, Azure cloud services Chennai, GCP cloud consulting Chennai, multi-cloud architecture Chennai, hybrid cloud solutions Chennai, cloud infrastructure management Chennai, 24x7 cloud support Chennai, cloud optimization Chennai, cloud migration Chennai, cloud consulting Chennai, cloud managed services Tamil Nadu, cloud service provider Chennai, enterprise cloud solutions Chennai, cloud backup services Chennai, cloud disaster recovery Chennai, cloud security solutions Chennai, cloud monitoring services Chennai, cloud automation Chennai, serverless architecture Chennai, containerization services Chennai, kubernetes services Chennai, docker services Chennai, cloud DevOps Chennai, cloud cost optimization Chennai, cloud performance tuning Chennai, cloud scalability Chennai, cloud governance Chennai, cloud compliance Chennai, aws cloud services, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, aws cloud services list, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage, aws cloud infrastructure services, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud services security, aws cloud storage security, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, economic benefit to a client using aws cloud services";

  return (
    <>
      <SEOHead 
        title="Cloud Solutions & Managed Services Chennai | AWS Azure GCP | HADS Technovations LLP"
        description="Comprehensive cloud solutions and managed services in Chennai. HADS provides AWS, Azure, GCP multi-cloud architecture, 24x7 cloud support, infrastructure management, and cloud optimization services."
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
