export type AuthRequest = {
  userId: string;
  userPassword: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  userEmail: string;
  userId: string;
  userName: string;
  userNo: number;
};
