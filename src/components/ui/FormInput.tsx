import "./FormInput.scss";

type Props = {
  type?: "text" | "password";
  label: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({ type = "text", label, onChange }: Props) => {
  return (
    <div className="form-input">
      <input className="form-input__input" type={type} onChange={onChange} />
      <span className="form-input__label">{label}</span>
    </div>
  );
};
