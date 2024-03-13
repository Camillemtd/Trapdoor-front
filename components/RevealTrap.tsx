// hooks
import useWriteContract from "@/hooks/useWriteContract";
import { useEffect } from "react";



export default function RevealTrap() {
	  const { execute, loading,} = useWriteContract();

	  const revealTrap = async () => {
	try {
		const result = await execute("revealTrapDoor");
		console.log("Transaction result:", result);
	} catch (error) {
		console.error("Error executing revealTrapDoor:", error);
	}
}
useEffect(() => {
	revealTrap();
}, []);

	return null;
}