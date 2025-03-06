import { Canvas } from "@react-three/fiber";

import { PizzaTwoModel } from "./PizzaTwoModel";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PizzaTwoModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage>
          <PizzaTwoModel />
        </Stage>
         <OrbitControls enableZoom={false} autoRotate/>
         <PerspectiveCamera position={[-1, 6, 5]} zoom={0.9} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default PizzaTwoModelContainer;
