import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaRegHandshake,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaLightbulb,
  FaMicrochip,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import ContactModal from "./ContactModal";

function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown to product launch (April 4, 2025)
  useEffect(() => {
    const launchDate = new Date("April 4, 2025").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden  py-24">
      {/* Enhanced AI-themed animated background elements */}
      <AIBackgroundEffects />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company tagline with enhanced animation */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
              Creating New AI For New Evolution
            </h3>
          </motion.div>

          {/* Enhanced trust badges and company metrics */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <MetricBadge
              icon={<FaShieldAlt />}
              value="100+"
              label="AI Models Deployed"
              color="from-cyan-500 to-blue-600"
            />
            <MetricBadge
              icon={<FaChartLine />}
              value="99.7%"
              label="Prediction Accuracy"
              color="from-blue-500 to-indigo-600"
            />
            <MetricBadge
              icon={<FaRobot />}
              value="10x"
              label="Efficiency Improvement"
              color="from-indigo-500 to-purple-600"
            />
          </div>

          {/* Main CTA Content */}
          <div className="text-center">
            <motion.h2
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Unlock the Power of AI for Your Business
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Partner with CODENOVATECH to leverage cutting-edge AI solutions
              and achieve transformative growth through Generative AI,
              Predictive Analytics, Computer Vision, and more.
            </motion.p>

            {/* Enhanced service cards with gradient borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <ServiceCard
                icon={<FaBrain className="text-purple-500" />}
                title="Generative AI"
                description="Create new content, designs, and solutions with our advanced generative models"
                color="from-purple-500 to-indigo-600"
              />
              <ServiceCard
                icon={<FaChartLine className="text-blue-500" />}
                title="Predictive Analytics"
                description="Forecast trends and make data-driven decisions with our AI-powered analytics"
                color="from-blue-500 to-cyan-600"
              />
              <ServiceCard
                icon={<FaRobot className="text-cyan-500" />}
                title="AI Infrastructure"
                description="Robust, scalable infrastructure to power your AI initiatives"
                color="from-cyan-500 to-teal-600"
              />
            </div>

            {/* Additional service cards row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <ServiceCard
                icon={<FaLightbulb className="text-yellow-500" />}
                title="Innovation Lab"
                description="Custom AI solutions tailored to your unique business challenges"
                color="from-yellow-500 to-orange-600"
              />
              <ServiceCard
                icon={<FaMicrochip className="text-red-500" />}
                title="Edge AI"
                description="Deploy AI models directly on edge devices for real-time processing"
                color="from-red-500 to-pink-600"
              />
              <ServiceCard
                icon={<FaDatabase className="text-green-500" />}
                title="Data Engineering"
                description="Transform raw data into actionable insights with our data pipeline solutions"
                color="from-green-500 to-teal-600"
              />
            </div>

            {/* Enhanced product launch countdown */}
            <motion.div
              className="mb-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 max-w-3xl mx-auto border border-gray-700 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Revolutionary AI Assistant Launching In:
              </h3>
              <div className="flex justify-center gap-4">
                <CountdownUnit
                  value={countdown.days}
                  label="Days"
                  color="from-purple-600 to-indigo-700"
                />
                <CountdownUnit
                  value={countdown.hours}
                  label="Hours"
                  color="from-indigo-600 to-blue-700"
                />
                <CountdownUnit
                  value={countdown.minutes}
                  label="Minutes"
                  color="from-blue-600 to-cyan-700"
                />
                <CountdownUnit
                  value={countdown.seconds}
                  label="Seconds"
                  color="from-cyan-600 to-teal-700"
                />
              </div>
            </motion.div>

            {/* Enhanced animated CTA button */}
            <motion.button
              className="relative overflow-hidden px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full font-bold text-white text-lg group shadow-lg shadow-blue-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              <span className="relative z-10">Start Your AI Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.6) 0%, rgba(0, 0, 0, 0) 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(56, 189, 248, 0.6) 0%, rgba(0, 0, 0, 0) 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.6) 0%, rgba(0, 0, 0, 0) 50%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>

            {/* Enhanced trust badges row */}
            <div className="flex flex-wrap justify-center gap-4 mt-16">
              <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md">
                <FaShieldAlt className="text-cyan-400" />
                <span className="text-gray-300 text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md">
                <SiTrustpilot className="text-green-400" />
                <span className="text-gray-300 text-sm">4.9/5 Trustpilot</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md">
                <FaRegHandshake className="text-purple-400" />
                <span className="text-gray-300 text-sm">NDA Protected</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md">
                <FaNetworkWired className="text-blue-400" />
                <span className="text-gray-300 text-sm">Enterprise Ready</span>
              </div>
            </div>

            {/* Enhanced founder message */}
            <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 italic mb-4">
                "We're committed to innovation, integrity, collaboration, and
                excellence in every AI solution we deliver."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SA
                </div>
                <p className="text-gray-300 font-medium ml-4 text-left">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Syed Ali M
                  </span>
                  <br />
                  <span className="text-sm text-gray-400">Founder & CEO</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}

// Enhanced AI-themed animated background
function AIBackgroundEffects() {
  return (
    <>
      {/* Enhanced neural network visualization */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="grid-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="url(#grid-gradient)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Enhanced floating particles with different colors */}
      {[...Array(30)].map((_, i) => {
        const colors = [
          "rgba(56, 189, 248, 0.6)", // cyan
          "rgba(59, 130, 246, 0.6)", // blue
          "rgba(139, 92, 246, 0.6)", // purple
          "rgba(236, 72, 153, 0.6)", // pink
          "rgba(16, 185, 129, 0.6)", // green
        ];
        const color = colors[i % colors.length];

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 12 + 5,
              height: Math.random() * 12 + 5,
              backgroundColor: color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 8px ${color}`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      })}

      {/* Digital circuit lines */}
      {[...Array(15)].map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const width = Math.random() * 300 + 100;
        const height = Math.random() * 2 + 1;
        const colors = [
          "rgba(56, 189, 248, 0.3)", // cyan
          "rgba(139, 92, 246, 0.3)", // purple
          "rgba(16, 185, 129, 0.3)", // green
        ];
        const color = colors[i % colors.length];

        return (
          <motion.div
            key={`line-${i}`}
            className="absolute rounded-full"
            style={{
              width,
              height,
              backgroundColor: color,
              left: `${startX}%`,
              top: `${startY}%`,
              boxShadow: `0 0 5px ${color}`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      })}

      {/* Enhanced animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
            "radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
            "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
            "radial-gradient(circle at 60% 30%, rgba(236, 72, 153, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
            "radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
}

// Enhanced reusable components
function MetricBadge({ icon, value, label, color }) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-2 px-6 py-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg relative overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-gradient-to-r from-blue-400 to-purple-400 text-3xl relative z-10">
        {icon}
      </div>
      <span className={`text-white text-3xl font-bold relative z-10`}>
        {value}
      </span>
      <span className="text-gray-300 text-sm relative z-10">{label}</span>
      <motion.div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
    </motion.div>
  );
}

function ServiceCard({ icon, title, description, color }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 text-left relative overflow-hidden border border-gray-700 shadow-lg group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="text-3xl mb-4 relative z-10">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-2 relative z-10">
        {title}
      </h3>
      <p className="text-gray-300 relative z-10">{description}</p>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      <motion.div
        className={`absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r ${color}`}
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

function CountdownUnit({ value, label, color }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`bg-gradient-to-b ${color} rounded-lg w-20 h-20 flex items-center justify-center text-3xl font-bold text-white shadow-lg overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {value}
      </motion.div>
      <span className="text-gray-300 text-sm mt-2 font-medium">{label}</span>
    </div>
  );
}

export default CallToAction;
