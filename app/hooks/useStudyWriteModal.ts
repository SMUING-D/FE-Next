import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useStudyWriteModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useStudyWriteModal = create<useStudyWriteModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useStudyWriteModal;
