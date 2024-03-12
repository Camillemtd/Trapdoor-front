import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  selectBox: string;
  setSelectBox: (box: string) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  selectBox: '',
  setSelectBox: (box) => set({ selectBox: box }),
}));
