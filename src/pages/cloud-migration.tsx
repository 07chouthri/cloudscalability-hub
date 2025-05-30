
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
  const enhancedKeywords = "cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud based services, aws cloud backup services, basic aws cloud services, aws cloud hosting benefits, cloud based solutions aws, aws cloud services cost, aws cloud consulting services, aws cloud service free, aws cloud service fee, aws cloud storage for small business, aws cloud governance services, amazon cloud gaming service, amazon web services aws healthlake, amazon web services hybrid cloud, aws cloud infrastructure services, amazon cloud storage india, aws cloud storage pricing india, aws cloud provider kubernetes, amazon cloud storage kindle, aws cloud service providers, aws cloud provider load balancer controller, aws storage cloud native options, aws cloud native storage, aws cloud service offerings, aws cloud storage options, aws cloud computing overview, aws cloud storage pricing, aws cloud quantum computing, aws cloud storage rates, aws cloud services security, aws cloud storage security, aws cloud provider terraform, amazon cloud services vs microsoft azure, aws cloud computing vs data analytics, amazon cloud storage vs google drive, amazon cloud storage vs dropbox, aws cloud website hosting, aws cloud service providers chennai, aws cloud consulting chennai, aws web hosting pricing, cost of aws cloud services, amazon cloud services pricing, aws cloud server pricing, amazon web services billing & cost management dashboard, amazon cloud storage pricing for business, aws cloud service price, azure cloud services pricing india, aws web hosting pricing india, amazon web services pricing model, aws cloud pricing model, aws simple queue service pricing, amazon cloud storage pricing per tb, amazon web services cost per month, amazon web services ec2 pricing, amazon web services cost estimator, amazon web services gpu pricing, aws vs google cloud pricing, aws cloud security pricing, amazon web services vps pricing, amazon web services vm pricing, is aws cloud free, virtual machines migration in cloud computing, how does aws cloud work, aws service provider in chennai, AWS cloud consulting services india, aws cloud consultant, aws cloud india, azure cloud consulting services, aws cloud migration services in india, aws cloud services cost, economic benefit to a client using aws cloud services, aws cloud services overview, managed aws cloud services, cost of aws cloud services, consolidated billing for aws cloud services, aws cloud service provides recommendations, storage services offered by the aws cloud, aws services or features from the aws cloud global infrastructure, aws services can be used to connect the aws cloud and on-premises resources, services offer serverless services in the aws cloud, adopt cloud services covering aws and azure, fully managed nosql database service, host virtual servers in the aws cloud, optimize performance for aws services, aws managed services, aws managed services list, what is aws managed services, aws managed services provider, aws managed services partners, aws managed services pricing, list of aws managed services, amazon aws managed services, aws managed services providers, aws managed services (ams), aws managed services (ams) integration app, aws managed services partner, aws managed services india, benefits of aws managed services, authentication services, managed database services, benefit of using aws managed services, aws service providers in india, aws service providers in india associative, aws service providers associative india, aws service providers automated backups of data, top aws service providers, managed aws service providers, how does aws compare to other cloud service providers, aws infrastructure services list, offering it infrastructure services as web services, aws services can be used as infrastructure automation tools, aws serverless infrastructure, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, aws cost optimization recommendations, providing recommended actions on cost optimization, best cloud services providers in chennai, top cloud service providers, managed cloud service providers, best cloud service providers, top 10 cloud service providers, cloud service providers list, private cloud service providers, hyperscale cloud service providers, public cloud service providers, biggest cloud service providers, cloud service providers for small business, major cloud service providers, list of cloud service providers, enterprise cloud service providers, medical cloud service providers, leading cloud service providers, top 10 cloud service providers in world";

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
