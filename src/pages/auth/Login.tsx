import { useForm } from "react-hook-form";
import { FormControl } from "react-bootstrap";
import { useAuth } from "../../hooks/use-auth";

export const LoginPage = () => {
  const { loginMutation } = useAuth();
  const { register, getValues, handleSubmit } = useForm({
    defaultValues: {
      userId: "",
      userPassword: "",
    },
  });

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
