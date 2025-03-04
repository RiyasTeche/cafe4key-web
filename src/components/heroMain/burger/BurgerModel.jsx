import { useGLTF } from '@react-three/drei'

export function BurgerModel(props) {
  const { nodes, materials } = useGLTF('/burgerModel.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, -88.223, 0]} rotation={[-Math.PI / 2, 0, -0.756]} scale={100}>
          <mesh geometry={nodes.topbun_topbun_0.geometry} material={materials.topbun} />
          <mesh geometry={nodes.topbun_sesame_0.geometry} material={materials.sesame} />
          <mesh geometry={nodes.topbun_sesame_0_1.geometry} material={materials.sesame} />
        </group>
        <mesh geometry={nodes.bottombun_bottombun_0.geometry} material={materials.bottombun} position={[0, 100.304, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.patty_patty_0.geometry} material={materials.patty} position={[0, 75.785, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[123.262, 123.262, 26.603]} />
        <mesh geometry={nodes.cheese_cheese_0.geometry} material={materials.cheese} position={[0, 129.236, 0]} rotation={[-Math.PI / 2, 0, 0.331]} scale={[87.471, 87.471, 67.734]} />
        <mesh geometry={nodes.patty2_patty_0.geometry} material={materials.patty} position={[0, 127.979, 0]} rotation={[-Math.PI / 2, 0, 0.783]} scale={[123.262, 123.262, 23.701]} />
        <mesh geometry={nodes.cheese2_cheese_0.geometry} material={materials.cheese} position={[0, 179.725, 0]} rotation={[-Math.PI / 2, 0, 2.37]} scale={[87.471, 87.471, 67.734]} />
        <mesh geometry={nodes.tomato_tomato_0.geometry} material={materials.tomato} position={[34.562, 165.912, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 77.436]} />
        <mesh geometry={nodes.tomato001_tomato_0.geometry} material={materials.tomato} position={[-46.557, 173.822, 0]} rotation={[-Math.PI / 2, -0.142, -1.11]} scale={[99.921, 99.677, 77.953]} />
        <mesh geometry={nodes.lettuce_lettuce_0.geometry} material={materials.lettuce} position={[-5.07, 180.07, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 18.712]} />
        <mesh geometry={nodes.lettuce001_lettuce_0.geometry} material={materials.lettuce} position={[14.644, 55.068, 0]} rotation={[-Math.PI / 2, 0, -2.32]} scale={[91.345, 91.345, 14.513]} />
        <mesh geometry={nodes.onion2_onion_0.geometry} material={materials.onion} position={[-50.508, 198.25, 10.198]} rotation={[Math.PI / 2, 0.081, Math.PI]} scale={[99.867, 100, 10.051]} />
        <mesh geometry={nodes.onion_onion_0.geometry} material={materials.onion} position={[67.87, 210.455, 3.184]} rotation={[Math.PI / 2, -0.161, -Math.PI]} scale={[99.485, 100, 10.115]} />
      </group>
    </group>
  )
}

useGLTF.preload('/burgerModel.glb')
