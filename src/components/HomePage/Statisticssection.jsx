import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaUser,
  FaAward,
  FaUsers,
  FaProjectDiagram,
  FaRegClock,
  FaChartLine,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const statistics = [
    {
      id: 1,
      name: "Projects Completed",
      value: 250,
      icon: FaProjectDiagram,
      suffix: "+",
      color: "#3E92CC",
    },
    {
      id: 2,
      name: "Client Satisfaction",
      value: 99.9,
      icon: FaUsers,
      suffix: "%",
      color: "#6B46C1",
      decimals: 1,
    },
    {
      id: 3,
      name: "Active Team Members",
      value: 50,
      icon: FaUser,
      suffix: "+",
      color: "#2DD4BF",
    },
    {
      id: 4,
      name: "Industry Awards",
      value: 28,
      icon: FaAward,
      suffix: "+",
      color: "#F59E0B",
    },
    {
      id: 5,
      name: "Support Availability",
      value: 24,
      icon: FaRegClock,
      suffix: "/7",
      color: "#EF4444",
    },
    {
      id: 6,
      name: "Uptime Guarantee",
      value: 99.99,
      icon: FiActivity,
      suffix: "%",
      color: "#10B981",
      decimals: 2,
    },
  ];

  const trustBadges = [
    { text: "ISO 9001 Certified", icon: FaAward },
    { text: "GDPR Compliant", icon: FaChartLine },
    { text: "AWS Partner", icon: FaProjectDiagram },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="relative py-24  overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div ref={statsRef} className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-white mb-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Driving Digital Excellence
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted by industry leaders worldwide - delivering measurable
              results through technical expertise
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <stat.icon
                    className="h-6 w-6"
                    style={{ color: stat.color }}
                  />
                  <h3 className="text-sm font-semibold text-gray-300">
                    {stat.name}
                  </h3>
                </div>

                <div className="text-4xl font-bold text-white mb-2">
                  {isVisible && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ background: stat.color }}
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? "100%" : 0 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5 }}
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

          {/* Tech Stack Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 bg-gray-800/50 rounded-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Node.js",
                  "TensorFlow",
                  "AWS",
                  "GraphQL",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-gray-900/50 text-teal-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ... other sections ... */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default StatisticsSection;
