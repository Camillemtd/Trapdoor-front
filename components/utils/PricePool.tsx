import React, { useEffect } from "react";
import useReadContract from "@/hooks/useReadContract";
import { usePriceStore } from "@/stores/usePriceStore";


const FetchPrizePool = () => {
  const { data, execute, loading } = useReadContract();
  const setPrice = usePriceStore((state) => state.setPrice);

  useEffect(() => {
    execute("getCurrentPrizePool");
  }, [execute]);

  useEffect(() => {
    if (data && !loading) {
      setPrice(data);
      console.log("Data mise à jour:", data);
    }
  }, [data, loading, setPrice]);

  return null;
};

export default FetchPrizePool;
