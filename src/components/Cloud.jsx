import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cloud({opacity, ...props}) {
  const { nodes, materials } = useGLTF("./models/cloud/models.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry} > 
        <meshStandardMaterial
        envMapIntensity={2}
          transparent
          // opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/models.gltf");
