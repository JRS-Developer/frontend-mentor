import { Link } from "react-router-dom";
import ToogleDarkMode from "./ToogleDarkMode";

const Header = () => (
    <header className="flex padding py-4 dark:bg-dark-blue bg-white shadow-sm dark:shadow">
        <Link to="/">
            <h1 className="font-extrabold dark:text-white">Where in the world?</h1>
        </Link>
        <ToogleDarkMode />
    </header>
);

export default Header;
