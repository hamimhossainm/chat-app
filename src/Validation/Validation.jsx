import * as Yup from "yup";

export const signUp = Yup.object({
  name: Yup.string().max(20).required("Enter your name"),
  email: Yup.string().email().required("Enter your email"),
  password: Yup.string().min(8).required("Enter your password"),
});
