import { create } from 'zustand';

// Définition de l'interface pour l'état et les actions de votre store
interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  selectBox: string;
  setSelectBox: (box: string) => void;
  
}

// Création du store avec les types appropriés
export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  selectBox: '',
  setSelectBox: (box) => set({ selectBox: box }),
}));
