import ToogleDarkMode from "./ToogleDarkMode";

const Header = () => (
    <header className="flex padding py-4 dark:bg-dark-blue bg-white shadow-sm dark:shadow">
        <h1 className="font-extrabold dark:text-white">Where in the world?</h1>
        <ToogleDarkMode />
    </header>
);

export default Header;
