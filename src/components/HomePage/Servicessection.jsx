import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaRegClock,
  FaAward,
  FaProjectDiagram,
  FaBrain,
  FaDatabase,
  FaCloudUploadAlt,
  FaRocket,
  FaMagic,
  FaLightbulb,
  FaCogs,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { SiTensorflow, SiPytorch } from "react-icons/si";

function ServicesSection() {
  const services = [
    {
      name: "Revolutionary AI Assistant",
      description:
        "Our flagship AI product designed to transform how you work with artificial intelligence",
      icon: FaRocket,
      href: "/services#ai-assistant",
      stats: "Coming April 4, 2025",
      tech: [
        "Natural Language",
        "Task Automation",
        "Personalization",
        "Multi-modal",
      ],
      color: "from-purple-500 to-pink-600",
      featured: true,
    },
    {
      name: "Generative AI Solutions",
      description:
        "Custom large language models and generative AI tailored to your business needs",
      icon: FaBrain,
      href: "/services#generative-ai",
      stats: "85% Reduction in Content Creation Time",
      tech: ["GPT Architecture", "Fine-tuning", "RAG", "Prompt Engineering"],
      color: "from-indigo-500 to-blue-600",
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven forecasting and decision support systems",
      icon: FaChartLine,
      href: "/services#predictive-analytics",
      stats: "93% Prediction Accuracy",
      tech: [
        "Machine Learning",
        "Time Series",
        "Anomaly Detection",
        "Forecasting",
      ],
      color: "from-blue-500 to-teal-500",
    },
    {
      name: "Computer Vision",
      description:
        "Advanced image and video analysis for automation and insights",
      icon: FaRobot,
      href: "/services#computer-vision",
      stats: "99.7% Object Detection Accuracy",
      tech: ["Object Detection", "Image Segmentation", "OCR", "Video Analysis"],
      color: "from-amber-500 to-red-600",
    },
    {
      name: "AI Infrastructure",
      description:
        "Scalable, secure infrastructure for deploying AI at enterprise scale",
      icon: FaServer,
      href: "/services#ai-infrastructure",
      stats: "99.99% Uptime SLA",
      tech: [
        "Kubernetes",
        "GPU Clusters",
        "Model Serving",
        "Distributed Training",
      ],
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "AI Security & Compliance",
      description:
        "Ensuring your AI systems are secure, ethical, and compliant",
      icon: FaShieldAlt,
      href: "/services#ai-security",
      stats: "GDPR & CCPA Compliant",
      tech: [
        "Adversarial Testing",
        "Bias Detection",
        "Privacy Preservation",
        "Auditing",
      ],
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const trustBadges = [
    { icon: FaShieldAlt, text: "GDPR Compliant" },
    { icon: FaRegClock, text: "24/7 Support" },
    { text: "ISO 27001 Certified", icon: FaAward },
    { text: "AI Ethics Certified", icon: FaProjectDiagram },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <motion.radialGradient
                id="grad1"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
                animate={{
                  cx: ["30%", "70%", "30%"],
                  cy: ["30%", "70%", "30%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
              </motion.radialGradient>
              <motion.radialGradient
                id="grad2"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
                animate={{
                  cx: ["70%", "30%", "70%"],
                  cy: ["70%", "30%", "70%"],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
              </motion.radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#grad1)" />
            <rect x="0" y="0" width="100" height="100" fill="url(#grad2)" />
          </svg>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100, 0],
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg font-semibold text-teal-500 tracking-wide uppercase">
            AI Expertise
          </h2>
          <p className="mt-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 sm:text-5xl">
            Transformative AI Solutions
          </p>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate your business transformation with our cutting-edge
            artificial intelligence solutions
          </p>
        </motion.div>

        {/* Featured Product Announcement */}
        <motion.div
          className="mt-16 mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 p-1">
            <div className="bg-gray-900 p-8 rounded-[calc(1.5rem-4px)] relative overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-[calc(1.5rem-4px)]"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    background: [
                      "linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))",
                      "linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3))",
                      "linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <motion.div
                        className="h-3 w-3 rounded-full bg-teal-400"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-teal-400 font-semibold">
                        Coming Soon
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      Introducing Our Revolutionary AI Assistant
                    </h3>

                    <p className="text-gray-300 mb-6">
                      Our flagship AI product is designed to transform how
                      businesses and individuals interact with artificial
                      intelligence. Launching April 4, 2025.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        "Natural Language",
                        "Task Automation",
                        "Personalization",
                        "Multi-modal",
                      ].map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-teal-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg text-white font-semibold"
                      >
                        <span>Get Early Access</span>
                        <FiArrowUpRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/3 aspect-square relative">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-full h-full border-4 border-dashed border-blue-500/30 rounded-full" />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-3/4 h-3/4 border-4 border-dashed border-purple-500/30 rounded-full" />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaRocket className="h-10 w-10 text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="initial"
          animate="animate"
        >
          {services
            .filter((service) => !service.featured)
            .map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all overflow-hidden"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} blur-xl`}
                  />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} opacity-20 blur-md`}
                  />
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${service.color}`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Stats */}
                <div className="mb-6 flex items-center">
                  <FaAward className="h-5 w-5 text-teal-500 mr-2" />
                  <span className="text-teal-400 text-sm font-medium">
                    {service.stats}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-teal-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to={service.href}
                  className="inline-flex items-center text-sm font-medium text-teal-500 hover:text-teal-400 transition-colors"
                >
                  <span>Learn more</span>
                  <motion.span
                    className="ml-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
        </motion.div>

        {/* Trust Badges with animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.text}
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30 hover:border-teal-500/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <badge.icon className="h-5 w-5 text-teal-500" />
              <span className="text-gray-300 text-sm font-medium">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Metrics with enhanced animations */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-purple-500/30 transition-all overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
              100+
            </div>
            <div className="text-gray-300">AI Models Deployed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 mb-2">
              99.7%
            </div>
            <div className="text-gray-300">Prediction Accuracy</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-amber-500/30 transition-all overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 mb-2">
              24/7
            </div>
            <div className="text-gray-300">AI Monitoring</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-green-500/30 transition-all overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2">
              10x
            </div>
            <div className="text-gray-300">Efficiency Improvement</div>
          </motion.div>
        </div>

        {/* Framework logos */}
        <motion.div
          className="mt-16 flex justify-center gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.div
            className="text-gray-400 flex items-center gap-2"
            whileHover={{ scale: 1.1, color: "#FF6F00" }}
          >
            <SiTensorflow className="h-8 w-8" />
            <span className="text-sm font-medium">TensorFlow</span>
          </motion.div>

          <motion.div
            className="text-gray-400 flex items-center gap-2"
            whileHover={{ scale: 1.1, color: "#EE4C2C" }}
          >
            <SiPytorch className="h-8 w-8" />
            <span className="text-sm font-medium">PyTorch</span>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to transform your business with AI?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement cutting-edge AI
            solutions tailored to your specific needs.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl text-white font-semibold shadow-lg"
            >
              <span>Schedule a Consultation</span>
              <FiArrowUpRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesSection;
