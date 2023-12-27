import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
/**
 * ()를 선언하면, 타입 에러 해결
 * https://stackoverflow.com/questions/74223036/how-to-use-zustand-devtools-with-typescript
 */
const useLoginModal = create<LoginModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }))
);

export default useLoginModal;
