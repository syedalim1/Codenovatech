import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Import all components directly to ensure they load
import BackgroundEffects from "./HeroSectionComponents/BackgroundEffects";
import MainHeading from "./HeroSectionComponents/MainHeading";
import AIProductAnnouncement from "./HeroSectionComponents/AIProductAnnouncement";
import AITechnologiesSection from "./HeroSectionComponents/AITechnologiesSection";
import AIStatistics from "./HeroSectionComponents/AIStatistics";
import AITrendsBanner from "./HeroSectionComponents/AITrendsBanner";
import CTAButtons from "./HeroSectionComponents/CTAButtons";


function HeroSection({ isVisible = true }) {
  // Animation variants - defined once, not recreated on each render
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
  
  // Track which sections are visible to optimize animations
  const [activeAnimations, setActiveAnimations] = useState({
    announcement: true,
    technologies: false,
    statistics: false,
    trends: false,
    brain: false,
    cta: false
  });

  // Refs for sections to observe
  const sectionRefs = {
    announcement: useRef(null),
    technologies: useRef(null),
    statistics: useRef(null),
    trends: useRef(null),
    brain: useRef(null),
    cta: useRef(null)
  };

  // Simulate loading delay - shorter
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Set up intersection observers for animations only

  return (
    <div>
      {/* Loading Animation Component */}

      <div className="relative isolate pt-24">
        {/* Background Effects Component */}

        <div className="py-24 sm:py-32">
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              {/* Main Heading Component - Always render */}
              <MainHeading fadeIn={fadeIn} />

              {/* AI Product Announcement Component */}
              <div ref={sectionRefs.announcement} data-section="announcement">
                <AIProductAnnouncement fadeIn={fadeIn} />
              </div>

              {/* AI Technologies Section Component */}
              <div ref={sectionRefs.technologies} data-section="technologies">
                <AITechnologiesSection fadeIn={fadeIn} animate={activeAnimations.technologies} />
              </div>
              
              {/* AI Statistics Section Component */}
              <div ref={sectionRefs.statistics} data-section="statistics">
                <AIStatistics fadeIn={fadeIn} animate={activeAnimations.statistics} />
              </div>
              
              {/* AI Trends Banner Component */}
              <div ref={sectionRefs.trends} data-section="trends">
                <AITrendsBanner fadeIn={fadeIn} animate={activeAnimations.trends} />
              </div>

            

              {/* Call-to-Action Buttons Component */}
              <div ref={sectionRefs.cta} data-section="cta">
                <CTAButtons fadeIn={fadeIn} animate={activeAnimations.cta} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
