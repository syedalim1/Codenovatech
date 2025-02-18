
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const latestNews = [
  {
    id: 1,
    title: "Revolutionizing AI Development",
    date: "Feb 15, 2025",
    description:
      "Our latest AI solutions are transforming businesses across industries.",
  },
  {
    id: 2,
    title: "New Mobile App Framework",
    date: "Feb 10, 2025",
    description: "Introducing our innovative mobile app development framework.",
  },
];

function LatestNewssection() {
  return (
    <div>
      <div className="py-24 ">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Latest News</h2>
            <p className="mt-4 ">Stay updated with our latest developments</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <motion.div
                key={news.id}
                className="bg-white rounded-lg shadow-lg p-6"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-black text-sm">{news.date}</div>
                <h3 className="text-xl text-black font-bold mt-2">
                  {news.title}
                </h3>
                <p className="mt-4 text-gray-600">{news.description}</p>
                <Link
                  to="/blog"
                  className="inline-block text-black mt-4  hover:text-secondary"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNewssection