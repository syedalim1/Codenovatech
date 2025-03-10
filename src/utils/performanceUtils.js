import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook to detect if element is visible in viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible] - Reference to attach to element and visibility state
 */
export const useIsVisible = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

/**
 * Hook to detect if current component is visible in viewport to optimize animations
 * Will also set a minimum visibility time to avoid flickering
 * @param {number} minVisibleTime - Minimum time (ms) to consider the element visible even after leaving viewport
 * @returns {boolean} isVisibleForAnimation - Whether animations should run
 */
export const useAnimationVisibility = (minVisibleTime = 2000) => {
  const [ref, isInView] = useIsVisible();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } else if (shouldAnimate) {
      // If element is not in view but was previously visible, set a timeout
      // to keep animations running for a short period
      timeoutRef.current = setTimeout(() => {
        setShouldAnimate(false);
      }, minVisibleTime);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isInView, minVisibleTime, shouldAnimate]);

  return [ref, shouldAnimate];
};

/**
 * Utility to detect device performance tier
 * @returns {string} performanceTier - 'low', 'medium', or 'high'
 */
export const detectPerformanceTier = () => {
  // Check for low-end devices
  const isLowEnd = () => {
    // Look for indicators of low-end devices
    const navigatorInfo = window.navigator;
    
    // Check memory (if available)
    if (navigatorInfo.deviceMemory && navigatorInfo.deviceMemory < 4) {
      return true;
    }
    
    // Check hardware concurrency (if available)
    if (navigatorInfo.hardwareConcurrency && navigatorInfo.hardwareConcurrency < 4) {
      return true;
    }
    
    // Mobile detection (simple heuristic)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigatorInfo.userAgent
    );
    
    // Combined checks for low-end
    return isMobile && (
      (navigatorInfo.connection && navigatorInfo.connection.saveData) ||
      (window.screen && window.screen.width < 768)
    );
  };

  // Perform simple performance check
  if (isLowEnd()) {
    return 'low';
  }
  
  // Default to medium for most devices
  return 'medium';
};

/**
 * Hook to adapt animations based on device performance
 * @returns {Object} Animation settings optimized for device
 */
export const usePerformanceOptimizedAnimations = () => {
  const [performanceTier, setPerformanceTier] = useState('medium');
  
  useEffect(() => {
    setPerformanceTier(detectPerformanceTier());
  }, []);
  
  const animationSettings = {
    // For low-end devices, reduce animation complexity or disable some
    low: {
      enableParticles: false,
      particleCount: 5,
      enableBackgroundEffects: false,
      enableHeavyAnimations: false,
      transitionDuration: 0.2,
    },
    // Medium - balanced approach
    medium: {
      enableParticles: true,
      particleCount: 10,
      enableBackgroundEffects: true,
      enableHeavyAnimations: false,
      transitionDuration: 0.3,
    },
    // High-end devices get all the bells and whistles
    high: {
      enableParticles: true,
      particleCount: 20,
      enableBackgroundEffects: true,
      enableHeavyAnimations: true,
      transitionDuration: 0.5,
    }
  };
  
  return animationSettings[performanceTier];
};

/**
 * Debounce function for performance-sensitive events
 */
export const debounce = (fn, delay) => {
  let timeoutId;
  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/**
 * Throttle function for performance-sensitive events
 */
export const throttle = (fn, delay) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn.apply(this, args);
  };
}; 