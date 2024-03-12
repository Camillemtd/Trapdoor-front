'use client'

// Store
import { useModalStore } from "@/stores/useModalStore";
import { usePriceStore } from '@/stores/usePriceStore'; 

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

interface ModalProps {
  title: string;
  description: string;
}

import { formatEther } from "viem";


export default function SelectBoxModal({
  title,
  description,
}: ModalProps) {

  const { isModalOpen, setIsModalOpen } = useModalStore();
  const selectBox = useModalStore(state => state.selectBox);
  const price = usePriceStore(state => state.price);

  if (!isModalOpen) return null;

  const { loading, error, execute } = useWriteContract();


  const handleChooseTrapdoor = async () => {
    try {
		const choice = selectBox === "Left" ? "0" : "1";
		const amount = formatEther(price);
      // _choice est converti en un tableau car le hook attend un tableau d'arguments
      // amount est le montant en ether à envoyer avec la transaction
      const result = await execute('chooseTrapdoor', [choice], amount);
      console.log('Transaction result:', result);
      // Gérer le succès de la transaction ici
    } catch (error) {
      console.error('Error executing chooseTrapdoor:', error);
      // Gérer l'erreur ici
    }
  };


  return (
    <div className="bg-black text-white absolute z-40 h-full w-full flex justify-center items-center bg-opacity-50">
      <Card className="bg-zinc-900 text-white relative pt-5">
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
          <div className="w-full bg-zinc-800 p-2 rounded-lg">{formatEther(price)} eth</div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleChooseTrapdoor} className="bg-white text-black hover:text-white w-full hover:bg-zinc-800">
            Buy a ticket
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
