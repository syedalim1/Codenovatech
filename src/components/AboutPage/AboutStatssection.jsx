import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { FaCloud } from "react-icons/fa";
import { SiAwslambda, SiGooglecloud } from "react-icons/si";
import { useAnimationVisibility, usePerformanceOptimizedAnimations } from "../../utils/performanceUtils";

// Memoized background component
const AnimatedBackground = memo(({ shouldAnimate }) => {
  const gradientBlobs = useMemo(() => [
    {
      className: "absolute -top-40 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl",
      style: {},
    },
    {
      className: "absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl",
      style: {},
    },
  ], []);

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
      <div className="absolute inset-0 opacity-10">
        {gradientBlobs.map((blob, index) => (
          <motion.div
            key={index}
            className={blob.className}
            style={blob.style}
            animate={shouldAnimate ? {
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            } : {}}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          />
        ))}
      </div>
    </>
  );
});

// Memoized trust badge component
const TrustBadge = memo(({ Icon, color, title, subtitle }) => (
  <motion.div
    className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden flex items-center gap-4"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Icon className={`h-8 w-8 ${color}`} />
    <div>
      <div className="text-xl font-bold text-white">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
    </div>
  </motion.div>
));

function AboutStatsSection() {
  const [sectionRef, shouldAnimate] = useAnimationVisibility();
  const performanceSettings = usePerformanceOptimizedAnimations();

  const trustBadges = useMemo(() => [
    {
      Icon: SiAwslambda,
      color: "text-orange-600",
      title: "AWS Partner",
      subtitle: "Certified Team",
    },
    {
      Icon: SiGooglecloud,
      color: "text-blue-600",
      title: "Google Cloud",
      subtitle: "Premier Partner",
    },
    {
      Icon: FaCloud,
      color: "text-purple-600",
      title: "99.99%",
      subtitle: "Uptime SLA",
    },
  ], []);

  return (
    <div ref={sectionRef} className="relative py-24 overflow-hidden">
      <AnimatedBackground shouldAnimate={shouldAnimate} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders for delivering measurable results
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {trustBadges.map((badge, index) => (
            <TrustBadge key={index} {...badge} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl text-gray-600 mb-8">
            Ready to experience our proven expertise?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default memo(AboutStatsSection);
