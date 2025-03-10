import { Suspense, lazy, useState, useEffect } from 'react';
import PageSEO from "../components/SEO/PageSEO";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

// Lazy load components for better performance
const ServicesHeroSection = lazy(() => import("../components/ServicesPage/ServicesHeroSection"));
const ServicesbenefitsSection = lazy(() => import("../components/ServicesPage/ServicesbenefitsSection"));
const Servicessection = lazy(() => import("../components/ServicesPage/Servicessection"));
const CallToAction = lazy(() => import("../components/ServicesPage/CalltoAction"));

// Animation keyframes for fallback
const animationKeyframes = `
  @keyframes pulse {
    0% { opacity: 0.2; transform: scale(0.98); }
    100% { opacity: 0.3; transform: scale(1.02); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Loading component
const SectionLoader = ({ height = "300px" }) => (
  <div className="flex items-center justify-center" style={{ height }}>
    <style dangerouslySetInnerHTML={{ __html: animationKeyframes }} />
    <div className="flex flex-col items-center space-y-4">
      <div 
        className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full" 
        style={{ animation: "spin 1s linear infinite" }}
      ></div>
      <div className="text-teal-500 font-medium">Loading AI Content...</div>
    </div>
  </div>
);

// PropTypes validation for SectionLoader
SectionLoader.propTypes = {
  height: PropTypes.string
};

// SEO-optimized services data for structured markup
const servicesData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Artificial Intelligence Solutions",
        "description": "Custom AI solutions including machine learning models, deep learning systems, and AI integration services.",
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
        "@type": "Service",
        "name": "Custom Software Development",
        "description": "End-to-end software development services tailored to your business requirements.",
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
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile application development for iOS and Android.",
        "provider": {
          "@type": "Organization",
          "name": "CODENOVATECH"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Web Development",
        "description": "Responsive, modern web applications built with the latest technologies.",
        "provider": {
          "@type": "Organization",
          "name": "CODENOVATECH"
        }
      }
    }
  ]
};

export default function Services() {
  // Track which sections are visible to optimize animations
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    benefits: true,
    services: true,
    cta: true
  });

  // Add dynamic page title for better SEO
  useEffect(() => {
    document.title = "AI & Software Development Services | CODENOVATECH Coimbatore";
  }, []);

  useEffect(() => {
    // Set up intersection observers for sections
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    // Observe each section
    const sections = ['services-hero', 'services-benefits', 'services-list', 'services-cta'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    });

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) sectionObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="pt-24 ">
      <PageSEO 
        title="AI & Software Development Services in Coimbatore | CODENOVATECH" 
        description="Explore CODENOVATECH's (Code Nova Tech) comprehensive AI and software development services in Coimbatore. We offer Generative AI, Predictive Analytics, Computer Vision, Natural Language Processing, Full-Stack Development, Mobile App Development, Cloud Solutions, and custom enterprise software solutions tailored to your business requirements. Our experienced team delivers cutting-edge technology solutions for startups and established businesses."
        keywords="AI services Coimbatore, Code Novatech, Codenova tech, software development services, generative AI solutions, predictive analytics, computer vision services, AI consulting, custom software development, AI integration, enterprise software solutions, ML model development, machine learning services, Python development, React applications, mobile app development, iOS development, Android development, web application development, full-stack development, cloud integration services, digital transformation solutions, IT consulting Coimbatore, business automation tools, AI product development, technology outsourcing Coimbatore, NLP services, data analytics solutions, AI algorithm development, chatbot development, software migration services, DevOps services, best AI company Tamil Nadu"
        canonicalUrl="https://codenovatech.in/services"
      />
      
      {/* Additional SEO enhancements with Helmet */}
      <Helmet>
        {/* JSON-LD structured data for better rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(servicesData)}
        </script>
        
        {/* Additional meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CODENOVATECH" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <link rel="alternate" hrefLang="en" href="https://codenovatech.in/services" />
        <link rel="alternate" hrefLang="x-default" href="https://codenovatech.in/services" />
      </Helmet>
      
      {/* Hidden SEO content for search engines - visible to crawlers but not obtrusive to users */}
      <div className="sr-only">
        <h1>AI & Software Development Services by CODENOVATECH in Coimbatore</h1>
        <p>Code Nova Tech (CODENOVATECH) offers a comprehensive range of AI and software development services in Coimbatore, Tamil Nadu. Our expert team specializes in artificial intelligence solutions, machine learning implementation, and custom software development.</p>
        <p>Codenova tech provides cutting-edge technology services including generative AI, computer vision, natural language processing, predictive analytics, web development, mobile app development, and cloud solutions for businesses across industries.</p>
        <h2>Top AI Development Services in Coimbatore</h2>
        <p>Our AI services include machine learning model development, deep learning implementation, computer vision solutions, natural language processing, predictive analytics, and AI integration with existing systems.</p>
        <p>We also offer full-stack development, mobile app development for iOS and Android, web application development, cloud integration, and digital transformation consulting.</p>
      </div>
      
      {/* Hero Section with Animated Background */}
      <section id="services-hero">
        <Suspense fallback={<SectionLoader height="60vh" />}>
          <ServicesHeroSection isVisible={visibleSections.hero} />
        </Suspense>
      </section>

      <div className="container-custom py-24">
        {/* Benefits Section */}
        <section id="services-benefits">
          <Suspense fallback={<SectionLoader />}>
            {visibleSections.benefits && <ServicesbenefitsSection />}
          </Suspense>
        </section>

        {/* Services Section */}
        <section id="services-list">
          <Suspense fallback={<SectionLoader height="600px" />}>
            {visibleSections.services && <Servicessection />}
          </Suspense>
        </section>
      </div>

      {/* Call to Action */}
      <section id="services-cta">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.cta && <CallToAction />}
        </Suspense>
      </section>
      
      {/* Additional SEO-rich content section with service details */}
      <div className="container mx-auto mt-16 mb-8 px-4 py-8 bg-gray-800/30 rounded-xl">
        <h2 className="text-2xl font-bold text-teal-500 mb-4">Our AI & Software Development Services</h2>
        <p className="text-gray-300 mb-6">
          CODENOVATECH (also known as Code Nova Tech or Codenova tech) offers a comprehensive range of AI and software development services designed to help businesses leverage the latest technologies for growth and innovation.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Artificial Intelligence Solutions</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Machine Learning Model Development</li>
              <li>Deep Learning Implementation</li>
              <li>Computer Vision Solutions</li>
              <li>Natural Language Processing</li>
              <li>Predictive Analytics</li>
              <li>AI Integration Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Software Development</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Custom Software Development</li>
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Integration Solutions</li>
              <li>Enterprise Software Systems</li>
              <li>Digital Transformation Consulting</li>
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
