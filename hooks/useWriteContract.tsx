import { useState, useCallback } from 'react';
import { prepareWriteContract, writeContract, waitForTransaction } from "@wagmi/core";
import { TRAPDOOR_CONTRACT_ABI, TRAPDOOR_SEPOLIA_ADRESS } from '../lib/contract';
//Viem
import { parseEther } from "viem";

interface UseWriteContractReturn {
  loading: boolean;
  error: Error | null;
  execute: (functionName: string, args?: any[], value?: string) => Promise<any>; 
}

function useWriteContract(): UseWriteContractReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (functionName: string, args: any[] = [], value?: string) => {
	try {
	  setLoading(true);
	  const valueInWei = value ? parseEther(value) : undefined;
	  const { request } = await prepareWriteContract({
		address: TRAPDOOR_SEPOLIA_ADRESS,
		abi: TRAPDOOR_CONTRACT_ABI,
		functionName,
		args,
		value: valueInWei ? BigInt(valueInWei.toString()) : undefined,
	  });
      const { hash } = await writeContract(request);
      const result = await waitForTransaction({
        hash,
      });

      console.log(result);
      return result; 
    } catch (err: any) {
      setError(err);
      console.error("Error writing contract:", err);
      throw err; 
    } finally {
      setLoading(false);
    }
  }, []); 

  return { loading, error, execute };
}

export default useWriteContract;