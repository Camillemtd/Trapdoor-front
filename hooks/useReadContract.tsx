import { useState, useCallback } from 'react';
import { readContract } from '@wagmi/core';
import { TRAPDOOR_CONTRACT_ABI, TRAPDOOR_SEPOLIA_ADRESS } from '../lib/contract';

interface UseReadContractReturn {
  data: any; 
  loading: boolean;
  error: Error | null;
  execute: (functionName: string, args?: any[]) => Promise<void>; 
}

function useReadContract(): UseReadContractReturn {
  const [data, setData] = useState<any>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (functionName: string, args: any[] = []) => {
    try {
      setLoading(true);
      const result = await readContract({
        address: TRAPDOOR_SEPOLIA_ADRESS, 
        abi: TRAPDOOR_CONTRACT_ABI,       
        functionName,
        args,
      });
      setData(result);
      console.log("Contract read:", result);
      
    } catch (err: any) {
      setError(err);
      console.error("Error reading contract:", err);
    } finally {
      setLoading(false);
    }
  }, []); 

  return { data, loading, error, execute };
}

export default useReadContract;



