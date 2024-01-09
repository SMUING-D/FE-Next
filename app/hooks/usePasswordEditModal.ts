import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface usePasswordEditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const usePasswordEditModal = create<usePasswordEditModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default usePasswordEditModal;
