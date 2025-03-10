import { motion } from "framer-motion";

const AITechnologiesSection = ({ fadeIn }) => (
  <motion.div 
    className="mt-12 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-white/10 shadow-lg"
    variants={fadeIn}
    whileHover={{ scale: 1.01 }}
  >
    <h2 className="text-2xl font-bold text-center mb-6 text-white">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        Our AI Technologies
      </span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[
        {
          icon: "🤖",
          title: "Generative AI",
          description: "Create content, images, and code with our advanced generative models. Enhance creativity and automate content production.",
          color: "from-blue-500 to-indigo-600"
        },
        {
          icon: "📊",
          title: "Predictive Analytics",
          description: "Make data-driven decisions with our predictive models. Forecast trends and anticipate market changes with accuracy.",
          color: "from-teal-500 to-emerald-600"
        },
        {
          icon: "👁️",
          title: "Computer Vision",
          description: "Automate visual inspection, enhance security systems, and extract insights from images and video streams.",
          color: "from-purple-500 to-pink-600"
        }
      ].map((tech, i) => (
        <motion.div 
          key={i}
          className="relative bg-gray-800/50 rounded-xl p-6 border border-white/5 overflow-hidden group"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />
          <motion.div
            className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-2xl mb-4 relative z-10"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {tech.icon}
          </motion.div>
          <h3 className="text-xl font-semibold text-white mb-2 relative z-10">{tech.title}</h3>
          <p className="text-gray-300 relative z-10">{tech.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default AITechnologiesSection; 