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

          {/* Enhanced floating elements with more vibrant colors */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-40 h-40 bg-pink-500/40 rounded-full blur-2xl"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
              background: [
                "rgba(236, 72, 153, 0.4)",
                "rgba(168, 85, 247, 0.4)",
                "rgba(236, 72, 153, 0.4)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-500/40 rounded-full blur-2xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
              background: [
                "rgba(45, 212, 191, 0.4)",
                "rgba(56, 189, 248, 0.4)",
                "rgba(45, 212, 191, 0.4)",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-500/40 rounded-full blur-2xl"
            animate={{
              y: [0, -35, 0],
              x: [0, 25, 0],
              scale: [1, 1.25, 1],
              opacity: [0.5, 0.8, 0.5],
              background: [
                "rgba(59, 130, 246, 0.4)",
                "rgba(99, 102, 241, 0.4)",
                "rgba(59, 130, 246, 0.4)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Additional animated elements */}
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-purple-500/40 rounded-full blur-2xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
              background: [
                "rgba(168, 85, 247, 0.4)",
                "rgba(139, 92, 246, 0.4)",
                "rgba(168, 85, 247, 0.4)",
              ],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          <motion.div
            className="absolute top-1/3 right-1/4 w-28 h-28 bg-yellow-500/40 rounded-full blur-2xl"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
              background: [
                "rgba(234, 179, 8, 0.4)",
                "rgba(245, 158, 11, 0.4)",
                "rgba(234, 179, 8, 0.4)",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* AI-themed floating elements */}
          <motion.div
            className="absolute top-1/5 right-1/5 w-16 h-16 flex items-center justify-center"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                AI
              </div>
              <div className="absolute inset-0 border-2 border-white/30 rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/5 left-1/5 w-20 h-20 flex items-center justify-center"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -360],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                ML
              </div>
              <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
            </div>
          </motion.div>

          {/* Neural network visualization */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-3 h-3 rounded-full bg-white"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 0 rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 40}%`,
                  width: `${20 + Math.random() * 30}%`,
                  transform: `rotate(${Math.random() * 180}deg)`,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -100, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, Math.random() * 0.5 + 0.5, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
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
                  Creating New AI For New Evolution
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

              {/* Subheading with typing animation */}
              <motion.div
                className="mt-6 text-xl text-gray-300 leading-8 h-8 overflow-hidden"
                variants={fadeIn}
              >
                <motion.p
                  animate={{
                    y: [
                      0, -40, -80, -120, -160, -200, -240, -280, -320, -360,
                      -400, 0,
                    ],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [
                      0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1,
                    ],
                  }}
                  className="space-y-8"
                >
                  <span className="block h-8">
                    Pioneering the Future with Advanced Artificial Intelligence
                  </span>
                  <span className="block h-8">
                    Transforming Industries through Intelligent Automation
                  </span>
                  <span className="block h-8">
                    Revolutionizing Decision-Making with Predictive Analytics
                  </span>
                  <span className="block h-8">
                    Enhancing Human Potential with AI Collaboration
                  </span>
                  <span className="block h-8">
                    Creating Smarter Solutions for Tomorrow's Challenges
                  </span>
                  <span className="block h-8">
                    Pioneering the Future with Advanced Artificial Intelligence
                  </span>
                </motion.p>
              </motion.div>

              {/* AI Product Announcement - Enhanced with animations and colors */}
              <motion.div
                className="mt-8 text-center text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl p-8 shadow-2xl border border-white/10 relative overflow-hidden"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background patterns */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {/* Circuit board pattern */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`circuit-${i}`}
                      className="absolute h-px bg-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${10 + Math.random() * 20}%`,
                        transform: `rotate(${
                          Math.floor(Math.random() * 4) * 90
                        }deg)`,
                      }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={`node-${i}`}
                      className="absolute w-2 h-2 rounded-full bg-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        boxShadow: [
                          "0 0 0px rgba(255,255,255,0.3)",
                          "0 0 3px rgba(255,255,255,0.8)",
                          "0 0 0px rgba(255,255,255,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

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
                  🚀 Exciting Announcement from CODENOVATECH! 🤖✨
                </motion.h2>
                <p className="text-xl relative z-10">
                  We're thrilled to introduce our revolutionary AI product,
                  designed to transform the way you work with AI! 🎯💡
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
                    <span>Cutting-edge technology meets intuitive design</span>
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
                    <span>Unlock unprecedented efficiency & innovation</span>
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
                      Built for businesses & developers to elevate productivity
                      🚀
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
                      📅
                    </motion.span>{" "}
                    Official Launch: April 4, 2025 – The future of AI is almost
                    here!{" "}
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="inline-block"
                    >
                      🔥
                    </motion.span>
                  </motion.p>
                </motion.div>
                <p className="mt-4 text-lg relative z-10">
                  Stay tuned for updates!{" "}
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
                    #AIRevolution #Innovation #FutureTech
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

              {/* Trust Badges - Enhanced with animations */}
              <motion.div
                className="mt-16 flex flex-wrap items-center justify-center gap-8"
                variants={scaleUp}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-md"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <img
                    src="/SSLSecured.png"
                    alt="SSL Secured"
                    className="h-14 relative z-10"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-md"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <img
                    src="/iso-certified.png"
                    alt="ISO Certified"
                    className="h-14 relative z-10"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-md"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  <img
                    src="/google-cloud-partner.png"
                    alt="Google Cloud Partner"
                    className="h-14 relative z-10"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
