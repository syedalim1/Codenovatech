import { motion } from "framer-motion";
import ContactHeraSection from "../components/ContactPage/ContactHeraSection";
import AiCreativeSection from "../components/ContactPage/AiCreativeSection";
import AiBackgroundAnimation from "../components/ContactPage/AiBackgroundAnimation";
import AiFeatureShowcase from "../components/ContactPage/AiFeatureShowcase";

export default function Contact() {
  return (
    <div className="relative pt-24">
      {/* AI Background Animation */}
      <AiBackgroundAnimation />
      
      {/* Animated Entry Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="container-custom py-24">
          <ContactHeraSection />
          
          {/* AI Creative Section */}
          <AiCreativeSection />
          
          {/* AI Feature Showcase */}
          <AiFeatureShowcase />
          
          {/* AI-Powered Chat Assistant */}
          <motion.div 
            className="mt-24 mb-16 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 p-10 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Our AI-powered digital assistant is available 24/7 to provide instant answers 
                to your questions about our services, pricing, and capabilities.
              </p>
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start AI Chat Assistant
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
