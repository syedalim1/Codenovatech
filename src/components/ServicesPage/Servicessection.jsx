import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaServer, FaDatabase, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "ai-assistant",
    name: "AI Assistant Solutions",
    description:
      "Revolutionize customer interactions and internal workflows with our custom AI assistant technology powered by large language models.",
    features: [
      "Custom AI Chatbots",
      "Workflow Automation",
      "Natural Language Processing",
      "Multi-modal Interactions",
      "Knowledge Base Integration",
      "Continuous Learning Systems"
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
      }
    ],
    technologies: ["GPT-4", "LangChain", "Hugging Face", "Azure OpenAI"],
  },
  {
    id: "generative-ai",
    name: "Generative AI Solutions",
    description:
      "Leverage the power of generative AI to create content, designs, and solutions that drive innovation and efficiency in your business.",
    features: [
      "Custom Large Language Models",
      "Text-to-Image Generation",
      "Content Creation Automation",
      "Code Generation & Analysis",
      "Fine-tuning & RAG Implementation",
      "Ethical AI Frameworks"
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
      }
    ],
    technologies: ["DALL-E", "Stable Diffusion", "LLaMA", "Anthropic Claude"],
  },
  {
    id: "predictive-analytics",
    name: "AI Predictive Analytics",
    description:
      "Transform your data into actionable intelligence with our advanced predictive analytics powered by machine learning algorithms.",
    features: [
      "Demand Forecasting",
      "Customer Behavior Analytics",
      "Anomaly Detection",
      "Risk Assessment Models",
      "Performance Prediction",
      "Time Series Analysis"
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
      }
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    id: "ai-infrastructure",
    name: "AI Infrastructure",
    description:
      "Build robust, scalable, and efficient infrastructure for deploying and managing AI models in production environments.",
    features: [
      "AI Model Deployment",
      "Scalable ML Pipelines",
      "GPU/TPU Optimization",
      "Real-time Inference Systems",
      "Model Monitoring & Observability",
      "MLOps Automation"
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
      }
    ],
    technologies: ["Kubernetes", "Docker", "TensorFlow Serving", "Ray"],
  },
  {
    id: "ai-security",
    name: "AI Security & Ethics",
    description:
      "Ensure your AI systems are secure, compliant, and ethically designed with our comprehensive AI security and governance solutions.",
    features: [
      "Adversarial Attack Protection",
      "Bias Detection & Mitigation",
      "Privacy-preserving AI",
      "Explainable AI Frameworks",
      "Regulatory Compliance",
      "Ethical AI Governance"
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
      }
    ],
    technologies: ["Differential Privacy", "SHAP", "IBM AI Fairness 360", "TensorFlow Privacy"],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const slideIn = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

function Servicessection() {
  const [activeTab, setActiveTab] = useState("features");
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <div>
      {/* Service Navigation */}
      <div className="mb-12">
        <motion.h2 
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Advanced AI Services
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <motion.button
              key={service.id}
              className={`px-5 py-3 rounded-full transition-all duration-300 ${
                activeService === service.id 
                  ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveService(service.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <service.icon className="h-5 w-5" />
                <span>{service.name}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {services.map((service) => (
        service.id === activeService && (
          <motion.div
            key={service.id}
            id={service.id}
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <motion.div
              className="flex items-center gap-x-3 mb-6"
              variants={slideIn}
            >
              <service.icon
                className="h-12 w-12 flex-none text-teal-500"
                aria-hidden="true"
              />
              <h3 className="text-3xl font-bold tracking-tight text-white">
                {service.name}
              </h3>
            </motion.div>

            <div className="mt-6">
              <div className="flex space-x-4 mb-6">
                <button
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === "features" 
                      ? "bg-teal-500 text-white" 
                      : "bg-gray-900 text-gray-300 hover:bg-teal-900/50"
                  }`}
                  onClick={() => setActiveTab("features")}
                >
                  Features
                </button>
                <button
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === "caseStudies" 
                      ? "bg-teal-500 text-white" 
                      : "bg-gray-900 text-gray-300 hover:bg-teal-900/50"
                  }`}
                  onClick={() => setActiveTab("caseStudies")}
                >
                  Case Studies
                </button>
                <button
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === "technologies" 
                      ? "bg-teal-500 text-white" 
                      : "bg-gray-900 text-gray-300 hover:bg-teal-900/50"
                  }`}
                  onClick={() => setActiveTab("technologies")}
                >
                  Technologies
                </button>
              </div>

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
                    <div className="grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <motion.div
                          key={feature}
                          className="flex gap-x-3 bg-gray-900/50 p-4 rounded-lg"
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(45, 212, 191, 0.1)" }}
                        >
                          <svg
                            className="h-6 w-5 flex-none text-teal-500"
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
                          className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-teal-500/30"
                          whileHover={{ y: -5 }}
                        >
                          <h4 className="text-xl font-bold text-white mb-2">{study.title}</h4>
                          <p className="text-teal-400 font-semibold mb-1">Result: {study.result}</p>
                          <p className="text-gray-400">Timeline: {study.duration}</p>
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
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-gray-900/70 text-teal-300 rounded-full"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )
      ))}
    </div>
  );
}

export default Servicessection;
