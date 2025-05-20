
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: Record<string, any>;
  linkedinUrl?: string;
  youtubeUrl?: string;
  twitterUrl?: string;
}

const SEOHead = ({
  title,
  description,
  keywords = 'HADS, HADS Technovations LLP, HADS Cloud Solutions, HADS DevOps Services, HADS Web Development, HADS App Development, Web Application Development HADS, HADS Cloud Consulting, hads techonvations llp, hads tech, hads.tech, HADS India, AWS Consultant India, HADS Software Company, Cloud Managed Services, Application Development, Custom App Development, Mobile App Development, Website Development India, DevOps Company India, hadstech, hads techno LLP, HADS Security, HADS FinOps, HADS Digital Solutions,cloud solutions, cloud migration, DevOps, FinOps, cloud security, cloud management',
  ogImage = 'https://www.hadstechnovations.com/logo.png',
  ogUrl,
  schema,
  linkedinUrl,
  youtubeUrl,
  twitterUrl,
}: SEOHeadProps) => {
  const siteUrl = 'https://www.hadstechnovations.com';
  const fullUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  
  // Update schema with social media URLs if present
  if (schema && linkedinUrl) {
    if (schema.sameAs && Array.isArray(schema.sameAs)) {
      if (!schema.sameAs.includes(linkedinUrl)) {
        schema.sameAs.push(linkedinUrl);
      }
    } else {
      schema.sameAs = schema.sameAs ? [schema.sameAs, linkedinUrl] : [linkedinUrl];
    }
  }
  
  if (schema && youtubeUrl) {
    if (schema.sameAs && Array.isArray(schema.sameAs)) {
      if (!schema.sameAs.includes(youtubeUrl)) {
        schema.sameAs.push(youtubeUrl);
      }
    } else {
      schema.sameAs = schema.sameAs ? [schema.sameAs, youtubeUrl] : [youtubeUrl];
    }
  }
  
  if (schema && twitterUrl) {
    if (schema.sameAs && Array.isArray(schema.sameAs)) {
      if (!schema.sameAs.includes(twitterUrl)) {
        schema.sameAs.push(twitterUrl);
      }
    } else {
      schema.sameAs = schema.sameAs ? [schema.sameAs, twitterUrl] : [twitterUrl];
    }
  }
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="HADS Technovations LLP" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HADS Technovations LLP" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Social Media URLs as meta tags */}
      {linkedinUrl && <meta property="og:see_also" content={linkedinUrl} />}
      {youtubeUrl && <meta property="og:see_also" content={youtubeUrl} />}
      {twitterUrl && <meta property="og:see_also" content={twitterUrl} />}
      
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
