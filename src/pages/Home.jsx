import { Suspense, lazy, useState, useEffect } from "react";
import PageSEO from "../components/SEO/PageSEO";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

// Lazy load components to improve initial load time
const Herosection = lazy(() => import("../components/HomePage/Herosection"));
const Servicessection = lazy(() =>
  import("../components/HomePage/Servicessection")
);
const Teamsection = lazy(() => import("../components/HomePage/Teamsection"));
const Statisticssection = lazy(() =>
  import("../components/HomePage/Statisticssection")
);

// SEO-optimized company data for structured markup
const companyData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CODENOVATECH",
  alternateName: [
    "Code Nova Tech",
    "CodeNova Tech",
    "Codenova tech",
    "CodeNova Technology",
  ],
  url: "https://codenovatech.in",
  logo: "https://codenovatech.in/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/codenovatech",
    "https://x.com/codenovatech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8300904920",
    contactType: "customer service",
    areaServed: ["Coimbatore", "Tamil Nadu", "India"],
    availableLanguage: ["English", "Tamil"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "India",
  },
  description:
    "Leading AI and software development company in Coimbatore specializing in artificial intelligence solutions, machine learning, custom software development, and digital transformation services.",
  keywords:
    "AI company Coimbatore, Codenovatech, Code Novatech, Codenova tech, AI solutions India, software development Coimbatore",
};

// Service data for structured markup
const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI and Software Development",
  provider: {
    "@type": "Organization",
    name: "CODENOVATECH",
    url: "https://codenovatech.in",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI and Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Artificial Intelligence Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Machine Learning Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
        },
      },
    ],
  },
};

export default function Home() {
  // Make sure all sections render immediately

  // Force all sections to be visible on initial load after a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAllSectionsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Track which sections are in viewport to optimize animations
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    services: true,
    team: true,
    statistics: true,
  });

  // Set up intersection observers to track visible sections
  useEffect(() => {
    // Use a more generous threshold for better user experience
    const observerOptions = {
      root: null,
      rootMargin: "200px", // Load well before they come into view
      threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Get the section ID from the element ID
        const sectionId = entry.target.id.replace("-section", "");
        if (
          sectionId &&
          (entry.isIntersecting || entry.intersectionRatio > 0)
        ) {
          setVisibleSections((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    }, observerOptions);

    // Observe each section
    const sections = [
      "hero-section",
      "services-section",
      "team-section",
      "statistics-section",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) sectionObserver.unobserve(element);
      });
    };
  }, []);

  // Add dynamic page title for better SEO
  useEffect(() => {
    document.title =
      "CODENOVATECH | Top AI & Software Development Company in Coimbatore";
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <PageSEO
        title="Top AI & Software Development Company in Coimbatore | CODENOVATECH"
        description="CODENOVATECH (Code Nova Tech) is a leading AI and software development company based in Coimbatore, India. We specialize in innovative, AI-driven software solutions for startups and enterprises including machine learning, generative AI, computer vision, natural language processing, and full-stack development solutions. Transform your business with our cutting-edge technology services from Codenova tech."
        keywords="AI solutions Coimbatore, Code Novatech, Codenova tech, software development company, digital transformation, product-based IT company, custom software development, artificial intelligence services, Coimbatore startup, technology innovation, machine learning services, AI consulting Coimbatore, cloud solutions, IT outsourcing, app development Coimbatore, business intelligence solutions, data analytics services, IT services Coimbatore, tech startup, software engineering, enterprise solutions, generative AI experts, computer vision development, NLP solutions, web application development, mobile app development Coimbatore, AI-powered business tools, best AI company Tamil Nadu, top software development Coimbatore"
        canonicalUrl="https://codenovatech.in/"
      />

      {/* Additional SEO enhancements with Helmet */}
      <Helmet>
        {/* JSON-LD structured data for better rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(companyData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceData)}
        </script>

        {/* Additional meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CODENOVATECH" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <link rel="alternate" hrefLang="en" href="https://codenovatech.in" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://codenovatech.in"
        />
      </Helmet>

      {/* Hidden SEO content for search engines - visible to crawlers but not obtrusive to users */}
      <div className="sr-only hidden">
        <h1>
          CODENOVATECH - Leading AI and Software Development Company in
          Coimbatore
        </h1>
        <p>
          Welcome to Code Nova Tech (CODENOVATECH), the premier AI and software
          development company in Coimbatore, Tamil Nadu. We provide innovative
          artificial intelligence solutions, machine learning implementation,
          and custom software development services.
        </p>
        <p>
          Codenova tech delivers cutting-edge technology solutions including
          generative AI, computer vision, natural language processing, and
          full-stack development for businesses across India.
        </p>
        <h2>Top AI Development Services in Coimbatore</h2>
        <p>
          Phone: +91 8300904920 | Email: hello@codenovatech.in | Location:
          Coimbatore, Tamil Nadu, India
        </p>
        <p>
          Services: AI Development, Machine Learning, Custom Software, Mobile
          App Development, Web Development, Technology Consultation
        </p>
      </div>

      {/* Hero Section */}
      <section id="hero-section">
        <Herosection isVisible={visibleSections.hero} />
      </section>

      {/* Services Section */}
      <section id="services-section">
        <Servicessection isVisible={visibleSections.services} />
      </section>

      {/* Team Section */}
      <section id="team-section">
        <Teamsection isVisible={visibleSections.team} />
      </section>

      {/* Statistics Section */}
      <section id="statistics-section">
        <Statisticssection isVisible={visibleSections.statistics} />
      </section>

      {/* Additional SEO-rich content section with company information */}
      <div className="container hidden mx-auto mt-16 px-4 py-8 bg-gray-800/30 rounded-xl block">
        <h2 className="text-2xl font-bold text-teal-500 mb-4">
          About CODENOVATECH - AI Innovation in Coimbatore
        </h2>
        <p className="text-gray-300 mb-4">
          CODENOVATECH (also known as Code Nova Tech or Codenova tech) is a
          premier artificial intelligence and software development company based
          in Coimbatore, Tamil Nadu. Founded by a team of visionary tech
          experts, we combine cutting-edge AI research with practical software
          implementation to deliver transformative solutions for businesses
          across industries.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Our AI Specializations
            </h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Machine Learning Implementation</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision Solutions</li>
              <li>Predictive Analytics</li>
              <li>Deep Learning Systems</li>
              <li>AI-Powered Automation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Why Choose CODENOVATECH
            </h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Expert team of AI specialists and engineers</li>
              <li>Proven track record of successful implementations</li>
              <li>Cutting-edge technology adoption</li>
              <li>Customized solutions for your business needs</li>
              <li>Continuous support and maintenance</li>
              <li>Research-driven approach to AI development</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CODENOVATECH | All Rights Reserved |
            Coimbatore, Tamil Nadu, India
          </p>
        </div>
      </div>
    </div>
  );
}
