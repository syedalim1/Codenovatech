import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data from "../../pages/posts";


const hoverScale = {
  whileHover: { scale: 1.02, y: -5 },
  transition: { type: "spring", stiffness: 300 },
};
function BlogHeroSection() {
  return (
    <div>
      <div className="text-center mb-16">
        <motion.span
          className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Latest Updates
        </motion.span>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          CodeNovaTech Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Expert analysis, industry trends, and technical deep dives from our
          team of developers.
        </p>
      </div>

      {/* Featured Post */}
      <motion.div
        className="p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4 mb-16"
        {...hoverScale}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96 bg-gradient-to-r from-primary to-secondary">
            <img
              src={Data.featured.imageUrl}
              alt="Featured post"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60">
              <span className="text-white text-sm p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4 px-3 py-1 rounded-full">
                Featured Post
              </span>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary text-sm font-medium">
                {Data.featured.date}
              </span>
              <span className="flex items-center gap-1 text-gray-500">
                <FaClock className="w-4 h-4" />
                {Data.featured.readTime}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{Data.featured.title}</h2>
            <p className="text-gray-600 mb-6">{Data.featured.excerpt}</p>
            <Link
              to={Data.featured.slug}
              className="inline-flex items-center text-primary font-medium hover:text-secondary"
            >
              Read More
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BlogHeroSection;
