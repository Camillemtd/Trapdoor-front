import { useEffect } from "react";
import useReadContract from "@/hooks/useReadContract"
import { useBoxWinnerStore }  from "@/stores/useBoxWinnerStore"

interface BoxWinnerProps {
	time: string
}

export default function BoxWinner({time}: BoxWinnerProps) {
	const { data, loading, execute } = useReadContract();
	const { setBoxWinner } = useBoxWinnerStore();

	useEffect(() => {
		execute("getLastTrapdoorSide");
	  }, [execute]);

	  useEffect(() => {
		if (time === "0:00") {
		  execute("getLastTrapdoorSide");
		}
	  }, [time, execute]);

	  useEffect(() => {
		if (data && !loading) {
			console.log(data)
			setBoxWinner(data)
		}
	  }, [data, loading]);
	return null
}