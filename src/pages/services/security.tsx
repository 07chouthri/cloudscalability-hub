
import SecurityCompliancePage from '@/pages/SecurityCompliancePage';
import SEOHead from '@/components/SEOHead';

export default function Security() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security & Compliance",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides comprehensive security solutions to protect your business data and ensure regulatory compliance.",
    "serviceType": "Cloud Security and Compliance",
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
  const enhancedKeywords = "cloud security, data protection, compliance, GDPR, HIPAA, cybersecurity, risk assessment, security audit, cloud compliance, aws cloud services security, aws cloud storage security, aws cloud security pricing, aws security services, cloud security services, aws security best practices, aws security compliance, aws security solutions, aws managed security, aws security assessment";

  return (
    <>
      <SEOHead 
        title="Security & Compliance | HADS Technovations LLP"
        description="Protect your business with our comprehensive security and compliance solutions. HADS helps organizations implement robust security measures and meet regulatory requirements."
        keywords={enhancedKeywords}
        ogUrl="/services/security"
        schema={schema}
        linkedinUrl={linkedinUrl}
        youtubeUrl={youtubeUrl}
        twitterUrl={twitterUrl}
      />
      <SecurityCompliancePage />
    </>
  );
}
