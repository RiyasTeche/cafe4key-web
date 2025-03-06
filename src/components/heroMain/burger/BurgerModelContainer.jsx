import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BurgerModel } from "./BurgerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const BurgerModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment="city" intensity={0.5}>
          <BurgerModel />
        </Stage>
        <OrbitControls enableZoom={false} />
        <PerspectiveCamera position={[-1,0,5]} zoom={0.9} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default BurgerModelContainer;
