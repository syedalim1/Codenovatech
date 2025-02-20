import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegClock, FaChartLine } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const latestNews = [
  {
    id: 1,
    title: "Revolutionizing Enterprise AI Development",
    date: "Feb 15, 2025",
    description:
      "Deployed 150+ AI solutions achieving 40% average operational efficiency gains across industries",
    image: "/ai-development.jpg",
    tags: ["AI/ML", "Case Study", "Innovation"],
    stats: "200% ROI achieved",
  },
  {
    id: 2,
    title: "Next-Gen Mobile Framework Launch",
    date: "Feb 10, 2025",
    description:
      "New cross-platform framework reduces development time by 35% with 99.9% crash-free rate",
    image: "/mobile-app.jpg",
    tags: ["Mobile", "Tech Update", "Release"],
    stats: "500k+ Downloads",
  },
  {
    id: 3,
    title: "Enterprise API Integration Suite",
    date: "Feb 5, 2025",
    description:
      "Secure API management solution now supports 10k+ simultaneous connections with 50ms latency",
    image: "/api-integration.jpg",
    tags: ["APIs", "Security", "Scalability"],
    stats: "99.99% Uptime",
  },
];

function LatestNewsSection() {
  return (
    <div className="relative  py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Industry Insights & Updates
          </h2>
          <p className="text-xl text-gray-400">
            Stay ahead with our technical breakthroughs and market innovations
          </p>
        </motion.div>

        {/* News Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 8000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {latestNews.map((news) => (
            <SwiperSlide key={news.id}>
              <motion.div
                className="bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-teal-500/30 transition-all h-full"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* News Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex gap-2">
                      {news.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-900/80 text-teal-400 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-teal-500 mb-4">
                    <FaRegClock className="flex-shrink-0" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{news.description}</p>

                  {/* Performance Stats */}
                  <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg">
                    <FaChartLine className="h-6 w-6 text-teal-500" />
                    <div>
                      <p className="text-sm text-gray-400">Key Achievement</p>
                      <p className="font-semibold text-white">{news.stats}</p>
                    </div>
                  </div>

                  <Link
                    to="/blog"
                    className="inline-flex items-center mt-6 text-teal-500 hover:text-teal-400 font-semibold transition-colors"
                  >
                    Read Technical Analysis
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust & Performance Section */}

        {/* Enterprise CTA */}
        <motion.div
          className="mt-16 p-12 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-3xl text-center"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Enterprise-Grade Solutions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Secure, scalable, and compliant with industry regulations including
            GDPR, HIPAA, and PCI-DSS
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
            >
              Schedule Architecture Review
            </Link>
            <Link
              to="/compliance"
              className="px-8 py-4 border border-teal-500 text-teal-500 hover:bg-teal-500/10 font-semibold rounded-lg transition-all"
            >
              View Compliance Docs
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LatestNewsSection;
