import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useUserSchoolInfoAddModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUserSchoolInfoAddModal = create<useUserSchoolInfoAddModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserSchoolInfoAddModal;
