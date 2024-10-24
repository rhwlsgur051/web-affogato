import { useForm } from "react-hook-form";
import { FormControl } from "react-bootstrap";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginMutation } = useAuth();
  const { register, getValues, handleSubmit } = useForm({
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async () => {
        await loginMutation.mutateAsync(getValues());
        navigate("/profile");
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
