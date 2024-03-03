import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface useUserSkillInfoAddModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUserSkillInfoAddModal = create<useUserSkillInfoAddModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserSkillInfoAddModal;
