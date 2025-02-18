import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Data from "./posts";
import { FaComment, FaEye, FaShareAlt, FaClock, FaArrowRight } from "react-icons/fa";
import ClientLogos from "../components/ServicesPage/ClientLogos";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const hoverScale = {
  whileHover: { scale: 1.02, y: -5 },
  transition: { type: "spring", stiffness: 300 },
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Add categories from posts
  const categories = [
    "all",
    ...new Set(Data.posts.map((post) => post.category.name)),
  ];

  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="container-custom py-24"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
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
        {/* //x */}
      
        {/* Featured Post */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
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
                <span className="text-white text-sm bg-primary px-3 py-1 rounded-full">
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
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        {/* Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {Data.posts
            .filter(
              (post) =>
                selectedCategory === "all" ||
                post.category.name === selectedCategory
            )
            .map((post) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                {...hoverScale}
              >
                <Link to={post.slug} className="block">
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {post.category.name}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaClock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment className="w-4 h-4" />
                      {post.comments} Comments
                    </span>
                    <span className="flex items-center gap-1">
                      <FaEye className="w-4 h-4" />
                      {post.views} Views
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link to={post.slug}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.imageUrl}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-sm text-gray-500">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-primary">
                      <FaShareAlt className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>
        {/* Trusted By Section */}
        <div className="mt-16 py-12 border-t border-gray-200">
          <h3 className="text-center text-gray-500 mb-8">
            Trusted by leading companies
          </h3>
          <ClientLogos />
        </div>
        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive content and early access
            to new posts.
          </p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors"
          >
            View All Articles
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
