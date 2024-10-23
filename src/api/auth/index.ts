import { AuthType } from "../../stores/user";
import { AuthRequest } from "../../types/auth";
import HttpClient from "../axios";

const controller = "/auth";
export const AuthService = {
  auth: (body: AuthRequest): Promise<AuthType> => {
    return HttpClient.post(controller, body);
  },
  refresh: (body: {
    accessToken: string;
    refreshToken: string;
  }): Promise<string> => {
    return HttpClient.post(controller + "/refresh", body);
  },
};
