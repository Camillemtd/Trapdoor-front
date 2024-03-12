import useReadContract from "@/hooks/useReadContract";
import { useEffect } from "react";
export default function TimeTrap() {
  const { data, execute, loading } = useReadContract();

  useEffect(() => {
    execute("getLastOpenedAt");
  }, [execute]);

  useEffect(() => {
    if (data && !loading) {
      console.log(data);
    }
  }, [data, loading]);
  return null;
}
