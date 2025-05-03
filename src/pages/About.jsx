import { Suspense, lazy, useEffect } from "react";
import PageSEO from "../components/SEO/PageSEO";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

// Lazy load components for better performance
const AboutHerosection = lazy(() =>
  import("../components/AboutPage/AboutHerosection")
);
const AboutValuessection = lazy(() =>
  import("../components/AboutPage/AboutValuessection")
);
const AboutStatssection = lazy(() =>
  import("../components/AboutPage/AboutStatssection")
);
const AboutTeamsection = lazy(() =>
  import("../components/AboutPage/AboutTeamsection")
);

// Loading component with animation
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[300px]">
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
  description:
    "Leading AI and software development company in Coimbatore specializing in artificial intelligence solutions, machine learning, custom software development, and digital transformation services.",
  foundingDate: "2022",
  founders: [
    {
      "@type": "Person",
      name: "Syed",
    },
    {
      "@type": "Person",
      name: "Praveen",
    },
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "10-50",
  },
};

export default function About() {
  // Add dynamic page title for better SEO
  useEffect(() => {
    document.title =
      "About CODENOVATECH | Leading AI & Software Company in Coimbatore";
  }, []);

  return (
    <div className="pt-24 bg-gray-900">
      <PageSEO
        title="About CODENOVATECH | Leading AI & Software Company in Coimbatore"
        description="Learn about CODENOVATECH (Code Nova Tech) - a pioneering AI and software development company in Coimbatore with a mission to transform businesses through innovative technology solutions. Founded by experienced tech experts, our team combines deep technical knowledge with domain expertise to deliver exceptional results. We're committed to excellence, innovation, and creating lasting partnerships with our clients across various industries."
        keywords="AI company Coimbatore, Codenovatech team, Code Novatech, Codenova tech, software development company history, startup story, tech innovation company, Coimbatore tech company, AI expertise, software engineers Coimbatore, product development team, Coimbatore IT professionals, AI researchers, data scientists, machine learning experts, Python developers, React developers, Node.js developers, full-stack engineers, mobile app developers, cloud solution architects, DevOps engineers, technology consultants Coimbatore, India tech talent, IT professionals Tamil Nadu, AI innovation leaders, software architects, UI/UX designers, quality assurance experts, Coimbatore tech ecosystem, South India IT company, best AI company Tamil Nadu"
        canonicalUrl="https://codenovatech.in/about"
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
          href="https://codenovatech.in/about"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://codenovatech.in/about"
        />
      </Helmet>

      {/* Hidden SEO content for search engines - visible to crawlers but not obtrusive to users */}
      <div className="sr-only">
        <h1>
          About CODENOVATECH - Leading AI and Software Development Company in
          Coimbatore
        </h1>
        <p>
          Learn about Code Nova Tech (CODENOVATECH), the premier AI and software
          development company in Coimbatore, Tamil Nadu. Our team of expert
          engineers and data scientists are dedicated to delivering cutting-edge
          technology solutions.
        </p>
        <p>
          Codenova tech was founded with a vision to transform businesses
          through innovative AI solutions and custom software development. We
          specialize in machine learning, computer vision, natural language
          processing, and full-stack development.
        </p>
        <h2>Our AI and Software Development Team in Coimbatore</h2>
        <p>
          Our leadership team brings decades of combined experience in
          artificial intelligence, software engineering, and business
          transformation. We&apos;re committed to excellence in every project we
          undertake.
        </p>
      </div>

      {/* Wrap each section in Suspense for progressive loading */}
      <Suspense fallback={<SectionLoader />}>
        <AboutHerosection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutValuessection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutStatssection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AboutTeamsection />
      </Suspense>

      {/* Additional SEO-rich content section with company information */}
      <div className="container hidden mx-auto mt-16  px-4 py-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg  hover:shadow-teal-500/10 dark:bg-gray-800/30 rounded-xl">
        <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-500 mb-4">
          About CODENOVATECH - Our Journey
        </h2>
        <p className="text-white dark:text-gray-300 mb-4">
          CODENOVATECH (also known as Code Nova Tech or Codenova tech) was
          founded with a vision to bring cutting-edge AI technology to
          businesses in Coimbatore and beyond. Our journey began when a team of
          passionate technologists came together with a shared belief in the
          transformative power of artificial intelligence and quality software
          development.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-teal-600 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-white dark:text-gray-300">
              To empower businesses with innovative AI and software solutions
              that drive growth, efficiency, and competitive advantage.
              We&apos;re committed to making advanced technology accessible to
              organizations of all sizes, helping them navigate the digital
              transformation journey with confidence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-600 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-white dark:text-gray-300">
              To be recognized as the leading AI and software development
              company in South India, known for our technical excellence,
              innovative solutions, and exceptional client service. We&apos;re
              at the forefront of technological advancement, continuously
              pushing the boundaries of what&apos;s possible.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

// PropTypes validation
SectionLoader.propTypes = {
  height: PropTypes.string,
};
