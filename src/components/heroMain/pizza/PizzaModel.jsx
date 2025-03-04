import { useGLTF } from '@react-three/drei'

export function PizzaModel(props) {
  const { nodes, materials } = useGLTF('/pizzaModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.555}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[2.163, 0.742, -0.768]} rotation={[Math.PI / 2, 0, 0.636]} scale={0.275} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.Plate} position={[2.132, 0.033, 0.508]} rotation={[0.002, 0, 0]} scale={1.007} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Pizza} position={[0.008, 0.155, -0.004]} rotation={[Math.PI / 2, 0, 0]} scale={90.264} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.Plastic_Cup} position={[1.478, 0.719, -0.775]} rotation={[-Math.PI, 0.945, -Math.PI]} scale={[0.187, 0.218, 0.187]} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.Cardboard} position={[0, 0.517, -0.19]} rotation={[1.262, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pizzaModel.glb')
