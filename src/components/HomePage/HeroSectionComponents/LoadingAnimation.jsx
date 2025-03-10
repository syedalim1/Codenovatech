import { motion } from "framer-motion";

const LoadingAnimation = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
      />
    </div>

    <div className="relative">
      <motion.div
        className="w-20 h-20 border-4 border-teal-500 rounded-full"
        animate={{
          rotate: 360,
          borderColor: ["#2dd4bf", "#818cf8", "#e879f9", "#2dd4bf"],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center text-white font-bold"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        AI
      </motion.div>
    </div>
  </div>
);

export default LoadingAnimation; 