import { motion } from "framer-motion";
import {
  FaRocket,
  FaMedal,
  FaHandshake,
  FaUsers,
  
  FaTrophy,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const values = [
  {
    name: "Innovation",
    icon: FaRocket,
    description: "Pioneering solutions that drive digital transformation",
    stat: "50+ Innovative Projects Deployed",
    color: "from-teal-500 to-blue-600",
    progress: 92, // Percentage for radial progress
    clients: ["Logo1", "Logo2", "Logo3"], // Client logos
    achievement: "AI Tech Award 2025 Winner",
  },
  {
    name: "Excellence",
    icon: FaMedal,
    description: "Award-winning quality in every deliverable",
    stat: "98% Client Satisfaction Rate",
    color: "from-purple-500 to-pink-600",
    progress: 98,
    clients: ["Logo4", "Logo5", "Logo6"],
    achievement: "ISO 9001 Certified",
  },
  {
    name: "Transparency",
    icon: FaHandshake,
    description: "Full visibility into development processes",
    stat: "100% Project Milestones Met",
    color: "from-orange-500 to-red-600",
    progress: 100,
    clients: ["Logo7", "Logo8", "Logo9"],
    achievement: "Forbes Transparency Seal",
  },
  {
    name: "Client-Centric",
    icon: FaUsers,
    description: "Tailored solutions for unique business needs",
    stat: "85% Long-Term Client Retention",
    color: "from-green-500 to-cyan-600",
    progress: 85,
    clients: ["Logo10", "Logo11", "Logo12"],
    achievement: "Top Partner 2025",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function AboutValuesSection() {
  return (
    <div className="relative  py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Core Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The foundation of our success in delivering exceptional technical
            solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-20`}
                />
                <div className="pattern-dots pattern-gray-400 pattern-size-2 pattern-opacity-20 w-full h-full" />
              </div>

              {/* Radial progress indicator */}
              <div className="absolute top-4 right-4">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="30"
                      className="fill-none stroke-white"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="30"
                      className={`fill-none stroke-current ${
                        value.color.split(" ")[0]
                      }`}
                      strokeWidth="6"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 30 * (1 - value.progress / 100)
                      }`}
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white">
                    {value.progress}%
                  </span>
                </div>
              </div>

              <div
                className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${value.color} w-fit relative`}
              >
                <value.icon className="h-8 w-8 text-white" />
                {/* Animated sparkle */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="animate-ping absolute inset-0 bg-white/20 rounded-xl" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {value.name}
              </h3>
              <p className="text-gray-600 mb-6">{value.description}</p>

              {/* Client logos */}
              {/* <div className="flex gap-3 mb-6">
                {value.clients.map((client, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    Replace with actual client logos
                    <span className="text-xs font-medium text-gray-500">
                      {client}
                    </span>
                  </div>
                ))}
              </div> */}

              {/* Stat with animated chart */}
              <div className="flex items-center gap-3 text-sm text-teal-600 font-medium mb-4">
                <div className="relative w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${value.color} transition-all duration-1000`}
                    style={{ width: `${value.progress}%` }}
                  />
                </div>
                <span>{value.stat}</span>
              </div>

              {/* Achievement badge */}
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <FaTrophy className="h-4 w-4 text-yellow-500" />
                  <span>{value.achievement}</span>
                </div>
              </div>
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
          <div className="p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4">
            <SiGooglescholar className="h-8 w-8 text-teal-600" />
            <div>
              <div className="text-xl font-bold text-teal-500">ISO 27001</div>
              <div className="text-sm text-white">Certified Security</div>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4">
            <FaMedal className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-xl font-bold text-teal-500">5★ Rating</div>
              <div className="text-sm text-white">Client Reviews</div>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4">
            <FaUsers className="h-8 w-8 text-orange-600" />
            <div>
              <div className="text-xl font-bold text-teal-500">50+</div>
              <div className="text-sm text-white">Satisfied Clients</div>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50  border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden rounded-xl shadow-md flex items-center gap-4">
            <FaRocket className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-xl font-bold text-teal-500">5+ Years</div>
              <div className="text-sm text-white">Industry Experience</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Ready to experience our value-driven development approach?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutValuesSection;
