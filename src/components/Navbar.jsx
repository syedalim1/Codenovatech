import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarBackgroundAnimation from "./NavbarBackgroundAnimation";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
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
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-gray-900/80 shadow-lg"
          : "bg-transparent"
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
      <NavbarBackgroundAnimation />

      {/* AI Neural Network Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0 50 Q 25 0 50 50 T 100 50"
            stroke="url(#neuralGradient)"
            strokeWidth="0.5"
            fill="none"
          >
            <animate
              attributeName="d"
              values="M0 50 Q 25 0 50 50 T 100 50;
                      M0 50 Q 25 100 50 50 T 100 50;
                      M0 50 Q 25 0 50 50 T 100 50"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient
              id="neuralGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <nav className="container-custom flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/" className="flex items-center gap-2 relative">
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              CODENOVATECH
            </motion.span>
            <div className="absolute -top-2 -right-4">
              <motion.div
                className="w-2 h-2 bg-teal-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </Link>
        </motion.div>

        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.href}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-md relative group"
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-teal-400 w-0 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white rounded-full relative overflow-hidden"
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full blur opacity-30 animate-pulse" />
            </Link>
          </motion.div>
        </div>

        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
          <div className="absolute top-0 right-0 w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
        </button>
      </nav>

      {/* Mobile menu using the new component */}
      <AnimatePresence>
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
          navigation={navigation} 
        />
      </AnimatePresence>
    </header>
  );
}
