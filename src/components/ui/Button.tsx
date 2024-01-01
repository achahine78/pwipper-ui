import "./Button.scss";

type Props = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

export const Button = ({
  label,
  onClick,
  backgroundColor,
  color,
  disabled,
  isLoading,
  type = "button"
}: Props) => {
  return (
    <button
      className="pwipper-button"
      style={{
        backgroundColor,
        color,
      }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {isLoading ? "..." : label}
    </button>
  );
};
