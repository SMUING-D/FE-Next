import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useUserJobInfoAddModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUserJobInfoAddModal = create<useUserJobInfoAddModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserJobInfoAddModal;
