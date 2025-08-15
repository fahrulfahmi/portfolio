import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import bgImage from "../assets/bg.jpg";

function Model() {
  const { scene, animations } = useGLTF("/3d/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]];
      action.setLoop(THREE.LoopOnce);
      action.clampWhenFinished = true;
      action.play();

      action.onFinish = () => {
        action.stop();
      };
    }
  }, [actions]);

  return <primitive object={scene} scale={[0.9, 0.9, 0.9]} />;
}

export default function Hero() {
  return (
    <section
     id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop z-0" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

      <div className="relative z-20 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl mt-20 lg:text-7xl font-extrabold text-white leading-tight"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, delay: 0.3 }}
        >
          Hi, I'm <span className="text-teal-400">Fahrul Fahmi</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-300 font-medium mt-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
        >
          A Junior Fullstack Developer passionate about building functional and elegant web applications.
        </motion.p>
      </div>

      <div className="w-full h-[60vh] md:h-[70vh] mt-10 relative z-20">
        <Canvas camera={{ position: [0, 1, 5], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1.5} castShadow />
          <Model />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            target={[0, 1, 0]}
          />
        </Canvas>
      </div>
    </section>
  );
}
