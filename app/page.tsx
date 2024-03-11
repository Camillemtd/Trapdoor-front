"use client";
// React
import { useState } from "react";

// Components
import Experience from "@/components/Threejs/Experience";
import SelectBoxModal from "@/components/SelectBoxModal";

// Three.js
import { Canvas } from "@react-three/fiber";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div className="h-full z-0 w-full fixed top-0">
        <Canvas>
          <Experience />
        </Canvas>
        {isModalOpen && <SelectBoxModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="bg-black text-white">
            Hello
          </div>
      </SelectBoxModal>}
      </div>
  );
}
