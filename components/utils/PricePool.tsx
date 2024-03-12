import React, { useEffect } from "react";
import useReadContract from "@/hooks/useReadContract";
import { usePriceStore } from "@/stores/usePriceStore";

//Viem
import { parseEther } from "viem";

const FetchPrizePool = () => {
  const { data, execute, loading } = useReadContract();
  const setPrice = usePriceStore((state) => state.setPrice);

  useEffect(() => {
    execute("getCurrentPrizePool");
  }, [execute]);

  // Ajouter un effet pour réagir aux changements de `data`
  useEffect(() => {
    if (data && !loading) {
      setPrice(data);
      console.log("Data mise à jour:", data);
    }
  }, [data, loading, setPrice]);

  return null;
};

export default FetchPrizePool;
