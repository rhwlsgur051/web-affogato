import { AuthResponse } from "./auth";

export type UserStoreType = {
  user: AuthResponse | null;
  setUser: (user: AuthResponse | null) => void;
};

export type UserResponse = Omit<AuthResponse, "accessToken" | "refreshToken">;