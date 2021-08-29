import Logo from "../images/logo.svg";
import Button from "./Button";
import { urlI } from "../interfaces";
import { useEffect, useState } from "react";
import { ReactComponent as BarsIcon } from "../images/bars.svg";

const urls: urlI[] = [
    {
        link: "#",
        text: "Features",
    },
    {
        link: "#",
        text: "Pricing",
    },
    {
        link: "#",
        text: "Recourses",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const changeOpen = () => {
        setOpen(!open);
    };

    const handleResize = (breakpoint: number) => {
        if (window.innerWidth >= breakpoint) setOpen(false);
    };

    useEffect(() => {
        // myBreakpoint el numero es sacado de la medida md de los breakpoints de tailwindcss
        const myBreakpoint = 768;
        window.addEventListener("resize", () => handleResize(myBreakpoint));
    }, []);

    return (
        <nav className="flex w-auto items-center lg:mx-40 mx-6 mt-6 md:mt-12 relative font-bold ">
            <img src={Logo} alt="Logo" />
            <BarsIcon
                className="md:hidden h-5 w-5 ml-auto opacity-60"
                onClick={changeOpen}
            />
            <div
                className={`absolute z-50 md:z-auto p-0 gap-4 md:gap-0 md:relative top-full mt-4 md:mt-0 rounded-xl w-full items-center flex-col text-center md:text-left bg-primary-alt md:bg-white text-white md:text-current transition-height ${open ? "flex top-full left-0 h-screen p-8 max-h-80" : "overflow-y-hidden md:flex h-0 md:h-auto md:flex-row p-0"
                    } `}
            >
                <div className="md:ml-12 flex flex-col gap-4 md:flex-row w-full md:w-auto">
                    {urls.map((url) => {
                        return (
                            <a
                                href={url.link}
                                key={url.text}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="a opacity-100 hover:opacity-80"
                            >
                                {url.text}
                            </a>
                        );
                    })}
                </div>
                <hr className="bg-gray-default opacity-20 md:hidden w-full h-px my-2 md:my-0" />
                <div className="md:ml-auto flex w-full md:w-auto flex-col md:items-center md:flex-row gap-4 md:gap-8">
                    <p className="cursor-pointer a">Login</p>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
