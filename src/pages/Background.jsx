import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const Background = () => (
  <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-gradient-to-r from-primary to-secondary">
    <Canvas>
      <ambientLight intensity={0.5} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  </div>
);

export default Background;
