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

  return (
    <div>
      {/* Enhanced Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
            />
          </div>

          <div className="relative">
            <motion.div
              className="w-20 h-20 border-4 border-teal-500 rounded-full"
              animate={{
                rotate: 360,
                borderColor: ["#2dd4bf", "#818cf8", "#e879f9", "#2dd4bf"],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white font-bold"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              AI
            </motion.div>
          </div>
        </div>
      )}

      <div className="relative isolate pt-24">
        {/* Enhanced Animated Background Elements */}
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Primary gradient blob */}
          <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        <div className="py-24 sm:py-32">
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              {/* Main Heading with Enhanced Gradient Text and Animation */}
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{
                    backgroundImage: [
                      "linear-gradient(to right, #2dd4bf, #3b82f6, #a855f7)",
                      "linear-gradient(to right, #a855f7, #2dd4bf, #3b82f6)",
                      "linear-gradient(to right, #3b82f6, #a855f7, #2dd4bf)",
                      "linear-gradient(to right, #2dd4bf, #3b82f6, #a855f7)",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-clip-text text-transparent"
                >
                  CODENOVATECH: AI-Powered Solutions for Businesses
                </motion.span>
              </motion.h1>

              {/* Animated underline */}
              <motion.div
                className="h-1 w-40 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full mx-auto mt-4"
                animate={{
                  width: ["10%", "40%", "10%"],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Subheading  */}
              <motion.div
                className="mt-6 text-xl text-gray-300 leading-8"
                variants={fadeIn}
              >
                <p>
                  We are a Coimbatore-based IT company specializing in
                  Artificial Intelligence. As a product-based startup, we
                  deliver cutting-edge AI solutions tailored to your needs. Our
                  expertise includes Generative AI, Predictive Analytics, and
                  Computer Vision. We build robust AI infrastructure and ensure
                  ethical, secure AI deployments. Partner with CODENOVATECH to
                  transform your business with the power of AI.
                </p>
              </motion.div>

              {/* AI Product Announcement - Enhanced with animations and colors */}
              <motion.div
                className="mt-8 text-center text-white  rounded-xl p-8 shadow-2xl border border-white/10 relative overflow-hidden"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h2
                  className="text-3xl font-bold mb-4 relative z-10"
                  animate={{
                    color: ["#ffffff", "#a5f3fc", "#ffffff"],
                    textShadow: [
                      "0 0 5px rgba(0,0,0,0)",
                      "0 0 15px rgba(56,189,248,0.5)",
                      "0 0 5px rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  CODENOVATECH - Your AI Innovation Partner
                </motion.h2>
                <p className="text-xl relative z-10">
                  We&#x27;re not just building software; we&#x27;re building the
                  future with AI.
                </p>
                <ul className="list-none mt-6 space-y-3 relative z-10">
                  <motion.li
                    className="flex items-center justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{
                        color: ["#38bdf8", "#818cf8", "#38bdf8"],
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      🔹
                    </motion.span>
                    <span>
                      Cutting-edge AI technology for your unique needs
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-center justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{
                        color: ["#818cf8", "#c084fc", "#818cf8"],
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    >
                      🔹
                    </motion.span>
                    <span>
                      Transforming data into intelligent, actionable insights
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-center justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{
                        color: ["#c084fc", "#f472b6", "#c084fc"],
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                      🔹
                    </motion.span>
                    <span>
                      Driving efficiency and innovation in Coimbatore and beyond
                    </span>
                  </motion.li>
                </ul>
                <motion.div
                  className="mt-6 relative z-10"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(255,255,255,0.3))",
                      "drop-shadow(0 0 10px rgba(255,255,255,0.6))",
                      "drop-shadow(0 0 0px rgba(255,255,255,0.3))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.p
                    className="font-semibold text-xl bg-white/10 py-3 px-6 rounded-full inline-block"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(255,255,255,0.2)",
                        "0 0 15px rgba(255,255,255,0.5)",
                        "0 0 0px rgba(255,255,255,0.2)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-block"
                    >
                      💡
                    </motion.span>{" "}
                    Explore the possibilities of AI with CODENOVATECH!{" "}
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="inline-block"
                    >
                      🚀
                    </motion.span>
                  </motion.p>
                </motion.div>
                <p className="mt-4 text-lg relative z-10">
                  Join us on the journey to an AI-powered future.{" "}
                  <motion.span
                    className="font-bold text-yellow-300"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(250,204,21,0)",
                        "0 0 5px rgba(250,204,21,0.5)",
                        "0 0 0px rgba(250,204,21,0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    #AI #Innovation #Coimbatore #Technology
                  </motion.span>
                </p>
              </motion.div>

              {/* Call-to-Action Buttons - Enhanced */}
              <motion.div
                className="mt-10 flex flex-wrap items-center justify-center gap-6"
                variants={fadeIn}
              >
                <Link to="/contact" className="relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(to right, #14b8a6, #3b82f6)",
                        "linear-gradient(to right, #3b82f6, #8b5cf6)",
                        "linear-gradient(to right, #8b5cf6, #14b8a6)",
                        "linear-gradient(to right, #14b8a6, #3b82f6)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(to right, #3b82f6, #8b5cf6)",
                        "linear-gradient(to right, #8b5cf6, #ec4899)",
                        "linear-gradient(to right, #ec4899, #3b82f6)",
                        "linear-gradient(to right, #3b82f6, #8b5cf6)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.span
                    className="relative z-10 block text-white font-bold py-4 px-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your AI Journey Today →
                  </motion.span>
                </Link>
                <Link
                  to="/portfolio"
                  className="text-lg text-teal-400 font-semibold leading-6 hover:text-teal-300 transition-all duration-300 flex items-center gap-2"
                >
                  <motion.span
                    animate={{
                      color: ["#2dd4bf", "#38bdf8", "#2dd4bf"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    View Our AI Solutions
                  </motion.span>
                  <motion.span
                    aria-hidden="true"
                    animate={{
                      x: [0, 5, 0],
                      color: ["#2dd4bf", "#38bdf8", "#2dd4bf"],
                    }}
                    transition={{
                      x: { duration: 1.5, repeat: Infinity },
                      color: { duration: 3, repeat: Infinity },
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

             
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
