import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Import all components directly to ensure they load
import LoadingAnimation from "./HeroSectionComponents/LoadingAnimation";
import BackgroundEffects from "./HeroSectionComponents/BackgroundEffects";
import MainHeading from "./HeroSectionComponents/MainHeading";
import AIProductAnnouncement from "./HeroSectionComponents/AIProductAnnouncement";
import AITechnologiesSection from "./HeroSectionComponents/AITechnologiesSection";
import AIStatistics from "./HeroSectionComponents/AIStatistics";
import AITrendsBanner from "./HeroSectionComponents/AITrendsBanner";
import BrainVisualization from "./HeroSectionComponents/BrainVisualization";
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
  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px', // Start animations slightly before they come into view
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.dataset.section;
        if (entry.isIntersecting && sectionId) {
          setActiveAnimations(prev => ({ ...prev, [sectionId]: true }));
          // Keep observing to stop animations when not in view
        }
      });
    }, observerOptions);

    // Start observing each section
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        sectionObserver.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          sectionObserver.unobserve(ref.current);
        }
      });
    };
  }, [isLoading]);

  return (
    <div>
      {/* Loading Animation Component */}
      {isLoading && <LoadingAnimation />}

      <div className="relative isolate pt-24">
        {/* Background Effects Component */}
        <BackgroundEffects />

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

              {/* 3D AI Brain Visualization Component */}
              <div ref={sectionRefs.brain} data-section="brain">
                <BrainVisualization scaleUp={scaleUp} animate={activeAnimations.brain} />
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
