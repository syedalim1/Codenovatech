import React from "react";
import {
  FaChartLine,
  FaCode,
  FaNewspaper,
  FaUser,
  FaAward,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { SiGooglecloud, SiAwslambda } from "react-icons/si";

function StatisticsSection1() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stats = [
    {
      icon: FaChartLine,
      value: 150,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successful deployments across multiple industries",
    },
    {
      icon: FaUser,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently high client feedback scores",
    },
    {
      icon: FaCode,
      value: 50,
      suffix: "+",
      label: "Technologies Used",
      description: "Cutting-edge tools and frameworks",
    },
    {
      icon: FaNewspaper,
      value: 10,
      suffix: "+",
      label: "Years of Experience",
      description: "Proven track record since 2013",
    },
  ];

  const certifications = [
    { icon: SiAwslambda, text: "AWS Certified" },
    { icon: SiGooglecloud, text: "Google Cloud Partner" },
    { icon: FaShieldAlt, text: "GDPR Compliant" },
    { icon: FaAward, text: "ISO 27001 Certified" },
  ];

  return (
    <div className="relative py-24 sm:py-32  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-teal-500">
            Quantifying Excellence
          </h2>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            Measurable Impact
          </motion.p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our numbers tell the story of consistent delivery and technical
            expertise
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-teal-500/30 transition-all"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-center">
                <stat.icon className="h-12 w-12 text-teal-500 mx-auto" />
                <div className="mt-6 text-5xl font-bold text-white">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            >
              <div className="flex items-center gap-4">
                <cert.icon className="h-8 w-8 text-teal-500" />
                <span className="text-sm text-gray-400">{cert.text}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Performance Metrics */}
        <div className="mt-16 p-12 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.99%</div>
              <div className="text-sm text-gray-400">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Support Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">200ms</div>
              <div className="text-sm text-gray-400">Avg API Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400">Code Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection1;
