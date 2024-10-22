import { AuthType } from "../../stores/user";
import { UserRequest } from "../../types/user";
import HttpClient from "../axios";

const controller = "/auth";
export const AuthService = {
  auth: (body: UserRequest): Promise<AuthType> => {
    return HttpClient.post(controller, body);
  },
};
