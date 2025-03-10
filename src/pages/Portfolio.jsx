import { useEffect } from "react";
import PortfolioHeroSection from "../components/PortfolioPage/PortfolioHeroSection";
import Projects from "../components/PortfolioPage/Projects";
import PageSEO from "../components/SEO/PageSEO";
import { Helmet } from "react-helmet-async";

// SEO-optimized portfolio data for structured markup
const portfolioData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": "AI-Powered Analytics Dashboard",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "Custom",
          "priceCurrency": "INR"
        },
        "provider": {
          "@type": "Organization",
          "name": "CODENOVATECH",
          "alternateName": ["Code Nova Tech", "CodeNova Tech", "Codenova tech"]
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Machine Learning Prediction System",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cross-platform",
        "provider": {
          "@type": "Organization",
          "name": "CODENOVATECH"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Computer Vision Quality Control",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cross-platform",
        "provider": {
          "@type": "Organization",
          "name": "CODENOVATECH"
        }
      }
    }
  ]
};

export default function Portfolio() {
  // Add dynamic page title for better SEO
  useEffect(() => {
    document.title = "AI & Software Development Portfolio | CODENOVATECH Coimbatore";
  }, []);

  return (
    <div className="pt-24">
      <PageSEO 
        title="AI & Software Development Portfolio | CODENOVATECH Coimbatore" 
        description="Explore CODENOVATECH's impressive portfolio of innovative AI and software development projects. Discover how our team of experts has delivered cutting-edge technology solutions for businesses across various industries including healthcare, finance, retail, manufacturing, and education. From custom enterprise applications to AI-powered tools, mobile apps, and web platforms, see how our tailored solutions have helped businesses in Coimbatore and beyond transform their operations and achieve digital excellence."
        keywords="AI projects portfolio, software development case studies, Coimbatore tech projects, custom software examples, AI solutions showcase, enterprise application portfolio, mobile app development showcase, web development projects, technology solutions portfolio, machine learning implementations, AI success stories, custom software portfolio, digital transformation examples, business automation projects, healthcare software solutions, fintech applications, retail tech solutions, manufacturing software projects, educational technology applications, CRM system development, ERP implementation, AI chatbot projects, predictive analytics solutions, data visualization tools, cloud migration case studies, DevOps implementation, software modernization projects, Coimbatore software company projects, IT project gallery, business intelligence solutions, Code Novatech portfolio, Codenova tech projects, AI development Coimbatore, machine learning case studies Tamil Nadu, computer vision projects, NLP implementations, AI automation examples, deep learning applications, neural network models, AI integration case studies, custom AI development portfolio"
        canonicalUrl="https://codenovatech.in/portfolio"
      />
      
      {/* Additional SEO enhancements with Helmet */}
      <Helmet>
        {/* JSON-LD structured data for better rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(portfolioData)}
        </script>
        
        {/* Additional meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CODENOVATECH" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <link rel="alternate" hrefLang="en" href="https://codenovatech.in/portfolio" />
        <link rel="alternate" hrefLang="x-default" href="https://codenovatech.in/portfolio" />
      </Helmet>
      
      {/* Hidden SEO content for search engines - visible to crawlers but not obtrusive to users */}
      <div className="sr-only">
        <h1>CODENOVATECH Portfolio - AI and Software Development Projects in Coimbatore</h1>
        <p>Explore Code Nova Tech&apos;s (CODENOVATECH) portfolio of innovative AI and software development projects. Our team has delivered cutting-edge solutions for businesses across various industries.</p>
        <p>Codenova tech specializes in artificial intelligence, machine learning, computer vision, natural language processing, and custom software development projects that drive business transformation.</p>
        <h2>Our AI Project Portfolio in Coimbatore</h2>
        <p>Our portfolio showcases successful implementations of AI-powered analytics dashboards, predictive maintenance systems, computer vision quality control, natural language processing applications, and custom enterprise software solutions.</p>
      </div>
      
      {/* Hero Section with Animated Background */}
      <PortfolioHeroSection />
      <Projects />
      
      {/* Additional SEO-rich content section with portfolio information */}
      <div className="container mx-auto mt-16 mb-8 px-4 py-8 bg-gray-800/30 rounded-xl">
        <h2 className="text-2xl font-bold text-teal-500 mb-4">Our AI & Software Development Portfolio</h2>
        <p className="text-gray-300 mb-4">
          CODENOVATECH (also known as Code Nova Tech or Codenova tech) has delivered innovative AI and software solutions for businesses across various industries. Our portfolio showcases our expertise in artificial intelligence, machine learning, and custom software development.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Project Highlights</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Predictive Analytics for Manufacturing</li>
              <li>Computer Vision Quality Control Systems</li>
              <li>Natural Language Processing Applications</li>
              <li>Machine Learning Recommendation Engines</li>
              <li>AI-Powered Business Intelligence Dashboards</li>
              <li>Deep Learning Image Recognition Solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Software Development Success Stories</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Enterprise Resource Planning Systems</li>
              <li>Customer Relationship Management Solutions</li>
              <li>E-commerce Platforms with AI Integration</li>
              <li>Mobile Applications for Various Industries</li>
              <li>Cloud-Based Business Management Tools</li>
              <li>Custom Web Applications with Advanced Features</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CODENOVATECH | All Rights Reserved | Coimbatore, Tamil Nadu, India
          </p>
        </div>
      </div>
    </div>
  );
}
