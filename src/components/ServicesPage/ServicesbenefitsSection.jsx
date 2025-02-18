import { motion } from "framer-motion";
import {
  FaStar,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import { SiAwslambda, SiGooglecloud } from "react-icons/si";

const benefits = [
  {
    icon: FaStar,
    title: "Quality Excellence",
    description: "150+ projects delivered with 98% client satisfaction",
    stat: "ISO 9001 Certified",
    color: "from-purple-500 to-pink-500",
    pattern: "pattern-1",
  },
  {
    icon: FaUsers,
    title: "Expert Team",
    description: "50+ certified developers & cloud specialists",
    stat: "AWS & Google Partners",
    color: "from-teal-500 to-blue-500",
    pattern: "pattern-2",
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    description: "95% projects delivered ahead of schedule",
    stat: "24/7 Support",
    color: "from-orange-500 to-red-500",
    pattern: "pattern-3",
  },
  {
    icon: FaShieldAlt,
    title: "Security First",
    description: "Enterprise-grade security protocols",
    stat: "GDPR Compliant",
    color: "from-green-500 to-cyan-500",
    pattern: "pattern-4",
  },
];

function ServicesBenefitsSection() {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="relative group p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
              />

              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 w-fit mx-auto">
                <benefit.icon className="w-12 h-12 text-teal-500 mx-auto" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-center mb-6">
                {benefit.description}
              </p>
              <div className="flex items-center gap-2 justify-center text-teal-400 text-sm font-medium">
                <FaChartLine className="flex-shrink-0" />
                <span>{benefit.stat}</span>
              </div>

              {/* Pattern Overlay */}
              <div
                className={`absolute inset-0 opacity-10 ${benefit.pattern} pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-gray-800/50 rounded-xl flex items-center gap-4">
            <SiAwslambda className="h-8 w-8 text-orange-500" />
            <div>
              <div className="text-white font-medium">AWS Certified</div>
              <div className="text-gray-400 text-sm">Cloud Infrastructure</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl flex items-center gap-4">
            <SiGooglecloud className="h-8 w-8 text-blue-500" />
            <div>
              <div className="text-white font-medium">Google Cloud</div>
              <div className="text-gray-400 text-sm">Premier Partner</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl flex items-center gap-4">
            <FaShieldAlt className="h-8 w-8 text-teal-500" />
            <div>
              <div className="text-white font-medium">ISO 27001</div>
              <div className="text-gray-400 text-sm">Security Certified</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl flex items-center gap-4">
            <FaRocket className="h-8 w-8 text-purple-500" />
            <div>
              <div className="text-white font-medium">Fast Track</div>
              <div className="text-gray-400 text-sm">Deployment</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style >{`
        .pattern-1 {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
        .pattern-2 {
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.05) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.05) 75%,
            transparent 75%,
            transparent
          );
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}

export default ServicesBenefitsSection;
