import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../api/auth";
import { useUserStore } from "../stores/user";

export const useAuth = () => {
  // stores
  const { setUser } = useUserStore();

  // mutations
  const loginMutation = useMutation({
    mutationFn: (body: { userId: string; userPassword: string }) => {
      return AuthService.auth(body);
    },
    onSuccess: (data) => {
      setUser(data);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { loginMutation };
};
