
import FinOpsPage from '@/pages/FinOpsPage';
import SEOHead from '@/components/SEOHead';

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

  const linkedinUrl = "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106360221&keywords=hads%20technovations%20llp&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a54d4b81-3f2b-4e95-b74f-107c37babb8c&sid=zfS&spellCorrectionEnabled=false";
  const youtubeUrl = "http://www.youtube.com/@HADSTechovations";
  const twitterUrl = "https://twitter.com/HADSTech";

  const enhancedKeywords = "finops Chennai, cloud cost optimization Chennai, aws cost optimization Chennai, azure cost optimization Chennai, cloud financial management Chennai, cloud cost management Chennai, cloud budget optimization Chennai, cloud spend optimization Chennai, cloud cost reduction Chennai, cloud cost analysis Chennai, cloud cost monitoring Chennai, cloud cost governance Chennai, cloud financial operations Chennai, cloud economics Chennai, cloud roi optimization Chennai, reserved instances optimization Chennai, spot instances optimization Chennai, rightsizing recommendations Chennai, cloud cost tools Chennai, cloud billing optimization Chennai, cloud cost reporting Chennai, cloud cost analytics Chennai, cloud cost strategy Chennai, cloud cost consulting Chennai, multi-cloud cost optimization Chennai, hybrid cloud cost management Chennai, cloud cost automation Chennai, cloud cost visibility Chennai, cloud cost control Chennai, cloud cost efficiency Chennai, cloud waste reduction Chennai, cloud resource optimization Chennai, cloud capacity planning Chennai, cloud performance optimization Chennai, cloud scaling optimization Chennai, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, cloud cost optimization services, cost optimization strategies, budget management cloud, rightsizing recommendations, reserved instances planning, spot instances optimization, aws cost optimization, economic benefit to a client using aws cloud services, aws cost optimization best practices, cloud cost optimization tools, cloud cost optimization best practices";

  return (
    <>
      <SEOHead 
        title="FinOps & Cloud Cost Optimization Chennai | AWS Cost Management | HADS Technovations LLP"
        description="Advanced FinOps and cloud cost optimization services in Chennai. HADS provides cloud cost management, budget optimization, resource rightsizing, and financial governance for AWS, Azure, and GCP."
        keywords={enhancedKeywords}
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
