import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegClock, FaChartLine, FaRobot, FaBrain, FaDatabase, FaLightbulb } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const latestNews = [
  {
    id: 1,
    title: "CODENOVATECH Unveils Revolutionary AI-Powered Predictive Analytics Platform",
    date: "March 1, 2025",
    description:
      "Our new AI platform provides businesses with unparalleled insights into future trends and customer behavior, enabling data-driven decision-making at scale.",
    image: "/projectimage/syedai.png",
    tags: ["AI", "Predictive Analytics", "Innovation"],
    stats: "30% Improved Forecast Accuracy",
    icon: FaChartLine,
    color: "from-blue-500 to-teal-500",
  },
  {
    id: 2,
    title: "Introducing Our Next-Generation Large Language Model for Enterprise",
    date: "February 15, 2025",
    description:
      "Our custom-trained LLM delivers context-aware responses with unprecedented accuracy, transforming how businesses interact with customers and process information.",
    image: "/projectimage/indianmake.png",
    tags: ["LLM", "NLP", "Enterprise AI"],
    stats: "65% Reduction in Response Time",
    icon: FaBrain,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "CODENOVATECH's Computer Vision System Achieves Industry-Leading Accuracy",
    date: "January 28, 2025",
    description:
      "Our advanced computer vision technology has set a new benchmark in object detection and image classification, with applications across manufacturing, healthcare, and security.",
    image: "/projectimage/vslabels.png",
    tags: ["Computer Vision", "Deep Learning", "AI"],
    stats: "99.8% Detection Accuracy",
    icon: FaRobot,
    color: "from-amber-500 to-red-600",
  },
  {
    id: 4,
    title: "Announcing Our AI Ethics Framework and Responsible AI Toolkit",
    date: "January 10, 2025",
    description:
      "CODENOVATECH leads the industry with our comprehensive AI ethics framework, ensuring transparent, fair, and accountable AI systems for all our clients.",
    image: "/projectimage/ganapathi.png",
    tags: ["AI Ethics", "Responsible AI", "Governance"],
    stats: "100% Compliance with Global AI Regulations",
    icon: FaLightbulb,
    color: "from-green-500 to-emerald-600",
  },
];

function LatestNewsSection() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-4">
            AI Breakthroughs & Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with our latest AI research, technological breakthroughs, and market innovations
          </p>
        </motion.div>

        {/* Enhanced News Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, EffectCards]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
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
                className="bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-teal-500/30 transition-all h-full group overflow-hidden"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* News Image with overlay */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                  
                  {/* Tags positioned at bottom */}
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <div className="flex flex-wrap gap-2">
                      {news.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-900/80 text-teal-400 text-sm rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Icon with gradient background */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${news.color} shadow-lg`}>
                      <news.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-teal-500 mb-4">
                    <FaRegClock className="flex-shrink-0" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">{news.description}</p>

                  {/* Performance Stats with animated background */}
                  <div className="relative overflow-hidden p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 group-hover:border-teal-500/20 transition-all">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${news.color}`} />
                    </div>
                    <div className="relative flex items-center gap-3">
                      <news.icon className="h-6 w-6 text-teal-500" />
                      <div>
                        <p className="text-sm text-gray-400">Key Achievement</p>
                        <p className="font-semibold text-white">{news.stats}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/blog"
                    className="inline-flex items-center mt-6 text-teal-500 hover:text-teal-400 font-semibold transition-colors group"
                  >
                    <span>Read Technical Analysis</span>
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced Enterprise CTA */}
        <motion.div
          className="mt-16 p-12 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-500/20 rounded-3xl text-center relative overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-teal-500 rounded-full opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-4">
              Enterprise-Grade AI Solutions
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Secure, scalable, and compliant with industry regulations including
              GDPR, HIPAA, and PCI-DSS
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Schedule AI Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/compliance"
                  className="px-8 py-4 border border-teal-500 text-teal-500 hover:bg-teal-500/10 font-semibold rounded-xl transition-all"
                >
                  View AI Ethics Framework
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LatestNewsSection;
