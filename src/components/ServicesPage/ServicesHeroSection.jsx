import { FaBrain, FaMicrochip, FaRobot } from "react-icons/fa";
import { SiTensorflow, SiOpenai, SiNvidia } from "react-icons/si";
import { motion } from "framer-motion";
import AiNetworkAnimation from "./AiNetworkAnimation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const floatingAnimation = (delay = 0) => ({
  animate: {
    y: [0, -40, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      delay,
      duration: 8 + Math.random() * 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

function ServicesHeroSection() {
  return (
    <div className="relative overflow-hidden py-24 ">
      {/* AI Neural Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
          />
        </div>
        <AiNetworkAnimation />

        {/* Floating AI Nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border-2 border-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingAnimation(i * 0.3)}
            animate="animate"
          />
        ))}

        {/* Pulsating AI Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-radial-gradient(from-purple-500 to-transparent)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <div className="absolute inset-0 border-2 border-purple-400/20 rounded-full blur-lg" />
        </motion.div>
      </div>

      <motion.div
        className="container-custom text-center text-white relative z-10"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Company Identity */}
        <div className="mb-8">
          <motion.div
            className="text-sm font-mono text-teal-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            NEURAFLOW AI
          </motion.div>
          <motion.h1
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              backgroundImage: [
                "linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)",
                "linear-gradient(to right, #a855f7, #22d3ee, #3b82f6)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            Intelligent Cognitive Systems
          </motion.h1>
        </div>

        {/* AI Product Features */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {["Machine Learning", "Neural Networks", "Predictive Analytics"].map(
            (text, i) => (
              <motion.div
                key={text}
                className="p-6 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 hover:border-teal-400/30 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-teal-400 mb-3">
                  {i === 0 ? (
                    <FaBrain size={28} />
                  ) : i === 1 ? (
                    <FaMicrochip size={28} />
                  ) : (
                    <FaRobot size={28} />
                  )}
                </div>
                <div className="font-semibold">{text}</div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* AI Platform Integration */}
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Build AI Solution <FaMicrochip className="h-5 w-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
          </motion.button>

          {/* AI Partner Stack */}
          <div className="flex justify-center gap-12 opacity-80 hover:opacity-100 transition-opacity">
            <SiOpenai className="h-12 w-12 text-white/90 hover:text-white transition-colors" />
            <SiTensorflow className="h-12 w-12 text-orange-500/90 hover:text-orange-400 transition-colors" />
            <SiNvidia className="h-12 w-12 text-green-500/90 hover:text-green-400 transition-colors" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ServicesHeroSection;
