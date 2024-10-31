// src/store/useSidebarStore.ts
import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  isOpenSearch: boolean;
  isOpenNotification: boolean;
  toggleSidebar: () => void;
  toggleSearch: () => void;
  toggleNotification: () => void;
  closeAll: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  isOpenSearch: false,
  isOpenNotification: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleSearch: () => set((state) => ({ isOpenSearch: !state.isOpenSearch })),
  toggleNotification: () =>
    set((state) => ({ isOpenNotification: !state.isOpenNotification })),
  closeAll: () =>
    set({ isOpen: false, isOpenSearch: false, isOpenNotification: false }),
}));

export default useSidebarStore;
