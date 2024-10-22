import { AuthType } from "../../stores/user";
import HttpClient from "../axios";

const controller = "/auth";
export const AuthService = {
  auth: (body: any): Promise<AuthType> => {
    return HttpClient.post(controller, body);
  },
};
