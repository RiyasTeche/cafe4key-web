import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { BurgerModel } from "./BurgerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const BurgerModelContainer = () => {

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
      <Suspense fallback="Loading...">
        <Stage environment="city" intensity={0.5}>
          <BurgerModel />
        </Stage>
        <OrbitControls enableZoom={false} />
        <PerspectiveCamera position={[-1,0,5]} zoom={width< 636 ? 1.5: 0.9} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default BurgerModelContainer;
