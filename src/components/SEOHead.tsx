import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: Record<string, any>;
}

const SEOHead = ({
  title,
  description,
  keywords = 'HADS, HADS Technovations LLP, HADS Cloud Solutions, HADS DevOps Services, HADS Web Development, HADS App Development, Web Application Development HADS, HADS Cloud Consulting, hads techonvations llp, hads tech, hads.tech, HADS India, AWS Consultant India, HADS Software Company, Cloud Managed Services, Application Development, Custom App Development, Mobile App Development, Website Development India, DevOps Company India, hadstech, hads techno LLP, HADS Security, HADS FinOps, HADS Digital Solutions,cloud solutions, cloud migration, DevOps, FinOps, cloud security, cloud management',
  ogImage = 'https://www.hadstechnovations.com/logo.png',
  ogUrl,
  schema,
}: SEOHeadProps) => {
  const siteUrl = 'https://www.hadstechnovations.com';
  const fullUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
