import { FaRocket, FaAward, FaRegClock, FaChartLine } from "react-icons/fa";
import { SiGooglecloud, SiAwslambda } from "react-icons/si";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function ServicesHeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <motion.div
        className="container-custom text-center text-white relative z-10"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 px-6 py-2 bg-gray-800/50 rounded-full">
            <FaAward className="h-5 w-5 text-teal-500" />
            <span className="text-sm">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-2 bg-gray-800/50 rounded-full">
            <FaRegClock className="h-5 w-5 text-teal-500" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-2 bg-gray-800/50 rounded-full">
            <FaChartLine className="h-5 w-5 text-teal-500" />
            <span className="text-sm">98% Client Satisfaction</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.h1
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Digital Presence
        </motion.h1>

        <motion.p
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Enterprise-grade solutions powered by cutting-edge technology and 5+
          years of industry expertise
        </motion.p>

        {/* CTA Section */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Launch Your Project <FaRocket className="h-5 w-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
          </motion.button>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <SiAwslambda className="h-8 w-8 text-gray-400 hover:text-white transition-colors" />
            <SiGooglecloud className="h-8 w-8 text-gray-400 hover:text-white transition-colors" />
            <FaRocket className="h-8 w-8 text-gray-400 hover:text-white transition-colors" />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Coverage" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
            >
              <div className="text-3xl font-bold text-teal-500">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ServicesHeroSection;
