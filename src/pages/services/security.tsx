
import SecurityCompliancePage from '@/pages/SecurityCompliancePage';
import SEOHead from '@/components/SEOHead';

export default function Security() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security & Compliance Services",
    "provider": {
      "@type": "Organization",
      "name": "HADS Technovations LLP",
      "url": "https://www.hadstechnovations.com"
    },
    "description": "HADS provides comprehensive cybersecurity and compliance solutions including cloud security, data protection, GDPR compliance, security audits, and threat monitoring services in Chennai.",
    "serviceType": "Cybersecurity and Compliance Services",
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

  const enhancedKeywords = "cybersecurity Chennai, cloud security Chennai, data protection Chennai, security compliance Chennai, GDPR compliance Chennai, HIPAA compliance Chennai, security audit Chennai, vulnerability assessment Chennai, penetration testing Chennai, threat monitoring Chennai, incident response Chennai, security consulting Chennai, network security Chennai, endpoint security Chennai, email security Chennai, web application security Chennai, database security Chennai, backup security Chennai, disaster recovery Chennai, security training Chennai, security awareness Chennai, risk assessment Chennai, security governance Chennai, security policies Chennai, iso 27001 Chennai, sox compliance Chennai, pci dss compliance Chennai, security operations center Chennai, managed security services Chennai, aws cloud services security, aws cloud storage security, aws security services, cloud security services, aws security best practices, aws security compliance, aws security solutions, aws managed security, aws security assessment, cloud security solutions, cloud security providers, cloud security services provider, enterprise security solutions, information security services, cybersecurity solutions provider, managed cybersecurity services, cybersecurity consulting services, network security solutions, data security solutions, application security solutions";

  return (
    <>
      <SEOHead 
        title="Cybersecurity & Compliance Services Chennai | Cloud Security | HADS Technovations LLP"
        description="Comprehensive cybersecurity and compliance solutions in Chennai. HADS provides cloud security, data protection, GDPR/HIPAA compliance, security audits, threat monitoring, and incident response services."
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
