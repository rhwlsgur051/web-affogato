import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserStoreType } from "../types/user";

export const useUserStore = create(
  persist<UserStoreType>(
    (set) => ({
      user: null,
      setUser: (data) => set({ user: data }),
    }),
    { name: "user" }
  )
);
