import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services#web" },
    { name: "App Development", href: "/services#app" },
    { name: "AI Solutions", href: "/services#ai" },
    { name: "API Services", href: "/services#api" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub,
    },
  ],
};

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="">
      <div className="container-custom py-12 lg:py-16">
        <motion.div
          className="xl:grid xl:grid-cols-4 xl:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Company Info */}
          <motion.div className="space-y-8" variants={fadeIn}>
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-teal-500 transition-colors"
            >
              CodeNovaTech
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Transforming visions into digital reality through cutting-edge web
              development, AI solutions, and scalable APIs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhoneAlt className="h-5 w-5 text-teal-500" />
                <span>+91 8300904920</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="h-5 w-5 text-teal-500" />
                <span>hello@codenovatech.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <SiGooglemaps className="h-5 w-5 text-teal-500" />
                <span>Coimbatore , Tamil Nadu</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-teal-500 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0"
            variants={fadeIn}
          >
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Navigation
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-teal-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Services
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-teal-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-teal-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          variants={fadeIn}
        >
          <img src="/ssl-secured.png" alt="SSL Secured" className="h-12" />
          <img src="/iso-certified.png" alt="ISO Certified" className="h-12" />
          <img
            src="/gdpr-compliant.png"
            alt="GDPR Compliant"
            className="h-12"
          />
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 border-t border-gray-700 pt-8"
          variants={fadeIn}
        >
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; {new Date().getFullYear()} CodeNovaTech. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
