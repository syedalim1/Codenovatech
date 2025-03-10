import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function PageSEO({
  title,
  description,
  keywords,
  canonicalUrl = "https://codenovatech.in",
  ogType = "website",
  ogImage = "/logo.png",
  twitterImage = "/logo.png",
}) {
  // Base title - only add company name if not already included
  const pageTitle = title.includes("CODENOVATECH")
    ? title
    : `${title} | CODENOVATECH - Coimbatore AI & Software Development Company`;

  // Default keywords related to the business with all name variations for better SEO
  const defaultKeywords =
    "Codenovatech, Code Novatech, Codenova tech, CodeNova Technology, CodeNova Tech, Coimbatore IT Company, Startup Company, AI Company, Product Base Company, Coimbatore Company, AI solutions, software development, artificial intelligence, machine learning, generative AI, computer vision, NLP, web development, mobile app development, cloud solutions, digital transformation, IT consulting, tech innovation, business automation, best AI company Coimbatore, top software development company Tamil Nadu, AI development Coimbatore, AI consulting Coimbatore, AI services Tamil Nadu, AI-powered solutions, deep learning, neural networks, predictive analytics, data science Coimbatore, AI chatbots, AI automation, enterprise AI solutions, AI integration services, custom AI development, AI for business, AI research Coimbatore, AI startups Coimbatore, CodeNovaTech AI expertise, AI training models, AI algorithms, AI infrastructure, AI deployment, AI ethics, responsible AI, AI strategy consulting, AI ROI, AI transformation, AI innovation hub Coimbatore, AI talent Coimbatore, AI education, AI workshops Coimbatore, AI project management, AI quality assurance, AI testing services, AI maintenance, AI support Coimbatore, CodeNovaTech AI portfolio, AI case studies, AI success stories";

  // Combine custom keywords with default ones
  const fullKeywords = keywords
    ? `${keywords}, ${defaultKeywords}`
    : defaultKeywords;

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
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
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
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="CODENOVATECH" />
      
      {/* Additional alternate name tags for better SEO */}
      <meta name="alternate-name" content="Code Novatech" />
      <meta name="alternate-name" content="Codenova tech" />
      <meta name="alternate-name" content="CodeNova Technology" />
      <meta name="alternate-name" content="CodeNova Tech" />
      
      {/* Location-specific meta tags */}
      <meta name="geo.position" content="11.0168;76.9558" />
      <meta name="ICBM" content="11.0168, 76.9558" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore, Tamil Nadu, India" />
      
      {/* Additional business category tags */}
      <meta name="business:contact_data:locality" content="Coimbatore" />
      <meta name="business:contact_data:region" content="Tamil Nadu" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:industry" content="Artificial Intelligence, Software Development" />
      
      {/* Schema.org structured data for local business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CODENOVATECH",
            "alternateName": ["Code Novatech", "Codenova tech", "CodeNova Technology", "CodeNova Tech"],
            "description": "${description}",
            "url": "${canonicalUrl}",
            "logo": "${ogImage}",
            "image": "${ogImage}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.0168",
              "longitude": "76.9558"
            },
            "sameAs": [
              "https://www.facebook.com/codenovatech",
              "https://www.linkedin.com/company/codenovatech",
              "https://twitter.com/codenovatech"
            ],
            "priceRange": "$$",
            "telephone": "+91-XXXXXXXXXX",
            "openingHours": "Mo-Fr 09:00-18:00",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "11.0168",
                "longitude": "76.9558"
              },
              "geoRadius": "50000"
            }
          }
        `}
      </script>
    </Helmet>
  );
}

// PropTypes validation
PageSEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
};
