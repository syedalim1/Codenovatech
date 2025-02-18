
import { FaRocket } from "react-icons/fa";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
function ServicesHeroSection() {
  return (
    <div>
      {" "}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-24">
        <motion.div
          className="container-custom text-center text-white"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.h1
            className="text-4xl font-bold mb-6 animated-text"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Business with Our Services
          </motion.h1>
          <p className="text-xl mb-8">
            Innovative Solutions for the Digital Age
          </p>
          <motion.button
            className="btn-primary bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <FaRocket className="inline ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesHeroSection;
