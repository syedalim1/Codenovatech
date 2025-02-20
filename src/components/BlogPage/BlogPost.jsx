import { useState } from "react";
import { FaComment, FaEye, FaShareAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Data from "../../pages/posts";
import { Link } from "react-router-dom";
const hoverScale = {
  whileHover: { scale: 1.02, y: -5 },
  transition: { type: "spring", stiffness: 300 },
};

  // Add categories from posts
  const categories = [
    "all",
    ...new Set(Data.posts.map((post) => post.category.name)),
  ];

  
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
function BlogPost() {
      const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
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
                ? "p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4 text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
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
              className="p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4"
              {...hoverScale}
            >
              <Link to={post.slug} className="block">
                <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* <div className="absolute top-4 right-4 flex gap-2">
                    <span className=" text-white px-3 py-1 rounded-full text-sm">
                      {post.category.name}
                    </span>
                  </div> */}
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
    </div>
  );
}

export default BlogPost;
