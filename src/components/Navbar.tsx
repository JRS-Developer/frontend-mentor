import Logo from "../images/logo.svg";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="">
            <img src={Logo} alt="Logo" />
            <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    Features
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    Pricing
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    Recourses
                </a>
            </div>
            <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    Login
                </a>
                <Button>Sign Up</Button>
            </div>
        </nav>
    );
};

export default Navbar;
