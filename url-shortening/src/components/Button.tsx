import { ButtonI } from "../interfaces";
import { ReactComponent as SpinnerIcon } from "../images/circle-notch.svg";

const Button = ({
    children,
    extraClass = false,
    round_style = "rounded",
    type = "button",
    onClick,
    spinner = false,
    disabled = false,
}: ButtonI) => {
    return (
        <button
            className={`${extraClass ? extraClass : null} bg-primary flex items-center justify-center ${round_style === "rounded" ? "rounded-full" : "rounded-md"
                }  px-8 py-2 text-white hover:bg-light-blue transition-all font-bold disabled:opacity-80 disabled:cursor-not-allowed `}
            onClick={onClick && disabled === false && spinner === false ? onClick : undefined}
            type={type}
            disabled={disabled}
        >
            {spinner && <SpinnerIcon className="mr-2 h-5 w-5 animate-spin text-white fill-current" />}
            {children}
        </button>
    );
};

export default Button;
