import { ReactNode } from "react";

interface ButtonI {
    children: ReactNode;
    extraClass?: string | boolean;
    round_style?: "rounded" | "squared";
    type?: 'submit' | 'button'
    onClick?(): any;
}

const Button = ({
    children,
    extraClass = false,
    round_style = "rounded",
    type = 'button',
    onClick,
}: ButtonI): JSX.Element => {
    return (
        <button
            className={`${extraClass ? extraClass : null} bg-primary ${round_style === "rounded" ? "rounded-full" : "rounded-md"
                }  px-8 py-2 text-white hover:bg-light-blue transition-all font-bold`}
            onClick={onClick && onClick} type={type}
        >
            {children}
        </button>
    );
};

export default Button;
