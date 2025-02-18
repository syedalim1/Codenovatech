import { motion } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaUsers,
  FaMedal,
  FaAward,
  FaCloud,
} from "react-icons/fa";
import { SiAwslambda, SiGooglecloud } from "react-icons/si";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stats = [
  {
    name: "Years of Excellence",
    value: "5+",
    icon: FaMedal,
    description: "Delivering cutting-edge solutions since 2018",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Projects Delivered",
    value: "150+",
    icon: FaRocket,
    description: "Successful deployments across 15+ industries",
    color: "from-teal-500 to-blue-600",
  },
  {
    name: "Client Satisfaction",
    value: "98%",
    icon: FaChartLine,
    description: "Consistent 5-star client feedback rating",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Tech Experts",
    value: "50+",
    icon: FaUsers,
    description: "Certified developers & cloud specialists",
    color: "from-green-500 to-cyan-600",
  },
];

function AboutStatsSection() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders for delivering measurable results
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div
                className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${stat.color} w-fit`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {stat.name}
              </h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
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
          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <SiAwslambda className="h-8 w-8 text-orange-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">AWS Partner</div>
              <div className="text-sm text-gray-600">Certified Team</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <FaAward className="h-8 w-8 text-teal-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">ISO 27001</div>
              <div className="text-sm text-gray-600">Security Certified</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <SiGooglecloud className="h-8 w-8 text-blue-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">
                Google Cloud
              </div>
              <div className="text-sm text-gray-600">Premier Partner</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <FaCloud className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">99.99%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
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
            Ready to experience our proven expertise?
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

export default AboutStatsSection;
