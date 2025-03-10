import { motion } from "framer-motion";

const AITrendsBanner = ({ fadeIn }) => (
  <motion.div 
    className="mt-16 relative overflow-hidden"
    variants={fadeIn}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl" />
    
    <motion.div 
      className="py-6 flex items-center overflow-hidden relative"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear" 
      }}
    >
      {[
        "#AIRevolution", 
        "#MachineLearning", 
        "#DeepLearning", 
        "#NeuralNetworks", 
        "#EdgeAI", 
        "#ComputerVision", 
        "#NLP", 
        "#PredictiveAnalytics",
        "#AIEthics",
        "#ResponsibleAI",
        "#GenerativeAI",
        "#AIInnovation"
      ].map((tag, i) => (
        <motion.span 
          key={i} 
          className="inline-block whitespace-nowrap mx-6 text-xl font-semibold"
          whileHover={{ scale: 1.1, color: "#a5f3fc" }}
        >
          {tag}
        </motion.span>
      )).concat([...Array(12)].map((_, i) => (
        <motion.span 
          key={i + 12} 
          className="inline-block whitespace-nowrap mx-6 text-xl font-semibold"
          whileHover={{ scale: 1.1, color: "#a5f3fc" }}
        >
          {[
            "#AIRevolution", 
            "#MachineLearning", 
            "#DeepLearning", 
            "#NeuralNetworks", 
            "#EdgeAI", 
            "#ComputerVision", 
            "#NLP", 
            "#PredictiveAnalytics",
            "#AIEthics",
            "#ResponsibleAI",
            "#GenerativeAI",
            "#AIInnovation"
          ][i]}
        </motion.span>
      )))}
    </motion.div>
  </motion.div>
);

export default AITrendsBanner; 