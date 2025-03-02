import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";
import { SiAwslambda, SiGooglecloud } from "react-icons/si";

function AboutStatsSection() {
  return (
    <div className="relative  py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
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
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders for delivering measurable results
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <SiAwslambda className="h-8 w-8 text-orange-600" />
            <div>
              <div className="text-xl font-bold text-white">AWS Partner</div>
              <div className="text-sm text-gray-600">Certified Team</div>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden  flex items-center gap-4">
            <SiGooglecloud className="h-8 w-8 text-blue-600" />
            <div>
              <div className="text-xl font-bold text-white">Google Cloud</div>
              <div className="text-sm text-gray-600">Premier Partner</div>
            </div>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden  flex items-center gap-4">
            <FaCloud className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-xl font-bold text-white">99.99%</div>
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
