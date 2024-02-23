import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useStudyEditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useStudyEditModal = create<useStudyEditModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useStudyEditModal;
