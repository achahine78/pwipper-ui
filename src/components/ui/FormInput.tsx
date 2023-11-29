import "./FormInput.scss";

type Props = {
  type?: "text" | "password";
  label: string;
};

export const FormInput = ({ type = "text", label }: Props) => {
  return (
    <div className="form-input">
      <input className="form-input__input" type={type} />
      <span className="form-input__label">{label}</span>
    </div>
  );
};
