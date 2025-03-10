import { motion } from "framer-motion";
import { useEffect } from "react";
import BlogHeroSection from "../components/BlogPage/BlogHeroSection";
import BlogPost from "../components/BlogPage/BlogPost";
import BlogFooter from "../components/BlogPage/BlogFooter";
import PageSEO from "../components/SEO/PageSEO";
import { Helmet } from "react-helmet-async";

// SEO-optimized blog data for structured markup
const blogData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "CODENOVATECH AI & Technology Blog",
  "description": "Insights on artificial intelligence, machine learning, software development, and emerging technology trends from Coimbatore's leading AI company.",
  "url": "https://codenovatech.in/blog",
  "publisher": {
    "@type": "Organization",
    "name": "CODENOVATECH",
    "alternateName": ["Code Nova Tech", "CodeNova Tech", "Codenova tech"],
    "logo": {
      "@type": "ImageObject",
      "url": "https://codenovatech.in/logo.png"
    }
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "The Future of AI in Business Transformation",
      "description": "How artificial intelligence is reshaping business operations and creating new opportunities for growth and innovation.",
      "author": {
        "@type": "Organization",
        "name": "CODENOVATECH"
      },
      "datePublished": "2023-11-15"
    },
    {
      "@type": "BlogPosting",
      "headline": "Machine Learning Best Practices for Enterprises",
      "description": "A comprehensive guide to implementing machine learning solutions in enterprise environments.",
      "author": {
        "@type": "Organization",
        "name": "CODENOVATECH"
      },
      "datePublished": "2023-10-22"
    }
  ]
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Blog() {
  // Add dynamic page title for better SEO
  useEffect(() => {
    document.title = "AI & Technology Blog | CODENOVATECH Coimbatore";
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 pt-24">
      <PageSEO 
        title="AI & Technology Blog | CODENOVATECH Coimbatore" 
        description="Explore CODENOVATECH's blog for in-depth insights on AI, machine learning, software development, and emerging technology trends. Our expert team shares valuable knowledge on artificial intelligence applications, development best practices, industry innovations, and digital transformation strategies. Stay updated with the latest advancements in technology from Coimbatore's leading AI and software development company."
        keywords="AI blog, technology insights, software development articles, Coimbatore tech blog, artificial intelligence news, machine learning resources, tech industry trends, software engineering best practices, IT innovation, AI use cases, programming tutorials, tech education, digital transformation insights, software development lifecycle, AI implementation strategies, cloud computing articles, mobile app development guides, web development tips, data science blog, technology case studies, coding best practices, DevOps articles, UI/UX design blogs, enterprise software insights, IT consulting blog, startup technology advice, Python programming tips, JavaScript tutorials, React development guides, Coimbatore tech news, Indian IT industry, Code Novatech blog, Codenova tech articles, AI research Coimbatore, machine learning tutorials Tamil Nadu, deep learning explanations, neural networks guide, AI ethics discussions, computer vision applications, NLP implementation strategies, AI for business growth, predictive analytics insights, data science methodologies, AI development Coimbatore"
        canonicalUrl="https://codenovatech.in/blog"
      />
      
      {/* Additional SEO enhancements with Helmet */}
      <Helmet>
        {/* JSON-LD structured data for better rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(blogData)}
        </script>
        
        {/* Additional meta tags for better SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CODENOVATECH" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <link rel="alternate" hrefLang="en" href="https://codenovatech.in/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://codenovatech.in/blog" />
      </Helmet>
      
      {/* Hidden SEO content for search engines - visible to crawlers but not obtrusive to users */}
      <div className="sr-only">
        <h1>CODENOVATECH Blog - AI and Technology Insights from Coimbatore</h1>
        <p>Welcome to the Code Nova Tech (CODENOVATECH) blog, where our team of AI experts and software engineers share valuable insights on artificial intelligence, machine learning, software development, and emerging technology trends.</p>
        <p>Codenova tech&apos;s blog covers topics including deep learning, computer vision, natural language processing, predictive analytics, software engineering best practices, and digital transformation strategies.</p>
        <h2>AI Technology Blog from Coimbatore&apos;s Leading Tech Company</h2>
        <p>Our articles provide practical advice, industry insights, case studies, and technical tutorials to help businesses understand and leverage the latest advancements in AI and software development.</p>
      </div>
      
      {/* Hero Section */}
      <motion.div
        className="container-custom py-24"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <BlogHeroSection/>
        <BlogPost/>
        <BlogFooter/>
      </motion.div>
      
      {/* Additional SEO-rich content section with blog information */}
      <div className="container mx-auto mt-16 mb-8 px-4 py-8 bg-gray-800/30 rounded-xl">
        <h2 className="text-2xl font-bold text-teal-500 mb-4">CODENOVATECH AI & Technology Blog</h2>
        <p className="text-gray-300 mb-4">
          CODENOVATECH (also known as Code Nova Tech or Codenova tech) publishes regular articles on artificial intelligence, machine learning, software development, and emerging technology trends. Our blog is a valuable resource for businesses and technology enthusiasts looking to stay updated with the latest advancements in the tech industry.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Topics We Cover</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Machine Learning Implementations</li>
              <li>Deep Learning Frameworks</li>
              <li>Computer Vision Applications</li>
              <li>Natural Language Processing</li>
              <li>Predictive Analytics</li>
              <li>AI Ethics and Responsible AI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Software Development Insights</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Best Practices in Software Engineering</li>
              <li>Web and Mobile App Development</li>
              <li>Cloud Computing Solutions</li>
              <li>DevOps and CI/CD Pipelines</li>
              <li>Software Architecture Patterns</li>
              <li>Technology Stack Selection</li>
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
