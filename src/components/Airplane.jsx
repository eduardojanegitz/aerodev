import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const HELIX_SPEED = 9;

export function Airplane(props) {
  const { nodes, materials } = useGLTF("./models/airplane/model.glb");

  useFrame((_state, delta) => {
    helix.current.rotation.x += delta * HELIX_SPEED;
  });
  const helix = useRef();
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
      >
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh
        ref={helix}
        geometry={nodes.PUSHILIN_Plane_Helix.geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      >
        <meshStandardMaterial color={"white"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/airplane/model.glb");
