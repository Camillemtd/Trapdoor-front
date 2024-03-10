'use client';

import { OrbitControls, Environment, SpotLight, PerspectiveCamera } from "@react-three/drei";
import Box from "./Box";
export default function Experience() {
	  return (
	<>
		<PerspectiveCamera makeDefault position={[0, 0.8, 7.4]} />
		<OrbitControls />
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
		<Box box={'left'}/>
		<Box box={'right'}/>
	</>
  );
}