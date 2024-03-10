// React 
import { useState, useRef } from "react";

// Three.js
import { Mesh } from "three";
import { SpotLight } from "@react-three/drei";
import { DoubleSide } from "three";


export default function Box({ box }: { box: string }) {
	const [lightVisible, setLightVisible] = useState(false);
	const boxRef = useRef();
  
	// Gère l'apparition de la lumière lorsque la souris passe sur la boîte
	const handlePointerOver = () => {
	  setLightVisible(true);
	  document.body.style.cursor = 'pointer';
	};
  
	// Gère la disparition de la lumière lorsque la souris quitte la boîte
	const handlePointerOut = () => {
	  setLightVisible(false);
	  document.body.style.cursor = 'default'
	};
  
	const boxPosition: [number, number, number] = box === 'left' ? [-2, -0.5, -1] : [2, -0.5, -1];
	
  return (
    <group position={boxPosition}>
      <SpotLight
	  	position-y={5}
        distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5} 
		visible={lightVisible}
		target={boxRef.current}
      />
      <mesh onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} ref={boxRef}>
        <boxGeometry args={[1.3, 1.3, 1.3]}/>
        <meshStandardMaterial color="white" />
      </mesh>
	  <mesh position={[0, -0.652, 0]} rotation={[Math.PI * 0.5, 0, 0]}>
		<planeGeometry args={[1.3, 1.3]}/>
		<meshStandardMaterial color="white" side={DoubleSide} />
	  </mesh>
    </group>
  );
}
