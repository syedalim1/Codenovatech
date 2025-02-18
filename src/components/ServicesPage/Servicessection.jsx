import { motion } from "framer-motion";
import { FaCode, FaMobile, FaRobot, FaServer } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
const services = [
  {
    id: "web",
    name: "Web Development",
    description:
      "Create stunning, responsive websites and web applications that deliver exceptional user experiences.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Content Management Systems",
      "Website Maintenance & Support",
      "Performance Optimization",
    ],
    icon: FaCode,
    caseStudies: [
      {
        title: "E-commerce Platform",
        result: "150% increase in online sales",
        duration: "3 months",
      },
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: "app",
    name: "App Development",
    description:
      "Build powerful mobile applications that engage users and drive business growth.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Solutions",
      "App UI/UX Design",
      "App Testing & QA",
      "App Store Optimization",
    ],
    icon: FaMobile,
    caseStudies: [
      {
        title: "Food Delivery App",
        result: "1M+ downloads",
        duration: "4 months",
      },
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Swift"],
  },
  {
    id: "ai",
    name: "AI Solutions",
    description:
      "Leverage artificial intelligence to automate processes and gain valuable insights.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Integration Services",
      "Custom AI Development",
    ],
    icon: FaRobot,
    caseStudies: [
      {
        title: "Predictive Analytics System",
        result: "40% reduction in operational costs",
        duration: "6 months",
      },
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "scikit-learn"],
  },
  {
    id: "api",
    name: "API Services",
    description:
      "Design and develop robust APIs that enable seamless integration and scalability.",
    features: [
      "RESTful API Development",
      "GraphQL APIs",
      "API Integration",
      "API Documentation",
      "API Security",
      "API Maintenance",
    ],
    icon: FaServer,
    caseStudies: [
      {
        title: "Payment Gateway API",
        result: "99.99% uptime achieved",
        duration: "2 months",
      },
    ],
    technologies: ["REST", "GraphQL", "Node.js", "Docker"],
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

  return (
    <div>
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          id={service.id}
          className={`flex flex-col lg:flex-row gap-x-8 gap-y-16 ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          } py-24 ${
            index !== services.length - 1 ? "border-b border-gray-700" : ""
          }`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="lg:w-1/2">
            <motion.div
              className="flex items-center gap-x-3"
              variants={slideIn}
            >
              <service.icon
                className="h-8 w-8 flex-none text-primary"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {service.name}
              </h3>
            </motion.div>

            <div className="mt-6">
              <div className="flex space-x-4 mb-6">
                <button
                  className={`px-4 py-2 rounded-full ${
                    activeTab === "features"
                      ? "bg-primary text-white"
                      : "bg-gray-700 text-gray-300"
                  } hover:bg-primary hover:text-white transition-all duration-300`}
                  onClick={() => setActiveTab("features")}
                >
                  Features
                </button>
                <button
                  className={`px-4 py-2 rounded-full ${
                    activeTab === "case-studies"
                      ? "bg-primary text-white"
                      : "bg-gray-700 text-gray-300"
                  } hover:bg-primary hover:text-white transition-all duration-300`}
                  onClick={() => setActiveTab("case-studies")}
                >
                  Case Studies
                </button>
                <button
                  className={`px-4 py-2 rounded-full ${
                    activeTab === "tech"
                      ? "bg-primary text-white"
                      : "bg-gray-700 text-gray-300"
                  } hover:bg-primary hover:text-white transition-all duration-300`}
                  onClick={() => setActiveTab("tech")}
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
                    <ul className="grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <motion.li
                          key={feature}
                          className="flex gap-x-3"
                          whileHover={{ x: 5 }}
                        >
                          <svg
                            className="h-6 w-5 flex-none text-primary"
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
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {activeTab === "case-studies" && (
                  <motion.div
                    key="case-studies"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {service.caseStudies.map((study, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-gray-700 p-6 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-lg mb-2 text-white">
                          {study.title}
                        </h4>
                        <p className="text-primary font-medium">
                          {study.result}
                        </p>
                        <p className="text-sm text-gray-300">
                          Duration: {study.duration}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "tech" && (
                  <motion.div
                    key="tech"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    {service.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2 bg-gray-700 rounded-full text-sm text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              className="w-full aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center glass-effect"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <service.icon
                className="h-24 w-24 text-primary/40"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Servicessection;
