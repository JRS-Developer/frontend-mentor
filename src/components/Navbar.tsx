import Logo from "../images/logo.svg";
import Button from "./Button";
import { urlI } from "../interfaces";
import { useState } from "react";
import { ReactComponent as BarsIcon } from '../images/bars.svg';

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
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex items-center w-full lg:px-40 px-6 mt-12 relative">
            <img src={Logo} alt="Logo" />
            <BarsIcon className="md:hidden h-5 w-5 ml-auto" onClick={() => setOpen(!open)} />
            <div className={`w-full items-center flex-col px-6 md:px-0 text-center md:text-left bg-primary-alt text-white md:text-current ${open ? 'flex absolute top-full left-0' : 'hidden md:flex md:flex-row'} `}>
                <div className="md:ml-12 flex flex-col md:block">
                    {urls.map((url) => {
                        return <a href={url.link} key={url.text} target="_blank" rel="noopener noreferrer" className="a opacity-100 hover:opacity-80">{url.text}</a>;
                    })}
                </div>
                <hr className="md:hidden" />
                <div className="md:ml-auto gap-8 items-center ">
                    <p className="cursor-pointer a">
                        Login
                    </p>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
