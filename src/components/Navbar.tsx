import Logo from "../images/logo.svg";
import Button from "./Button";
import { urlI } from "../interfaces";
import A from "./A";

const urls: urlI[] = [
    {
        link: "#",
        text: "Features",
        blank: false,
    },
    {
        link: "#",
        text: "Pricing",
        blank: false,
    },
    {
        link: "#",
        text: "Recourses",
        blank: false,
    },
];

const Navbar = () => {
    return (
        <nav className="flex items-center w-full lg:px-40 px-6 mt-12">
            <img src={Logo} alt="Logo" />
            <div className="ml-12 gap-8 hidden md:flex">
                {urls.map((url) => {
                    return <A {...url} key={url.text} />;
                })}
            </div>
            <div className="ml-auto gap-8 items-center hidden md:flex">
                <A link="#" text="Login" blank={true} />
                <Button>Sign Up</Button>
            </div>
        </nav>
    );
};

export default Navbar;
