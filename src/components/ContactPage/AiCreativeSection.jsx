import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaMicrochip, FaCode, FaNetworkWired, FaDatabase } from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const staggerItems = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const aiServices = [
  {
    title: "Cognitive AI Solutions",
    description: "Harness the power of deep learning models for advanced pattern recognition and data analysis",
    icon: FaBrain,
    color: "from-pink-500 to-purple-600",
  },
  {
    title: "Neural Network Architecture",
    description: "Custom-designed neural networks optimized for your specific business challenges",
    icon: FaNetworkWired,
    color: "from-blue-500 to-teal-600",
  },
  {
    title: "Machine Learning Integration",
    description: "Integrate cutting-edge machine learning algorithms into your existing systems",
    icon: FaRobot,
    color: "from-green-500 to-blue-600",
  },
  {
    title: "Computer Vision Systems",
    description: "Develop visual recognition systems for object detection, segmentation, and classification",
    icon: FaMicrochip,
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Intelligent Data Processing",
    description: "Transform raw data into actionable insights through our intelligent processing pipelines",
    icon: FaDatabase,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "AI Development Consulting",
    description: "Strategic consulting for implementing AI solutions tailored to your business objectives",
    icon: FaCode,
    color: "from-red-500 to-pink-600",
  },
];

const AiCreativeSection = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-teal-500/30 to-transparent rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-blue-500/30 to-transparent rounded-full filter blur-3xl opacity-20 transform translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 container-custom">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-lg font-semibold leading-7 text-teal-400 mb-3 flex items-center justify-center gap-2">
            <FaRobot className="h-5 w-5" />
            AI-Powered Innovation
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gradient bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl">
            Cutting-Edge AI Solutions
          </p>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Leverage our expertise in artificial intelligence to transform your business with intelligent, adaptive systems that learn and evolve.
          </p>
        </motion.div>

        {/* 3D AI Brain Visualization */}
        <motion.div 
          className="mb-20 flex justify-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={floatAnimation}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full opacity-30 animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full opacity-40 animate-pulse animation-delay-1000" />
            <div className="absolute inset-8 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full opacity-50 animate-pulse animation-delay-2000" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaBrain className="w-32 h-32 text-white opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* AI Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerItems}
        >
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl"
              variants={itemAnimation}
            >
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-8 rounded-xl h-full hover:shadow-teal-500/10 hover:shadow-lg transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="mb-5 inline-flex items-center justify-center p-4 bg-gray-800/50 rounded-xl">
                  <service.icon className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Technology Stack */}
        <motion.div 
          className="mt-20 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-white mb-10">
            Our AI Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {["TensorFlow", "PyTorch", "Keras", "OpenAI", "Scikit-Learn", "CUDA", "NVIDIA", "Azure AI"].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-teal-500 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-white">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AiCreativeSection;
