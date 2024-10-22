import { AuthType } from "../../stores/user";
import { AuthRequest } from "../../types/auth";
import HttpClient from "../axios";

const controller = "/auth";
export const AuthService = {
  auth: (body: AuthRequest): Promise<AuthType> => {
    return HttpClient.post(controller, body);
  },
};
