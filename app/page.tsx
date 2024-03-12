"use client";

// Components
import Experience from "@/components/Threejs/Experience";
import SelectBoxModal from "@/components/SelectBoxModal";
import FetchPrizePool from "@/components/utils/PricePool";

// Three.js
import { Canvas } from "@react-three/fiber";

// Store
import { useModalStore } from "@/stores/useModalStore";

export default function Home() {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const selectBox = useModalStore((state) => state.selectBox);

  return (
    <div>
      {isModalOpen && (
        <SelectBoxModal
          title={`You choose the ${selectBox} box`}
          description={
            "You can buy a ticket to win the money from the other box."
          }
        />
      )}
      <FetchPrizePool />
      <div className="h-full z-0 w-full fixed top-0">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}
