import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface usePostReportModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePostReportModal = create<usePostReportModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default usePostReportModal;
