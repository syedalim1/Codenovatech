import { motion } from "framer-motion";
import {
  FaRocket,
  FaMedal,
  FaHandshake,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const values = [
  {
    name: "Innovation",
    icon: FaRocket,
    description: "Pioneering solutions that drive digital transformation",
    stat: "150+ Innovative Projects Deployed",
    color: "from-teal-500 to-blue-600",
  },
  {
    name: "Excellence",
    icon: FaMedal,
    description: "Award-winning quality in every deliverable",
    stat: "98% Client Satisfaction Rate",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Transparency",
    icon: FaHandshake,
    description: "Full visibility into development processes",
    stat: "100% Project Milestones Met",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Client-Centric",
    icon: FaUsers,
    description: "Tailored solutions for unique business needs",
    stat: "85% Long-Term Client Retention",
    color: "from-green-500 to-cyan-600",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
              className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div
                className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${value.color} w-fit`}
              >
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.name}
              </h3>
              <p className="text-gray-600 mb-6">{value.description}</p>
              <div className="flex items-center gap-3 text-sm text-teal-600 font-medium">
                <FaChartLine className="h-5 w-5" />
                <span>{value.stat}</span>
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
          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <SiGooglescholar className="h-8 w-8 text-teal-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">ISO 27001</div>
              <div className="text-sm text-gray-600">Certified Security</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <FaMedal className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">5★ Rating</div>
              <div className="text-sm text-gray-600">Client Reviews</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <FaUsers className="h-8 w-8 text-orange-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md flex items-center gap-4">
            <FaRocket className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">10+ Years</div>
              <div className="text-sm text-gray-600">Industry Experience</div>
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
