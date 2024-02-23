import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useJobEditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useJobEditModal = create<useJobEditModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useJobEditModal;
