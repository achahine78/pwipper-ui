import "./LoginForm.scss";
import { FormInput } from "./ui/FormInput";

export const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="login-form__title">Login to your account</div>
      <FormInput label="Handle" />
      <FormInput label="Password" type="password" />
    </form>
  );
};
