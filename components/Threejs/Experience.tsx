"use client";

import { useState, useEffect } from "react";
import {
  OrbitControls,
  Environment,
  SpotLight,
  PerspectiveCamera,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import Box from "./Box";
import TimeTrap from "../TimeTrap";
export default function Experience() {
  const [matcapTexture] = useMatcapTexture("434240_D3D3CF_898784_A4A49F", 256);

  function useResponsiveFOV() {
    const [fov, setFov] = useState(() =>
      window.innerWidth <= 768 ? 100 : window.innerWidth <= 1024 ? 82 : 75
    );

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setFov(100); // Mobile
        } else if (window.innerWidth <= 1024) {
          setFov(82); // Tablette
        } else {
          setFov(52); // Desktop
        }
      };

      window.addEventListener("resize", handleResize);
      handleResize(); 

      return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return fov;
  }

  const fov = useResponsiveFOV();

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.8, 7.4]} fov={fov} />
      <OrbitControls enableZoom={false} />
      <directionalLight
        color="#faedcd"
        intensity={3}
        position={[3, 2, 0.5]}
        castShadow
      />
      <ambientLight intensity={3} />
      <SpotLight
        position={[0, 5, 0]}
        intensity={7}
        distance={10}
        angle={1}
        attenuation={15}
        anglePower={10}
      />
      <Environment background files={"./background2.hdr"} />
      <Center position-y={2}>
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Choose your Box
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
      <TimeTrap />
      <Box box={"left"} boxNumber={0} />
      <Box box={"right"} boxNumber={1} />
    </>
  );
}
