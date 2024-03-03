import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useUserActivityInfoAddModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUserActivityInfoAddModal = create<useUserActivityInfoAddModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserActivityInfoAddModal;
