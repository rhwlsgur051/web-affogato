import { useForm } from "react-hook-form";
import { FormControl } from "react-bootstrap";
import { useAuth } from "../../hooks/use-auth";
import { useUserStore } from "../../stores/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { loginMutation } = useAuth();
  const { register, getValues, handleSubmit } = useForm({
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  });

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit(() => {
        loginMutation.mutate(getValues());
      })}
    >
      ID
      <FormControl {...register("userId")} />
      PW
      <FormControl {...register("userPassword")} type="password" />
      <button type="submit">Do</button>
    </form>
  );
};
