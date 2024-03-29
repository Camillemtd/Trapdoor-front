"use client";

import { PuffLoader } from "react-spinners";

// Store
import { useModalStore } from "@/stores/useModalStore";
import { usePriceStore } from "@/stores/usePriceStore";

// react-icons
import { IoClose } from "react-icons/io5";

// hooks
import useWriteContract from "@/hooks/useWriteContract";

// Schcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

interface ModalProps {
  title: string;
  description: string;
}

import { formatEther } from "viem";

export default function SelectBoxModal({ title, description }: ModalProps) {
  const { isModalOpen, setIsModalOpen, selectBox, setPlayerCountUpdated } = useModalStore();
  const price = usePriceStore((state) => state.price);

  if (!isModalOpen) return null;

  const { loading, error, execute } = useWriteContract();

  const Loading = loading ? <PuffLoader color="#000000" size={30} /> : null;

  const { toast } = useToast();

  const handleChooseTrapdoor = async () => {
    try {
      const choice = selectBox === "Left" ? "0" : "1";
      const amount = formatEther(price);
      

      const result = await execute("chooseTrapdoor", [choice], amount);
      setPlayerCountUpdated(true);
      console.log("Transaction result:", result);
      toast({
        variant: "dark",
        title: "Good Luck! ",
        description: "You have successfully purchased your ticket.",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })
    } catch (error) {
      console.error("Error executing chooseTrapdoor:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  };

  return (
    <div className="bg-black text-white absolute z-40 h-full w-full flex justify-center items-center bg-opacity-50 ">
      <Card className="bg-zinc-900 text-white relative pt-5 slide-in-top">
        <Button
          className="absolute right-0 top-0 bg-zinc-900 p-2 m-1"
          onClick={() => setIsModalOpen(false)}
        >
          <IoClose className="text-white text-xl" />
        </Button>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-zinc-800 p-2 rounded-lg">
            {formatEther(price)} eth
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleChooseTrapdoor}
            className="bg-white text-black hover:text-white w-full hover:bg-zinc-800"
          >
            {loading ? Loading : 'Buy a Ticket'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
