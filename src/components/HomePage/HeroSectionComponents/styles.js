// Animation styles as JavaScript objects for direct use in component styles
export const animationStyles = {
  // Hardware acceleration 
  gpu: {
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
    perspective: "1000px",
    willChange: "transform, opacity"
  },
  
  // Animation styles
  pulse: {
    animation: "pulse 2s ease-in-out infinite alternate"
  },
  
  float: {
    animation: "float 3s ease-in-out infinite"
  },
  
  rotate: {
    animation: "rotate 10s linear infinite"
  },
  
  fadeIn: {
    animation: "fadeIn 0.5s ease-out forwards"
  },
  
  // Animation keyframes as strings that can be used in style tags
  keyframes: `
    @keyframes pulse {
      0% {
        opacity: 0.2;
        transform: scale(0.98);
      }
      100% {
        opacity: 0.3;
        transform: scale(1.02);
      }
    }
    
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `
}; 