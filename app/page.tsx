'use client';
import Experience from "@/components/Threejs/Experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="h-full">
      <Canvas>
        <Experience/>
      </Canvas>
    </div>
  );
}
