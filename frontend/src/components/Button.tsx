import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({ startIcon, children, ...rest }: Props) => {
  return (
    <button className="flex gap-2 items-center" {...rest}>
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
