
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
  canonical?: string;
  ogType?: string;
  gaMeasurementId?: string;
  author?: string;
  language?: string;
}

const SEOHead = ({
  title,
  description,
  keywords = 'cloud migration, aws, aws console, amazon aws, cloud infra, aws cloud, aws cloud computing, cloud services, types of cloud services, amazon cloud services, cloud services in cloud computing, cloud services provider, aws cloud services, AWS Migration services, virtual machines migration in cloud computing, onpremises, bigdata, AWS cloud service providers, aws cloud services list, aws cloud services pricing, aws cloud services overview, aws cloud computing advantages, aws cloud ai services, aws cloud services benefits, aws cloud consulting services, aws service providers in india, aws global infrastructure, best aws consulting companies, best aws consulting services, aws cost optimization, aws cost optimization services, best cloud services providers in chennai, top cloud service providers, managed cloud service providers',
  ogImage = 'https://www.hadstechnovations.com/logo.png',
  ogUrl,
  schema,
  linkedinUrl,
  youtubeUrl,
  twitterUrl,
  canonical,
  ogType = 'website',
  gaMeasurementId,
  author = 'HADS Technovations LLP',
  language = 'en'
}: SEOHeadProps) => {
  const siteUrl = 'https://www.hadstechnovations.com';
  const fullUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  const canonicalUrl = canonical || fullUrl;
  
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
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="classification" content="Cloud Services, AWS Consulting, Cloud Migration" />
      <meta name="subject" content="Cloud computing, AWS, Cloud Migration, DevOps, FinOps" />
      <meta name="copyright" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="HADS Technovations LLP" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@HADSTech" />
      
      {/* Social Media URLs as meta tags */}
      {linkedinUrl && <meta property="og:see_also" content={linkedinUrl} />}
      {youtubeUrl && <meta property="og:see_also" content={youtubeUrl} />}
      {twitterUrl && <meta property="og:see_also" content={twitterUrl} />}
      
      {/* Verification */}
      <meta name="google-site-verification" content="HvXbYac_X5O_bqNo36f6BWuXxFuQle4Imp1afCr-VBo" />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Google Analytics Script via Helmet */}
      {gaMeasurementId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}</script>
        </>
      )}
    </Helmet>
  );
};

export default SEOHead;
