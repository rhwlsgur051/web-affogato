import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../api/auth";
import { useUserStore } from "../stores/user";
import { AuthRequest } from "../types/auth";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  // stores
  const { setUser } = useUserStore();

  // mutations
  const loginMutation = useMutation({
    mutationFn: (body: AuthRequest) => {
      return AuthService.auth(body);
    },
    onSuccess: (data) => {
      setUser(data);
      navigate("/profile");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { loginMutation };
};
