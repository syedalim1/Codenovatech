import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

import {
  FaChartLine,
  FaCode,
  FaNewspaper,
  FaUser,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import { SiGooglecloud, SiAwslambda } from "react-icons/si";

import { FaUsers, FaProjectDiagram, FaRegClock } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const statistics = [
    {
      id: 1,
      name: "Projects Completed",
      value: 100,
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
      color: "#EC4899",
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

  return (
    <div className="py-24 relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Driving Digital Excellence
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by industry leaders worldwide - delivering measurable results through technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <motion.div
              key={stat.id}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
                <div className="flex-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {isInView && (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2}
                          decimals={stat.decimals || 0}
                          separator=","
                          useEasing={true}
                        />
                      )}
                    </span>
                    <span className="text-2xl text-white">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection;
