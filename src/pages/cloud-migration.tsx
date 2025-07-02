
import CloudMigrationPage from './CloudMigrationPage';
import SEOHead from '@/components/SEOHead';


export default function CloudMigration() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Migration Services",
    "description": "HADS provides seamless cloud migration services with expert consulting to help businesses transform their digital infrastructure.",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com/"
    },
    "serviceType": "Cloud Migration",
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
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
  const enhancedKeywords = "cloud migration, aws, aws console, amazon aws, cloud infra";

  return (
    <>
      <SEOHead 
        title="HADS Technovations LLP | Cloud Migration and Consulting"
        description="Seamlessly migrate your business to the cloud with HADS expert consulting. Our comprehensive cloud migration services ensure minimal disruption with maximum business value."
        keywords={enhancedKeywords}
        ogUrl="/cloud-migration"
        schema={schema}
        linkedinUrl={linkedinUrl}
        youtubeUrl={youtubeUrl}
        twitterUrl={twitterUrl}
      />
      <CloudMigrationPage />
    </>
  );
}
