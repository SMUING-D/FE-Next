import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserRevokeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUserRevokeModal = create<UserRevokeModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useUserRevokeModal;
