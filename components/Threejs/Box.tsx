// React
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

// Three.js
import { Html, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import * as THREE from "three";
import { Vector3 } from "@react-three/fiber";

import useReadContract from "@/hooks/useReadContract";

export default function Box({ box }: { box: string }) {
  // State
//   const [isTrapOpen, setIsTrapOpen] = useState(false);
  const [playerCount, setPlayerCount] = useState(0);

  // Ref
  const trapGroupRef = useRef<THREE.Group | null>(null);;
  const boxRef = useRef<THREE.Mesh | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  // Texture
  const [
    colorMap,
    aoMap,
    emissiveMap,
    heightMap,
    metalnessMap,
    normalMap,
    roughnessMap,
  ] = useTexture([
    "./Texture/box_basecolor.jpg",
    "./Texture/box_ambientOcclusion.jpg",
    "./Texture/box_emissive.jpg",
    "./Texture/box_height.png",
    "./Texture/box_metallic.jpg",
    "./Texture/box_normal.jpg",
    "./Texture/box_roughness.jpg",
  ]);

  const boxPosition: Vector3 = box === "left" ? [-2, -0.5, 0] : [2, -0.5, 0];

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  //   const toggleTrap = () => {
  //     setIsTrapOpen(!isTrapOpen);

  //     const opening = !isTrapOpen;

  //     if (trapGroupRef.current) {
  //       const targetRotationX = opening ? Math.PI / 2 : 0;

  //       const ease = opening ? "elastic.out(1, 0.3)" : "power2.out";

  //       gsap.to(trapGroupRef.current.rotation, {
  //         x: targetRotationX,
  //         duration: opening ? 2 : 1,
  //         ease: ease,
  //       });
  //     }
  //   };

  const selectTrap = () => {};

  const onHover = () => {
    if (groupRef.current) {
      gsap.killTweensOf(groupRef.current.position);

      gsap.to(groupRef.current.position, {
        y: "+=0.3",
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }
  };

  const onUnhover = () => {
    if (groupRef.current) {
      gsap.killTweensOf(groupRef.current.position);

      gsap.to(groupRef.current.position, {
        y: boxPosition[1],
        duration: 0.5,
        ease: "sine.inOut",
      });
    }
  };

  // Get Players
  const { loading, error, execute, data } = useReadContract();

  useEffect(() => {
    const chosenTrap = box === "left" ? "Left" : "Right";

    execute(`get${chosenTrap}Players`).then(() => {
      if (data) {
        setPlayerCount(data.length);
      }
    });
  }, [execute, data]);

  return (
    <group
      ref={groupRef}
      position={boxPosition}
      onPointerOver={onHover}
      onPointerOut={onUnhover}
    >
      <mesh
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        ref={boxRef}
        // onClick={toggleTrap}
      >
        <boxGeometry args={[1.3, 1.3, 1.3, 10, 10]} />
        <meshStandardMaterial
          map={colorMap}
          emissive={new THREE.Color("white")}
          aoMap={aoMap}
          aoMapIntensity={1}
          emissiveMap={emissiveMap}
          emissiveIntensity={1}
          metalness={1}
          roughness={0}
          displacementMap={heightMap}
          displacementScale={0}
          metalnessMap={metalnessMap}
          roughnessMap={roughnessMap}
          normalMap={normalMap}
        />
        <Html position={[-0.2, 1, -0.2]}>{playerCount}/100</Html>
      </mesh>
      <group ref={trapGroupRef} position={[0, -0.655, -0.65]}>
        <mesh position={[0, 0, 0.65]} rotation={[Math.PI * 0.5, 0, 0]}>
          <planeGeometry args={[1.3, 1.3, 100, 100]} />
          <meshStandardMaterial
            side={DoubleSide}
            map={colorMap}
            emissive={new THREE.Color("white")}
            aoMap={aoMap}
            aoMapIntensity={1}
            emissiveMap={emissiveMap}
            emissiveIntensity={1}
            metalness={1}
            roughness={0}
            displacementMap={heightMap}
            displacementScale={0}
            metalnessMap={metalnessMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
          />
        </mesh>
      </group>
    </group>
  );
}
