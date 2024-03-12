import { create } from "zustand";

interface PriceState {
  price: bigint;
  setPrice: (price: bigint) => void;
}

export const usePriceStore = create<PriceState>((set) => ({
  price: BigInt(0),
  setPrice: (price) => set({ price: price}),
}));


