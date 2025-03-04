import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Model3d = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#260622"
          attach="material"
          distort={0.5}
          speed={3}
        />
      </Sphere>
      <meshPhongMaterial />
      <ambientLight intensity={3} />
      <directionalLight position={[1, 2, 3]} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default Model3d;
