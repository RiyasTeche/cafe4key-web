import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { PizzaModel } from "./PizzaModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PizzaModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="city" intensity={0.5}>
          <PizzaModel />
        </Stage>
        <PerspectiveCamera position={[-1, 2, 4]} zoom={0.9} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default PizzaModelContainer;
