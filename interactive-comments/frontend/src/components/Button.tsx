import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  startIcon,
  endIcon,
  children,
  disabled,
  className,
  ...rest
}: Props) => {
  const defaultClasses =
    "flex justify-center gap-2 items-center font-medium rounded-lg";

  const classes = `${defaultClasses} ${className || ""}`;

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
