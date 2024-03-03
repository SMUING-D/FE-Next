import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useUserAdditionalInfoModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUserAdditionalInfoModal = create<useUserAdditionalInfoModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserAdditionalInfoModal;
