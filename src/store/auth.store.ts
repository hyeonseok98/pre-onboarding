import { AuthStoreType } from "@/types/Auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
      checkLogin: () => {
        const acToken = localStorage.getItem("acToken");
        set({ isLoggedIn: !!acToken });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
