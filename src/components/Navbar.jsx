import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 1500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300 } },
    closed: { x: "100%", transition: { duration: 0.3 } },
  };

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled ? "backdrop-blur-md bg-gray-900/80" : "bg-transparent"
      } transition-all duration-300`}
    >
      {/* Loading Bar */}
      {isLoading && (
        <motion.div
          className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 w-full absolute top-0"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
        />
      )}

      {/* Progress Indicator */}
      <div className="h-0.5 bg-gray-800 w-full absolute bottom-0">
        <motion.div
          className="h-full bg-teal-500"
          animate={{
            width: `${
              (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
              100
            }%`,
          }}
          transition={{ type: "spring" }}
        />
      </div>

      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo with Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="flex lg:flex-1"
        >
          <Link to="/" className="flex items-center gap-2 group">
            <svg
              className="h-8 w-8 text-teal-500"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path d="M16 0L32 16L16 32L0 16L16 0Z" fill="currentColor" />
              <path d="M8 8L24 24M24 8L8 24" stroke="white" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              CodeNovaTech
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white px-4 py-2 transition-colors"
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-teal-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 bg-transparent">
            <FaGlobe className="h-5 w-5 text-white" />
            <select className=" bg-black text-sm focus:outline-none">
              <option className="">EN</option>
              <option className="">ES</option>
              <option>FR</option>
            </select>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all"
            >
              Start Project
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Bars3Icon className="h-7 w-7" />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-gray-900/95 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                    CodeNovaTech
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Footer */}
                <div className="border-t border-gray-800 pt-6">
                  <div className="flex gap-4 mb-6">
                    <button className="flex-1 py-2.5 bg-gray-800 text-white rounded-lg">
                      Contact
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <FaGithub className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                    <FaLinkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
