import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaShieldAlt,
  FaRegClock,
  FaRocket,
} from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerItems = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const contactMethods = [
  {
    name: "Phone Support",
    description: "24/7 Technical Assistance from our expert AI consultants",
    link: "tel:+918300904920",
    value: "+91 8300904920",
    icon: FaPhone,
    badge: "Instant Response",
  },
  {
    name: "Email Us",
    description: "Project Inquiries & Support for AI solutions",
    link: "mailto:hello@codenovatech.in",
    value: "hello@codenovatech.in",
    icon: FaEnvelope,
    badge: "24h Reply Guarantee",
  },
  {
    name: "HQ Location",
    description: "Visit Our Innovation Center in Coimbatore",
    value: "Coimbatore, Tamil Nadu",
    icon: FaMapMarkerAlt,
    badge: "Book a Tour",
  },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/codenovatech", icon: FaLinkedin },
  { name: "Twitter", url: "https://x.com/codenovatech", icon: FaTwitter },
];

function ContactHeraSection() {
  return (
    <div className="relative py-24 px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-lg font-semibold leading-7 text-primary mb-2 flex items-center justify-center gap-2">
            <FaRocket className="h-5 w-5" />
            Connect with CODENOVATECH - Coimbatore's Leading AI Company
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-teal-500 sm:text-5xl">
            Get in Touch for AI Solutions
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Contact our Coimbatore-based team to discuss your project, explore our AI capabilities, or schedule a consultation. We're here to help you transform your business with innovative AI solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={staggerItems}
          initial="initial"
          animate="animate"
        >
          {/* Left Column: Contact Methods & Social Links */}
          <div className="space-y-12">
            {/* Contact Methods */}
            <motion.div
              className="bg-gradient-to-br from-teal-500/10 to-transparent transition-opacity rounded-3xl shadow-xl p-8"
              variants={itemAnimation}
            >
              <h3 className="text-2xl font-bold text-teal-500 mb-8 flex items-center gap-2">
                <FaShieldAlt className="text-primary" />
                Secure Communication Channels
              </h3>
              <div className="space-y-8">
                {contactMethods.map((method) => (
                  <motion.div
                    key={method.name}
                    className="flex items-start gap-6 p-6 rounded-xl transition-all"
                    variants={itemAnimation}
                  >
                    <div className="flex-shrink-0">
                      <div className="rounded-xl bg-primary/10 p-4">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-teal-500">
                          {method.name}
                        </h4>
                        <span className="text-xs font-medium bg-primary/10 text-teal-500 px-3 py-1 rounded-full">
                          {method.badge}
                        </span>
                      </div>
                      <p className="text-white text-sm mb-2">
                        {method.description}
                      </p>
                      {method.link ? (
                        <a
                          href={method.link}
                          className="text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-teal-500 font-medium">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="text-center" variants={itemAnimation}>
              <h4 className="text-gray-600 mb-4">
                Follow Our Innovation Journey
              </h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-teal-500/10 to-transparent transition-opacity rounded-3xl shadow-xl p-8"
            variants={itemAnimation}
          >
            <h3 className="text-2xl font-bold text-teal-500 mb-8 flex items-center gap-2">
              <FaRegClock className="text-primary" />
              Schedule Strategic Consultation
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg text-black border bg-teal-100 text-black border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-teal-100 text-black focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-teal-100 text-black focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Project Budget
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-teal-100 text-black focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Select Budget Range</option>
                  <option>$10k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  AI Project Details / Inquiry
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-teal-100 text-black focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe your AI project vision, objectives, or any specific questions you have for our Coimbatore team..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-teal-500 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Schedule Free Consultation
                </button>
              </div>

              <div className="text-center text-sm text-gray-600 mt-6 flex items-center justify-center gap-2">
                <FaShieldAlt className="text-green-500" />
                All communications are encrypted and GDPR compliant
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactHeraSection;
