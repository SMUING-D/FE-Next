import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface WriteModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useWriteModal = create<WriteModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useWriteModal;
