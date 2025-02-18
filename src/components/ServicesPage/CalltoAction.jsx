import React from 'react'
import { motion } from "framer-motion";

function CalltoAction() {
  return (
    <div>
      <motion.div
        className="bg-gradient-to-r from-primary to-secondary text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <motion.button
            className="bg-black text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default CalltoAction