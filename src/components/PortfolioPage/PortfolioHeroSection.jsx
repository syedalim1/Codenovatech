import { FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
function PortfolioHeroSection() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-bg py-24">
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
            Discover Our Success Stories
          </motion.h1>
          <p className="text-xl mb-8">
            Innovative Solutions for the Digital Age
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us <FaChartLine className="inline ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default PortfolioHeroSection;
