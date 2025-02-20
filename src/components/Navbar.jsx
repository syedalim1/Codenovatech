import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaGlobe, FaUser } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
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
    setTimeout(() => setIsLoading(false), 1500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-gray-900/80 shadow-lg" : "bg-transparent"
      }`}
    >
      {isLoading && (
        <motion.div
          className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 w-full absolute top-0"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
        />
      )}
      
      <nav className="container-custom flex items-center justify-between py-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              CodeNovaTech
            </span>
          </Link>
        </motion.div>

        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.href} className="text-gray-300 hover:text-white px-4 py-2">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-6">
  <div className="flex items-center gap-2 group transform transition-all duration-300 hover:scale-110">
    <FaGlobe className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-180" />
    
  </div>
</div>


          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full"
            >
              Start Project
            </Link>
          </motion.div>

        
        </div>

        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Bars3Icon className="h-7 w-7" />
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-gray-900/95 backdrop-blur-xl"
            >
              <div className="flex flex-col h-full p-6">
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
                <nav className="flex-1 space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
