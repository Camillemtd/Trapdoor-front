"use client";

// React
import { useState } from "react";

// Components
import Experience from "@/components/Threejs/Experience";
import SelectBoxModal from "@/components/SelectBoxModal";
import FetchPrizePool from "@/components/utils/PricePool";

// Three.js
import { Canvas } from "@react-three/fiber";

// Store
import { useModalStore } from "@/stores/useModalStore";
import CanvasLoader from "@/components/CanvasLoader";
import RevealTrap from "@/components/RevealTrap";

export default function Home() {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const selectBox = useModalStore((state) => state.selectBox);

  const [canvasLoading, setCanvasLoading] = useState(true);

  const handleCanvasLoaded = () => {
    setCanvasLoading(false);
  };

  return (
    <div>
      {canvasLoading && <CanvasLoader/>}
      {isModalOpen && (
        <SelectBoxModal
          title={`You choose the ${selectBox} box`}
          description={
            "You can buy a ticket to win the money from the other box."
          }
        />
      )}
      <FetchPrizePool />
      {/* <RevealTrap/> */}
      <div className="h-full z-0 w-screen fixed top-0">
        <Canvas onCreated={handleCanvasLoaded}>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}
