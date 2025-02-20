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
  FaHandshake,

} from "react-icons/fa";

// Animation Variants
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

// Existing Data Arrays
const contactMethods = [
  {
    name: "Phone Support",
    description: "24/7 Technical Assistance",
    link: "tel:+918300904920",
    value: "+91 8300904920",
    icon: FaPhone,
    badge: "Instant Response",
  },
  {
    name: "Email Us",
    description: "Project Inquiries & Support",
    link: "mailto:hello@codenovatech.in",
    value: "hello@codenovatech.in",
    icon: FaEnvelope,
    badge: "24h Reply Guarantee",
  },
  {
    name: "HQ Location",
    description: "Visit Our Innovation Center",
    value: "Coimbatore, Tamil Nadu",
    icon: FaMapMarkerAlt,
    badge: "Book a Tour",
  },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/codenovatech", icon: FaLinkedin },
  { name: "Twitter", url: "https://x.com/codenovatech", icon: FaTwitter },
];

const trustedClients = [
  "https://via.placeholder.com/120x40?text=Google",
  "https://via.placeholder.com/120x40?text=Microsoft",
  "https://via.placeholder.com/120x40?text=Amazon",
  "https://via.placeholder.com/120x40?text=StartupZone",
];

// New Data Arrays
const achievements = [
  {
    title: "Clients Served",
    value: "50+",
    icon: FaHandshake,
  },
  {
    title: "Years in Business",
    value: "5+",
    icon: FaRegClock,
  },
  {
    title: "Projects Delivered",
    value: "100+",
    icon: FaRocket,
  },
  {
    title: "Awards Won",
    value: "10+",
    icon: FaShieldAlt,
  },
];



function ContactHeraSection() {
  return (
    <div className="relative py-24 px-6 lg:px-8">
      <div className="absolute inset-0 [background-size:16px_16px]" />

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
            Connect with Innovation
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-teal-500 sm:text-5xl">
            Transform Your Digital Future
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={staggerItems}
          initial="initial"
          animate="animate"
        >
          {/* Left Column: Contact Methods, Trusted Clients & Social Links */}
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

            {/* Trusted By Section */}

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
                  placeholder="John Anderson"
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
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border  border-gray-300 bg-teal-100 text-black focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Project Budget
                </label>
                <select className="w-full  px-4 py-3 rounded-lg border border-gray-300 bg-teal-100 text-black focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option 
              >Select Budget Range</option>
                  <option>$10k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-teal-100 text-black focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe your vision and objectives..."
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

        {/* New Section: Achievements */}
        <motion.div className="mt-20" variants={itemAnimation}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-teal-500">
              Our Achievements
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="text-primary text-4xl mb-2">
                  <item.icon />
                </div>
                <h4 className="text-xl font-semibold">{item.value}</h4>
                <p className="text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* New Section: Video Introduction */}
        {/* <motion.div className="mt-20" variants={itemAnimation}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-teal-500">
              Video Introduction
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2 aspect-w-16 aspect-h-9">
              <iframe
                title="Company Introduction Video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </motion.div> */}

        {/* Live Map Section */}
        <motion.div
          className="mt-20 rounded-3xl overflow-hidden shadow-xl"
          variants={itemAnimation}
        >
           <div style={{ width: "100%" }}>
      <iframe
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=K6,%20Pollachi%20Main%20Rd,%20SIDCO%20Post,%20SIDCO%20Private%20Industrial%20Estate,%20Coimbatore,%20Tamil%20Nadu%20641021+(CodenovaTech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">cat gps tracker</a>
      </iframe>
    </div>

        </motion.div>
      </div>
    </div>
  );
}

export default ContactHeraSection;
