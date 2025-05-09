
import React from 'react';
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
    }
  };

  return (
    <>
      <SEOHead 
        title="HADS Technovations LLP | Cloud Migration and Consulting  "
        description="Seamlessly migrate your business to the cloud with HADS expert consulting. Our comprehensive cloud migration services ensure minimal disruption with maximum business value."
        keywords="cloud migration, cloud consulting, AWS migration, Azure migration, GCP migration, cloud transformation, hybrid cloud"
        ogUrl="/cloud-migration"
        schema={schema}
      />
      <CloudMigrationPage />
    </>
  );
}
