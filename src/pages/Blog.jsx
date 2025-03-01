import { motion } from "framer-motion";

import BlogHeroSection from "../components/BlogPage/BlogHeroSection";
import BlogPost from "../components/BlogPage/BlogPost";
import BlogFooter from "../components/BlogPage/BlogFooter";
import PageSEO from "../components/SEO/PageSEO";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Blog() {


  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 pt-24">
      <PageSEO 
        title="AI & Technology Blog | CODENOVATECH Coimbatore" 
        description="Explore CODENOVATECH's blog for in-depth insights on AI, machine learning, software development, and emerging technology trends. Our expert team shares valuable knowledge on artificial intelligence applications, development best practices, industry innovations, and digital transformation strategies. Stay updated with the latest advancements in technology from Coimbatore's leading AI and software development company."
        keywords="AI blog, technology insights, software development articles, Coimbatore tech blog, artificial intelligence news, machine learning resources, tech industry trends, software engineering best practices, IT innovation, AI use cases, programming tutorials, tech education, digital transformation insights, software development lifecycle, AI implementation strategies, cloud computing articles, mobile app development guides, web development tips, data science blog, technology case studies, coding best practices, DevOps articles, UI/UX design blogs, enterprise software insights, IT consulting blog, startup technology advice, Python programming tips, JavaScript tutorials, React development guides, Coimbatore tech news, Indian IT industry"
        canonicalUrl="https://codenovatech.in/blog"
      />
      
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
    </div>
  );
}
