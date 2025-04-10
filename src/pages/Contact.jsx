import { motion } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import PageSEO from "../components/SEO/PageSEO";
import { Helmet } from "react-helmet";

// Lazy load components for better performance
const ContactHeraSection = lazy(() =>
  import("../components/ContactPage/ContactHeraSection")
);
const AiCreativeSection = lazy(() =>
  import("../components/ContactPage/AiCreativeSection")
);
const AiFeatureShowcase = lazy(() =>
  import("../components/ContactPage/AiFeatureShowcase")
);

// Loading component with animation
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
      <div className="text-teal-500 font-medium">Loading...</div>
    </div>
  </div>
);

// SEO-optimized company data for structured markup
const companyData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CODENOVATECH",
  alternateName: ["Code Nova Tech", "CodeNova Tech", "CodeNova Technology"],
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
    "AI company Coimbatore, Codenovatech contact, AI solutions India, software development Coimbatore",
};

export default function Contact() {
  // Add dynamic page title for better SEO
  useEffect(() => {
    document.title =
      "Contact CODENOVATECH | AI & Software Solutions in Coimbatore, Tamil Nadu";
  }, []);

  return (
    <div className="relative pt-24 bg-gray-900">
      <PageSEO
        title="Contact CODENOVATECH | AI & Software Development Company in Coimbatore"
        description="Get in touch with CODENOVATECH, Coimbatore's leading AI and software development company. Reach out for consultations, project inquiries, or partnership opportunities. Our team of experts is ready to discuss your business needs and provide tailored technology solutions. Whether you need AI development, custom software, mobile apps, or web development services, we're here to help transform your vision into reality."
        keywords="contact Codenovatech, Code Nova Tech, Codenova Tech, AI company contact, software development inquiry, IT consultation Coimbatore, hire AI developers, software project quote, technology partnership, Coimbatore IT services contact, software development consultation, AI solution providers, custom software quote, mobile app development inquiry, web development services Coimbatore, technology consulting services, AI implementation experts, software outsourcing Coimbatore, IT project consultation, software development team Coimbatore, enterprise software solutions, startup technology partner, AI integration specialists, digital transformation experts, IT service providers Coimbatore, business automation solutions, software development company location, Coimbatore tech consultants, AI development team contact, machine learning solutions Coimbatore, data science experts Tamil Nadu, artificial intelligence Coimbatore, best AI company India"
        canonicalUrl="https://codenovatech.in/contact"
      />

      {/* Additional SEO enhancements with Helmet */}
      <Helmet>
        {/* JSON-LD structured data for better rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(companyData)}
        </script>

        {/* Additional meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CODENOVATECH" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://codenovatech.in/contact"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://codenovatech.in/contact"
        />
      </Helmet>

      {/* Circuit pattern overlay - kept for additional styling */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>

      {/* Hidden SEO content for search engines - visible to crawlers but not obtrusive to users */}
      <div className="sr-only">
        <h1>
          Contact CODENOVATECH - Leading AI and Software Development Company in
          Coimbatore
        </h1>
        <p>
          Reach out to Code Nova Tech (CODENOVATECH) for innovative AI
          solutions, machine learning implementation, and custom software
          development services in Coimbatore, Tamil Nadu.
        </p>
        <p>
          CodeNova Tech provides cutting-edge artificial intelligence services,
          data science solutions, and enterprise software development for
          businesses across India.
        </p>
        <h2>Contact our AI expertise team in Coimbatore</h2>
        <p>
          Phone: +91 8300904920 | Email: hello@codenovatech.in | Location:
          Coimbatore, Tamil Nadu, India
        </p>
        <p>
          Services: AI Development, Machine Learning, Custom Software, Mobile
          App Development, Web Development, Technology Consultation
        </p>
      </div>

      {/* Animated Entry Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="container-custom py-24">
          {/* Lazily load each section with suspense fallbacks */}
          <Suspense fallback={<SectionLoader />}>
            <ContactHeraSection />
          </Suspense>

          {/* AI Creative Section */}
          <Suspense fallback={<SectionLoader />}>
            <AiCreativeSection />
          </Suspense>

          {/* AI Feature Showcase */}
          <Suspense fallback={<SectionLoader />}>
            <AiFeatureShowcase />
          </Suspense>

          {/* AI-Powered Chat Assistant - Not lazy loaded as it's small and directly in this component */}
          <motion.div
            className="mt-24 mb-16 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: 0.3 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Our AI-powered digital assistant is available 24/7 to provide
                instant answers to your questions about our services, pricing,
                and capabilities.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: "transform" }}
              >
                Start AI Chat Assistant
              </motion.button>
            </div>
          </motion.div>

          {/* Additional SEO-rich content section with company information */}
          <div className="mt-16 mb-8 px-4 py-8 bg-gray-800/30 rounded-xl">
            <h2 className="text-2xl font-bold text-teal-500 mb-4">
              About CODENOVATECH - AI Innovation in Coimbatore
            </h2>
            <p className="text-gray-300 mb-4">
              CODENOVATECH is a premier artificial intelligence and software
              development company based in Coimbatore, Tamil Nadu. Founded by a
              team of visionary tech experts, we combine cutting-edge AI
              research with practical software implementation to deliver
              transformative solutions for businesses across industries.
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
                © {new Date().getFullYear()} CODENOVATECH | All Rights Reserved
                | Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
