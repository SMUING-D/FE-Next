import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useUserInfoEditModal = create<UserModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserInfoEditModal;
