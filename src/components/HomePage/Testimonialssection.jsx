import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaRobot, FaBrain, FaChartLine } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    id: 1,
    quote:
      "CODENOVATECH's AI solutions have transformed our data analytics capabilities. Their predictive models have improved our forecasting accuracy by 87%, directly impacting our bottom line.",
    author: "Sarah Johnson",
    role: "CTO, TechVision Enterprises",
    avatar: "/profile.jpg",
    rating: 5,
    companyLogo: "/Logo.png",
    highlight: "87% improvement in forecasting accuracy",
    icon: FaChartLine,
    color: "from-blue-500 to-teal-500",
  },
  {
    id: 2,
    quote:
      "The custom large language model CODENOVATECH built for our customer service has reduced response times by 65% while maintaining exceptional quality. Their AI expertise is unmatched in the industry.",
    author: "Michael Chen",
    role: "Head of Innovation, Global Solutions Inc.",
    avatar: "/profile.jpg",
    rating: 5,
    companyLogo: "/Logo.png",
    highlight: "65% reduction in response times",
    icon: FaBrain,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    quote:
      "Implementing CODENOVATECH's computer vision system on our production line has eliminated 99.8% of quality control defects. Their AI team understood our unique challenges and delivered beyond expectations.",
    author: "Elena Rodriguez",
    role: "VP of Operations, Manufacturing Excellence",
    avatar: "/profile.jpg",
    rating: 5,
    companyLogo: "/Logo.png",
    highlight: "99.8% defect detection rate",
    icon: FaRobot,
    color: "from-amber-500 to-red-600",
  },
];

function TestimonialsSection() {
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI Success Stories
            </motion.h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Discover how our AI solutions are driving measurable business impact for industry leaders worldwide
            </p>
          </div>

          {/* Enhanced Testimonials Carousel */}
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-teal-500/30 transition-all h-full group relative overflow-hidden"
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -10 }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color}`} />
                  </div>
                  
                  {/* Company Logo */}
                  <div className="mb-6 flex justify-between items-center">
                    <img
                      src={testimonial.companyLogo}
                      alt="Company logo"
                      className="h-10 w-auto object-contain opacity-80"
                    />
                    
                    {/* Icon with gradient background */}
                    <div className="relative">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${testimonial.color} bg-opacity-20`}>
                        <testimonial.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <FaQuoteLeft className="h-8 w-8 text-teal-500 mb-6 opacity-50" />
                  <p className="text-lg text-gray-300 mb-8">
                    {testimonial.quote}
                  </p>
                  
                  {/* Highlight */}
                  <div className="mb-8 px-4 py-3 bg-gray-700/30 rounded-lg border-l-4 border-teal-500">
                    <p className="text-teal-400 font-medium">
                      {testimonial.highlight}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-gray-700/50 pt-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-teal-500/30"
                    />
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30 hover:border-blue-500/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 font-bold text-xl">500+</span>
              <span className="text-gray-300">AI Implementations</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30 hover:border-yellow-500/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaStar className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300">4.9/5 Client Satisfaction</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30 hover:border-purple-500/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-xl">98%</span>
              <span className="text-gray-300">Client Retention</span>
            </motion.div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl text-gray-300 mb-6">
              Ready to transform your business with AI?
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
