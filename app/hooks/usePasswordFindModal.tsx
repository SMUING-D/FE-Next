import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface usePasswordFindModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const usePasswordFindModal = create<usePasswordFindModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default usePasswordFindModal;
