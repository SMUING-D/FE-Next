import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface usePostDeleteModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePostDeleteModal = create<usePostDeleteModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default usePostDeleteModal;
