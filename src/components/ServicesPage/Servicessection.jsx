import { motion } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaServer,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const services = [
  {
    id: "ai-assistant",
    name: "AI Assistant Solutions",
    description:
      "Revolutionize customer interactions and internal workflows with our custom AI assistant technology powered by large language models. We tailor solutions for various industries, including customer service, IT support, HR, and sales, to enhance efficiency and user experience.",
    features: [
      "Custom AI Chatbots",
      "Workflow Automation",
      "Natural Language Processing",
      "Multi-modal Interactions",
      "Knowledge Base Integration",
      "Continuous Learning Systems",
    ],
    icon: FaRobot,
    caseStudies: [
      {
        title: "Enterprise Support AI",
        result: "85% reduction in support ticket resolution time",
        duration: "4 months",
      },
      {
        title: "Healthcare Virtual Assistant",
        result: "Improved patient engagement by 67%",
        duration: "6 months",
      },
    ],
    technologies: ["GPT-4", "LangChain", "Hugging Face", "Azure OpenAI"],
    color: "from-blue-500 to-purple-600",
    bgPattern: "ai-pattern-1",
  },
  {
    id: "generative-ai",
    name: "Generative AI Solutions",
    description:
      "Leverage the power of generative AI to create content, designs, and solutions that drive innovation and efficiency in your business. We specialize in generating marketing copy, product descriptions, code documentation, UI/UX prototypes, and ad creatives.",
    features: [
      "Custom Large Language Models",
      "Text-to-Image Generation",
      "Content Creation Automation",
      "Code Generation & Analysis",
      "Fine-tuning & RAG Implementation",
      "Ethical AI Frameworks",
    ],
    icon: FaBrain,
    caseStudies: [
      {
        title: "Marketing Content Generator",
        result: "10x content creation efficiency",
        duration: "3 months",
      },
      {
        title: "Legal Document Analysis",
        result: "98% accuracy in document summaries",
        duration: "5 months",
      },
    ],
    technologies: ["DALL-E", "Stable Diffusion", "LLaMA", "Anthropic Claude"],
    color: "from-pink-500 to-orange-500",
    bgPattern: "ai-pattern-2",
  },
  {
    id: "predictive-analytics",
    name: "AI Predictive Analytics",
    description:
      "Transform your data into actionable intelligence with our advanced predictive analytics powered by machine learning algorithms. We offer robust solutions for demand forecasting, customer behavior analysis, anomaly detection, and risk assessment.",
    features: [
      "Demand Forecasting",
      "Customer Behavior Analytics",
      "Anomaly Detection",
      "Risk Assessment Models",
      "Performance Prediction",
      "Time Series Analysis",
    ],
    icon: FaChartLine,
    caseStudies: [
      {
        title: "Retail Inventory Optimization",
        result: "42% reduction in stockouts",
        duration: "4 months",
      },
      {
        title: "Financial Fraud Detection",
        result: "93.7% accuracy in fraud detection",
        duration: "6 months",
      },
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    color: "from-teal-500 to-blue-500",
    bgPattern: "ai-pattern-3",
  },
  {
    id: "ai-infrastructure",
    name: "AI Infrastructure",
    description:
      "Build robust, scalable, and efficient infrastructure for deploying and managing AI models in production environments. We leverage leading cloud platforms and utilize technologies such as Kubernetes clusters and optimized hardware for peak performance.",
    features: [
      "AI Model Deployment",
      "Scalable ML Pipelines",
      "GPU/TPU Optimization",
      "Real-time Inference Systems",
      "Model Monitoring & Observability",
      "MLOps Automation",
    ],
    icon: FaServer,
    caseStudies: [
      {
        title: "Enterprise MLOps Platform",
        result: "99.99% model serving uptime",
        duration: "8 months",
      },
      {
        title: "Real-time Recommendation Engine",
        result: "30ms average inference time",
        duration: "5 months",
      },
    ],
    technologies: ["Kubernetes", "Docker", "TensorFlow Serving", "Ray"],
    color: "from-indigo-600 to-blue-400",
    bgPattern: "ai-pattern-4",
  },
  {
    id: "ai-security",
    name: "AI Security & Ethics",
    description:
      "Ensure your AI systems are secure, compliant, and ethically designed with our comprehensive AI security and governance solutions. We adhere to industry best practices and regulations to protect your data and ensure responsible AI practices.",
    features: [
      "Adversarial Attack Protection",
      "Bias Detection & Mitigation",
      "Privacy-preserving AI",
      "Explainable AI Frameworks",
      "Regulatory Compliance",
      "Ethical AI Governance",
    ],
    icon: FaShieldAlt,
    caseStudies: [
      {
        title: "Healthcare AI Compliance",
        result: "Full HIPAA compliance with 0 violations",
        duration: "3 months",
      },
      {
        title: "Financial Services AI Audit",
        result: "Reduced bias by 94% in credit decisions",
        duration: "4 months",
      },
    ],
    technologies: [
      "Differential Privacy",
      "SHAP",
      "IBM AI Fairness 360",
      "TensorFlow Privacy",
    ],
    color: "from-green-500 to-teal-600",
    bgPattern: "ai-pattern-5",
  },
];

// Neural network animation component
const NeuralNetworkAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 800 600" className="w-full h-full opacity-10">
        <g className="nodes">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 800}
              cy={Math.random() * 600}
              r={Math.random() * 4 + 2}
              fill="white"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </g>
        <g className="connections">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 800}
              y1={Math.random() * 600}
              x2={Math.random() * 800}
              y2={Math.random() * 600}
              stroke="white"
              strokeWidth="0.5"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                strokeWidth: ["0.5px", "1px", "0.5px"],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

