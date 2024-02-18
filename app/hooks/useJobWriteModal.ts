import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useJobWriteModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useJobWriteModal = create<useJobWriteModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useJobWriteModal;
