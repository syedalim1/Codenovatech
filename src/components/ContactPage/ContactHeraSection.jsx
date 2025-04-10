import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaShieldAlt,
  FaRegClock,
  FaRocket,
  FaAward,
  FaStar,
  FaTools,
  FaBrain,
} from "react-icons/fa";
import { useAnimationVisibility } from "../../utils/performanceUtils";

// Pre-computed animation variants for better performance
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

// Pre-computed data to avoid recreating on each render
const contactMethods = [
  {
    name: "Phone Support",
    description: "24/7 Technical Assistance from our expert AI consultants",
    link: "tel:+918300904920",
    value: "+91 8300904920",
    icon: FaPhone,
    badge: "Instant Response",
    additionalText: "Reach the best AI development team in Coimbatore directly",
  },
  {
    name: "Email Us",
    description: "Project Inquiries & Support for AI solutions",
    link: "mailto:hello@codenovatech.in",
    value: "hello@codenovatech.in",
    icon: FaEnvelope,
    badge: "24h Reply Guarantee",
    additionalText: "Our Code Nova Tech experts will respond within 24 hours",
  },
  {
    name: "HQ Location",
    description: "Visit Our Innovation Center in Coimbatore",
    value: "Coimbatore, Tamil Nadu",
    icon: FaMapMarkerAlt,
    badge: "Book a Tour",
    additionalText: "CODENOVATECH's main office in the heart of Tamil Nadu's tech hub",
  },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/codenovatech", icon: FaLinkedin },
  { name: "Twitter", url: "https://x.com/codenovatech", icon: FaTwitter },
];

// Company achievements for better SEO signals
const companyAchievements = [
  {
    title: "Top AI Innovator",
    description: "Recognized as one of the top AI innovation companies in Tamil Nadu",
    icon: FaAward,
    year: "2023",
  },
  {
    title: "Customer Satisfaction",
    description: "98.7% client satisfaction rate across all AI projects",
    icon: FaStar,
    year: "2022-23",
  },
  {
    title: "Technical Excellence",
    description: "Leading machine learning implementation specialists in South India",
    icon: FaTools,
    year: "2023",
  },
  {
    title: "AI Research",
    description: "Published 5 research papers on advanced AI techniques",
    icon: FaBrain,
    year: "2022-23",
  },
];

// Memoized contact method component for better performance
const ContactMethod = memo(({ method }) => (
  <motion.div
    key={method.name}
    className="flex items-start gap-6 p-6 rounded-xl transition-all"
    variants={itemAnimation}
    style={{ willChange: 'transform, opacity' }}
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
      {/* SEO additional text */}
      <p className="text-gray-400 text-xs mt-2 italic">
        {method.additionalText}
      </p>
    </div>
  </motion.div>
));

// Memoized achievement card component
const AchievementCard = memo(({ achievement }) => (
  <motion.div
    className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg"
    variants={itemAnimation}
    whileHover={{ scale: 1.03 }}
    style={{ willChange: 'transform' }}
  >
    <achievement.icon className="h-6 w-6 text-teal-400" />
    <div>
      <h5 className="text-white font-medium">{achievement.title}</h5>
      <p className="text-gray-400 text-xs">{achievement.description}</p>
      <span className="text-teal-500 text-xs">{achievement.year}</span>
    </div>
  </motion.div>
));

// Memoized form component to prevent unnecessary re-renders
const ContactForm = memo(() => (
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
      <motion.button
        type="submit"
        className="flex-1 bg-primary hover:bg-primary/90 text-teal-500 font-semibold py-3 px-6 rounded-lg transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ willChange: 'transform' }}
      >
        Schedule Free Consultation
      </motion.button>
    </div>

    <div className="text-center text-sm text-gray-600 mt-6 flex items-center justify-center gap-2">
      <FaShieldAlt className="text-green-500" />
      All communications are encrypted and GDPR compliant
    </div>
  </form>
));

// SEO-optimized service list
const ServicesList = memo(() => (
  <div className="mt-6">
    <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">Our AI & Software Services</h3>
    <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
      <p>• Artificial Intelligence Solutions</p>
      <p>• Machine Learning Implementation</p>
      <p>• Custom Software Development</p>
      <p>• Natural Language Processing</p>
      <p>• Computer Vision Applications</p>
      <p>• Deep Learning Systems</p>
      <p>• Mobile App Development</p>
      <p>• Enterprise Software Solutions</p>
      <p>• AI Consultation & Strategy</p>
      <p>• Data Science & Analytics</p>
      <p>• AI Integration Services</p>
      <p>• Technology Transformation</p>
    </div>
  </div>
));

