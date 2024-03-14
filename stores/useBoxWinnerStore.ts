import { create } from "zustand";

interface BoxWinnerState {
  boxWinner: number;
  setBoxWinner: (boxWinner: number) => void;
  timer: string;
  setTimer: (timer: string) => void;
}

export const useBoxWinnerStore = create<BoxWinnerState>((set) => ({
  boxWinner: 0,
  setBoxWinner: (boxWinner) => set({ boxWinner: boxWinner }),
  timer: "0:00",
  setTimer: (timer) => set({ timer: timer }),
}));


