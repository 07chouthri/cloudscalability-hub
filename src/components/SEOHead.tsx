
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
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
  title = "Managed Cloud Services Chennai | Best Cloud Migration Company in Chennai | AWS Cloud Services India | FinOps & DevOps Experts | Top 10 Cloud Migration Companies in India | Cloud Migration Services Chennai | Best AWS Consulting Partner in India | Cybersecurity in Chennai | Cloud Migration & Cost Optimization in India",
  description = "HADS Technovations LLP – #1 Best Cloud Migration Company in Chennai, Top AWS Cloud Services India. Leading FinOps & DevOps Experts among Top 10 Cloud Migration Companies in India. Premier Cloud Migration Services Chennai & Best AWS Consulting Partner in India.",
  keywords = "HADS Technovations LLP, cloud migration services Chennai, AWS partner Chennai, managed cloud services Tamil Nadu, DevOps automation Chennai, cloud consulting India, FinOps cost optimization, cybersecurity solutions Chennai, cloud infrastructure management, 24x7 cloud support Chennai, kubernetes services India, docker containerization, CI CD pipeline automation, cloud security assessment Chennai, disaster recovery planning, serverless architecture AWS, microservices development, infrastructure as code, configuration management, monitoring solutions, performance optimization, scalability consulting, high availability design, load balancing AWS, auto scaling configuration, blue green deployment, cloud economics consulting, cost optimization strategies, budget management cloud, rightsizing recommendations, reserved instances planning, spot instances optimization, cloud training programs Chennai, AWS certification training India, DevOps bootcamp Tamil Nadu, kubernetes certification, terraform training, ansible automation, jenkins CI CD, digital transformation Chennai, business process automation, API development India, mobile app development Chennai, web application development",
  ogImage = "https://www.hadstechnovations.com/logo.png",
  ogUrl,
  schema,
  linkedinUrl,
  youtubeUrl,
  twitterUrl,
  canonical = "https://www.hadstechnovations.com/",
  ogType = "website",
  gaMeasurementId,
  author = "HADS Technovations LLP",
  language = "en"
}: SEOHeadProps) => {
  const siteUrl = 'https://www.hadstechnovations.com';
  const fullUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  const canonicalUrl = canonical || fullUrl;
  
  return (
    <Helmet>
      {/* ✅ SEO Title */}
      <title>{title}</title>

      {/* ✅ Meta Description */}
      <meta name="description" content={description} />

      {/* ✅ Meta Keywords */}
      <meta name="keywords" content={keywords} />

      {/* ✅ Robots & Crawlers */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* ✅ Business Info */}
      <meta name="author" content={author} />
      <meta name="reply-to" content="info@hadstechnovations.com" />
      <meta name="copyright" content="HADS Technovations LLP" />
      <meta name="web_author" content="HADS Technovations LLP" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="classification" content="Cloud Services, AWS Consulting, Cloud Migration, IT Services" />
      <meta name="language" content={language} />
      <meta name="audience" content="Business, Enterprise, Developers, IT Professionals" />
      <meta name="coverage" content="India, Chennai, Tamil Nadu, APAC, Worldwide" />
      <meta name="category" content="Cloud Services, AWS Solutions, IT Consulting, DevOps, Digital Transformation" />
      <meta name="subject" content="Best Cloud Migration Company Chennai | #1 AWS Cloud Services India | Top FinOps DevOps Experts | Leading Cloud Migration Services Chennai | Premier AWS Consulting Partner India" />

      {/* ✅ Local SEO */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Chennai, Tamil Nadu" />
      <meta name="geo.position" content="13.0827;80.2707" />
      <meta name="ICBM" content="13.0827, 80.2707" />

      {/* ✅ Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ✅ Open Graph */}
      <meta property="og:title" content="Best Cloud Migration Company in Chennai | #1 AWS Cloud Services India | HADS Technovations LLP" />
      <meta property="og:description" content="HADS Technovations LLP - Best Cloud Migration Company in Chennai & Top AWS Cloud Services India. Leading FinOps & DevOps Experts among Top 10 Cloud Migration Companies. Premier AWS Consulting Partner." />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="HADS Technovations LLP - Best Cloud Migration Company Chennai" />
      <meta property="og:locale" content="en_US" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:region" content="Tamil Nadu" />
      <meta property="business:contact_data:locality" content="Chennai" />

      {/* ✅ Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Best Cloud Migration Company Chennai | #1 AWS Services India | HADS LLP" />
      <meta property="twitter:description" content="HADS - Best Cloud Migration Company in Chennai, Top AWS Cloud Services India, Leading FinOps & DevOps Experts, Premier AWS Consulting Partner India." />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@HADSTech" />
      <meta property="twitter:creator" content="@HADSTech" />

      {/* ✅ Verification */}
      <meta name="google-site-verification" content="HvXbYac_X5O_bqNo36f6BWuXxFuQle4Imp1afCr-VBo" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />

      {/* ✅ Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* ✅ Font Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ✅ Video Preload */}
      <link rel="preload" href="/src/video/Home Page Desktop.mp4" as="video" type="video/mp4" media="(min-width: 768px)" />
      <link rel="preload" href="/src/video/Home Page Mobile.mp4" as="video" type="video/mp4" media="(max-width: 767px)" />

      {/* ✅ Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Google Analytics Script via Helmet */}
      {gaMeasurementId && gaMeasurementId !== "G-XXXXXXXXXX" && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              send_page_view: true,
              anonymize_ip: true,
              transport_type: 'beacon'
            });
          `}</script>
        </>
      )}
    </Helmet>
  );
};

export default SEOHead;
