import { AuthStoreType } from "@/types/Auth";
import { create } from "zustand";

export const useAuthStore = create<AuthStoreType>((set) => ({
  isLoggedIn: !!localStorage.getItem("acToken"),
  setLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
  checkLogin: () => {
    const acToken = localStorage.getItem("acToken");
    set({ isLoggedIn: !!acToken });
  },
}));
