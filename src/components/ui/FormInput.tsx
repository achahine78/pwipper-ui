import "./FormInput.scss";

type Props = {
  type?: "text" | "password";
  label: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const FormInput = ({ type = "text", label, onChange, value }: Props) => {
  return (
    <div className="form-input">
      <input
        className={`form-input__input ${value ? 'form-input__input-filled' : ''}`}
        type={type}
        value={value}
        onChange={onChange}
      />
      <span className="form-input__label">{label}</span>
    </div>
  );
};
