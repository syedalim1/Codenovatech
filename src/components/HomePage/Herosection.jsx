import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HeroSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const scaleUp = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, delay: 0.3 },
  };

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Client logos for the carousel
  const clientLogos = [
    "/Logo.ng",
    "/Logo.ng",
    "/Logo.ng",
    "/Logo.ng",
    "/Logopng",
    "/Logopng",
  ];

  return (
    <div>
      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
          <motion.div
            className="w-16 h-16 border-4 border-teal-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      <div className="relative isolate pt-24 ">
        {/* Background Gradient Blob */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-500 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-24 sm:py-32">
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              {/* Main Heading */}
              <motion.h1
                className="text-4xl text-white font-bold tracking-tight sm:text-6xl"
                variants={fadeIn}
              >
                Transform Your Vision into Digital Reality
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="mt-6 text-lg text-gray-300 leading-8"
                variants={fadeIn}
              >
                Full-Cycle Web & App Development, AI Solutions, and Scalable
                APIs
              </motion.p>

              {/* Call-to-Action Buttons */}
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                variants={fadeIn}
              >
                <Link
                  to="/contact"
                  className="btn-primary bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Start Your Project Today →
                </Link>
                <Link
                  to="/portfolio"
                  className="text-sm text-teal-400 font-semibold leading-6 hover:text-teal-300 transition-all duration-300"
                >
                  View Our Work <span aria-hidden="true">→</span>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                className="mt-16 flex flex-wrap items-center justify-center gap-8"
                variants={scaleUp}
              >
                <img
                  src="/SSLSecured.png"
                  alt="SSL Secured"
                  className="h-12"
                />
                <img
                  src="/iso-certified.png"
                  alt="ISO Certified"
                  className="h-12"
                />
                <img
                  src="/google-cloud-partner.png"
                  alt="Google Cloud Partner"
                  className="h-12"
                />
              </motion.div>

              {/* Client Logo Carousel */}
              {/* <motion.div
                className="mt-16 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="flex"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      className="h-12 w-15 mx-8"
                    />
                  ))}
                </motion.div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