// Blue animated background elements
const BlueBackgroundElements = memo(() => (
  <>
    {/* Enhanced blue gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-blue-900/70 z-0"></div>
    
    {/* Circuit pattern overlay */}
    <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: `url('/circuit-pattern.svg')` }}></div>
    
    {/* Animated blue orbs */}
    <motion.div 
      className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl z-0"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        ease: "easeInOut" 
      }}
    />
    
    <motion.div 
      className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-400/10 filter blur-3xl z-0"
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
    
    <motion.div 
      className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-teal-500/10 filter blur-3xl z-0"
      animate={{ 
        scale: [1, 1.4, 1],
        opacity: [0.05, 0.15, 0.05],
      }}
      transition={{ 
        duration: 7, 
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    
    {/* Digital network lines */}
    <svg className="absolute inset-0 w-full h-full z-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <g stroke="url(#blueGradient)" strokeWidth="1">
        <line x1="0" y1="0" x2="100%" y2="100%" />
        <line x1="0" y1="100%" x2="100%" y2="0" />
        <line x1="50%" y1="0" x2="50%" y2="100%" />
        <line x1="0" y1="50%" x2="100%" y2="50%" />
      </g>
    </svg>
  </>
));

function ContactHeraSection() {
  const [sectionRef, isVisible] = useAnimationVisibility();
  
  // Memoize contact methods list to prevent recreation on each render
  const contactMethodsList = useMemo(() => (
    contactMethods.map(method => <ContactMethod key={method.name} method={method} />)
  ), []);

  // Memoize achievements list
  const achievementsList = useMemo(() => (
    companyAchievements.map((achievement, index) => 
      <AchievementCard key={index} achievement={achievement} />
    )
  ), []);

  return (
    <div
      ref={sectionRef}
      className="relative py-24 px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
    >
      {/* Enhanced blue background elements */}
      {/* <BlueBackgroundElements /> */}

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section - Enhanced with more SEO-friendly content */}
        <motion.div
          className="text-center mb-20"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeIn}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-lg font-semibold leading-7 text-primary mb-2 flex items-center justify-center gap-2">
            <FaRocket className="h-5 w-5" />
            Connect with CODENOVATECH - Coimbatore's Leading AI Company
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-teal-500 sm:text-5xl">
            Get in Touch for AI Solutions
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Contact our Coimbatore-based team to discuss your project, explore
            our AI capabilities, or schedule a consultation. We're here to help
            you transform your business with innovative AI solutions.
          </p>

          {/* SEO enhancement - location and service breadcrumbs */}
          <div className="mt-6 text-sm text-gray-500">
            <span>India</span> &gt; <span>Tamil Nadu</span> &gt;{" "}
            <span>Coimbatore</span> &gt; <span>AI Development Services</span>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={staggerItems}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {/* Left Column: Contact Methods & Social Links */}
          <div className="space-y-12">
            {/* Contact Methods */}
            <motion.div
              className="bg-gradient-to-br from-teal-500/20 to-transparent backdrop-blur-sm transition-opacity rounded-3xl shadow-xl p-8"
              variants={itemAnimation}
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className="text-2xl font-bold text-teal-500 mb-8 flex items-center gap-2">
                <FaShieldAlt className="text-primary" />
                Secure Communication Channels
              </h3>
              <div className="space-y-8">{contactMethodsList}</div>
            </motion.div>

            {/* Company Achievements for SEO */}
            <motion.div
              className="bg-gradient-to-br from-blue-500/20 to-transparent backdrop-blur-sm transition-opacity rounded-3xl shadow-xl p-8"
              variants={itemAnimation}
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <FaAward className="text-blue-400" />
                CODENOVATECH Achievements
              </h3>
              <div className="grid grid-cols-1 gap-4">{achievementsList}</div>

              {/* SEO-optimized service list */}
              <ServicesList />
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="text-center"
              variants={itemAnimation}
              style={{ willChange: "transform, opacity" }}
            >
              <h4 className="text-gray-400 mb-4">
                Follow Our Innovation Journey
              </h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>

              {/* Additional location context for SEO */}
              <p className="mt-4 text-xs text-gray-400">
                CODENOVATECH (Code Nova Tech) is based in Coimbatore, Tamil
                Nadu, and serves clients throughout India and globally.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-teal-500/10 to-transparent backdrop-blur-sm transition-opacity rounded-3xl shadow-xl p-8"
            variants={itemAnimation}
            style={{ willChange: "transform, opacity" }}
          >
            <h3 className="text-2xl font-bold text-teal-500 mb-8 flex items-center gap-2">
              <FaRegClock className="text-primary" />
              Schedule Strategic Consultation
            </h3>

            <ContactForm />

            {/* Confidence-building text with SEO keywords */}
            <div className="mt-8 text-sm text-gray-400">
              <h4 className="font-medium text-teal-400 mb-2">
                Why Businesses Choose CODENOVATECH in Coimbatore:
              </h4>
              <p className="mb-2">
                As the leading AI development company in Coimbatore, CodeNova
                Tech has successfully delivered over 50+ AI and software
                projects for businesses ranging from startups to enterprises.
              </p>
              <p>
                Our team of AI specialists, data scientists, and software
                developers combine technical excellence with deep industry
                knowledge to create solutions that drive real business impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default memo(ContactHeraSection);
