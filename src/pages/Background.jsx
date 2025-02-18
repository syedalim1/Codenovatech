import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const Background = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      background: "linear-gradient(to right, #1a1a2e, #16213e)",
    }}
  >
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
