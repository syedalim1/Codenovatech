import { motion } from "framer-motion";

import BlogHeroSection from "../components/BlogPage/BlogHeroSection";
import BlogPost from "../components/BlogPage/BlogPost";
import BlogFooter from "../components/BlogPage/BlogFooter";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Blog() {


  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 pt-24">
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
