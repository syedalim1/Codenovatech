import { motion } from "framer-motion";
import { useMemo } from "react";

const AIStatistics = ({ fadeIn, animate = true }) => {
  // Pre-compute statistics data to avoid recreating on each render
  const statsData = useMemo(() => [
    { value: "83%", label: "of businesses consider AI a strategic priority", icon: "📈" },
    { value: "2.5x", label: "higher growth rate for AI-adopting companies", icon: "🚀" },
    { value: "40%", label: "efficiency boost reported by our clients", icon: "⚡" },
    { value: "97%", label: "client satisfaction with our AI solutions", icon: "🏆" }
  ], []);

  return (
    <motion.div 
      className="mt-16 bg-gray-900/30 rounded-2xl p-8 border border-white/5"
      variants={fadeIn}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-500">
          AI Industry Insights
        </span>
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {statsData.map((stat, i) => (
          <div 
            key={i}
            className={`text-center ${animate ? 'animate-fade-in gpu' : ''}`}
            style={{ 
              animationDelay: `${i * 0.1}s`,
              opacity: animate ? 1 : 0.8
            }}
          >
            <div
              className={`text-4xl md:text-5xl font-bold text-white mb-2 ${animate ? 'gpu' : ''}`}
              style={{
                animation: animate ? `pulse ${5 + i * 0.5}s infinite alternate ease-in-out` : 'none',
                animationDelay: `${i * 0.5}s`
              }}
            >
              {stat.value}
            </div>
            <div className="text-2xl mb-2">{stat.icon}</div>
            <p className="text-gray-300 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIStatistics; 