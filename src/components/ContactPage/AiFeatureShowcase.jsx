import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaLightbulb, FaChartLine, FaShieldAlt, FaUserCog, FaBrain } from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const aiFeatures = [
  {
    title: "Predictive Analytics",
    description: "Harness the power of predictive models to anticipate market trends and customer behaviors",
    icon: FaChartLine,
    color: "from-blue-400 to-purple-500",
  },
  {
    title: "Smart Automation",
    description: "Intelligent automation solutions that adapt to your business processes and optimize workflows",
    icon: FaRobot,
    color: "from-teal-400 to-blue-500",
  },
  {
    title: "Cognitive Intelligence",
    description: "Advanced cognitive systems that mimic human-like understanding and decision-making",
    icon: FaBrain,
    color: "from-pink-400 to-red-500",
  },
  {
    title: "AI Security Systems",
    description: "AI-powered security solutions that learn and evolve to protect against emerging threats",
    icon: FaShieldAlt,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Personalization Engines",
    description: "Create customized user experiences that adapt in real-time based on behavior patterns",
    icon: FaUserCog,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Innovation Platforms",
    description: "Scalable AI platforms that power continuous innovation and digital transformation",
    icon: FaLightbulb,
    color: "from-purple-400 to-indigo-500",
  },
];

const AiFeatureShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full filter blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Business Transformation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our cutting-edge AI technologies can revolutionize your business operations and drive sustainable growth.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 group"
            >
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
              <div className={`h-1.5 w-full bg-gradient-to-r ${feature.color}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Visual AI Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/30 via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0 w-48 h-48 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-30 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-40 animate-pulse animation-delay-1000" />
                <div className="absolute inset-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-60 animate-pulse animation-delay-2000" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaRobot className="w-20 h-20 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Ready to Experience the AI Advantage?
                </h3>
                <p className="text-gray-300 mb-6">
                  Schedule a personalized demo to see how our AI solutions can address your specific business challenges and transform your operations.
                </p>
                <motion.button 
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule AI Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiFeatureShowcase;
