import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Add your submission logic here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full relative border border-gray-800"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <FaTimes className="h-6 w-6" />
          </button>

          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
            Start Your Project
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Project Type
                </label>
                <select
                  {...register("projectType")}
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="web">Web Development</option>
                  <option value="app">Mobile App</option>
                  <option value="ai">AI Solution</option>
                  <option value="api">API Integration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            <div className="space-y-8 border-l border-gray-800 pl-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <FaPhoneAlt className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Contact Sales</h4>
                  <p className="text-gray-400">+91 8300904920</p>
                  <p className="text-gray-400">24/7 Support Available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <FaEnvelope className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Email Us</h4>
                  <p className="text-gray-400">contact@codenovatech.com</p>
                  <p className="text-gray-400">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
