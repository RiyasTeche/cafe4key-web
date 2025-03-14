import { Canvas } from "@react-three/fiber";

import { PizzaTwoModel } from "./PizzaTwoModel";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PizzaTwoModelContainer = () => {
  // FIX: Re-calculate when screen size changes
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const calculateWindowWidth = () => setWidth(window.innerWidth);
    calculateWindowWidth();

    window.addEventListener("resize", calculateWindowWidth);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateWindowWidth);
    };
  }, []);

  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage>
          <PizzaTwoModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 6, 5]} zoom={width< 636 ? 1.5: 0.9} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default PizzaTwoModelContainer;
