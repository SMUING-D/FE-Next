import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useUserLinkInfoAddModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUserLinkInfoAddModal = create<useUserLinkInfoAddModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserLinkInfoAddModal;