// Floating particle effect
const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
            [
              "from-blue-500 to-purple-600",
              "from-pink-500 to-orange-500",
              "from-teal-500 to-blue-500",
            ][i % 3]
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Binary code animation
const BinaryCodeAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col opacity-5">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="text-xs text-white/30 font-mono whitespace-nowrap"
          initial={{ x: -100 }}
          animate={{ x: "100%" }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          {Array.from({ length: 100 })
            .map(() => (Math.random() > 0.5 ? "1" : "0"))
            .join(" ")}
        </motion.div>
      ))}
    </div>
  );
};

// Pulse effect for service selection
const PulseEffect = ({ active }) => {
  return (
    <motion.div
      className={`absolute inset-0 rounded-full ${
        active ? "bg-white" : "bg-transparent"
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        active
          ? {
              opacity: [0, 0.2, 0],
              scale: [0.8, 1.5, 0.8],
            }
          : { opacity: 0, scale: 0.8 }
      }
      transition={
        active
          ? {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {}
      }
      
    />
  );
};
PulseEffect.propTypes = {
  active: PropTypes.bool.isRequired,
};
function ServicesSection() {
  const [activeTab, setActiveTab] = useState("features");
  const [activeService, setActiveService] = useState(services[0].id);
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initialize spotlight effect with a delay
    const timer = setTimeout(() => {
      setShowSpotlight(true);
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const currentService = services.find((s) => s.id === activeService);

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <NeuralNetworkAnimation />
      <ParticleEffect />
      <BinaryCodeAnimation />
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>

      {/* Optional mouse spotlight effect */}
      {showSpotlight && (
        <motion.div
          className="fixed w-64 h-64 rounded-full pointer-events-none mix-blend-overlay opacity-20 z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 242, 255, 0.8) 0%, rgba(0, 212, 255, 0) 70%)",
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          animate={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
        />
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Company Branding */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            CODENOVATECH
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Creating New AI For New Evolution
          </p>

          {/* Launch Announcement */}
          <motion.div
            className="mt-6 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-full inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-medium">
                Revolutionary AI Assistant launching April 4, 2025
              </span>
            </div>
          </motion.div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-teal-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 201, 219, 0.1)",
              }}
            >
              <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-300">AI Models Deployed</p>
            </motion.div>
            <motion.div
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
              }}
            >
              <h3 className="text-4xl font-bold text-white mb-2">99.7%</h3>
              <p className="text-gray-300">Prediction Accuracy</p>
            </motion.div>
            <motion.div
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.1)",
              }}
            >
              <h3 className="text-4xl font-bold text-white mb-2">10x</h3>
              <p className="text-gray-300">Client Efficiency Boost</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Service Navigation */}
        <motion.h2
          className="text-4xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Advanced AI Services
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore our comprehensive suite of AI solutions, designed to empower
          your business with cutting-edge technology and drive transformative
          results.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service) => (
            <motion.button
              key={service.id}
              className={`px-5 py-3 rounded-full transition-all duration-300 relative ${
                activeService === service.id
                  ? `bg-gradient-to-r ${service.color} text-white`
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/70"
              }`}
              onClick={() => setActiveService(service.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PulseEffect active={activeService === service.id} />
              <div className="flex items-center gap-2 relative z-10">
                <service.icon className="h-5 w-5" />
                <span>{service.name}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          {services.map(
            (service) =>
              service.id === activeService && (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className={`relative overflow-hidden bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl border border-${
                    service.color.split("-")[1]
                  }-500/30`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Background pattern - unique for each service */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={service.bgPattern}></div>
                  </div>

                  {/* Service header */}
                  <motion.div
                    className="flex items-center gap-x-4 mb-8"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${service.color}`}
                    >
                      <service.icon
                        className="h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight text-white">
                      {service.name}
                    </h3>
                  </motion.div>

                  {/* Tab navigation */}
                  <div className="flex space-x-4 mb-6">
                    <button
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        activeTab === "features"
                          ? `bg-gradient-to-r ${service.color} text-white`
                          : "bg-gray-900/70 text-gray-300 hover:bg-gray-800/70"
                      }`}
                      onClick={() => setActiveTab("features")}
                    >
                      Features
                    </button>
                    <button
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        activeTab === "caseStudies"
                          ? `bg-gradient-to-r ${service.color} text-white`
                          : "bg-gray-900/70 text-gray-300 hover:bg-gray-800/70"
                      }`}
                      onClick={() => setActiveTab("caseStudies")}
                    >
                      Case Studies
                    </button>
                    <button
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        activeTab === "technologies"
                          ? `bg-gradient-to-r ${service.color} text-white`
                          : "bg-gray-900/70 text-gray-300 hover:bg-gray-800/70"
                      }`}
                      onClick={() => setActiveTab("technologies")}
                    >
                      Technologies
                    </button>
                  </div>

                  {/* Tab content */}
                  <AnimatePresence mode="wait">
                    {activeTab === "features" && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-lg leading-8 text-gray-300 mb-6">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 lg:grid-cols-3">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              className="flex gap-x-3 bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg border border-gray-700/30"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{
                                scale: 1.02,
                                backgroundColor: `rgba(${
                                  service.color.includes("blue")
                                    ? "59, 130, 246"
                                    : service.color.includes("pink")
                                    ? "236, 72, 153"
                                    : "20, 184, 166"
                                }, 0.15)`,
                              }}
                            >
                              <svg
                                className={`h-6 w-5 flex-none text-${
                                  service.color.split("-")[1]
                                }-500`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "caseStudies" && (
                      <motion.div
                        key="caseStudies"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          {service.caseStudies.map((study, index) => (
                            <motion.div
                              key={index}
                              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 relative overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2 }}
                              whileHover={{
                                y: -5,
                                boxShadow: `0 15px 30px -10px rgba(${
                                  service.color.includes("blue")
                                    ? "59, 130, 246"
                                    : service.color.includes("pink")
                                    ? "236, 72, 153"
                                    : "20, 184, 166"
                                }, 0.2)`,
                                borderColor: `rgba(${
                                  service.color.includes("blue")
                                    ? "59, 130, 246"
                                    : service.color.includes("pink")
                                    ? "236, 72, 153"
                                    : "20, 184, 166"
                                }, 0.5)`,
                              }}
                            >
                              {/* Subtle accent decoration */}
                              <div
                                className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-xl`}
                              ></div>

                              <h4 className="text-xl font-bold text-white mb-4 relative">
                                {study.title}
                              </h4>
                              <div
                                className={`inline-block px-3 py-1 rounded-full text-white text-sm mb-3 bg-gradient-to-r ${service.color}`}
                              >
                                Result: {study.result}
                              </div>
                              <p className="text-gray-400 flex items-center gap-2">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                                Timeline: {study.duration}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "technologies" && (
                      <motion.div
                        key="technologies"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-wrap gap-3">
                          {service.technologies.map((tech, index) => (
                            <motion.div
                              key={index}
                              className={`px-4 py-2 bg-gray-900/70 backdrop-blur-sm text-${
                                service.color.split("-")[1]
                              }-400 rounded-full border border-gray-700/50 flex items-center gap-2`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{
                                scale: 1.05,
                                y: -2,
                                boxShadow: `0 10px 20px -5px rgba(${
                                  service.color.includes("blue")
                                    ? "59, 130, 246"
                                    : service.color.includes("pink")
                                    ? "236, 72, 153"
                                    : "20, 184, 166"
                                }, 0.2)`,
                                borderColor: `rgba(${
                                  service.color.includes("blue")
                                    ? "59, 130, 246"
                                    : service.color.includes("pink")
                                    ? "236, 72, 153"
                                    : "20, 184, 166"
                                }, 0.5)`,
                              }}
                            >
                              <span
                                className={`w-2 h-2 rounded-full bg-${
                                  service.color.split("-")[1]
                                }-500`}
                              ></span>
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className={`px-8 py-4 rounded-full bg-gradient-to-r ${currentService.color} text-white font-medium text-lg shadow-lg`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your AI Journey Today
          </motion.button>
          <p className="mt-4 text-gray-400">
            Led by visionary founder Syed Ali M
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesSection;
