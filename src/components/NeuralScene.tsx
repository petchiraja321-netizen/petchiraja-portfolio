"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  Line,
  Stars,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const nodes: [number, number, number][] = [
  [-1.8, 1.1, 0],
  [0, 1.8, 0],
  [1.8, 1.1, 0],
  [-2, -0.8, 0],
  [2, -0.8, 0],
  [-1, -1.9, 0],
  [1, -1.9, 0],
];

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Main AI Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.65, 2]} />

        <meshStandardMaterial
          color="#22C55E"
          emissive="#22C55E"
          emissiveIntensity={1.8}
          roughness={0.18}
          metalness={0.8}
        />
      </mesh>

      {/* Soft Core Glow */}
      <Sphere args={[0.92, 32, 32]}>
        <meshBasicMaterial
          color="#22C55E"
          transparent
          opacity={0.055}
          depthWrite={false}
        />
      </Sphere>

      {/* Inner Glow */}
      <Sphere args={[0.76, 24, 24]}>
        <meshBasicMaterial
          color="#4ADE80"
          transparent
          opacity={0.035}
          depthWrite={false}
        />
      </Sphere>
    </group>
  );
}

function NeuralNodes() {
  return (
    <group>
      {/* Neural Nodes */}
      {nodes.map((position, index) => (
        <Float
          key={`node-${index}`}
          speed={1.2 + index * 0.08}
          rotationIntensity={0.2}
          floatIntensity={0.35}
        >
          <mesh position={position}>
            <sphereGeometry args={[0.12, 20, 20]} />

            <meshStandardMaterial
              color="#4ADE80"
              emissive="#22C55E"
              emissiveIntensity={2}
              roughness={0.25}
              metalness={0.4}
            />
          </mesh>
        </Float>
      ))}

      {/* Neural Connections */}
      {nodes.map((position, index) => (
        <Line
          key={`line-${index}`}
          points={[
            [0, 0, 0],
            position,
          ]}
          color="#22C55E"
          transparent
          opacity={0.22}
          lineWidth={1}
        />
      ))}

      {/* Secondary Connections */}
      <Line
        points={[
          nodes[0],
          nodes[1],
          nodes[2],
        ]}
        color="#22C55E"
        transparent
        opacity={0.12}
        lineWidth={1}
      />

      <Line
        points={[
          nodes[3],
          nodes[5],
          nodes[6],
          nodes[4],
        ]}
        color="#22C55E"
        transparent
        opacity={0.1}
        lineWidth={1}
      />
    </group>
  );
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.35} />

      <pointLight
        position={[0, 0, 3]}
        intensity={12}
        distance={8}
      />

      <pointLight
        position={[-3, 2, 2]}
        intensity={4}
        distance={7}
      />

      {/* Subtle background stars */}
      <Stars
        radius={12}
        depth={8}
        count={180}
        factor={1.2}
        saturation={0}
        fade
        speed={0.25}
      />

      {/* Main Neural Network */}
      <Float
        speed={0.8}
        rotationIntensity={0.12}
        floatIntensity={0.3}
      >
        <Core />
        <NeuralNodes />
      </Float>
    </>
  );
}

export default function NeuralScene() {
  return (
    <div className="h-[420px] w-full lg:h-[560px]">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}