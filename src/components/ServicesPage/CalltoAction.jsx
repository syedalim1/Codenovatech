import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRocket,
  FaShieldAlt,
  FaRegHandshake,
  FaChartLine,
} from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import ClientLogos from "./ClientLogos";
import ContactModal from "./ContactModal";
import FloatingShapes from "./FloatingShapes";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "ISO27001", label: "Certified Security" },
];

function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <FloatingShapes />

      <div className="relative z-10">
        <motion.div
          className=" py-24 border-t border-b border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Trust badges row */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-full">
                <FaShieldAlt className="text-primary" />
                <span className="text-gray-300">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-full">
                <SiTrustpilot className="text-primary" />
                <span className="text-gray-300">4.9/5 Trustpilot</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-800 rounded-full">
                <FaRegHandshake className="text-primary" />
                <span className="text-gray-300">NDA Protected</span>
              </div>
            </div>

            {/* Main CTA Content */}
            <div className="text-center">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Transform Your Digital Presence
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Join 500+ industry leaders who have accelerated their growth with
                our enterprise-grade solutions
              </motion.p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-6 bg-gray-800 rounded-xl border border-gray-700"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-primary text-3xl mb-2">
                      {stat.value.includes("%") ? (
                        <FaChartLine className="inline-block" />
                      ) : (
                        <FaRocket className="inline-block" />
                      )}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Animated button */}
              <motion.button
                className="relative overflow-hidden px-12 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
              >
                <span className="relative z-10">Start Your Project Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* Client logos */}
              <div className="mt-16">
                <p className="text-gray-400 mb-8">
                  Trusted by innovative teams worldwide:
                </p>
                <ClientLogos />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}

export default CallToAction;
