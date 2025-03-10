import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTAButtons = ({ fadeIn }) => (
  <motion.div
    className="mt-10 flex flex-wrap items-center justify-center gap-6"
    variants={fadeIn}
  >
    <Link to="/contact" className="relative overflow-hidden group">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl"
        animate={{
          background: [
            "linear-gradient(to right, #14b8a6, #3b82f6)",
            "linear-gradient(to right, #3b82f6, #8b5cf6)",
            "linear-gradient(to right, #8b5cf6, #14b8a6)",
            "linear-gradient(to right, #14b8a6, #3b82f6)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
        animate={{
          background: [
            "linear-gradient(to right, #3b82f6, #8b5cf6)",
            "linear-gradient(to right, #8b5cf6, #ec4899)",
            "linear-gradient(to right, #ec4899, #3b82f6)",
            "linear-gradient(to right, #3b82f6, #8b5cf6)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.span
        className="relative z-10 block text-white font-bold py-4 px-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Your AI Journey Today →
      </motion.span>
    </Link>
    <Link
      to="/portfolio"
      className="text-lg text-teal-400 font-semibold leading-6 hover:text-teal-300 transition-all duration-300 flex items-center gap-2"
    >
      <motion.span
        animate={{
          color: ["#2dd4bf", "#38bdf8", "#2dd4bf"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        View Our AI Solutions
      </motion.span>
      <motion.span
        aria-hidden="true"
        animate={{
          x: [0, 5, 0],
          color: ["#2dd4bf", "#38bdf8", "#2dd4bf"],
        }}
        transition={{
          x: { duration: 1.5, repeat: Infinity },
          color: { duration: 3, repeat: Infinity },
        }}
      >
        →
      </motion.span>
    </Link>
  </motion.div>
);

export default CTAButtons; 