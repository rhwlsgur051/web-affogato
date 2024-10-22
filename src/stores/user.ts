import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AuthType = {
  accessToken: string;
  refreshToken: string;
  userEmail: string;
  userId: string;
  userName: string;
  userNo: number;
};

type UserStoreType = {
  user: AuthType | null;
  setUser: (user: AuthType | null) => void;
};

export const useUserStore = create(
  persist<UserStoreType>(
    (set) => ({
      user: null,
      setUser: (data) => set({ user: data }),
    }),
    { name: "user" }
  )
);
