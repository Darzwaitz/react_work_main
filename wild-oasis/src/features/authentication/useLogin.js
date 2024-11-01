import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";

export function useLogin() {
  useMutation({
    mutationFn: ({ email, password }) =>
      login({
        email,
        password,
      }),
  });
}
