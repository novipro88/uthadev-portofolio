/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Staff = React.memo(function Staff(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/staff-transformed.glb");
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={[0.15, 0.25, 0.15]}
      position={[0.8, -1.9, 0.5]}
      ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lamp_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
});

export default Staff;
useGLTF.preload("/models/staff-transformed.glb");
