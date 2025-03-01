import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaAward,
  FaBrain,
  FaRobot,
  FaCogs,
  FaChartLine,
  FaNetworkWired,
  FaMicrochip,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaChartBar,
  FaLightbulb,
  FaAtom,
  FaSatelliteDish,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";
import { IoAnalyticsSharp } from "react-icons/io5";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Sphere, Text } from "@react-three/drei";
import { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Solutions", href: "/services#ai" },
    { name: "Generative AI", href: "/services#generative-ai" },
    { name: "Predictive Analytics", href: "/services#predictive-analytics" },
    { name: "Computer Vision", href: "/services#computer-vision" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative ">
      {/* AI Neural Network Background Animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <NeuralNetworkBackground />
        
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-32 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Enhanced AI-themed animated elements */}
        <motion.div
          className="absolute top-10 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl"
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-56 h-56 bg-emerald-500/15 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* NEW: AI Data Stream Effect */}
        <div className="absolute inset-0">
          <DataStreamEffect />
        </div>
        
        {/* NEW: Glowing AI Cells Background */}
        <div className="absolute inset-0">
          <AIGlowCells />
        </div>
        
        {/* NEW: Animated Binary Code Layer */}
        <div className="absolute inset-0 opacity-5">
          <BinaryCodeLayer />
        </div>
        
        {/* Digital circuit pattern */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Enhanced 3D Brain Model */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img src="/Logo.png" className="h-12 w-auto" alt="CODENOVATECH" />
              <span className="ml-3 text-xl font-bold text-white">
                CODENOVATECH
              </span>
            </Link>
            <p className="mt-4 text-base text-gray-400">
              Pioneering the future with advanced artificial intelligence
              solutions. Our revolutionary AI product launches April 4, 2025.
            </p>
            
            {/* NEW: Enhanced 3D Brain Visualization with Particle Effects */}
            <div className="h-40 w-full rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700">
              <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-gray-400">Loading 3D Model...</div>}>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
                  <BrainModelEnhanced />
                  <NeuralParticles />
                  <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                  />
                </Canvas>
              </Suspense>
            </div>
            
            {/* NEW: AI Technology Radial Visualization */}
            {/* <div className="relative h-32 w-full overflow-hidden">
              <AITechRadial />
            </div>
             */}
            {/* Enhanced AI Icons with animations */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <FaBrain className="h-6 w-6 text-teal-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <FaRobot className="h-6 w-6 text-purple-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <FaCogs className="h-6 w-6 text-yellow-400" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <FaChartLine className="h-6 w-6 text-pink-500"/>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <FaNetworkWired className="h-6 w-6 text-blue-500"/>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <FaMicrochip className="h-6 w-6 text-emerald-500"/>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <FaDatabase className="h-6 w-6 text-orange-500"/>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <FaCode className="h-6 w-6 text-indigo-500"/>
              </motion.div>
              {/* NEW: Additional AI-themed icons */}
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <FaAtom className="h-6 w-6 text-cyan-500"/>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <FaSatelliteDish className="h-6 w-6 text-rose-500"/>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation with NEW: Hover Glow effect */}
          <div>
            <motion.h3
              className="text-lg font-semibold text-white mb-4 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <FaUserTie className="mr-2 text-teal-500" /> Navigation
            </motion.h3>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navigation.main.map((item, i) => (
                <motion.li key={item.name} whileHover={{ x: 5 }}>
                  <Link
                    to={item.href}
                    className="text-base text-gray-400 hover:text-teal-500 relative group"
                  >
                    <span>{item.name}</span>
                    {/* NEW: Glow hover effect */}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* AI Services with animated icons */}
          <div>
            <motion.h3
              className="text-lg font-semibold text-white mb-4 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <FaAward className="mr-2 text-teal-500" /> AI Services
            </motion.h3>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {navigation.services.map((item, index) => (
                <motion.li 
                  key={item.name} 
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.href}
                    className="text-base text-gray-400 hover:text-teal-500 flex items-center"
                  >
                    {/* NEW: Enhanced hover effects for icons */}
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                      className="mr-2"
                    >
                      {index === 0 && <FaBrain className="text-blue-500" />}
                      {index === 1 && <FaRobot className="text-purple-500" />}
                      {index === 2 && <FaChartBar className="text-yellow-400" />}
                      {index === 3 && <FaLightbulb className="text-pink-500" />}
                    </motion.div>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* NEW: AI Technology Pulse Visualization */}
            {/* <div className="mt-8 py-4">
              <AIPulseBars />
            </div> */}
          </div>

          {/* Contact Us */}
          <div>
            <motion.h3
              className="text-lg font-semibold text-white mb-4 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <FaEnvelope className="mr-2 text-teal-500" /> Contact Us
            </motion.h3>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <FaPhoneAlt className="h-5 w-5 text-teal-500 mt-0.5 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </motion.li>
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <FaEnvelope className="h-5 w-5 text-teal-500 mt-0.5 mr-2" />
                <span className="text-gray-400">info@codenovatech.com</span>
              </motion.li>
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <SiGooglemaps className="h-5 w-5 text-teal-500 mt-0.5 mr-2" />
                <span className="text-gray-400">
                  123 Innovation Drive, Tech Valley, CA 94043
                </span>
              </motion.li>
            </motion.ul>
            
            {/* NEW: AI Assistant Chat Bubble */}
            {/* <motion.div 
              className="mt-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <AIAssistantChatBubble />
            </motion.div> */}
          </div>
        </div>

        {/* Social Links with enhanced animations */}
        <motion.div
          className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-base text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} CODENOVATECH. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {navigation.social.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-teal-500 relative"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  color: "#14b8a6",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
                {/* NEW: Glow effect on hover */}
                <motion.div
                  className="absolute -inset-2 rounded-full bg-teal-500/0"
                  whileHover={{ 
                    backgroundColor: "rgba(20, 184, 166, 0.2)",
                    boxShadow: "0 0 15px rgba(20, 184, 166, 0.5)"
                  }}
                ></motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* NEW: Enhanced AI Pulse Animation with multiple dots */}
        {/* <div className="mt-8 flex justify-center">
          <AIPulseAnimation />
        </div> */}
      </div>
    </footer>
  );
}

// Brain 3D Model Component Enhanced
function BrainModelEnhanced() {
  const groupRef = useRef();
  
  return (
    <group ref={groupRef}>
      {/* Main brain structure */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#14b8a6" 
          wireframe 
          emissive="#14b8a6"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      <Sphere args={[0.8, 20, 20]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#a855f7" 
          wireframe 
          emissive="#a855f7"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Synaptic connections */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin(i / 8 * Math.PI * 2) * 0.7,
            Math.cos(i / 8 * Math.PI * 2) * 0.7,
            0
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#14b8a6" : "#a855f7"} 
            emissive={i % 2 === 0 ? "#14b8a6" : "#a855f7"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      
      {/* Outer neural network layer */}
      <Sphere args={[1.2, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#3b82f6" 
          wireframe 
          opacity={0.3}
          transparent
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </group>
  );
}

// Neural Particles Effect for Brain
function NeuralParticles() {
  const particles = useRef();
  
  // Create particle positions
  const particlePositions = [];
  const numParticles = 50;
  
  for (let i = 0; i < numParticles; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    const r = 0.8 + Math.random() * 0.8;
    
    particlePositions.push(
      Math.sin(theta) * Math.cos(phi) * r,
      Math.sin(theta) * Math.sin(phi) * r,
      Math.cos(theta) * r
    );
  }
  
  useEffect(() => {
    if (!particles.current) return;
    
    const positionArray = particles.current.geometry.attributes.position.array;
    
    const animate = () => {
      for (let i = 0; i < positionArray.length; i += 3) {
        // Animate particles in a subtle motion
        positionArray[i] += Math.sin(Date.now() * 0.001 + i) * 0.002;
        positionArray[i+1] += Math.cos(Date.now() * 0.002 + i) * 0.002;
        positionArray[i+2] += Math.sin(Date.now() * 0.001 + i) * 0.002;
      }
      
      particles.current.geometry.attributes.position.needsUpdate = true;
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={new Float32Array(particlePositions)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#14b8a6"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Neural Network Background Animation - Enhanced
function NeuralNetworkBackground() {
  return (
    <div className="absolute inset-0">
      {/* Neural nodes - increased count */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-teal-500/50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Connection lines - enhanced with more paths */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M100,100 C150,150 200,50 250,100 S350,150 400,100"
          stroke="#14b8a6"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M50,200 C100,150 200,250 250,200 S350,150 450,200"
          stroke="#a855f7"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <motion.path
          d="M150,300 C200,250 250,350 300,300 S350,250 400,300"
          stroke="#eab308"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        
        {/* NEW: Additional neural paths */}
        <motion.path
          d="M300,50 C350,100 400,75 450,120"
          stroke="#3b82f6"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
        <motion.path
          d="M0,150 C50,180 100,120 150,150"
          stroke="#ec4899"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.7 }}
        />
        <motion.path
          d="M250,350 C300,320 350,380 400,350"
          stroke="#10b981"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "linear", delay: 1.2 }}
        />
      </svg>
    </div>
  );
}

// NEW: Data Stream Effect
function DataStreamEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Vertical data streams */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`data-stream-${i}`}
          className="absolute w-px h-24 bg-gradient-to-b from-transparent via-teal-500/40 to-transparent"
          style={{
            left: `${5 + (i * 8)}%`,
            top: "-10%",
          }}
          animate={{
            y: ["0%", "120%"],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Binary numbers floating upward */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-xs text-teal-500/30 font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: "100%",
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -500],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}
    </div>
  );
}

// NEW: AI Glow Cells
function AIGlowCells() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => {
        const size = 20 + Math.random() * 30;
        const color = [
          "bg-teal-500/10", 
          "bg-purple-500/10", 
          "bg-blue-500/10", 
          "bg-cyan-500/10",
          "bg-emerald-500/10"
        ][Math.floor(Math.random() * 5)];
        
        return (
          <motion.div
            key={`cell-${i}`}
            className={`absolute rounded-full ${color}`}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              boxShadow: [
                "0 0 10px rgba(20, 184, 166, 0)",
                "0 0 20px rgba(20, 184, 166, 0.2)",
                "0 0 10px rgba(20, 184, 166, 0)"
              ]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}

// NEW: Binary Code Layer
function BinaryCodeLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-xs text-teal-500/30 font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: "100%",
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -500],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}
    </div>
  );
}