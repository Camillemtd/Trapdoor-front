'use client';

import { OrbitControls, Environment } from "@react-three/drei";
import Box from "./Box";
export default function Experience() {
	  return (
	<>
		<OrbitControls/>
		<directionalLight
                color="#faedcd"
                intensity={3}
                position={[3, 2, 0.5]}
                castShadow
            />
		<ambientLight intensity={0.5} />
		<Environment background files={"./background2.hdr"} />
		<Box box={'left'}/>
		<Box box={'right'}/>
	</>
  );
}