import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote:
      "Their team transformed our business with a cutting-edge web application that increased our conversion rate by 150%. Highly recommended!",
    author: "John Doe",
    role: "CEO of Innovate Inc.",
    avatar: "/client-1.jpg",
    rating: 5,
    companyLogo: "/company-logo-1.png",
  },
  {
    id: 2,
    quote:
      "The AI-powered mobile app they developed has been a game-changer, resulting in 40% operational efficiency gains. Exceptional technical expertise!",
    author: "Jane Smith",
    role: "CTO of Tech Solutions",
    avatar: "/client-2.jpg",
    rating: 5,
    companyLogo: "/company-logo-2.png",
  },
  {
    id: 3,
    quote:
      "Their API integration services helped us streamline operations across 3 continents. Truly world-class development capabilities.",
    author: "Michael Chen",
    role: "Director of Global Ops",
    avatar: "/client-3.jpg",
    rating: 5,
    companyLogo: "/company-logo-3.png",
  },
];

function TestimonialsSection() {
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-24 sm:py-32  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
              className="text-3xl font-bold text-white mb-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Trusted by Industry Leaders
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover why 500+ global enterprises choose CodeNovaTech for their
              digital transformation
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
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
                  className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-teal-500/30 transition-all h-full"
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Company Logo */}
                  <div className="mb-6">
                    <img
                      src={testimonial.companyLogo}
                      alt="Company logo"
                      className="h-12 w-auto object-contain opacity-80"
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <FaQuoteLeft className="h-8 w-8 text-teal-500 mb-6" />
                  <p className="text-lg text-gray-300 mb-8">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-gray-700/50 pt-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
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

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30">
              <span className="text-teal-500 font-bold text-xl">500+</span>
              <span className="text-gray-300">Global Clients</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30">
              <FaStar className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-300">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30">
              <span className="text-teal-500 font-bold text-xl">98%</span>
              <span className="text-gray-300">Client Retention</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
