import { motion } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { SiTensorflow, SiNvidia, SiOpenai } from "react-icons/si";

const benefits = [
  {
    icon: FaBrain,
    title: "Neural Architectures",
    description: "100+ AI models deployed with 99.7% prediction accuracy",
    stat: "10x Efficiency Boost",
    color: "from-purple-600 to-indigo-600",
    pattern: "neural-pattern",
  },
  {
    icon: FaRobot,
    title: "AI Assistants",
    description: "Natural Language Processing with contextual awareness",
    stat: "Launching v4.0 - 04/2025",
    color: "from-teal-400 to-cyan-600",
    pattern: "circuit-pattern",
    badge: "New AI Assistant",
  },
  {
    icon: FaMicrochip,
    title: "AI Infrastructure",
    description: "Distributed neural networks across hybrid clouds",
    stat: "50ms Inference Speed",
    color: "from-orange-400 to-red-600",
    pattern: "binary-pattern",
  },
  {
    icon: FaShieldAlt,
    title: "AI Guardians",
    description: "Adversarial attack protection & compliance",
    stat: "GDPR/CCPA Certified",
    color: "from-green-400 to-emerald-600",
    pattern: "hexagon-pattern",
  },
];

function ServicesBenefitsSection() {
  return (
    <div className="relative py-24 overflow-hidden ">
      {/* AI Network Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[url('/neural-network.svg')] bg-contain"
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Floating AI Elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[100px] opacity-20" />
        <div className="absolute inset-0 bg-[url('/ai-chips.png')] bg-contain bg-no-repeat opacity-30" />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent mb-6">
            Creating New AI For New Evolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformative AI solutions powering the next generation of
            intelligent enterprises
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative group p-8 rounded-2xl bg-gray-800/20 border border-cyan-500/20 hover:border-cyan-400/40 backdrop-blur-lg"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {benefit.badge && (
                <div className="absolute -top-3 right-4 px-4 py-1 bg-gradient-to-r from-cyan-600 to-teal-500 rounded-full text-xs font-bold animate-pulse">
                  {benefit.badge}
                </div>
              )}

              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 w-fit mx-auto shadow-xl">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto animate-float" />
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 text-center mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-center mb-6">
                {benefit.description}
              </p>
              <div className="flex items-center gap-2 justify-center text-cyan-300 text-sm font-medium">
                <FaChartLine className="animate-pulse" />
                <span>{benefit.stat}</span>
              </div>

              <div
                className={`absolute inset-0 ${benefit.pattern} opacity-10`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* AI Partner Ecosystem */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="p-6 bg-gray-800/30 rounded-xl flex items-center gap-4 backdrop-blur-sm">
            <SiTensorflow className="h-10 w-10 text-orange-500 animate-bounce" />
            <div>
              <div className="text-cyan-400 font-medium">TensorFlow Gold</div>
              <div className="text-gray-400 text-sm">ML Framework Experts</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl flex items-center gap-4 backdrop-blur-sm">
            <SiNvidia className="h-10 w-10 text-green-500 animate-rotate-3d" />
            <div>
              <div className="text-cyan-400 font-medium">CUDA Accelerated</div>
              <div className="text-gray-400 text-sm">GPU Optimization</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl flex items-center gap-4 backdrop-blur-sm">
            <FaShieldAlt className="h-10 w-10 text-purple-500 animate-pulse" />
            <div>
              <div className="text-cyan-400 font-medium">AI Security</div>
              <div className="text-gray-400 text-sm">ISO 27001 Certified</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl flex items-center gap-4 backdrop-blur-sm">
            <SiOpenai className="h-10 w-10 text-blue-400 animate-float" />
            <div>
              <div className="text-cyan-400 font-medium">LLM Partners</div>
              <div className="text-gray-400 text-sm">GPT-4 Integration</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes rotate-3d {
          0% {
            transform: rotateY(0);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-rotate-3d {
          animation: rotate-3d 8s linear infinite;
        }
        .neural-pattern {
          background-image: radial-gradient(
            circle,
            rgba(14, 165, 233, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
        }
        .circuit-pattern {
          background-image: linear-gradient(
            45deg,
            rgba(14, 165, 233, 0.1) 50%,
            transparent 50%
          );
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}

export default ServicesBenefitsSection;
