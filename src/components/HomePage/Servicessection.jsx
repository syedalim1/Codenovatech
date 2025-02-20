import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaRegClock,
  FaAward,
  FaProjectDiagram,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function ServicesSection() {
  const services = [
    {
      name: "Custom Web Development",
      description:
        "Build scalable, responsive web applications with modern tech stack",
      icon: FaCode,
      href: "/services#web",
      stats: "100+ Projects Delivered",
      tech: ["React", "Next.js", "Node.js", "GraphQL"],
    },
    {
      name: "Mobile App Development",
      description:
        "Native & cross-platform mobile solutions for iOS and Android",
      icon: FaMobile,
      href: "/services#app",
      stats: "98% Client Satisfaction",
      tech: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      name: "AI & Machine Learning",
      description:
        "Enterprise-grade AI solutions with measurable business impact",
      icon: FaRobot,
      href: "/services#ai",
      stats: "40% Avg. Efficiency Boost",
      tech: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    },
    {
      name: "API Development",
      description: "Secure, scalable APIs with comprehensive documentation",
      icon: FaServer,
      href: "/services#api",
      stats: "99.9% Uptime Guarantee",
      tech: ["REST", "gRPC", "WebSocket", "OAuth2"],
    },
  ];

  const trustBadges = [
    { icon: FaShieldAlt, text: "GDPR Compliant" },

    { icon: FaRegClock, text: "24/7 Support" },
    { text: "ISO 9001 Certified", icon: FaAward },

    { text: "AWS Partner", icon: FaProjectDiagram },
  ];

  return (
    <div className="relative  py-24 sm:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
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
            Our Expertise
          </h2>
          <p className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Transformative Digital Solutions
          </p>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate your digital transformation with our full-stack expertise
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-800/50 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/30 hover:border-teal-500/20 transition-all"
            >
              {/* Service Icon & Image */}
              <div className="flex items-center gap-4 mb-6">
                <service.icon className="h-8 w-8 text-teal-500" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.name}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-900/50 text-sm text-teal-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats & CTA */}
              <div className="border-t border-gray-700/50 pt-6">
                <p className="text-sm text-teal-400 font-medium mb-4">
                  {service.stats}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors"
                >
                  Explore Service
                  <FiArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700/30"
            >
              <badge.icon className="h-5 w-5 text-teal-500" />
              <span className="text-gray-300 text-sm font-medium">
                {badge.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Performance Metrics */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <div className="text-4xl font-bold text-teal-500 mb-2">100+</div>
            <div className="text-gray-400">Projects Completed</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <div className="text-4xl font-bold text-teal-500 mb-2">99.9%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <div className="text-4xl font-bold text-teal-500 mb-2">24/7</div>
            <div className="text-gray-400">Support Availability</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800/50 rounded-xl"
          >
            <div className="text-4xl font-bold text-teal-500 mb-2">ISO</div>
            <div className="text-gray-400">Certified Processes</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
