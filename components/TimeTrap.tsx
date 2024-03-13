//React
import { useEffect, useState, useCallback } from "react";

//Hooks
import useReadContract from "@/hooks/useReadContract";

//Threejs
import { Text3D, useMatcapTexture, Center } from "@react-three/drei";

// Store
import { useModalStore } from "@/stores/useModalStore";

export default function TimeTrap() {
  // Hooks
  const { data, execute, loading } = useReadContract();

  // State
  const [timeUntilNextBox, setTimeUntilNextBox] = useState<number>(0);

  // Texture
  const [matcapTexture] = useMatcapTexture("B62D33_E4868B_7E2D34_DD6469", 256);

  // Store
  const setPlayerCountUpdated = useModalStore(
    (state) => state.setPlayerCountUpdated
  );

  const fetchLastOpenedAt = useCallback(() => {
    execute("getLastOpenedAt");
  }, [execute]);

  useEffect(() => {
    fetchLastOpenedAt();
  }, [fetchLastOpenedAt]);

  useEffect(() => {
    if (data && !loading) {
      const now = new Date();
      const lastOpenedAt = new Date(Number(data) * 1000);
      const secondsSinceLastOpened =
        (now.getTime() - lastOpenedAt.getTime()) / 1000;
      const secondsUntilNextBox =
        (3600 - (secondsSinceLastOpened % 3600)) * 1000;

      setTimeUntilNextBox(secondsUntilNextBox);
    }
  }, [data, loading]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (timeUntilNextBox > 0) {
      intervalId = setInterval(() => {
        setTimeUntilNextBox((prevTime) => {
          const newTime = prevTime - 1000;
          if (newTime <= 0) {
            clearInterval(intervalId as NodeJS.Timeout);
            fetchLastOpenedAt(); 
            return 3600 * 1000; 
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [timeUntilNextBox, fetchLastOpenedAt]);

  const formatTime = (): string => {
    const minutes = Math.floor(timeUntilNextBox / 60000);
    const seconds = Math.floor((timeUntilNextBox % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  formatTime() === "0:00" && setPlayerCountUpdated(true);

  return (
    <Center position={[-0.25, 1, 0]}>
      <Text3D
        scale={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        font="./fonts/helvetiker_regular.typeface.json"
      >
        {formatTime()}
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>
    </Center>
  );
}
