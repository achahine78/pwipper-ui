import "./SignupForm.scss";
import { FormInput } from "./ui/FormInput";

export const SignupForm = () => {
  return (
    <form className="signup-form">
      <div className="signup-form__title">Create your account</div>
      <FormInput label="Name" />
      <FormInput label="Handle" />
      <FormInput label="Password" type="password" />
      <FormInput label="Bio" />
    </form>
  );
};
