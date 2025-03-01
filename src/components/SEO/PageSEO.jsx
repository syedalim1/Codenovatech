import { Helmet } from 'react-helmet-async';

export default function PageSEO({ 
  title, 
  description, 
  keywords,
  canonicalUrl = "https://codenovatech.in",
  ogType = "website",
  ogImage = "/logo.png",
  twitterImage = "/logo.png"
}) {
  // Base title - only add company name if not already included
  const pageTitle = title.includes("CODENOVATECH") ? title : `${title} | CODENOVATECH - Coimbatore AI & Software Development Company`;
  
  // Default keywords related to the business
  const defaultKeywords = "Codenovatech, Coimbatore IT Company, Startup Company, AI Company, Product Base Company, Coimbatore Company, AI solutions, software development, artificial intelligence, machine learning, generative AI, computer vision, NLP, web development, mobile app development, cloud solutions, digital transformation, IT consulting, tech innovation, business automation";
  
  // Combine custom keywords with default ones
  const fullKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="CODENOVATECH" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="CodeNova Tech" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="11.0168;76.9558" />
      <meta name="ICBM" content="11.0168, 76.9558" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="CODENOVATECH" />
    </Helmet>
  );
}
